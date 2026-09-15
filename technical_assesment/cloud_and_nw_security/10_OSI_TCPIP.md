# 10 — OSI Model + TCP/IP Model

## Accenture Technical Assessment — Topic Mastery Notes

### OSI Model

The **OSI (Open Systems Interconnection) model** is a conceptual 7-layer framework for understanding network communication.

**7 Application → 6 Presentation → 5 Session → 4 Transport → 3 Network → 2 Data Link → 1 Physical**

Mnemonic: **All People Seem To Need Data Processing**.

### Layer 7 — Application
Provides network services/interfaces used by applications.

Examples: HTTP/HTTPS, DNS, SMTP, FTP, SSH, DHCP.

**Trap:** HTTP is Application layer, not Transport.

### Layer 6 — Presentation
Deals with data representation: formatting/translation, encoding/decoding, encryption/decryption and compression/decompression.

Memory: **Presentation = how data looks**.

### Layer 5 — Session
Manages communication sessions: establishment, maintenance, synchronization and termination.

Modern Internet protocols do not always map to a separate Session layer; for exams learn its classic conceptual role.

### Layer 4 — Transport
Provides end-to-end transport between applications/processes.

Protocols: **TCP, UDP**.

Concepts: segmentation, ports, reliability, flow control, error recovery and connection management.

TCP is connection-oriented, reliable and ordered, with retransmission, flow control and congestion control.

UDP is connectionless with lower overhead and no built-in reliable ordered delivery.

PDU: **TCP segment; UDP datagram**.

### Layer 3 — Network
Provides logical addressing and routing between networks.

Examples: IPv4, IPv6, ICMP.

Key device: **Router**.

Key address: **IP address**.

PDU: **Packet**.

Memory: **Network = IP + routing**.

### Layer 2 — Data Link
Provides local/link delivery.

Concepts: frames, MAC addresses, error detection, media access control.

Typical devices: **Switch, bridge**.

PDU: **Frame**.

Memory: **Data Link = MAC + Frame + Switch**.

### Layer 1 — Physical
Transmits raw bits using electrical, optical or radio signals.

Examples: copper, fiber and physical wireless signaling.

PDU: **Bits**.

Memory: **Physical = bits + signals**.

---

## OSI Summary

| Layer | Name | Main Function | PDU | Key Concept | Typical Device |
|---:|---|---|---|---|---|
| 7 | Application | Network services | Data | Application protocols | — |
| 6 | Presentation | Representation | Data | Format/encryption/compression | — |
| 5 | Session | Session management | Data | Sessions | — |
| 4 | Transport | End-to-end transport | Segment/Datagram | Ports | — |
| 3 | Network | Routing/logical addressing | Packet | IP | Router |
| 2 | Data Link | Local/link delivery | Frame | MAC | Switch/Bridge |
| 1 | Physical | Signal transmission | Bits | Signals/media | Hub/Repeater |

## Encapsulation

As data moves down the stack:

**Data → Segment → Packet → Frame → Bits**

Transport adds transport information, Network adds IP information, Data Link adds frame information, and Physical transmits the resulting bits/signals.

The reverse process at the receiver is **decapsulation**.

### Addressing

- **Layer 4:** Port number — identifies an application/process endpoint.
- **Layer 3:** IP address — logical addressing/routing.
- **Layer 2:** MAC address — local link/interface addressing.

Memory: **Port → IP → MAC** = Which application? → Which host/network? → Which local interface?

---

# TCP/IP Model

A commonly taught TCP/IP model has **4 layers**:

1. Application
2. Transport
3. Internet
4. Network Access / Link

### TCP/IP Application
Combines responsibilities commonly represented by **OSI Layers 5, 6 and 7**.

Examples: HTTP/HTTPS, DNS, SMTP, FTP, SSH, DHCP.

### TCP/IP Transport
Corresponds broadly to **OSI Layer 4**.

Examples: TCP, UDP. Uses port numbers and provides end-to-end transport.

### TCP/IP Internet
Corresponds broadly to **OSI Layer 3**.

Examples: IPv4, IPv6, ICMP. Handles logical addressing and routing.

### TCP/IP Network Access / Link
Combines responsibilities commonly represented by **OSI Layers 1 and 2**.

Examples: Ethernet and Wi-Fi link/physical mechanisms.

---

