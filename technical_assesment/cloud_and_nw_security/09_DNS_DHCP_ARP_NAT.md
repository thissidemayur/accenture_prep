# 09 — DNS, DHCP, ARP & NAT

## Accenture Technical Assessment — Topic Mastery Notes

### 1. DNS — Domain Name System

**Exam-ready definition:** DNS translates human-readable domain names into IP addresses so devices can locate destinations on a network.

**Analogy:** DNS is like a phonebook: name → phone number.

**Common flow:** Client/cache → recursive resolver → root → TLD → authoritative server → answer → cache.

**Port:** 53. DNS commonly uses UDP; TCP is also used when required, including zone transfers and cases where TCP is needed for the exchange.

#### Important DNS records

| Record | Purpose |
| --- | --- |
| A | Hostname → IPv4 |
| AAAA | Hostname → IPv6 |
| CNAME | Alias → canonical name |
| MX | Mail server |
| NS | Name server |
| PTR | Reverse lookup |
| TXT | Text/verification metadata |

**Forward lookup:** Name → IP  
**Reverse lookup:** IP → Name  
**TTL:** Controls how long a DNS answer may normally be cached.

**Recursive resolver:** Performs lookup work on behalf of the client.  
**Authoritative server:** Holds authoritative records for a DNS zone.

---

### 2. DHCP — Dynamic Host Configuration Protocol

**Exam-ready definition:** DHCP automatically provides network configuration to clients, commonly including an IP address, subnet mask, default gateway and DNS server.

**Analogy:** A hotel receptionist assigns you a room and gives you the information needed to use the hotel.

#### DORA

**D — Discover:** Client broadcasts to find DHCP servers.  
**O — Offer:** Server offers configuration.  
**R — Request:** Client requests the offer.  
**A — Acknowledge:** Server confirms the lease.

**Memory:** Discover → Offer → Request → Acknowledge.

#### Ports

| Device | Port |
| --- | ---: |
| DHCP Server | UDP 67 |
| DHCP Client | UDP 68 |

DHCP initially uses broadcast because a new client may not yet have a usable IP or know the DHCP server. A **DHCP relay agent** can forward DHCP messages between subnets.

**Lease:** Address/configuration is commonly assigned for a limited period.  
**Reservation:** Server can consistently assign a particular address to a particular client based on an identifier such as MAC address.

---

### 3. ARP — Address Resolution Protocol

**Exam-ready definition:** ARP maps a known IPv4 address to a MAC address on a local network.

**Analogy:** You know a house number but need the exact local recipient/door to deliver something.

#### ARP process

1. Host broadcasts an ARP Request: “Who has this IPv4 address?”
2. Owner replies with its MAC address.
3. Host can store the mapping in its ARP cache.

Example:

`192.168.1.20 → AA:BB:CC:DD:EE:FF`

#### Critical remote-destination scenario

If your PC is `192.168.1.10` and the destination is remote, e.g. `8.8.8.8`, the PC normally ARPs for the **default gateway's MAC**, not the remote server's MAC.

**Key rule:** ARP resolves the MAC address of the local next hop.

**IPv4 → ARP**  
**IPv6 → NDP (Neighbor Discovery Protocol)**

#### ARP spoofing / poisoning

An attacker can forge ARP information so that a victim associates an attacker's MAC address with another IP address. This can enable interception, MITM behavior or disruption.

---

### 4. NAT — Network Address Translation

**Exam-ready definition:** NAT translates IP addresses between address spaces, commonly allowing private internal addresses to communicate with external networks using public addressing.

**Analogy:** A company has many employees but one public reception number; the receptionist routes communication internally.

#### RFC1918 private IPv4 ranges

| Range | CIDR |
| --- | --- |
| 10.0.0.0 – 10.255.255.255 | 10.0.0.0/8 |
| 172.16.0.0 – 172.31.255.255 | 172.16.0.0/12 |
| 192.168.0.0 – 192.168.255.255 | 192.168.0.0/16 |

**Trap:** Not every 172.x.x.x address is private. Only 172.16–172.31 is the RFC1918 range.

#### PAT — Port Address Translation

