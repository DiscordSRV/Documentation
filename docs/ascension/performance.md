:::danger
This is documentation for **a future version of DiscordSRV** and information on this page does not apply to DiscordSRV version 1 and may be **inaccurate** in general
:::

# Performance

DiscordSRV runs async wherever possible, which avoids slowing down game threads or affecting tick speed.

## Memory Usage

For a 10,000 member Discord server with member caching enabled for all members with members accounted for (Measured: July 2023):

| Object  | Used memory |
|---------|-------------|
| User    | 430 kB      |
| Member  | 5.28 MB     |
| Total   | 5.71 MB     |

By default, DiscordSRV only caches linked users.
This accounts for most of DiscordSRV's memory usage, meaning DiscordSRV's memory usage is very low.
