# 15 --- IP Addressing Fundamentals

## Accenture Technical Assessment --- Topic Mastery Part 1

**Priority: ⭐⭐⭐⭐⭐ \| Difficulty: Medium \| Starting level: Zero
subnetting knowledge**

## 1. What is an IP Address?

An IP address is a logical Layer-3 address used to identify a network
interface and enable communication across IP networks.

IPv4 uses **32 bits**, written as four 8-bit octets:

`192.168.1.10`

IPv6 uses **128 bits**, normally written in hexadecimal.

### Core memory

-   IPv4 → 32 bits → dotted decimal
-   IPv6 → 128 bits → hexadecimal
-   Router → primarily makes routing decisions using destination IP
-   Switch → normally forwards Layer-2 frames using MAC addresses

## 2. Binary You Need for Subnetting

Memorize:

`128 64 32 16 8 4 2 1`

Examples:

-   255 = `11111111`
-   192 = `11000000`
-   224 = `11100000`
-   240 = `11110000`
-   248 = `11111000`
-   252 = `11111100`
-   254 = `11111110`

These values appear constantly in subnet masks.

## 3. Network and Host Portions

An IPv4 address consists conceptually of:

`Network portion + Host portion`

Example:

`192.168.1.10/24`

`/24` means:

-   24 network/prefix bits
-   8 host bits

Formula:

`Host bits = 32 − prefix length`

Example:

`/27 → 32 − 27 = 5 host bits`

## 4. Subnet Mask

A subnet mask identifies which bits belong to the network and which
belong to hosts.

Example:

`255.255.255.0 = /24`

Binary:

`11111111.11111111.11111111.00000000`

## 5. CIDR

CIDR means **Classless Inter-Domain Routing**.

Examples:

-   `/8`
-   `/16`
-   `/24`
-   `/25`
-   `/26`
-   `/27`
-   `/28`
-   `/29`
-   `/30`
-   `/32`

IPv4 CIDR prefixes range from `/0` through `/32`.

**Important trap:** `192.168.1.x` does NOT automatically mean `/24`; the
mask/prefix determines the subnet.

## 6. Host Count

For ordinary IPv4 subnets:

`Total addresses = 2^host_bits`

`Traditional usable hosts = 2^host_bits − 2`

Why minus 2?

-   First address = network address
-   Last address = broadcast address

Examples:

  Prefix     Host bits   Total   Traditional usable
  -------- ----------- ------- --------------------
  /24                8     256                  254
  /25                7     128                  126
  /26                6      64                   62
  /27                5      32                   30
  /28                4      16                   14
  /29                3       8                    6
  /30                2       4                    2

`/31` and `/32` are special cases; do not blindly apply the −2 rule.

## 7. Network, Host Range and Broadcast

For:

`192.168.1.0/24`

-   Network = `192.168.1.0`
-   First host = `192.168.1.1`
-   Last host = `192.168.1.254`
-   Broadcast = `192.168.1.255`

Traditional host range is between network and broadcast.

## 8. Private IPv4 Ranges

Memorize:

-   `10.0.0.0/8`
-   `172.16.0.0/12`
-   `192.168.0.0/16`

These are private address ranges commonly used inside homes, enterprises
and cloud networks.

## 9. Special Addresses

-   `127.0.0.0/8` → loopback
-   `127.0.0.1` → common loopback address
-   `169.254.0.0/16` → IPv4 link-local/APIPA
-   `255.255.255.255` → limited broadcast
-   `0.0.0.0/0` → IPv4 default route
-   `0.0.0.0` → unspecified address in appropriate contexts

## 10. Unicast / Broadcast / Multicast

-   Unicast → one sender to one receiver
-   Broadcast → one sender to all hosts in the local broadcast domain
-   Multicast → one sender to an interested group

## 11. Old Classful Addressing

Know this for MCQs, but use CIDR for modern reasoning.

  Class     First octet          Default prefix
  ------- ------------- -----------------------
  A              1--126                      /8
  B            128--191                     /16
  C            192--223                     /24
  D            224--239               Multicast
  E            240--255   Experimental/reserved

