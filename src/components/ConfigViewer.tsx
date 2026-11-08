import React, {JSX, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import {Highlight} from 'prism-react-renderer';
import {usePrismTheme} from '@docusaurus/theme-common';
import {useLocation} from '@docusaurus/router';
import styles from '../css/styles.module.css';

interface Props {
  code: string;
  title: string;
  language?: string;
  /** Name of the downloaded file, defaults to the title */
  filename?: string;
  /** Show the download button, defaults to true */
  download?: boolean;
}

const FLASH_MS = 2000;
const COPIED_MS = 1500;

/**
 * Works out the dotted key path of every line, from the indentation.
 */
function computePaths(lines: string[]): (string | null)[] {
  const stack: {indent: number; key: string}[] = [];
  return lines.map((line) => {
    const match = /^(\s*)([\w.-]+):(?:\s|$)/.exec(line);
    if (!match) {
      return null;
    }
    const indent = match[1].length;
    while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }
    stack.push({indent, key: match[2]});
    return stack.map((entry) => entry.key).join('.');
  });
}

function LinkIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12zM8 13h8v-2H8v2zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10z"
      />
    </svg>
  );
}

function DownloadIcon(): JSX.Element {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path fill="currentColor" d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z" />
    </svg>
  );
}

export default function ConfigViewer({
  code,
  title,
  language = 'yaml',
  filename = title,
  download = true,
}: Props): JSX.Element {
  const prismTheme = usePrismTheme();
  const container = useRef<HTMLDivElement>(null);
  const {hash, key: locationKey} = useLocation();

  const text = code.replace(/\n$/, '');
  const paths = useMemo(() => computePaths(text.split('\n')), [text]);

  /** The line that stays softly highlighted until the reader clicks somewhere else */
  const [selected, setSelected] = useState<string | null>(null);
  /** The line that is currently playing the yellow flash */
  const [flash, setFlash] = useState<string | null>(null);
  /** The line whose link was just copied */
  const [copied, setCopied] = useState<string | null>(null);

  // Scroll to, flash and select the line matching `#some.config.path` in the URL.
  // A line inside a hidden tab panel is skipped, so only the visible file reacts.
  useEffect(() => {
    if (!hash || !container.current) {
      return undefined;
    }
    const path = decodeURIComponent(hash.slice(1));
    let flashTimer: ReturnType<typeof setTimeout> | undefined;

    // Small delay so the persisted tab selection has been applied after hydration
    const timer = setTimeout(() => {
      const lines = Array.from(
        container.current?.querySelectorAll<HTMLElement>('[data-config-path]') ?? [],
      );
      const line = lines.find((el) => el.dataset.configPath === path && el.offsetParent !== null);
      if (!line) {
        return;
      }
      line.scrollIntoView({block: 'center'});
      setSelected(path);
      setFlash(path);
      flashTimer = setTimeout(() => setFlash(null), FLASH_MS);
    }, 150);

    return () => {
      clearTimeout(timer);
      if (flashTimer) {
        clearTimeout(flashTimer);
      }
    };
    // locationKey makes clicking the same link twice work again
  }, [hash, locationKey]);

  // Clear the lingering highlight on the next click anywhere else
  useEffect(() => {
    if (!selected) {
      return undefined;
    }
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Element | null;
      if (target?.closest?.('[data-config-share]') && container.current?.contains(target)) {
        return;
      }
      setSelected(null);
      setFlash(null);
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, [selected]);

  // Copy a link to a line, and put it in the address bar too
  const share = useCallback(async (path: string) => {
    const url = new URL(window.location.href);
    url.hash = path;
    window.history.replaceState(window.history.state, '', url.toString());
    setSelected(path);
    try {
      await navigator.clipboard.writeText(url.toString());
      setCopied(path);
      setTimeout(() => setCopied((current) => (current === path ? null : current)), COPIED_MS);
    } catch {
      // Clipboard not available (insecure context, permissions), let the reader copy it by hand
      window.prompt('Copy this link', url.toString());
    }
  }, []);

  const downloadName = filename ?? 'config.yaml';
  const downloadFile = useCallback(() => {
    const blob = new Blob([code], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = downloadName;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, [code, downloadName]);

  return (
    <div ref={container} className={styles.container}>
      {(title || download) && (
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          {download && (
            <button
              type="button"
              className={styles.download}
              onClick={downloadFile}
              title={`Download ${downloadName}`}
              aria-label={`Download ${downloadName}`}>
              <DownloadIcon />
              <span className={styles.downloadLabel}>Download</span>
            </button>
          )}
        </div>
      )}
      <Highlight theme={prismTheme} code={text} language={language}>
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={clsx(className, styles.pre)} style={style}>
            <code className={styles.code}>
              {tokens.map((line, i) => {
                const path = paths[i];
                const isEmpty = line.length === 1 && line[0].content === '';
                return (
                  <div
                    key={i}
                    {...getLineProps({
                      line,
                      className: clsx(
                        styles.line,
                        path && path === selected && styles.selected,
                        path && path === flash && styles.flash,
                      ),
                    })}
                    data-config-path={path ?? undefined}>
                    <span className={styles.gutter}>
                      {path && (
                        <button
                          type="button"
                          className={styles.share}
                          data-config-share=""
                          title="Copy link to this line"
                          aria-label={`Copy link to ${path}`}
                          onClick={() => share(path)}>
                          <LinkIcon />
                        </button>
                      )}
                    </span>
                    <span className={styles.content}>
                      {isEmpty
                        ? '\n'
                        : line.map((token, tokenKey) => (
                            <span key={tokenKey} {...getTokenProps({token})} />
                          ))}
                    </span>
                    {path && copied === path && <span className={styles.copied}>Link copied</span>}
                  </div>
                );
              })}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
