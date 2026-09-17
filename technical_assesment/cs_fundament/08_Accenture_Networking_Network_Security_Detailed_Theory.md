# Accenture Networking + Network Security — Detailed Real-World Revision
## From Definitions → Protocols → Ports → Headers → Payloads → Examples → Security

> **Purpose:** This is the detailed layer between basic theory and Accenture-style scenario questions.
>
> The goal is to make you capable of answering questions such as: **Which protocol? Which port? Which layer? Which header? What does the packet/frame contain? What happens in the real world? What security issue is involved?**
>
> **Important:** This is placement-focused. It covers high-return fundamentals rather than advanced CCNA/CCNP-level networking.

---

# 1. Networking Mental Model

When a device communicates, think in this order:

```text
Application
    ↓
Transport
    ↓
Network
    ↓
Data Link
    ↓
Physical
```

Example: opening `https://example.com`

```text
HTTP request
    ↓
TLS
    ↓
TCP
    ↓
IP
    ↓
Ethernet / Wi-Fi
    ↓
Physical transmission
```

A useful interview/MCQ mapping:

| Layer | Data Unit | Common Address/Identifier | Examples |
|---|---|---|---|
| Application | Message/Data | Hostname/URL/application identity | HTTP, DNS, SMTP, SSH |
| Transport | Segment/Datagram | Port number | TCP, UDP |
| Network | Packet | IP address | IPv4, IPv6, ICMP |
| Data Link | Frame | MAC address | Ethernet, 802.11 |
| Physical | Bits | Physical signaling | Copper, fiber, radio |

> **Important:** Terminology can vary by textbook. TCP calls its transport data a **segment**, UDP commonly calls it a **datagram**, and IP carries a **packet/datagram**.

---

# 2. MAC Address

## Definition

A MAC address is a link-layer identifier associated with a network interface.

Typical notation:

```text
00:1A:2B:3C:4D:5E
```

It is used primarily for communication on the local Layer 2 network.

## Real-world example

Your laptop wants to send a frame to another device on the same LAN.

It needs:

```text
Destination MAC
Source MAC
```

A switch uses MAC addresses to decide where to forward Ethernet frames.

## Important distinction

```text
MAC → local/link-layer delivery
IP  → logical/routed delivery
```

### One-word refresh

| Question | Answer |
|---|---|
| Layer of MAC address | Data Link |
| Device that learns MAC addresses | Switch |
| Local delivery identifier | MAC |

---

# 3. IP Address

An IP address is a logical network-layer address.

Example:

```text
192.168.1.25
```

IPv4:

**32 bits**

IPv6:

**128 bits**

IP is responsible for logical addressing and routing between networks.

### Example

```text
Laptop
192.168.1.25

Router
192.168.1.1

Server
10.0.0.10
```

The router can route traffic between different IP networks.

---

# 4. IPv4 Address Structure

Example:

```text
192.168.1.25/24
```

`/24` means:

```text
Network bits = 24
Host bits    = 8
```

Total addresses:

```text
2^8 = 256
```

Traditional usable hosts:

```text
256 - 2 = 254
```

The two traditionally reserved addresses are:

- Network address
- Broadcast address

---

# 5. Private IPv4 Ranges

RFC1918 private ranges:

```text
10.0.0.0/8
172.16.0.0/12
192.168.0.0/16
```

Examples:

```text
10.10.1.5
172.20.5.10
192.168.1.20
```

These are commonly used inside:

- Home networks
- Enterprise networks
- Cloud VPCs

They are not directly routable on the public Internet.

---

# 6. APIPA

If a Windows host cannot obtain an IPv4 address through DHCP, it may self-configure an address in:

```text
169.254.0.0/16
```

This is commonly called:

**APIPA**

Example:

```text
169.254.24.17
```

### Scenario

> Laptop shows `169.254.x.x` and cannot communicate normally with the LAN.

Think:

**DHCP problem**

---

# 7. Default Gateway

The default gateway is the router used when the destination is outside the local subnet.

Example:

```text
Laptop:
IP       = 192.168.1.20
Mask     = 255.255.255.0
Gateway  = 192.168.1.1
```

If the laptop wants:

```text
192.168.1.50
```

same subnet → direct local delivery.

If it wants:

```text
8.8.8.8
```

outside subnet → send toward the default gateway.

---

# 8. ARP

## Address Resolution Protocol

ARP is used in IPv4 LANs to discover the MAC address associated with a local IPv4 address.

Suppose:

```text
IP = 192.168.1.50
```

The host knows the IP but needs the MAC.

It broadcasts an ARP request:

```text
Who has 192.168.1.50?
```

The owner replies with its MAC.

Then the sender can construct the Ethernet frame.

## ARP packet concepts