PAT is commonly called **NAT overload**. Many private hosts can share one public IP because transport-layer port numbers distinguish simultaneous mappings.

Example:

`192.168.1.10:50001 → Public_IP:40001`  
`192.168.1.11:50002 → Public_IP:40002`

**NAT = broader address translation concept**  
**PAT = uses ports to multiplex many connections through a public IP**

#### NAT types

- **Static NAT:** fixed 1:1 mapping.
- **Dynamic NAT:** mappings from a pool of public addresses.
- **PAT:** many private hosts share a public IP using ports.

**NAT does NOT provide encryption.** NAT ≠ VPN.

---

### 5. Complete Networking Story

When a laptop joins Wi-Fi:

**1. DHCP:** Gets IP configuration, gateway and DNS information.

**2. DNS:** User enters `example.com`; DNS resolves the name to an IP.

**3. Routing:** Host determines whether the destination is local or remote.

**4. ARP:** For a remote destination, the host resolves the default gateway/local next-hop IPv4 address to its MAC.

**5. NAT/PAT:** A router may translate the private source address to a public address; PAT may also track ports.

**6. Internet:** Packets travel through routers toward the destination.

### One-line memory

**DHCP gives → DNS finds → Routing chooses → ARP identifies next-hop MAC → NAT/PAT translates → Internet**

---

## 6. High-ROI Comparisons

### DNS vs DHCP

| DNS | DHCP |
| --- | --- |
| Name resolution | Network configuration |
| Name → IP | Assigns IP/config |
| Port 53 | UDP 67/68 |

### ARP vs DNS

| ARP | DNS |
| --- | --- |
| IPv4 → MAC | Name → IP |
| Local-network resolution | Name-resolution service |
| Supports IPv4 neighbor resolution | Works with IPv4/IPv6 names |

### DHCP vs static configuration

| DHCP | Static |
| --- | --- |
| Automatic | Manual |
| Centralized | Per-device |
| Lease-based | Manually maintained |

### NAT vs PAT

| NAT | PAT |
| --- | --- |
| General address translation | Address translation using ports |
| Can be 1:1 or pool-based | Commonly many-to-one |
| Broader concept | Common NAT technique |

---

## 7. Common MCQ Traps

1. **DNS is TCP-only** → False. UDP is common; TCP is also used.
2. **DHCP gives only an IP** → Incomplete. It can provide multiple network parameters.
3. **ARP converts domain names to IPs** → False. DNS does that.
4. **ARP finds the MAC of a remote Internet server** → False. The host normally resolves the local gateway/next hop.
5. **NAT encrypts traffic** → False.
6. **Every 172.x.x.x address is private** → False.
7. **IPv6 uses ARP** → False; IPv6 uses NDP.
8. **PAT is unrelated to NAT** → False; PAT is a common NAT technique using ports.
9. **DNS and routing are the same thing** → False. DNS resolves names; routing selects paths/next hops.
10. **DHCP and DNS perform the same function** → False.

---

## 8. Accenture-Style Practice Questions

1. Which protocol translates domain names to IP addresses?  
**Answer: DNS**

2. What is the DNS port?  
**Answer: 53**

3. Which DNS record maps a hostname to IPv4?  
**Answer: A**

4. Which DNS record maps a hostname to IPv6?  
**Answer: AAAA**

5. Which DNS record identifies mail servers?  
**Answer: MX**

6. Which DNS record is associated with reverse DNS?  
**Answer: PTR**

7. What does DNS TTL control?  
**Answer: Cache lifetime**

8. What does DHCP provide?  
**Answer: Network configuration**

9. What does DORA stand for?  
**Answer: Discover, Offer, Request, Acknowledge**

10. DHCP server port?  
**Answer: UDP 67**

11. DHCP client port?  
**Answer: UDP 68**

12. What protocol resolves IPv4 to MAC?  
**Answer: ARP**

13. What replaces ARP's role in IPv6?  
**Answer: NDP**

14. What is ARP poisoning?  
**Answer: Forged/false ARP mappings**

15. For a remote destination, whose MAC does a host normally need?  
**Answer: Default gateway/local next hop**

16. What does NAT stand for?  
**Answer: Network Address Translation**

