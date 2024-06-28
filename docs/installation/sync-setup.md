# Sync Setup

:::warning
**Please make sure to go through the [Initial Setup](initial-setup.mdx) before going through with this setup.**
:::
 
### Get the name(s) of the Minecraft group(s) you want to sync

The synchronization is case-sensitive so make sure you don't mess up with the capitalization

```yaml
# Example from generic permissions plugin
groups:
  VIP:
    permissions
    ...
  MVP:
    permissions
    ...
  Admin:
    permissions
    ...
  Owner:
    permissions
    ...
```

If you are using LuckPerms, it will look similar to this:

![luckperms groups](/assets/luckperms_groups.png)


You can see what groups DiscordSRV can see in the `discordsrv-info.txt` file of debug reports, which can be accessed through the link generated from `/discordsrv debug`  

```yaml
# discordsrv-info.txt from debug report
vault groups: [default, VIP, MVP, Admin, Owner]
```

### Get Role ID(s) for the role(s) you want to sync  

If you have `Developer Mode` enabled (see [Initial Setup](initial-setup.mdx)), you can get the IDs from `Server Settings > Roles` by right-clicking the role(s)  

Role IDs are also in the `discordsrv-info.txt` file of debug reports, which can be accessed through the link generated from `/discordsrv debug`  

```yaml
# discordsrv-info.txt from debug report
discord main guild roles: [R:Owner(680679764116350834), R:Admin(680679783212478905), R:MVP(680679725206994947), R:VIP(680679790025506861)]
```

### Set the Role ID(s) and group name(s) in the synchronization option

Now that you have both the Role ID(s) and the Minecraft Group Name(s), add them into `GroupRoleSynchronizationGroupsAndRolesToSync` located inside the `synchronization.yml` config file.
```yaml
# synchronization.yml Line 36
GroupRoleSynchronizationGroupsAndRolesToSync: {"VIP": "680679725206994947", "MVP": "680679790025506861"}
```

That's the basics of it! Read the comments for the other options in the `synchronization.yml` for more control over this system.
