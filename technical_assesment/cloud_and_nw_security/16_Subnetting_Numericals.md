# 16 --- Subnetting Numericals

## Accenture Technical Assessment --- Topic Mastery Part 2

**Priority: ⭐⭐⭐⭐⭐ \| Calculation-heavy \| Designed for zero prior
subnetting experience**

# 1. The Core Method

For an IP such as:

`192.168.1.70/26`

use:

`Prefix → Mask → Block size → Range → Network → Broadcast → Hosts`

This single method solves a large percentage of basic subnetting
questions.

# 2. Block Size

First find the subnet mask.

For `/26`:

`255.255.255.192`

Then:

`Block size = 256 − mask value in the interesting octet`

So:

`256 − 192 = 64`

Subnet boundaries:

`0, 64, 128, 192`

# 3. Complete Example: 192.168.1.70/26

`/26 → 255.255.255.192`

Block:

`256 − 192 = 64`

Ranges:

-   0--63
-   64--127
-   128--191
-   192--255

70 is inside `64–127`.

Therefore:

-   Network = `192.168.1.64`
-   First host = `192.168.1.65`
-   Last host = `192.168.1.126`
-   Broadcast = `192.168.1.127`

# 4. /27 Example

Find the subnet containing:

`192.168.1.100/27`

Mask:

`255.255.255.224`

Block:

`256 − 224 = 32`

Boundaries:

`0, 32, 64, 96, 128, 160, 192, 224`

100 is in `96–127`.

Answer:

-   Network = `192.168.1.96`
-   First host = `.97`
-   Last host = `.126`
-   Broadcast = `.127`

# 5. /28 Example

Find the subnet containing:

`192.168.1.200/28`

Mask:

`255.255.255.240`

Block:

`256 − 240 = 16`

200 is in:

`192–207`

Answer:

-   Network = `.192`
-   First host = `.193`
-   Last host = `.206`
-   Broadcast = `.207`

# 6. /25 Example

`192.168.1.200/25`

Mask:

`255.255.255.128`

Block:

`128`

Ranges:

`0–127`, `128–255`

Answer:

-   Network = `.128`
-   First host = `.129`
-   Last host = `.254`
-   Broadcast = `.255`

# 7. Interesting Octet

The **interesting octet** is the first subnet-mask octet that is neither
255 nor 0.

Example:

`172.16.35.77/20`

Mask:

`255.255.240.0`

Interesting octet = third.

Block:

`256 − 240 = 16`

Third-octet ranges:

`0–15, 16–31, 32–47, 48–63...`

35 is in `32–47`.

Answer:

-   Network = `172.16.32.0`
-   Broadcast = `172.16.47.255`
-   Hosts = `172.16.32.1–172.16.47.254`

# 8. /18 Example

`172.20.70.10/18`

Mask:

`255.255.192.0`

Block:

`256 − 192 = 64`

Third-octet ranges:

`0–63, 64–127, 128–191, 192–255`

70 is in `64–127`.

Answer:

-   Network = `172.20.64.0`
-   Broadcast = `172.20.127.255`

# 9. /23 Example

`192.168.5.100/23`

Mask:

`255.255.254.0`

Interesting octet = third.

Block:

`256 − 254 = 2`

Third-octet boundaries:

`0,2,4,6,8...`

5 lies in `4–5`.

Answer:

-   Network = `192.168.4.0`
-   Broadcast = `192.168.5.255`

# 10. /22 Example

`192.168.10.50/22`

Mask:

`255.255.252.0`

Block:

`256 − 252 = 4`

Third-octet boundaries:

`0,4,8,12,16...`

10 lies in `8–11`.

Answer:

-   Network = `192.168.8.0`
-   Broadcast = `192.168.11.255`

# 11. Number of Subnets

If `/24` becomes `/27`:

Borrowed bits:

`27 − 24 = 3`

Subnets:

`2^3 = 8`

They are:

-   `.0/27`
-   `.32/27`
-   `.64/27`
-   `.96/27`
-   `.128/27`
-   `.160/27`
-   `.192/27`
-   `.224/27`

# 12. Host Requirement Questions

Formula:

`2^h − 2 >= required hosts`

Then:

`prefix = 32 − h`

Examples:

### Need 30 hosts

`2^5 − 2 = 30`

Answer: `/27`

### Need 50 hosts

`2^5 − 2 = 30` → insufficient

`2^6 − 2 = 62` → sufficient

Answer: `/26`

### Need 100 hosts

`/26 → 62` insufficient

`/25 → 126` sufficient

Answer: `/25`

### Need 500 hosts

`/24 → 254` insufficient

`/23 → 510` sufficient

Answer: `/23`

# 13. Host Requirement Cheat Sheet

    Needed usable hosts   Minimum common prefix
  --------------------- -----------------------
                      2                     /30
                      6                     /29
                     14                     /28
                     30                     /27
                     62                     /26
                    126                     /25
                    254                     /24
                    510                     /23
                   1022                     /22
                   2046                     /21

# 14. Same-Subnet Questions

Example:

`192.168.1.65/26` and `192.168.1.100/26`

Both are in:

`192.168.1.64–127`

Therefore: **same subnet**.

Example:

`192.168.1.65/26` and `192.168.1.130/26`

First is in `.64–127`.

Second is in `.128–191`.

Therefore: **different subnets**.

Fast method:

1.  Find network of each IP.
2.  Compare networks.
3.  Same → same subnet.
4.  Different → different subnet.

# 15. Binary Method

Block size is faster, but understand the binary method.

Example:

`192.168.1.70/26`

Last octet:

`70 = 01000110`

Mask:

`192 = 11000000`

AND:

`01000110` `11000000` `--------` `01000000`

`01000000 = 64`

Network = `192.168.1.64`

