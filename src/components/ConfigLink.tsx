import React, { JSX } from 'react';
import Link from '@docusaurus/Link';

interface Props {
  /** Config file */
  file: "config" | "connections" | "messages";
  /** Config node path, e.g. `game-command.discord-format` */
  path: string;
  /** Override the text, defaults to the path in a code span */
  children?: React.ReactNode;
}

/**
 * Link from any docs page to a line of the example config.
 * The config page scrolls to the line in whichever file/tab the reader has selected.
 *
 * Usage in MDX: <ConfigLink file="config" path="game-command.discord-format" />
 */
export default function ConfigLink({file, path, children}: Props): JSX.Element {
  return <Link to={`/ascension/config${file != "config" ? "/" + file : ""}#${path}`}>{children ?? <code>{path}</code>}</Link>;
}
