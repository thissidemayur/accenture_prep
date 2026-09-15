# 11 — TCP vs UDP

## Accenture Technical Assessment — Topic Mastery Notes

---

# 1. TCP — Transmission Control Protocol

## Exam-Ready Definition

**TCP (Transmission Control Protocol)** is a connection-oriented transport-layer protocol that provides reliable, ordered delivery of data between applications using mechanisms such as acknowledgments, sequence numbers, retransmissions, flow control and congestion control.

### Real-Life Analogy

TCP is like sending a valuable parcel with tracking:

> Send → receiver confirms → missing parcel is sent again → parcels are delivered in the correct order.

### OSI / TCP-IP Layer

**OSI:** Layer 4 — Transport  
**TCP/IP:** Transport layer

---

# 2. UDP — User Datagram Protocol

## Exam-Ready Definition

**UDP (User Datagram Protocol)** is a connectionless transport-layer protocol that provides a lightweight, low-overhead way to send datagrams without built-in reliable, ordered delivery, retransmission, or TCP-style flow/congestion control.

### Real-Life Analogy

UDP is like sending postcards:

> Send them quickly without waiting for confirmation.

Some may arrive late, out of order, or not arrive at all.

### OSI / TCP-IP Layer

**OSI:** Layer 4 — Transport  
**TCP/IP:** Transport layer

---

# 3. TCP vs UDP — Core Comparison

| Feature | TCP | UDP |
|---|---|---|
| Full form | Transmission Control Protocol | User Datagram Protocol |
| Layer | Transport | Transport |
| Connection | Connection-oriented | Connectionless |
| Reliability | Yes | No built-in reliability |
| Ordering | Yes | No built-in ordering |
| Retransmission | Yes | No built-in retransmission |
| Acknowledgment | Yes | No TCP-style ACK |
| Flow control | Yes | No TCP-style flow control |
| Congestion control | Yes | No TCP-style congestion control |
| Overhead | Higher | Lower |
| Data unit | Segment | Datagram |
| Handshake | TCP 3-way handshake | No connection handshake |
| Typical use | Reliable data transfer | Low-overhead / real-time-oriented communication |

---

# 4. TCP Connection Establishment

TCP normally establishes a connection using the **three-way handshake**.

## Step 1 — SYN

Client → Server:

**SYN**

The client requests synchronization/connection establishment.

## Step 2 — SYN-ACK

Server → Client:

**SYN + ACK**

The server acknowledges the request and sends its own synchronization information.

## Step 3 — ACK

Client → Server:

**ACK**

The client acknowledges the server.

### Memory Hook

**SYN → SYN-ACK → ACK**

### Exam Question

How many steps are in the TCP three-way handshake?

**Answer: 3**

---

# 5. TCP Connection Termination

TCP connection termination commonly uses a FIN/ACK exchange.

A simplified normal close can involve:

1. FIN
2. ACK
3. FIN
4. ACK

### Important

Do not confuse:

**3-way handshake = connection establishment**

with

**connection termination = commonly a four-segment FIN/ACK exchange**

---

# 6. TCP Reliability

TCP provides reliability through several mechanisms.

## Sequence Numbers

TCP numbers transmitted data so the receiver can identify:

- Ordering
- Missing data
- Duplicate data

## Acknowledgments

The receiver acknowledges received data.

## Retransmission

If data is considered lost, TCP can retransmit it.

## Checksum

TCP includes a checksum for error detection.

## Ordered Delivery

TCP reassembles data in the correct order before delivering the byte stream to the application.

---

# 7. TCP Flow Control

**Flow control** prevents a fast sender from overwhelming a slower receiver.

TCP uses a **receive window** mechanism.

### Example

If the receiver can currently handle only a limited amount of additional data, it advertises an appropriate receive window.

### Memory

**Flow control = Protect the receiver**

---

# 8. TCP Congestion Control

**Congestion control** attempts to prevent the sender from overwhelming the network.