# OSI ↔ TCP/IP Mapping

| OSI | TCP/IP |
|---|---|
| 7 Application | Application |
| 6 Presentation | Application |
| 5 Session | Application |
| 4 Transport | Transport |
| 3 Network | Internet |
| 2 Data Link | Network Access/Link |
| 1 Physical | Network Access/Link |

Memory: **TCP/IP Application = OSI 5–7; Transport = 4; Internet = 3; Link = 1–2.**

## OSI vs TCP/IP

| OSI | TCP/IP |
|---|---|
| 7 layers | Commonly 4 layers |
| Conceptual/reference framework | Practical Internet protocol model |
| Session and Presentation are separate | Generally incorporated into Application |
| Physical and Data Link are separate | Often combined as Link/Network Access |
| Protocol-independent conceptual model | Closely associated with Internet protocols |

Do not say OSI is “useless.” It remains useful for learning, troubleshooting and exams.

---

# Protocol Mapping

| Protocol/Technology | OSI | TCP/IP |
|---|---|---|
| HTTP/HTTPS | 7 | Application |
| DNS | 7 | Application |
| DHCP | 7 | Application |
| SMTP | 7 | Application |
| FTP | 7 | Application |
| SSH | 7 | Application |
| TCP | 4 | Transport |
| UDP | 4 | Transport |
| IPv4 | 3 | Internet |
| IPv6 | 3 | Internet |
| ICMP | 3 | Internet |
| Ethernet | 2/1 | Link |
| Wi-Fi | 2/1 | Link |
| ARP | L2/L3 boundary concept | Link/Network Access |

**ARP nuance:** ARP does not fit perfectly into the OSI model. For exams it is commonly associated with Layer 2 because it resolves IPv4 addresses to link-layer MAC addresses.

---

# Device Mapping

**Hub → Layer 1**: repeats signals.

**Switch → Layer 2**: normally forwards frames using MAC addresses.

**Router → Layer 3**: forwards packets using IP addresses/routing information.

Firewalls can operate at multiple layers depending on their type.

High ROI: **Hub L1, Switch L2, Router L3**.

---

# TCP/IP Request Story

For `https://example.com`:

1. **Application:** Browser generates an HTTPS request.
2. **Transport:** TCP adds source/destination ports → segment.
3. **Internet:** IP adds source/destination IP addresses → packet.
4. **Link:** Ethernet/Wi-Fi adds local link information → frame.
5. **Physical:** Frame is transmitted as signals/bits.

Final sequence: **Data → Segment → Packet → Frame → Bits**.

---

# Switching vs Routing

**Switching:** primarily Layer 2, uses MAC addresses, mainly within a local network.

**Routing:** Layer 3, uses IP addresses, connects different networks.

A router/L3 device is normally required for communication between different IP subnets.

---

# Collision vs Broadcast Domain

**Collision domain:** area where simultaneous transmissions could interfere. Modern switched full-duplex Ethernet largely eliminates traditional collision concerns on individual switch ports.

**Broadcast domain:** Layer 2 area over which a broadcast is propagated.

**VLAN:** creates a separate logical Layer 2 broadcast domain. Communication between different VLANs/subnets requires Layer 3 routing.

---

# Common MCQ Traps

1. Router = Layer 2 → **False; primarily Layer 3.**
2. Normal Layer 2 switch forwards using IP → **False; MAC addresses.**
3. TCP = Layer 3 → **False; Layer 4.**
4. IP = Layer 4 → **False; Layer 3.**
5. HTTP = Transport → **False; Application.**
6. Frame = Network PDU → **False; Data Link.**
7. Packet = Data Link PDU → **False; Network.**
8. Bits = Transport → **False; Physical.**
9. OSI and TCP/IP have the same number of layers → **False.**
10. TCP/IP Application is only OSI Layer 7 → **False; commonly combines OSI 5–7.**
11. TCP is always “faster” than UDP → **False; they provide different mechanisms and performance depends on the application/network.**

---

# Accenture-Style Practice Questions

