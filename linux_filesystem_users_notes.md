# Linux Filesystem & Users — Notes

## 1. Linux Users

A Linux process runs with a user identity (UID) and group identity (GID).

Example:
```bash
id
```

For the current account, this showed:
- `thissidemayur` → UID 1000
- `wheel` → administrative/sudo group
- `docker`, `kvm`, `ollama` → additional group memberships

A separate user was created:
```bash
sudo useradd --create-home wafa
```

`wafa` has its own UID, primary group, home directory, and password.

## 2. Ownership

Every file and directory has:
- an owner (user)
- a group

Example:
```text
-rw-r--r--. 1 wafa wafa ... test.txt
```

Here:
- owner = `wafa`
- group = `wafa`

Ownership can be changed with:
```bash
sudo chown user:group path
```

## 3. File Permissions

Example:
```text
-rw-r--r--
```

Meaning:
```text
-   rw-   r--   r--
    │     │     │
    │     │     └── others
    │     └──────── group
    └────────────── owner
```

For files:
- `r` = read contents
- `w` = modify contents
- `x` = execute

## 4. Directory Permissions

For directories, permissions have different practical meanings:
- `r` = list directory entries
- `w` = create/delete/rename entries
- `x` = enter/traverse the directory

The `x` permission is especially important for accessing paths.

## 5. Private Home Directory

`/home/wafa` has:
```text
drwx------
```

Therefore only `wafa` can normally enter and manage it.

As `thissidemayur`:
```bash
ls -la /home/wafa
```
resulted in:
```text
Permission denied
```

But:
```bash
sudo -u wafa ls -la /home/wafa
```
worked because the command ran with `wafa`'s identity.

## 6. Directory Permissions Control File Deletion

A file can be owned by another user and still be protected from deletion if the parent directory does not allow access.

For example:
```text
/home/wafa/
└── test.txt
```

Because `/home/wafa` is `700`, `thissidemayur` could not delete `test.txt`:

```bash
rm /home/wafa/test.txt
```

returned:
```text
Permission denied
```

File write permission and file deletion are different concepts.

## 7. Root / sudo

Normal permissions are not a complete boundary against root.

Because `thissidemayur` belongs to `wheel`, it can use `sudo` and obtain root privileges.

Conceptually:
```text
thissidemayur → sudo → root → can bypass normal permission checks
```

Therefore a separate `wafa` account protects against ordinary users/processes, but not against an administrator with root access.

## 8. Relevance to the Private Vault Project

The planned structure is:

```text
/home/
├── thissidemayur/
└── wafa/
    └── vault/
        └── private-archive.hc
```

The idea is:
- `wafa` owns the private vault.
- `/home/wafa` remains inaccessible to ordinary users.
- VeraCrypt protects the contents of the container with encryption.
- Linux ownership and permissions protect access to the container file itself from ordinary users.
- Root can still access/delete the container, so backups are needed for availability.

### Key takeaway

**Linux permissions provide access control; encryption protects the contents when the container is not mounted. They solve different problems.**