# 16. VLSM

**VLSM = Variable Length Subnet Masking.**

It allows different subnet sizes within the same larger address space.

Example requirements:

-   100 hosts → `/25`
-   50 hosts → `/26`
-   20 hosts → `/27`
-   10 hosts → `/28`

Rule:

> Allocate the largest requirement first.

VLSM is about efficient address allocation; it is different from simply
dividing everything into equal-size subnets.

# 17. Route Summarization

Subnetting:

`one network → smaller networks`

Summarization:

`multiple suitable contiguous networks → broader summary route`

Example:

`192.168.0.0/24` `192.168.1.0/24` `192.168.2.0/24` `192.168.3.0/24`

can be represented by:

`192.168.0.0/22`

when the required alignment/contiguity conditions are met.

Memory:

**Subnetting = split. Summarization = combine.**

# 18. /31 and /32

Do not blindly use the traditional `2^h − 2` rule.

-   `/31` has 2 addresses and is commonly used for point-to-point links
    with special handling.
-   `/32` identifies exactly one IPv4 address and is commonly used for
    host routes/loopbacks.

# 19. 40 Practice Questions

### Basic

1.  Host bits in `/26`? **6**
2.  Total addresses in `/26`? **64**
3.  Traditional usable hosts in `/26`? **62**
4.  `/27` mask? **255.255.255.224**
5.  `/27` block size? **32**
6.  `/28` mask? **255.255.255.240**
7.  `/28` block size? **16**
8.  Number of `/27` subnets in `/24`? **8**
9.  Number of `/28` subnets in `/24`? **16**
10. Usable hosts in `/29`? **6**

### Network/Broadcast

11. `192.168.10.70/26` network? **192.168.10.64**
12. `192.168.10.70/26` broadcast? **192.168.10.127**
13. `192.168.10.130/26` network? **192.168.10.128**
14. `192.168.10.200/27` network? **192.168.10.192**
15. `192.168.10.200/27` broadcast? **192.168.10.223**
16. `192.168.10.50/28` network? **192.168.10.48**
17. `192.168.10.50/28` broadcast? **192.168.10.63**
18. `172.16.35.77/20` network? **172.16.32.0**
19. `172.16.35.77/20` broadcast? **172.16.47.255**
20. `172.20.70.10/18` network? **172.20.64.0**

### More Numericals

21. `172.20.70.10/18` broadcast? **172.20.127.255**
22. `192.168.5.100/23` network? **192.168.4.0**
23. `192.168.5.100/23` broadcast? **192.168.5.255**
24. `192.168.10.50/22` network? **192.168.8.0**
25. `192.168.10.50/22` broadcast? **192.168.11.255**
26. `10.10.10.200/25` network? **10.10.10.128**
27. `10.10.10.200/25` broadcast? **10.10.10.255**
28. `10.10.10.200/28` network? **10.10.10.192**
29. `10.10.10.200/28` broadcast? **10.10.10.207**
30. `192.168.1.170/27` host range? **192.168.1.161--190**

### Host Requirements

31. Prefix for at least 14 hosts? **/28**
32. Prefix for at least 30 hosts? **/27**
33. Prefix for at least 50 hosts? **/26**
34. Prefix for at least 100 hosts? **/25**
35. Prefix for at least 200 hosts? **/24**
36. Prefix for at least 500 hosts? **/23**
37. Usable hosts in `/23`? **510**
38. Usable hosts in `/22`? **1022**
39. Are `192.168.1.65/26` and `192.168.1.100/26` same subnet? **Yes**
40. Are `192.168.1.65/26` and `192.168.1.130/26` same subnet? **No**

# 20. The Golden Exam Algorithm

When you see `IP/prefix`, write:

1.  **Mask**
2.  **Interesting octet**
3.  **Block = 256 − mask value**
4.  **Find containing range**
5.  **Network = lower boundary**
6.  **Broadcast = next boundary − 1**
7.  **First host = network + 1**
8.  **Last host = broadcast − 1**

Example:

`192.168.1.170/27`

`/27 → 224`

`256 − 224 = 32`

Ranges include:

`160–191`

Therefore:

-   Network = `.160`
-   Broadcast = `.191`
-   First = `.161`
-   Last = `.190`

# 21. Final Cheat Sheet

``` text
/24 → 256 addresses → 254 usable → block 256
/25 → 128 addresses → 126 usable → block 128
/26 → 64 addresses  → 62 usable  → block 64
/27 → 32 addresses   → 30 usable  → block 32
/28 → 16 addresses   → 14 usable  → block 16
/29 → 8 addresses    → 6 usable   → block 8
/30 → 4 addresses    → 2 usable   → block 4

/25 mask ending = 128
/26 mask ending = 192
/27 mask ending = 224
/28 mask ending = 240
/29 mask ending = 248
/30 mask ending = 252
```

# 22. What You Should Practice

Progression:

**Level 1:** `/24–/27`

**Level 2:** `/28–/30`

**Level 3:** `/23–/21`

**Level 4:** `/20–/18`

**Level 5:** mixed network/broadcast/host-count questions

**Level 6:** VLSM and summarization

Target:

> Solve a basic network/broadcast question in under 30 seconds without a
> calculator.

If you cannot do that yet, repeat Levels 1--3 before moving to the next
networking topic.

# Completion Checklist

-   [ ] Calculate host bits
-   [ ] Calculate total addresses
-   [ ] Calculate usable hosts
-   [ ] Convert prefix to mask
-   [ ] Find block size
-   [ ] Find network address
-   [ ] Find broadcast
-   [ ] Find host range
-   [ ] Determine same subnet
-   [ ] Solve host-requirement questions
-   [ ] Understand VLSM
-   [ ] Understand route summarization
-   [ ] Recognize `/31` and `/32`
