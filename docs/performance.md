# Performance

DiscordSRV aims to run async as much as possible, avoiding slowing down game threads or affecting tick speed.

## Memory Usage

For a 10,000 member Discord server with member caching enabled for all members, members accounted for (measurements 7.2023):

| Object  | Used memory |
|---------|-------------|
| User    | 430 kB      |
| Member  | 5.28 MB     |
| Total   | 5.71 MB     |

This accounts for most of DiscordSRV's memory usage, meaning DiscordSRV's memory usage is very low.
By default, DiscordSRV only caches linked users.