It reacts to network conditions such as packet loss and changing delivery behavior.

### Memory

**Congestion control = Protect the network**

### Very Important Comparison

**Flow control → receiver**

**Congestion control → network**

This is a high-value MCQ distinction.

---

# 9. TCP Byte Stream

TCP provides a **reliable byte stream** rather than preserving application message boundaries.

Suppose an application sends:

`HELLO`

then:

`WORLD`

TCP does not guarantee that the receiver will read exactly those two application writes as two separate reads.

It provides an ordered stream of bytes.

### Exam Trap

TCP is **stream-oriented**, not message-oriented.

---

# 10. UDP Datagram Model

UDP preserves the boundaries of individual datagrams.

If an application sends separate UDP datagrams, each datagram is independently handled.

UDP does not provide TCP's built-in mechanisms for:

- Reliable delivery
- Ordering
- Retransmission
- Flow control
- Congestion control

### Important

An application can implement its own reliability above UDP if required.

---

# 11. TCP Ports

TCP uses source and destination **port numbers** to identify application/process endpoints.

Examples:

- HTTP: TCP 80
- HTTPS: commonly TCP 443
- SSH: TCP 22
- FTP: TCP 20/21
- SMTP: TCP 25

### Memory

**IP identifies the host/interface logically.**

**Port identifies the application/process endpoint.**

---

# 12. UDP Ports

UDP also uses source and destination port numbers.

Examples:

- DNS: commonly UDP 53
- DHCP: UDP 67/68
- TFTP: UDP 69
- SNMP: UDP 161/162
- NTP: UDP 123

### Important Nuance

Some protocols can use both TCP and UDP depending on the protocol/version/use case.

Do not memorize every protocol as permanently restricted to only one transport unless the protocol definition requires it.

---

# 13. When TCP Is Preferred

TCP is preferred when the application needs reliable, ordered delivery.

Examples include:

- Web traffic using HTTP/1.1 or HTTP/2
- SSH
- FTP
- SMTP
- IMAP
- Many database connections

### Reason

If data is missing or reordered, TCP handles the transport-level recovery.

---

# 14. When UDP Is Preferred

UDP is useful when low protocol overhead, datagram semantics, or application-controlled delivery behavior is desirable.

Examples/use cases include:

- DNS queries
- DHCP
- NTP
- VoIP
- Online gaming
- Real-time media
- Some streaming applications
- QUIC transport

### Why?

For some real-time applications, waiting for retransmission of old data can be worse than continuing with newer data.

### Important

Do NOT say:

**UDP is always faster than TCP.**

Correct idea:

**UDP has lower transport overhead and does not perform TCP's reliability/connection mechanisms, but actual application performance depends on the protocol, network and implementation.**

---

# 15. QUIC — Important Modern Connection

**QUIC** is a modern transport protocol built over UDP.

It provides features such as:

- Reliable delivery
- Encryption through TLS integration
- Stream multiplexing
- Connection migration

HTTP/3 uses QUIC.

### Critical Exam Trap

**HTTP/3 is not simply HTTP over TCP.**

HTTP/3 uses:

**HTTP/3 → QUIC → UDP**

### Compare

HTTP/1.1 / HTTP/2 commonly:

**HTTP → TCP → IP**

HTTP/3:

**HTTP → QUIC → UDP → IP**

---

# 16. TCP Header — High-ROI Fields

Important TCP header fields include:

- Source Port
- Destination Port
- Sequence Number
- Acknowledgment Number
- Header Length
- Flags
- Receive Window
- Checksum
- Urgent Pointer
- Options

### Important TCP Flags

**SYN** — synchronize / establish connection

**ACK** — acknowledgment

**FIN** — graceful termination

**RST** — reset connection

**PSH** — push data toward application

**URG** — urgent pointer significant

### Must Memorize

**SYN = Start**

**ACK = Acknowledge**

**FIN = Finish**

