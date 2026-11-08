---
title: config.yaml
---

# config.yaml

import ConfigViewer from '@site/src/components/ConfigViewer';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import bukkit from '!!raw-loader!@site/static/config/bukkit-config.yaml';
import modded from '!!raw-loader!@site/static/config/modded-config.yaml';
import bungee from '!!raw-loader!@site/static/config/bungee-config.yaml';
import velocity from '!!raw-loader!@site/static/config/velocity-config.yaml';

<Tabs groupId="config-platform-type">
<TabItem value="server" label="Server">
Generated defaults for Bukkit/Paper and Fabric/NeoForge. The original comments are retained in each YAML sample.

<Tabs groupId="config-platform-server">
<TabItem value="bukkit" label="Bukkit / Paper">
[Download config.yaml](/config/bukkit-config.yaml)

<ConfigViewer title="config.yaml" code={bukkit} />
</TabItem>
<TabItem value="modded" label="Fabric / NeoForge">
[Download config.yaml](/config/modded-config.yaml)

<ConfigViewer title="config.yaml" code={modded} />
</TabItem>
</Tabs>
</TabItem>
<TabItem value="proxy" label="Proxy">
Generated defaults for BungeeCord and Velocity. The original comments are retained in each YAML sample.

<Tabs groupId="config-platform-proxy">
<TabItem value="bungee" label="BungeeCord">
[Download config.yaml](/config/bungee-config.yaml)

<ConfigViewer title="config.yaml" code={bungee} />
</TabItem>
<TabItem value="velocity" label="Velocity">
[Download config.yaml](/config/velocity-config.yaml)

<ConfigViewer title="config.yaml" code={velocity} />
</TabItem>
</Tabs>
</TabItem>
</Tabs>