17. Does NAT encrypt traffic?  
**Answer: No**

18. What is NAT overload?  
**Answer: PAT**

19. What does PAT use to distinguish mappings?  
**Answer: Port numbers**

20. Which NAT type is fixed 1:1?  
**Answer: Static NAT**

21. Which NAT type uses a public address pool?  
**Answer: Dynamic NAT**

22. Which NAT technique lets many private hosts share one public IP?  
**Answer: PAT**

23. Is 172.20.10.5 private?  
**Answer: Yes**

24. Is 172.40.10.5 RFC1918 private?  
**Answer: No**

25. What is forward DNS lookup?  
**Answer: Name → IP**

26. What is reverse DNS lookup?  
**Answer: IP → Name**

27. What component can forward DHCP between subnets?  
**Answer: DHCP relay**

28. What is a DHCP lease?  
**Answer: Time-limited address/configuration assignment**

29. What is a DHCP reservation?  
**Answer: Consistent server-side address assignment for a client**

30. What does an authoritative DNS server provide?  
**Answer: Authoritative records for its zone**

31. What does a recursive resolver do?  
**Answer: Performs DNS lookup on behalf of a client**

32. What protocol commonly carries ordinary DNS queries?  
**Answer: UDP**

33. Can DNS use TCP?  
**Answer: Yes**

34. Does ARP operate on domain names?  
**Answer: No**

35. Which technology translates private addresses for external communication?  
**Answer: NAT**

36. Which technology distinguishes shared NAT connections using ports?  
**Answer: PAT**

37. What is the private range 192.168.0.0/16?  
**Answer: RFC1918 private IPv4**

38. What is the private range 10.0.0.0/8?  
**Answer: RFC1918 private IPv4**

39. What is the private range 172.16.0.0/12?  
**Answer: RFC1918 private IPv4**

40. What is the overall flow from joining a network to reaching an Internet site?  
**Answer: DHCP → DNS → Routing → ARP → NAT/PAT → Internet**

---

## 9. Rapid Revision Sheet

### DNS

- Purpose: Name resolution
- Port: 53
- A: IPv4
- AAAA: IPv6
- MX: Mail
- NS: Name server
- PTR: Reverse
- TTL: Cache lifetime

### DHCP

- Purpose: Automatic network configuration
- Server: UDP 67
- Client: UDP 68
- DORA: Discover → Offer → Request → Acknowledge
- Relay: Forwards DHCP across subnets

### ARP

- IPv4 → MAC
- Local network / next hop
- IPv6 → NDP
- Attack: ARP spoofing/poisoning

### NAT

- Address translation
- Static: 1:1
- Dynamic: Public pool
- PAT: Many-to-one using ports
- Encryption: No

---

## 10. Must-Know Memory Hooks

**DNS = Name → IP**

**DHCP = Gives network configuration**

**ARP = IPv4 → MAC**

**NDP = IPv6 neighbor discovery**

**NAT = Address translation**

**PAT = Address + port translation**

**DNS = 53**

**DHCP = 67/68**

**DORA = Discover → Offer → Request → Acknowledge**

**A = IPv4**

**AAAA = IPv6**

**MX = Mail**

**PTR = Reverse**

**Remote destination = ARP for gateway/next-hop MAC**

**NAT ≠ Encryption**

---

## 11. Completion Checklist

- [ ] DNS definition and purpose
- [ ] DNS resolution flow
- [ ] DNS port
- [ ] A / AAAA / MX / NS / PTR
- [ ] Recursive vs authoritative
- [ ] DNS caching and TTL
- [ ] Forward/reverse lookup
- [ ] DHCP definition
- [ ] DORA
- [ ] DHCP ports
- [ ] Lease/reservation
- [ ] DHCP relay
- [ ] ARP request/reply
- [ ] ARP cache
- [ ] Remote destination and gateway MAC
- [ ] ARP spoofing
- [ ] IPv6 NDP
- [ ] NAT definition
- [ ] Private IPv4 ranges
- [ ] Static/dynamic NAT
- [ ] PAT
- [ ] NAT vs encryption/VPN
- [ ] Complete networking flow
- [ ] MCQ traps
- [ ] Scenario recognition