**RST = Reset**

---

# 17. UDP Header — High-ROI Fields

UDP has a much smaller header.

The four main UDP header fields are:

1. Source Port
2. Destination Port
3. Length
4. Checksum

### Key Difference

TCP has a substantially more feature-rich header because it implements connection management and reliability mechanisms.

UDP keeps its transport header simple.

---

# 18. TCP vs UDP Header

| TCP | UDP |
|---|---|
| Larger/more complex header | Smaller/simple header |
| Sequence numbers | No TCP-style sequence numbers |
| ACK numbers | No TCP-style ACK numbers |
| Receive window | No TCP-style receive window |
| Many control flags | No TCP-style flags |
| More transport mechanisms | Minimal transport mechanisms |

### Common MCQ

Which protocol has a simpler header?

**Answer: UDP**

---

# 19. TCP Three-Way Handshake Story

Imagine calling a friend.

### Client

> "Can we start talking?" — SYN

### Server

> "Yes, I heard you. I am ready too." — SYN-ACK

### Client

> "Confirmed." — ACK

Now the TCP connection is established.

### Memory

**SYN → SYN-ACK → ACK**

---

# 20. TCP Reliability Story

Imagine sending pages of a document.

You send:

`Page 1`

`Page 2`

`Page 3`

Receiver confirms receipt.

If Page 2 is missing:

> "I didn't receive Page 2."

TCP retransmits it.

The receiver can then reconstruct the ordered byte stream.

### UDP

You send the pages without requiring TCP-style acknowledgment/retransmission.

---

# 21. TCP Flow Control vs Congestion Control

This distinction is extremely important.

### Flow Control

Problem:

**Sender is too fast for receiver.**

Solution:

TCP uses receiver-advertised window information.

### Congestion Control

Problem:

**Network is becoming overloaded.**

Solution:

TCP adjusts sending behavior according to network congestion signals.

### Memory Hook

**Flow = Friend/receiver**

**Congestion = Network traffic**

---

# 22. TCP vs UDP Decision Rule

Ask one question:

> **Does the application require TCP-level reliable, ordered delivery?**

### YES

Consider **TCP**.

Examples:

- SSH
- Traditional web traffic
- Email transfer
- FTP

### NO / Application wants low overhead or its own delivery strategy

Consider **UDP**.

Examples:

- DNS
- DHCP
- VoIP
- Gaming
- Real-time media

### Modern exception

Some applications use **QUIC over UDP** to get reliable transport features without using TCP.

---

# 23. Common Accenture MCQ Traps

### Trap 1

**TCP is connectionless.**

Wrong.

TCP is connection-oriented.

### Trap 2

**UDP guarantees packet delivery.**

Wrong.

UDP does not provide built-in reliable delivery.

### Trap 3

**UDP has no checksum.**

Wrong.

UDP includes a checksum.

### Trap 4

**TCP always delivers application messages exactly as sent.**

Wrong.

TCP provides a byte stream, not message boundaries.

### Trap 5

**UDP is always faster.**

Wrong.

It has lower protocol overhead, but real performance depends on the application and network.

### Trap 6

**TCP has no flow control.**

Wrong.

TCP has flow control.

### Trap 7

**Flow control and congestion control are identical.**

Wrong.

Flow control protects the receiver.

Congestion control manages network overload.

### Trap 8

**TCP uses a two-way handshake.**

Wrong.

The classic connection establishment is a three-way handshake.

### Trap 9

**TCP uses FIN to start a connection.**

Wrong.

SYN is used for connection establishment; FIN is used for graceful termination.

### Trap 10

**RST is the normal graceful close mechanism.**

Wrong.

FIN is associated with graceful termination; RST abruptly resets a connection.

### Trap 11

**HTTP/3 uses TCP.**

Wrong.

HTTP/3 uses QUIC over UDP.

### Trap 12

**UDP cannot ever be reliable.**

Too absolute.