ARP contains information such as:

- Hardware type
- Protocol type
- Hardware address length
- Protocol address length
- Operation
- Sender MAC
- Sender IP
- Target MAC
- Target IP

### Important

ARP is primarily associated with:

**IPv4 + local network**

IPv6 uses:

**Neighbor Discovery Protocol (NDP)** instead of ARP.

---

# 9. ARP Spoofing

An attacker can send forged ARP messages.

Example:

```text
Victim
   ↓
Attacker
   ↓
Router
```

The victim may incorrectly associate:

```text
Router IP → Attacker MAC
```

Traffic can then be redirected through the attacker.

This can enable:

- Traffic interception
- MITM
- Session theft in poorly protected scenarios

Protection concepts include:

- Dynamic ARP Inspection
- Network segmentation
- Secure switch configuration
- Encryption such as TLS

---

# 10. DNS

## Domain Name System

DNS translates human-readable names into DNS records.

Example:

```text
google.com
    ↓
DNS
    ↓
IP address
```

## Important DNS records

| Record | Purpose |
|---|---|
| A | IPv4 address |
| AAAA | IPv6 address |
| CNAME | Alias |
| MX | Mail server |
| NS | Authoritative name server |
| TXT | Text/verification/policy data |
| PTR | Reverse lookup |

---

# 11. DNS Port

DNS commonly uses:

```text
UDP 53
```

TCP is also used for DNS in situations such as:

- Zone transfers
- Responses too large for traditional UDP handling
- Other protocol-specific cases

### MCQ trap

> "DNS always uses UDP."

**False.**

Remember:

```text
DNS → UDP 53 commonly
DNS → TCP 53 also possible
```

---

# 12. DNS Resolution Flow

Suppose you enter:

```text
www.example.com
```

Conceptually:

```text
Browser
   ↓
OS DNS cache
   ↓
Recursive resolver
   ↓
Root
   ↓
TLD
   ↓
Authoritative DNS
   ↓
IP response
```

Caching can stop the process earlier.

## DNS TTL

TTL controls how long a DNS response can normally remain cached.

Example:

```text
TTL = 300 seconds
```

means a resolver can generally cache the record for up to 5 minutes according to DNS rules.

---

# 13. DNS Security

Common threats:

### DNS spoofing

Forged DNS responses redirect users.

### DNS cache poisoning

False DNS information is inserted into a resolver's cache.

### DNS tunneling

DNS queries/responses are abused to carry data or command traffic.

### DNSSEC

DNSSEC provides cryptographic authentication of DNS data, helping protect against forged DNS responses.

> DNSSEC does **not** encrypt ordinary DNS queries.

---

# 14. DHCP

## Dynamic Host Configuration Protocol

DHCP automatically provides network configuration.

Typical information:

```text
IP address
Subnet mask/prefix
Default gateway
DNS server
Lease duration
```

## DHCP DORA

Remember:

```text
D → Discover
O → Offer
R → Request
A → Acknowledge
```

### Flow

```text
Client → DHCP Discover
Server → DHCP Offer
Client → DHCP Request
Server → DHCP ACK
```

---

# 15. DHCP Ports

DHCP uses UDP:

```text
Server → UDP 67
Client → UDP 68
```

### Memorize

```text
DHCP Server = 67
DHCP Client = 68
```

---

# 16. DHCP Real-World Scenario

Laptop joins Wi-Fi.

It initially does not know its normal IP configuration.

It sends DHCP discovery.

The DHCP server may respond with:

```text
IP       = 192.168.1.20
Mask     = 255.255.255.0
Gateway  = 192.168.1.1
DNS      = 192.168.1.1
```

If DHCP fails, APIPA may appear.

---

# 17. NAT

## Network Address Translation

NAT translates addresses between network address spaces.

Typical situation:

```text
Private network
192.168.1.20
       ↓
     NAT
       ↓
Public IP
203.x.x.x
```

## Why NAT?

Main reasons:

- IPv4 address conservation
- Private addressing
- Network boundary control

---

# 18. PAT

Port Address Translation allows many private hosts to share one public IPv4 address.

Example:

```text
192.168.1.10:50000
192.168.1.11:50001
192.168.1.12:50002
          ↓
        NAT/PAT
          ↓
203.x.x.x
```

The translation device tracks ports to distinguish connections.

### Key distinction

```text
NAT → address translation
PAT → address + port translation
```

---

# 19. Static NAT vs Dynamic NAT vs PAT

| Type | Basic idea |
|---|---|
| Static NAT | Fixed one-to-one mapping |
| Dynamic NAT | Mapping from a pool of public addresses |
| PAT | Many private connections share public IP using ports |

---

# 20. TCP

Transmission Control Protocol.

Characteristics:

- Connection-oriented
- Reliable
- Ordered
- Flow control
- Congestion control
- Retransmission
- Error detection

TCP provides a **byte stream**, not message boundaries.

---

# 21. TCP Three-Way Handshake

```text
Client                    Server

SYN -------------------->

     <------------------- SYN-ACK

ACK -------------------->
```

Meaning:

1. SYN → client wants to establish connection.
2. SYN-ACK → server acknowledges and synchronizes.
3. ACK → client acknowledges.

Connection established.

---

# 22. TCP Header — High-Return Fields

Important TCP header fields:

- Source port
- Destination port
- Sequence number
- Acknowledgment number
- Data offset/header length
- Flags
- Window size
- Checksum
- Urgent pointer
- Options

Important TCP flags:

```text
SYN
ACK
FIN
RST
PSH
URG
ECE
CWR
```

### High-return meanings

| Flag | Meaning |
|---|---|
| SYN | Start/synchronize connection |
| ACK | Acknowledgment |
| FIN | Graceful close |
| RST | Reset/abort |
| PSH | Push data to application |
| URG | Urgent pointer valid |

---

# 23. TCP Sequence and Acknowledgment Numbers

TCP uses sequence numbers to track bytes.

Example:

```text
Sender → bytes 1000–1099
Receiver → ACK 1100
```

ACK 1100 means the receiver expects byte 1100 next.

This supports:

- Ordering
- Reliable delivery
- Retransmission

---

# 24. TCP Flow Control

Flow control prevents a sender from overwhelming the receiver.

The receiver advertises a:

**Receive Window**

Concept:

```text
Fast sender
    ↓
Receiver has limited buffer
    ↓
Window limits sending
```

---

# 25. TCP Congestion Control

Congestion control protects the network from excessive traffic.

Common concepts:

- Congestion window
- Slow start
- Congestion avoidance
- Fast retransmit
- Fast recovery

Don't confuse:

```text
Flow control → receiver capacity
Congestion control → network capacity
```

---

# 26. TCP Connection Termination

A normal TCP connection is commonly closed using FIN/ACK exchanges.

Conceptually:

```text
FIN
<-
ACK
->
FIN
<-
ACK
->
```

### RST

RST abruptly resets a connection.

Situation:

> Application/socket is unexpectedly reset.

Think:

**RST**

---

# 27. UDP

User Datagram Protocol.

Characteristics:

- Connectionless
- No built-in reliability
- No ordering guarantee
- No retransmission mechanism
- Low overhead

UDP header is very small.

Fields:

- Source port
- Destination port
- Length
- Checksum

---

# 28. TCP vs UDP

| Feature | TCP | UDP |
|---|---|---|
| Connection | Connection-oriented | Connectionless |
| Reliability | Yes | No built-in guarantee |
| Ordering | Yes | No |
| Retransmission | Yes | No built-in |
| Flow control | Yes | No TCP-style flow control |
| Congestion control | Yes | No TCP-style congestion control |
| Header overhead | Higher | Lower |
| Typical use | HTTP/HTTPS, SSH | DNS, DHCP, streaming/real-time applications |

### Important

UDP is not automatically "faster" in every application.

It has lower protocol overhead and avoids TCP connection/retransmission machinery, but application performance depends on the complete system.

---

# 29. Common TCP Protocol Examples

TCP is commonly used by:

```text
HTTP
HTTPS
SSH
FTP
SMTP
IMAP
POP3
```

Typical ports:

| Protocol | Port | Transport |
|---|---:|---|
| HTTP | 80 | TCP |
| HTTPS | 443 | TCP |
| SSH | 22 | TCP |
| FTP control | 21 | TCP |
| SMTP | 25 | TCP |
| IMAP | 143 | TCP |
| IMAPS | 993 | TCP |
| POP3 | 110 | TCP |
| POP3S | 995 | TCP |

> Modern applications can also use other transports/versions such as HTTP/3 over QUIC/UDP, so do not assume "HTTPS always means TCP" in every modern implementation.

---

# 30. Common UDP Protocol Examples

| Protocol | Port | Transport |
|---|---:|---|
| DNS | 53 | UDP commonly |
| DHCP server | 67 | UDP |
| DHCP client | 68 | UDP |
| TFTP | 69 | UDP |
| SNMP | 161 | UDP commonly |
| NTP | 123 | UDP |
| Syslog | 514 | UDP commonly |

---

# 31. Port Numbers

A port identifies an application/service endpoint at the transport layer.

Examples:

```text
22  → SSH
53  → DNS
80  → HTTP
443 → HTTPS
```

Think:

```text
IP address → Which machine?
Port number → Which service/application?
```

Example:

```text
192.168.1.20:443
```

means:

> Connect to host `192.168.1.20` on port `443`.

