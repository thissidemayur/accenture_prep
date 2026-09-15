# 17 — ICMP & Network Diagnostic Tools

## Accenture Technical Assessment — Topic Mastery

**Priority: ⭐⭐⭐⭐⭐ | Difficulty: Easy–Medium | Placement ROI: High**

## 1. What Is ICMP?

**ICMP = Internet Control Message Protocol**

ICMP is a network-layer protocol used by IP networks to communicate **control, error, and diagnostic information**. It is not primarily a protocol for carrying application data.

Examples: `ping`, `traceroute` / `tracert`, Destination Unreachable, Time Exceeded.

> **IP carries packets; ICMP helps report what happened to them.**

## 2. Where Does ICMP Fit?

ICMP is associated with **OSI Layer 3 (Network Layer)** and the TCP/IP Internet layer.

**Critical trap:** ICMP does **not** use TCP or UDP port numbers.

## 3. ICMP vs TCP/UDP

| Feature | ICMP | TCP | UDP |
|---|---|---|---|
| Main purpose | Control/error/diagnostics | Reliable transport | Lightweight transport |
| Layer | L3 | L4 | L4 |
| TCP/UDP port | No | Yes | Yes |
| Example | Ping | HTTP transport | DNS/other UDP services |

## 4. ICMP Message Structure

An ICMP message generally contains:

- **Type** — broad message category
- **Code** — more specific reason/detail
- **Checksum** — error detection
- Message-specific information

> **Type = broad category; Code = specific detail.**

## 5. Echo Request and Echo Reply

Normal `ping` uses:

```text
Source → ICMP Echo Request → Destination
Source ← ICMP Echo Reply   ← Destination
```

A reply indicates that the destination responded to the ICMP request.

## 6. Ping

`ping` is a basic diagnostic tool for:

- Reachability
- Round-trip time
- Packet loss
- Basic IP connectivity

**Important:** Successful ping does **not** prove HTTP, HTTPS, SSH, DNS, or the application is working.

## 7. Why Ping Can Fail

A ping can fail because of:

- ICMP filtering
- Firewall/security policy
- ACLs
- Routing problems
- Host/interface failure
- Incorrect addressing
- Packet loss

Therefore:

> **Ping failure does not always mean the host is down.**

## 8. Destination Unreachable

ICMP Destination Unreachable can report that a packet cannot be delivered for a relevant reason, such as network, host, protocol, or port unreachable.

A common UDP case is **Port Unreachable** when a host receives a UDP packet for a port where no application is listening.

## 9. Time Exceeded and TTL

**TTL = Time To Live**. In IPv4, routers decrement TTL when forwarding packets.

When TTL reaches zero:

```text
Packet discarded
        ↓
ICMP Time Exceeded may be sent
```

TTL is not literally a countdown in seconds; in IPv4 it acts as a hop-limit mechanism.

## 10. Traceroute / Tracert

Traceroute discovers the path toward a destination.

Linux/macOS:

```bash
traceroute example.com
```

Windows:

```cmd
tracert example.com
```

A simplified IPv4 mechanism sends probes with increasing TTL values. TTL 1 reveals the first router through an ICMP Time Exceeded response; TTL 2 can reveal the second router, and so on.

Implementations vary: probes may use UDP, ICMP, or TCP. Do not memorize that traceroute always uses UDP.

## 11. Diagnostic Commands

### Windows

```cmd
ipconfig
ipconfig /all
ping <host>
tracert <host>
nslookup <name>
```

`ipconfig` shows local IP configuration such as IPv4/IPv6 addresses, subnet mask, and default gateway. `/all` gives more detail.

### Linux

```bash
ip addr
ip route
ping <host>
traceroute <host>
nslookup <name>
dig <name>
ip neigh
ss -tuln
```

- `ip addr` → addresses/interfaces
- `ip route` → routing table
- `ip neigh` → neighbor/ARP-related information
- `ss` → sockets and listening services

## 12. DNS Diagnostic Tools

### nslookup

```bash
nslookup example.com
```

Used to query DNS and investigate hostname resolution.

### dig

```bash
dig example.com
dig example.com A
dig example.com MX
dig example.com NS
```

`dig` provides detailed DNS query/response information.

> **nslookup/dig → DNS, not routing.**

## 13. ARP / Neighbor Information

Older systems may provide:

```bash
arp
```

Modern Linux commonly uses:

```bash
ip neigh
```

For IPv4 Ethernet, this can show IP-to-MAC neighbor information. IPv6 uses Neighbor Discovery rather than ARP.

## 14. netstat and ss

`netstat` is a traditional tool that can display connections, listening sockets, routing information, and statistics depending on options/platform.

Modern Linux commonly uses:

```bash
ss -tuln
```

- `-t` → TCP
- `-u` → UDP
- `-l` → listening
- `-n` → numeric

Useful for asking: **Is something listening on this port?**

## 15. curl

`curl` tests application-layer connectivity, especially HTTP/HTTPS.

```bash
curl https://example.com
curl -I https://example.com
```

This is more appropriate than ping when you want to know whether an HTTP/HTTPS service actually responds.

## 16. Telnet and Netcat

Telnet is an old, insecure remote-login protocol, but its client can be used as a basic TCP connection test:

```bash
telnet example.com 80
```

Netcat is a flexible network testing utility:

```bash
nc -vz example.com 443
```

Do not confuse **Telnet as a protocol** with **using a telnet client for a port test**.

## 17. Diagnostic Tool Map

| Tool | Main purpose |
|---|---|
| ping | IP reachability / RTT |
| traceroute | Path/hops |
| tracert | Windows path tracing |
| ipconfig | Windows IP configuration |
| ip addr | Linux addresses/interfaces |
| ip route | Linux routing table |
| nslookup | DNS query |
| dig | Detailed DNS query |
| arp / ip neigh | Neighbor/ARP information |
| netstat | Connections/sockets/statistics |
| ss | Linux sockets/listening ports |
| curl | HTTP/HTTPS/application testing |
| telnet | Basic TCP test when used as a client |
| nc | Network connectivity/testing |

## 18. Troubleshooting Decision Tree

If a website is not opening:

```text
1. IP configuration?
   ↓
   ipconfig / ip addr

2. Routing/default gateway?
   ↓
   ip route

3. Gateway reachable?
   ↓
   ping gateway

4. Remote IP reachable?
   ↓
   ping remote-IP
   (ICMP may be blocked)

5. DNS resolving?
   ↓
   nslookup / dig

6. Path problem?
   ↓
   traceroute / tracert

7. TCP service reachable?
   ↓
   nc / telnet client

8. HTTPS actually responding?
   ↓
   curl
```

## 19. Diagnostic Scenarios

### Ping works, website fails

Possible causes: TCP 443 blocked, HTTPS service down, TLS problem, web server/reverse proxy issue, application issue, or DNS pointing elsewhere.

### Ping by IP works, hostname fails

Investigate **DNS** using `nslookup` or `dig`.

### Gateway ping fails

Investigate local addressing, mask, VLAN/link, ARP/neighbor resolution, firewall, switch configuration, or gateway interface.

### Same subnet works, remote subnet fails

Check default gateway, routing, ACL/firewall, and subnet configuration.

### Traceroute shows `* * *`

It means no response was received for that probe under the relevant conditions. It does **not** automatically prove that router is broken or that forwarding stopped there. Filtering, rate limiting, asymmetric paths, and other causes are possible.

## 20. Common MCQ Traps

1. **ICMP uses TCP port 7.** ❌ ICMP has no TCP/UDP ports.
2. **Ping uses TCP.** ❌ Normal ping uses ICMP Echo Request/Reply.
3. **Successful ping proves HTTP works.** ❌ It tests ICMP reachability.
4. **Traceroute always uses UDP.** ❌ Implementations vary.
5. **TTL is seconds.** ❌ IPv4 forwarding uses it as a hop-limit mechanism.
6. **nslookup checks routing.** ❌ It queries DNS.
7. **ip route displays DNS records.** ❌ It displays routing information.
8. **curl is an ICMP tool.** ❌ It is useful for application-layer protocols such as HTTP/HTTPS.

# 21. 40 Practice Questions

### Concepts

1. What does ICMP stand for? **Internet Control Message Protocol**
2. Which OSI layer is ICMP associated with? **Layer 3**
3. Does ICMP use TCP/UDP ports? **No**
4. What messages does normal ping use? **Echo Request and Echo Reply**
5. What does ping primarily test? **Reachability, RTT, and packet loss**
6. Does successful ping prove HTTP works? **No**
7. What is Destination Unreachable? **An ICMP notification that delivery failed for a relevant reason**
8. What is Time Exceeded? **An ICMP message associated with TTL/hop-limit expiration**
9. What is TTL? **IPv4 Time To Live field**
10. What happens when TTL reaches zero? **Packet is discarded; ICMP Time Exceeded may be generated**