UDP itself does not provide TCP-style reliability, but an application/protocol built over UDP can implement reliability.

---

# 24. Scenario Recognition

### Scenario A

A banking transaction requires reliable, ordered transport.

**Answer: TCP**

### Scenario B

A DNS client sends a typical DNS query.

**Answer: UDP is commonly used**

### Scenario C

A VoIP application prioritizes timely delivery over retransmitting old audio.

**Answer: UDP is commonly suitable**

### Scenario D

A client wants to establish a TCP connection.

First TCP flag?

**Answer: SYN**

### Scenario E

Server responds to a TCP SYN.

**Answer: SYN-ACK**

### Scenario F

Client completes the handshake.

**Answer: ACK**

### Scenario G

A receiver is slower than the sender.

Which TCP mechanism addresses this?

**Answer: Flow control**

### Scenario H

The network is overloaded.

Which TCP mechanism addresses this?

**Answer: Congestion control**

### Scenario I

A TCP segment is missing.

What mechanism can recover it?

**Answer: Retransmission**

### Scenario J

An application needs HTTP/3.

What transport does HTTP/3 use?

**Answer: QUIC over UDP**

---

# 25. Accenture-Style Practice Questions

## Q1
What does TCP stand for?

**Answer: Transmission Control Protocol**

## Q2
What does UDP stand for?

**Answer: User Datagram Protocol**

## Q3
Which OSI layer contains TCP and UDP?

**Answer: Transport Layer**

## Q4
Is TCP connection-oriented?

**Answer: Yes**

## Q5
Is UDP connection-oriented?

**Answer: No**

## Q6
Which protocol provides reliable ordered delivery?

**Answer: TCP**

## Q7
Which protocol provides no built-in reliable delivery?

**Answer: UDP**

## Q8
Which protocol uses a three-way handshake?

**Answer: TCP**

## Q9
What is the TCP handshake sequence?

**Answer: SYN → SYN-ACK → ACK**

## Q10
Which TCP flag initiates connection establishment?

**Answer: SYN**

## Q11
Which TCP flag acknowledges?

**Answer: ACK**

## Q12
Which TCP flag is associated with graceful termination?

**Answer: FIN**

## Q13
Which TCP flag resets a connection?

**Answer: RST**

## Q14
What is TCP's transport PDU commonly called?

**Answer: Segment**

## Q15
What is UDP's transport PDU commonly called?

**Answer: Datagram**

## Q16
Which protocol provides flow control?

**Answer: TCP**

## Q17
What does TCP flow control protect?

**Answer: Receiver**

## Q18
What does congestion control manage?

**Answer: Network congestion**

## Q19
Does UDP provide TCP-style retransmission?

**Answer: No**

## Q20
Does UDP have a checksum field?

**Answer: Yes**

## Q21
Which protocol generally has lower transport overhead?

**Answer: UDP**

## Q22
Which protocol provides ordered byte-stream delivery?

**Answer: TCP**

## Q23
Does TCP preserve application message boundaries?

**Answer: No**

## Q24
Which protocol preserves individual datagram boundaries?

**Answer: UDP**

## Q25
Which protocol is commonly used for SSH?

**Answer: TCP**

## Q26
Which transport is commonly used for traditional HTTP/1.1?

**Answer: TCP**

## Q27
Which transport is commonly used for DNS queries?

**Answer: UDP**

## Q28
Which protocol is commonly used for DHCP?

**Answer: UDP**

## Q29
What does HTTP/3 use?

**Answer: QUIC over UDP**

## Q30
What protocol does QUIC run over?

**Answer: UDP**

## Q31
Is QUIC reliable?

**Answer: Yes, QUIC provides reliable transport features**

## Q32
Does UDP itself provide TCP-style reliability?

**Answer: No**

## Q33
Can an application build reliability over UDP?

**Answer: Yes**

## Q34
Which mechanism detects/recovers missing TCP data?

**Answer: Acknowledgments and retransmission**