---

# 32. Important Ports — Memorization Table

| Port | Protocol/Service | Transport | Main use |
|---:|---|---|---|
| 20 | FTP data | TCP | FTP data channel in traditional active mode |
| 21 | FTP control | TCP | FTP control |
| 22 | SSH | TCP | Secure remote administration |
| 23 | Telnet | TCP | Insecure remote terminal |
| 25 | SMTP | TCP | Mail transfer |
| 53 | DNS | UDP/TCP | Name resolution and DNS operations |
| 67 | DHCP server | UDP | DHCP |
| 68 | DHCP client | UDP | DHCP |
| 69 | TFTP | UDP | Simple file transfer |
| 80 | HTTP | TCP | Web |
| 110 | POP3 | TCP | Email retrieval |
| 123 | NTP | UDP | Time synchronization |
| 143 | IMAP | TCP | Email retrieval |
| 161 | SNMP | UDP | Network management |
| 162 | SNMP Trap | UDP | SNMP notifications |
| 389 | LDAP | TCP/UDP | Directory services |
| 443 | HTTPS | TCP commonly | Secure web |
| 445 | SMB | TCP | Windows file/printer sharing |
| 514 | Syslog | UDP commonly | Logging |
| 587 | SMTP submission | TCP | Authenticated mail submission |
| 636 | LDAPS | TCP | LDAP over TLS |
| 993 | IMAPS | TCP | IMAP over TLS |
| 995 | POP3S | TCP | POP3 over TLS |

---

# 33. HTTP

HTTP is an application-layer request/response protocol.

Basic structure:

```text
Request
    ↓
Method
Path
Headers
Body
```

Example:

```http
GET /users/42 HTTP/1.1
Host: example.com
Accept: application/json
Authorization: Bearer <token>
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"name":"Alex"}
```

---

# 34. HTTP Methods

Important methods:

| Method | Typical meaning |
|---|---|
| GET | Retrieve |
| POST | Create/submit |
| PUT | Replace/update |
| PATCH | Partial update |
| DELETE | Delete |
| HEAD | Headers without response body |
| OPTIONS | Supported methods/capabilities |

### Situation

> Client wants to retrieve a user.

Think:

**GET**

> Client creates a new order.

Think:

**POST**

> Client partially updates a profile.

Think:

**PATCH**

---

# 35. HTTP Headers

Common request headers:

```text
Host
Authorization
Content-Type
Content-Length
Accept
User-Agent
Cookie
Cache-Control
Origin
Referer
```

Common response headers:

```text
Content-Type
Content-Length
Set-Cookie
Cache-Control
Location
Strict-Transport-Security
Content-Security-Policy
```

---

# 36. HTTP Payload / Body

The payload is the application data being transmitted.

Example JSON:

```json
{
  "username": "mayur",
  "email": "user@example.com"
}
```

With:

```http
Content-Type: application/json
```

The body contains the JSON payload.

> Headers describe/control the message; the body commonly carries application data.

---

# 37. HTTP Status Codes

### 1xx

Informational

### 2xx

Success

Important:

```text
200 OK
201 Created
204 No Content
```

### 3xx

Redirection

```text
301
302
304
```

### 4xx

Client-side/request errors

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
405 Method Not Allowed
429 Too Many Requests
```

### 5xx

Server-side errors

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
```

---

# 38. 401 vs 403

Very common.

### 401

Authentication is required or failed.

Think:

**Who are you?**

### 403

Server understood the request but refuses access.

Think:

**You are authenticated, but not allowed.**

---

# 39. 502 vs 504

Common reverse-proxy/load-balancer scenarios.

### 502 Bad Gateway

Gateway/proxy received an invalid response from an upstream server.

### 504 Gateway Timeout

Gateway/proxy did not receive a timely response from upstream.

---

# 40. HTTPS

HTTPS means HTTP protected by TLS.

Conceptually:

```text
HTTP
 ↓
TLS encryption/authentication
 ↓
TCP commonly
 ↓
IP
```

Traditional HTTPS:

```text
TCP 443
```

Modern HTTP/3 uses:

```text
QUIC over UDP
```

So:

> HTTPS identifies HTTP secured with TLS, not a guarantee that TCP is always underneath.

---

# 41. TLS

TLS provides security properties including:

- Confidentiality
- Integrity
- Authentication of the server through certificates

Simplified handshake concept:

```text
Client
  ↓
Server
  ↓
Certificate
  ↓
Cryptographic negotiation
  ↓
Secure session
```

---

# 42. Digital Certificate

A certificate binds information such as a domain identity to a public key.

A certificate normally contains information such as:

- Subject/identity
- Public key
- Issuer
- Validity period
- Signature
- Extensions