### Tools

11. Basic reachability command? **ping**
12. Windows path tracing command? **tracert**
13. Linux path tracing command? **traceroute**
14. Windows IP configuration command? **ipconfig**
15. Linux address/interface command? **ip addr**
16. Linux routing-table command? **ip route**
17. DNS query command? **nslookup**
18. Detailed DNS query tool? **dig**
19. Linux neighbor table command? **ip neigh**
20. Linux socket/listening-port tool? **ss**

### Scenarios

21. Ping succeeds but HTTPS fails. What should you investigate? **TCP/HTTPS/application stack**
22. IP works but hostname does not resolve. What should you investigate? **DNS**
23. Host cannot reach its gateway. What should you investigate? **Local link/addressing/VLAN/ARP/gateway issues**
24. Same-subnet works but remote-subnet fails. What should you check? **Gateway/routing/ACL/firewall/subnet configuration**
25. Tool for HTTP response testing? **curl**
26. Tools for DNS records? **dig/nslookup**
27. Tool for Linux routing information? **ip route**
28. Tool for Linux listening sockets? **ss**
29. Utilities for basic TCP port testing? **nc or telnet client**
30. Why can ping fail when a host is running? **ICMP can be filtered/blocked**

### More MCQs

31. Difference between Echo Request and Reply? **Request asks; Reply responds**
32. Why does traceroute vary TTL? **To cause successive routers to reveal themselves through TTL expiration**
33. What response can reveal an expired TTL? **ICMP Time Exceeded**
34. Port Unreachable can indicate what? **A relevant UDP destination port is unavailable**
35. Does nslookup test TCP 443? **No**
36. Does curl primarily test ICMP? **No**
37. What does tracert correspond to? **Windows path-tracing utility**
38. Why does `*` in traceroute not prove a router is broken? **Responses may be filtered/rate-limited while forwarding continues**
39. How does ICMP support diagnostics? **It carries control/error information used by mechanisms such as ping/traceroute**
40. Best troubleshooting principle? **Work systematically from lower-layer connectivity toward DNS, transport, TLS, and application behavior**

# 22. Rapid Revision

```text
ICMP → control/error/diagnostics → Layer 3 → no TCP/UDP ports
ping → Echo Request + Echo Reply
Destination Unreachable → delivery problem
Time Exceeded → TTL expiration
TTL → decremented by IPv4 routers → prevents endless forwarding
traceroute/tracert → path discovery using TTL/hop-limit behavior
ipconfig → Windows IP configuration
ip addr → Linux interfaces/addresses
ip route → Linux routing table
nslookup → DNS
 dig → detailed DNS
arp/ip neigh → neighbor information
ss → Linux sockets/listening ports
curl → HTTP/HTTPS/application testing
nc → network connectivity/port testing
```

# 23. Final Mental Model

When a website fails, don't randomly blame DNS. Walk upward:

```text
IP configuration
    ↓
Default gateway / routing
    ↓
Remote reachability
    ↓
DNS
    ↓
Path
    ↓
TCP port
    ↓
TLS
    ↓
HTTP/application
```

### Final memory hook

> **Ping asks: can I get an ICMP reply?**
>
> **Traceroute asks: which routers are along the path?**
>
> **DNS tools ask: what does this name resolve to?**
>
> **Route tools ask: where will the packet go?**
>
> **Port tools ask: can I establish this service connection?**
>
> **curl asks: does the application protocol actually respond?**

# 24. Completion Checklist

- [ ] Define ICMP
- [ ] Know its layer
- [ ] Know it has no TCP/UDP ports
- [ ] Understand Echo Request/Reply
- [ ] Understand ping and its limitations
- [ ] Understand Destination Unreachable
- [ ] Understand Time Exceeded
- [ ] Understand TTL
- [ ] Understand traceroute/tracert
- [ ] Know ipconfig
- [ ] Know ip addr
- [ ] Know ip route
- [ ] Know nslookup/dig
- [ ] Know arp/ip neigh
- [ ] Know netstat/ss
- [ ] Know curl
- [ ] Know basic nc/telnet port testing
- [ ] Solve diagnostic scenarios
- [ ] Avoid ICMP/traceroute traps