Classful addressing is historical; modern networks use CIDR.

## 12. What Is Subnetting?

Subnetting divides a larger IP network into smaller logical networks
called subnets.

Example:

`192.168.1.0/24`

can be divided into `/26` subnets:

-   `192.168.1.0/26`
-   `192.168.1.64/26`
-   `192.168.1.128/26`
-   `192.168.1.192/26`

Part 2 teaches how to calculate these ranges.

## 13. Borrowing Bits

Starting with `/24`:

`24 network bits + 8 host bits`

Changing to `/26`:

`26 network bits + 6 host bits`

Borrowed:

`26 − 24 = 2 bits`

Number of equal-size subnets:

`2^2 = 4`

Addresses per subnet:

`2^6 = 64`

Traditional usable hosts:

`64 − 2 = 62`

## 14. Subnetting Formula Sheet

Memorize:

`Host bits = 32 − prefix`

`Total addresses = 2^host_bits`

`Usable hosts = 2^host_bits − 2`

`Borrowed bits = new prefix − old prefix`

`Equal-size subnets = 2^borrowed_bits`

## 15. Subnet Mask Table

    CIDR Mask
  ------ -----------------
      /8 255.0.0.0
     /16 255.255.0.0
     /17 255.255.128.0
     /18 255.255.192.0
     /19 255.255.224.0
     /20 255.255.240.0
     /21 255.255.248.0
     /22 255.255.252.0
     /23 255.255.254.0
     /24 255.255.255.0
     /25 255.255.255.128
     /26 255.255.255.192
     /27 255.255.255.224
     /28 255.255.255.240
     /29 255.255.255.248
     /30 255.255.255.252
     /31 255.255.255.254
     /32 255.255.255.255

## 16. Connection With Routing

A host uses its IP address and subnet mask to decide whether a
destination is local or remote.

If remote, traffic is sent toward the default gateway.

Flow:

`IP + mask → local/remote decision → default gateway → routing`

## 17. High-Value Traps

1.  `/27` means 27 network bits, not 27 host bits.
2.  Larger prefix number means a smaller subnet.
3.  Network address is not a normal host address.
4.  Broadcast is not a normal host address.
5.  `/24` is not always implied by `192.168.x.x`.
6.  Private address does not mean Internet-routable.
7.  `/31` and `/32` have special uses.

## 18. Practice

1.  IPv4 bits? **32**
2.  IPv6 bits? **128**
3.  Bits per IPv4 octet? **8**
4.  Host bits in `/27`? **5**
5.  Total addresses in `/26`? **64**
6.  Traditional usable hosts in `/26`? **62**
7.  `/24` mask? **255.255.255.0**
8.  `/26` mask? **255.255.255.192**
9.  Private `10/8` range? **10.0.0.0--10.255.255.255**
10. Private `172.16/12` range? **172.16.0.0--172.31.255.255**
11. Private `192.168/16` range? **192.168.0.0--192.168.255.255**
12. `127.0.0.1`? **Loopback**
13. APIPA range? **169.254.0.0/16**
14. CIDR stands for? **Classless Inter-Domain Routing**
15. What does subnetting do? **Divides a network into smaller subnets**
16. `/24` to `/27`: borrowed bits? **3**
17. `/24` to `/27`: subnets? **8**
18. `/27`: traditional usable hosts? **30**
19. `/24` network address? **First address**
20. `/24` broadcast? **Last address**

## Completion Checklist

-   [ ] IPv4/IPv6 bit lengths
-   [ ] Binary place values
-   [ ] Network vs host bits
-   [ ] CIDR
-   [ ] Subnet masks
-   [ ] Host formulas
-   [ ] Network/broadcast concepts
-   [ ] Private ranges
-   [ ] Special addresses
-   [ ] Basic subnetting concept

**Do not worry if you cannot calculate subnet ranges yet. That is Part
2.**