A Certificate Authority signs the certificate.

---

# 43. Symmetric vs Asymmetric Encryption

## Symmetric

Same secret key is used for encryption/decryption.

Advantages:

- Fast
- Efficient for bulk data

## Asymmetric

Uses:

```text
Public key
Private key
```

Common uses:

- Authentication
- Key exchange
- Digital signatures

### Simplified real-world model

TLS can use asymmetric cryptography during handshake-related operations and symmetric cryptography for efficient bulk encryption after a secure session is established.

---

# 44. Hashing

Hashing produces a digest.

Example:

```text
Input
 ↓
SHA-256
 ↓
256-bit digest
```

Properties expected from cryptographic hashes include:

- Deterministic output
- Fixed-size output for a given algorithm
- Efficient computation
- One-way design
- Collision resistance

### Important

```text
Encryption → reversible with key
Hashing → not designed to be reversed
```

---

# 45. Password Hashing

Passwords should not normally be stored as plaintext.

A secure password system uses:

```text
Password
   ↓
Salt + password hashing
   ↓
Stored verifier
```

Modern password hashing should use dedicated password-hashing algorithms such as:

- Argon2
- bcrypt
- scrypt

A plain fast hash such as SHA-256 alone is generally not appropriate for password storage.

---

# 46. Firewall

A firewall controls network traffic based on rules.

Possible criteria:

- Source IP
- Destination IP
- Source port
- Destination port
- Protocol
- Connection state
- Application information depending on firewall type

Example:

```text
Allow TCP 443
Deny TCP 23
```

---

# 47. Stateful vs Stateless Firewall

## Stateful

Tracks connection state.

Example:

```text
Outbound connection allowed
        ↓
Return traffic allowed based on state
```

## Stateless

Each packet is evaluated independently against rules.

### Memory trick

```text
Stateful → remembers connection
Stateless → doesn't
```

---

# 48. IDS

Intrusion Detection System.

Main role:

**Detect + alert**

Example:

```text
Suspicious traffic
      ↓
IDS
      ↓
Alert
```

It may not automatically block the traffic.

---

# 49. IPS

Intrusion Prevention System.

Main role:

**Detect + prevent/block**

Usually positioned so traffic can be inspected and stopped.

```text
Traffic
  ↓
IPS
  ↓
Allow / Block
```

---

# 50. WAF

Web Application Firewall.

Protects web applications at the HTTP/HTTPS/application layer.

Common use cases include filtering suspicious:

- HTTP requests
- Parameters
- Headers
- URLs
- Application-layer attack patterns

Example:

```text
Internet
   ↓
WAF
   ↓
Load Balancer
   ↓
Application
```

---

# 51. Firewall vs WAF

| Firewall | WAF |
|---|---|
| Network/transport filtering depending on type | Web/application-layer filtering |
| IP/port/protocol rules common | HTTP/HTTPS-aware rules |
| Protects network resources | Protects web applications |

Don't assume every firewall is identical; modern next-generation firewalls can inspect deeper layers.

---

# 52. VPN

Virtual Private Network.

A VPN creates a protected communication path over another network.

Common types:

## Site-to-Site VPN

Connects networks.

```text
Office A
   ║
Encrypted tunnel
   ║
Office B
```

Used for:

- Branch offices
- Data center ↔ cloud
- Network ↔ network

## Remote-Access VPN

Connects an individual user/device to a private network.

```text
Employee laptop
      ║
   VPN tunnel
      ║
Company network
```

---

# 53. Common VPN Technologies

### IPsec VPN

Operates at the IP/network layer and is widely used for site-to-site VPNs.

Important components include:

- IKE for negotiation/key management
- ESP for confidentiality/integrity protection in common deployments

### SSL/TLS VPN

Uses TLS and is commonly used for remote-access scenarios.

### WireGuard

A modern VPN protocol designed around a compact cryptographic design and UDP transport.

### OpenVPN

A VPN solution/protocol implementation commonly using TLS and often UDP or TCP transport.

### Situation recognition

> Connect two private networks.

→ **Site-to-site VPN**

> Connect an employee laptop to company network.

→ **Remote-access VPN**

---

# 54. DoS vs DDoS

## DoS

Denial of Service.

One/few sources can overwhelm a target.

## DDoS

Distributed Denial of Service.

Many distributed sources participate.

```text
Botnet
 ↘
  ↘
   Target
  ↗
 ↗
```

Primary security property affected:

**Availability**

---

# 55. Common Network Attacks

| Attack | Core idea |
|---|---|
| Phishing | Trick user |
| Spoofing | Fake identity/source |
| Sniffing | Capture traffic |
| MITM | Intercept communication |
| ARP spoofing | Forge local ARP mappings |
| DNS spoofing | Forge DNS responses |
| DNS cache poisoning | Poison resolver cache |
| DoS | Make service unavailable |
| DDoS | Distributed DoS |
| Brute force | Try many credentials |
| Credential stuffing | Reuse stolen credentials |
| Replay | Reuse captured valid data |