1. How many layers are in OSI? **7**
2. How many layers are in the commonly taught TCP/IP model? **4**
3. Which OSI layer handles routing? **Network**
4. Which layer uses IP addresses? **Network**
5. Which layer uses MAC addresses? **Data Link**
6. Which layer uses port numbers? **Transport**
7. TCP belongs to which layer? **Transport**
8. UDP belongs to which layer? **Transport**
9. IP belongs to which layer? **Network**
10. HTTP belongs to which layer? **Application**
11. DNS belongs to which layer? **Application**
12. Ethernet framing belongs primarily to which layer? **Data Link**
13. Raw bits/signals belong to which layer? **Physical**
14. TCP PDU? **Segment**
15. UDP PDU? **Datagram**
16. Network-layer PDU? **Packet**
17. Data-link PDU? **Frame**
18. Physical-layer PDU? **Bits**
19. What is encapsulation? **Adding protocol headers/trailers as data moves down the stack.**
20. What is decapsulation? **Removing protocol information as data moves up the stack.**
21. Primarily Layer 1 device? **Hub**
22. Primarily Layer 2 device? **Switch**
23. Primarily Layer 3 device? **Router**
24. Which OSI layers map to TCP/IP Application? **5, 6, 7**
25. Which OSI layer maps to TCP/IP Internet? **3**
26. Which OSI layer maps to TCP/IP Transport? **4**
27. Which OSI layers map to TCP/IP Link? **1, 2**
28. Which layer handles logical addressing? **Network**
29. Which layer handles local/link delivery? **Data Link**
30. Which layer handles end-to-end application transport? **Transport**
31. What does TCP provide that UDP does not provide by itself? **Reliable ordered delivery**
32. Which protocol is connectionless? **UDP**
33. Which protocol is connection-oriented? **TCP**
34. What creates a separate logical Layer 2 broadcast domain? **VLAN**
35. What device normally connects different IP networks? **Router**
36. Which address is used for local Ethernet delivery? **MAC**
37. Which address is used for logical routing? **IP**
38. What identifies an application/process endpoint? **Port number**
39. Encapsulation sequence? **Data → Segment → Packet → Frame → Bits**
40. Main OSI vs TCP/IP difference? **OSI is a 7-layer conceptual reference model; TCP/IP is a practical Internet protocol model commonly taught with 4 layers.**

---

# Rapid Revision Sheet

## OSI

**7 Application** → HTTP, DNS, SMTP, FTP, SSH

**6 Presentation** → format, encryption, compression

**5 Session** → session management

**4 Transport** → TCP, UDP, ports

**3 Network** → IP, routing, packets

**2 Data Link** → MAC, frames, switches

**1 Physical** → bits, signals, media

### PDU

**L7–L5 → Data**

**L4 → Segment/Datagram**

**L3 → Packet**

**L2 → Frame**

**L1 → Bits**

## TCP/IP

**Application → OSI 5–7**

**Transport → OSI 4**

**Internet → OSI 3**

**Link → OSI 1–2**

---

# Memory Hooks

**OSI top-down:** A P S T N D P

**All People Seem To Need Data Processing**

**Addressing:** Port → IP → MAC

**Encapsulation:** Data → Segment → Packet → Frame → Bits

**Devices:** Hub → Switch → Router = L1 → L2 → L3

---

# Completion Checklist

- [ ] OSI 7 layers
- [ ] Function of every OSI layer
- [ ] PDU names
- [ ] Port/IP/MAC addressing
- [ ] Encapsulation/decapsulation
- [ ] TCP vs UDP
- [ ] TCP/IP 4 layers
- [ ] OSI ↔ TCP/IP mapping
- [ ] Protocol mapping
- [ ] Hub/Switch/Router mapping
- [ ] Switching vs routing
- [ ] Collision/broadcast domains
- [ ] VLAN concept
- [ ] MCQ traps
- [ ] Scenario recognition
- [ ] HTTPS journey through the stack

# Final High-ROI Memorization

**OSI = 7 layers**

**TCP/IP commonly taught = 4 layers**

**L7 Application**

**L6 Presentation**

**L5 Session**

**L4 Transport**

**L3 Network**

**L2 Data Link**

**L1 Physical**

**TCP/UDP = L4**

**IP = L3**

**MAC = L2**

**Bits = L1**

**HTTP/DNS = L7**

**Hub = L1**

**Switch = L2**

**Router = L3**

**Data → Segment → Packet → Frame → Bits**

**TCP/IP Application = OSI 5–7**

**TCP/IP Transport = OSI 4**

**TCP/IP Internet = OSI 3**

**TCP/IP Link = OSI 1–2**