## Q35
Which TCP mechanism numbers data for ordering?

**Answer: Sequence numbers**

## Q36
Which TCP field tells the sender how much data the receiver can accept?

**Answer: Receive window**

## Q37
What is the primary difference between flow and congestion control?

**Answer: Flow control protects the receiver; congestion control manages network overload**

## Q38
Which protocol is better suited to applications where old data arriving late may be useless?

**Answer: UDP is often suitable**

## Q39
Which protocol generally has more overhead?

**Answer: TCP**

## Q40
What is the simplest TCP vs UDP rule?

**Answer: TCP provides built-in reliable ordered transport; UDP provides lightweight connectionless datagrams without those TCP guarantees**

---

# 26. Rapid Revision Sheet

## TCP

**Connection-oriented**

**Reliable**

**Ordered**

**Byte stream**

**3-way handshake**

**SYN → SYN-ACK → ACK**

**ACK**

**Sequence numbers**

**Retransmission**

**Flow control**

**Congestion control**

**FIN = graceful close**

**RST = reset**

**PDU = Segment**

---

## UDP

**Connectionless**

**Lightweight**

**Datagram-based**

**No built-in reliable delivery**

**No built-in ordering**

**No TCP-style retransmission**

**No TCP-style flow control**

**No TCP-style congestion control**

**PDU = Datagram**

**Checksum exists**

---

# 27. TCP/IP Stack Connection

Remember:

**Application**

↓

**TCP / UDP**

↓

**IP**

↓

**Ethernet / Wi-Fi**

Therefore:

**TCP and UDP = Transport layer**

**IP = Internet/Network layer**

**Ethernet/Wi-Fi = Link/Data Link + Physical functions**

---

# 28. Final High-ROI Memorization

**TCP = Reliable + Ordered + Connection-oriented**

**UDP = Lightweight + Connectionless + Datagram**

**TCP handshake = SYN → SYN-ACK → ACK**

**TCP PDU = Segment**

**UDP PDU = Datagram**

**TCP = Sequence + ACK + Retransmission**

**TCP flow control = Receiver**

**TCP congestion control = Network**

**FIN = Graceful close**

**RST = Reset**

**UDP has a checksum**

**TCP = Byte stream**

**UDP = Datagram boundaries**

**HTTP/3 = QUIC over UDP**

**QUIC = Modern transport over UDP**

**UDP is not automatically "faster"; it has lower transport overhead**

---

# 29. Completion Checklist

- [ ] TCP definition
- [ ] UDP definition
- [ ] TCP vs UDP core differences
- [ ] OSI/TCP-IP transport layer
- [ ] TCP three-way handshake
- [ ] TCP termination
- [ ] SYN/ACK/FIN/RST
- [ ] TCP sequence numbers
- [ ] TCP acknowledgments
- [ ] TCP retransmission
- [ ] TCP flow control
- [ ] TCP congestion control
- [ ] TCP byte-stream behavior
- [ ] UDP datagram behavior
- [ ] TCP/UDP ports
- [ ] TCP header fields
- [ ] UDP header fields
- [ ] TCP use cases
- [ ] UDP use cases
- [ ] QUIC
- [ ] HTTP/3
- [ ] Common MCQ traps
- [ ] Scenario recognition
- [ ] Practice questions
- [ ] Rapid revision

---

# FINAL ONE-MINUTE REVISION

If you remember only this:

**TCP**

> Connection → Handshake → Reliable → Ordered → ACK → Retransmit → Flow control → Congestion control

**UDP**

> No connection → Low overhead → Datagram → No built-in reliability/order/retransmission

**Handshake**

> SYN → SYN-ACK → ACK

**Termination**

> FIN/ACK exchange

**Flow vs Congestion**

> Flow = receiver  
> Congestion = network

**PDU**

> TCP = Segment  
> UDP = Datagram

**Modern**

> HTTP/3 = QUIC → UDP