---

# 56. VLAN

Virtual LAN.

A VLAN creates a logical Layer 2 segmentation.

Example:

```text
VLAN 10 → Developers
VLAN 20 → Finance
VLAN 30 → HR
```

Devices in different VLANs require Layer 3 routing to communicate.

---

# 57. Access Port vs Trunk Port

## Access Port

Usually carries traffic for one VLAN.

Typical:

```text
PC
 ↓
Access Port
 ↓
VLAN 10
```

## Trunk Port

Carries multiple VLANs.

Typical:

```text
Switch A
   ║
 Trunk
   ║
Switch B
```

802.1Q VLAN tags identify VLAN membership on tagged trunk traffic.

---

# 58. STP

Spanning Tree Protocol prevents Layer 2 switching loops.

Without STP:

```text
Switch A ─── Switch B
    ╲         ╱
      Switch C
```

A loop can cause:

- Broadcast storms
- Duplicate frames
- MAC-table instability

STP logically blocks redundant paths while maintaining a loop-free topology.

---

# 59. Ethernet Frame

A simplified Ethernet frame contains:

- Destination MAC
- Source MAC
- EtherType/Length
- Payload
- Frame Check Sequence (FCS)

Conceptually:

```text
| Dest MAC | Src MAC | Type | Payload | FCS |
```

The payload commonly carries an IP packet.

---

# 60. IP Packet

A simplified IPv4 packet contains:

```text
IPv4 Header
+
Payload
```

Important IPv4 header fields:

- Version
- IHL
- DSCP/ECN
- Total Length
- Identification
- Flags
- Fragment Offset
- TTL
- Protocol
- Header Checksum
- Source IP
- Destination IP
- Options if present

The **Protocol** field indicates the next-layer protocol, such as:

```text
TCP
UDP
ICMP
```

---

# 61. IPv6 Header

IPv6 has a fixed base header.

Important fields:

- Version
- Traffic Class
- Flow Label
- Payload Length
- Next Header
- Hop Limit
- Source Address
- Destination Address

IPv6 uses:

**Hop Limit**

instead of IPv4's:

**TTL**

IPv6 does not use broadcast in the same way IPv4 does; multicast and Neighbor Discovery are used instead.

---

# 62. TCP Segment vs UDP Datagram

## TCP

```text
TCP Header
+
Application Data
```

## UDP

```text
UDP Header
+
Application Data
```

A TCP segment is carried inside an IP packet.

A UDP datagram is carried inside an IP packet.

---

# 63. Encapsulation

Example:

Application creates:

```text
HTTP message
```

Transport adds:

```text
TCP header
```

Network adds:

```text
IP header
```

Data Link adds:

```text
Ethernet header + FCS
```

Conceptually:

```text
Ethernet Frame
 └── IP Packet
      └── TCP Segment
           └── HTTP Data
```

---

# 64. Decapsulation

At the receiving host:

```text
Ethernet
   ↓
IP
   ↓
TCP
   ↓
HTTP
```

Each layer processes and removes its relevant headers.

---

# 65. Proxy vs Reverse Proxy

## Forward Proxy

Acts on behalf of clients.

```text
Client → Proxy → Internet
```

## Reverse Proxy

Acts on behalf of servers.

```text
Internet → Reverse Proxy → Backend
```

Common reverse-proxy functions:

- TLS termination
- Routing
- Load balancing
- Caching
- Authentication integration
- Request filtering

---

# 66. Load Balancer

A load balancer distributes requests across multiple backend targets.

Example:

```text
              Load Balancer
             /      |      \
            ↓       ↓       ↓
          App1    App2    App3
```

Benefits:

- Availability
- Scalability
- Load distribution
- Failure handling

Common strategies:

- Round robin
- Least connections
- Weighted routing
- Hash-based routing

---

# 67. CDN

Content Delivery Network.

A CDN caches/serves content from edge locations closer to users.

Example:

```text
User in India
     ↓
Nearby edge
     ↓
Cached content
```

Benefits:

- Lower latency
- Reduced origin load
- Better global content delivery
- DDoS absorption in some architectures

---

# 68. DHCP vs DNS vs ARP

Very common confusion.

| Protocol | Answers |
|---|---|
| DHCP | "What network configuration should I use?" |
| DNS | "What IP/record corresponds to this name?" |
| ARP | "What MAC corresponds to this IPv4 address on my LAN?" |

---

# 69. DNS vs DHCP

DNS:

```text
Name → Record/IP
```

DHCP:

```text
Client → Network configuration
```

They solve different problems.

---

# 70. Router vs Switch

## Switch

Primarily:

```text
MAC → local Layer 2 forwarding
```

## Router

Primarily:

```text
IP → Layer 3 forwarding between networks
```

---

# 71. Hub vs Switch

## Hub

Repeats traffic to connected ports.

## Switch

Learns MAC addresses and forwards frames selectively.

Therefore switches are much more efficient than hubs for normal Ethernet LANs.

---

# 72. Common Protocol + Port Cheat Sheet

Memorize these first:

```text
FTP      20/21 TCP
SSH      22 TCP
Telnet   23 TCP
SMTP     25 TCP
DNS      53 UDP/TCP
DHCP     67/68 UDP
TFTP     69 UDP
HTTP     80 TCP
POP3     110 TCP
NTP      123 UDP
IMAP     143 TCP
SNMP     161 UDP
HTTPS    443 TCP commonly
SMB      445 TCP
SMTP Submission 587 TCP
LDAPS    636 TCP
IMAPS    993 TCP
POP3S    995 TCP
```

---

# 73. Protocol-to-Scenario Recognition

| Scenario | Think |
|---|---|
| Translate domain to IP | DNS |
| Automatically obtain IP | DHCP |
| Find MAC for IPv4 local host | ARP |
| Secure remote administration | SSH |
| Normal web | HTTP |
| Secure web | HTTPS/TLS |
| Transfer email between servers | SMTP |
| Retrieve mail | IMAP/POP3 |
| Synchronize clocks | NTP |
| Network management | SNMP |
| Secure network-to-network connection | Site-to-site VPN |
| Secure employee remote connection | Remote-access VPN |
| Web-layer filtering | WAF |
| Detect suspicious traffic | IDS |
| Detect + block | IPS |
| Network traffic filtering | Firewall |
| Prevent Layer 2 loops | STP |
| Carry multiple VLANs | Trunk |
| One VLAN endpoint port | Access |
| Distribute traffic | Load balancer |
| Cache content near users | CDN |

---

# 74. Network Security: CIA Triad

## Confidentiality

Prevent unauthorized disclosure.

Example:

TLS encryption.

## Integrity

Prevent/detect unauthorized modification.

Example:

Cryptographic integrity checks.

## Availability

Keep service accessible.

Example:

DDoS protection and redundancy.

---

# 75. Authentication vs Authorization

### Authentication

```text
Who are you?
```

Examples:

- Password
- OTP
- Security key
- Biometric

### Authorization

```text
What are you allowed to do?
```

Example:

```text
User authenticated
↓
Can read database
Cannot delete database
```

---

# 76. MFA

Multi-Factor Authentication.

Factors:

```text
Something you know
Something you have
Something you are
```

Example:

```text
Password + Security Key
```

This is stronger than password-only authentication.

---

# 77. Least Privilege

Give identities only the permissions required.

Bad:

```text
Web application
↓
Administrator
```

Better:

```text
Web application
↓
Only required permissions
```

This reduces the blast radius if credentials are compromised.

---

# 78. Zero Trust

Core idea:

> **Do not automatically trust a user/device/network simply because it is inside a network.**

Principles:

- Verify identity
- Verify context
- Least privilege
- Continuous evaluation
- Segmentation

---

# 79. Defense in Depth

Use multiple layers:

```text
MFA
 ↓
IAM
 ↓
Firewall
 ↓
WAF
 ↓
Application validation
 ↓
Encryption
 ↓
Monitoring
```

If one control fails, other controls still provide protection.

---

# 80. Network Segmentation

Divide a network into security zones.

Example:

```text
Internet
   ↓
DMZ/Web
   ↓
Application
   ↓
Database
```

The database should not normally be directly exposed to the Internet.

Benefits:

- Limits lateral movement
- Reduces blast radius
- Controls access
- Improves security organization

---

# 81. VPN vs HTTPS

Do not confuse them.

### HTTPS

Protects application/web communication.

```text
Browser ↔ Web server
```

### VPN

Protects a broader network connection/tunnel.

```text
Device ↔ Private network
```

HTTPS does not automatically give the user access to a private network.

---

# 82. Firewall vs VPN

Firewall:

**Controls traffic**

VPN:

**Creates a protected tunnel/path**

They can be used together.

---

# 83. Common Real-World Troubleshooting Patterns

## Pattern 1 — Can ping IP but hostname fails

Think:

**DNS**

## Pattern 2 — Gets 169.254.x.x

Think:

**DHCP**

## Pattern 3 — Can reach LAN but not Internet

Check:

- Default gateway
- Route
- NAT
- Firewall
- DNS

## Pattern 4 — HTTPS doesn't work

Check:

- TCP 443
- Security/firewall rules
- Service listening
- TLS certificate
- Load balancer/reverse proxy
- Routing

## Pattern 5 — One application is slow

Check:

- Application
- Database
- CPU/memory
- Network latency
- Packet loss
- Downstream dependencies

Do not assume ping alone proves application health.

---

# 84. High-Return Header/Port/Layer Table

| Protocol | Layer | Typical Port | Key Header/Fields to Know |
|---|---|---:|---|
| HTTP | Application | 80/TCP | Method, path, Host, headers, body |
| HTTPS | Application + TLS | 443/TCP commonly | HTTP headers + TLS records/certificates |
| DNS | Application | 53/UDP,TCP | ID, flags, questions, answers |
| DHCP | Application | 67/68 UDP | Transaction ID, client/server addresses, options |
| TCP | Transport | Varies | Ports, sequence, ACK, flags, window, checksum |
| UDP | Transport | Varies | Source port, destination port, length, checksum |
| IPv4 | Network | — | Source/destination IP, TTL, protocol, flags |
| IPv6 | Network | — | Source/destination IP, hop limit, next header |
| Ethernet | Data Link | — | Source/destination MAC, EtherType, FCS |
| ARP | Link/network support | — | Sender/target IP and MAC |
| ICMP | Network | — | Type, code, checksum |

---

# 85. Critical "Don't Make This Mistake" List

### 1. DNS is not always UDP

DNS can use TCP too.

### 2. HTTPS is not always TCP

HTTP/3 uses QUIC over UDP.

### 3. Port identifies a service endpoint, not a machine

IP identifies the host/interface; port identifies a transport endpoint.

### 4. MAC addresses are not used for Internet-wide routing

Routers use IP routing.

### 5. ARP is for IPv4

IPv6 uses Neighbor Discovery.

### 6. UDP does not mean unreliable application

The protocol itself provides fewer reliability guarantees; the application can implement its own reliability.

### 7. 401 and 403 are different

401 → authentication problem/requirement.

403 → access forbidden.

### 8. NAT is not a complete firewall

NAT and firewalling are different functions, even though NAT can affect reachability.

### 9. Encryption and hashing are different

Encryption is designed to be reversible with appropriate keys.

Hashing is designed as a one-way transformation.

### 10. Authentication and authorization are different

Authentication → identity.

Authorization → permission.

---

# 86. Final Rapid Revision

Before attempting the Accenture scenario questions, you should be able to answer these immediately:

### Ports

```text
SSH       → 22
DNS       → 53
DHCP      → 67/68
HTTP      → 80
HTTPS     → 443
FTP       → 20/21
SMTP      → 25
NTP       → 123
IMAP      → 143
SNMP      → 161
SMB       → 445
```

### Protocol mapping

```text
Name → IP          DNS
IP configuration   DHCP
IPv4 → MAC         ARP
Remote shell       SSH
Web                HTTP
Secure web         HTTPS
Mail sending       SMTP
Time sync          NTP
Network management SNMP
```

### Security mapping

```text
Detect             IDS
Detect + block     IPS
Web protection     WAF
Traffic filtering  Firewall
Network tunnel     VPN
Multiple factors   MFA
Minimum access     Least privilege
No implicit trust  Zero Trust
Multiple layers    Defense in depth
```

### Networking mapping

```text
MAC forwarding     Switch
IP forwarding      Router
Layer 2 loops      STP
Multiple VLANs     Trunk
Single VLAN host   Access port
Private → Internet NAT
Traffic path       Route table
```

---

# 87. Study Rule

This document is intentionally more detailed than the previous basic MCQA file.

Do **not** memorize every header field equally.

### Tier 1 — Must know

- Ports
- TCP/UDP
- TCP handshake
- TCP flags
- DNS/DHCP/ARP
- NAT/PAT
- IP/subnet basics
- HTTP methods/status codes/headers/body
- OSI/TCP-IP mapping
- VLAN/access/trunk/STP
- Firewall/IDS/IPS/WAF
- VPN types
- Common attacks
- Authentication/authorization
- Encryption/hashing
- CIA
- Troubleshooting scenarios

### Tier 2 — Know conceptually

- IPv4/IPv6 headers
- TCP sequence/ACK/window
- TLS/certificates
- DNSSEC
- CDN
- Load balancers
- Proxy/reverse proxy
- RTO/RPO-related reliability concepts

### Tier 3 — Do not spend placement time on yet

- Deep BGP internals
- Advanced OSPF calculations
- Detailed cryptographic mathematics
- Deep packet-capture analysis
- Advanced enterprise firewall architectures

Your next step after this document is **Accenture-style Networking + Network Security scenario MCQs**. Once that is completed, move to **OOP**.
