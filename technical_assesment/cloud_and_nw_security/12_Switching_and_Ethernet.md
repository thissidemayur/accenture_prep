# 12 — Switching & Ethernet Fundamentals

## Accenture Technical Assessment — Topic Mastery Notes

---

# 1. Ethernet

## Exam-Ready Definition

**Ethernet** is a family of wired networking technologies used primarily for communication over local area networks (LANs). It defines important Layer 2 framing and addressing behavior and has physical-layer specifications for transmitting data over network media.

### Real-Life Analogy

Think of a college campus road system:

- **Ethernet frame** = the parcel being delivered
- **MAC address** = local destination identity
- **Switch** = local traffic controller
- **Cable/fiber** = road carrying the signal

### OSI Mapping

Ethernet spans aspects of:

- **Layer 2 — Data Link**
- **Layer 1 — Physical**

For most MCQs, Ethernet framing/MAC addressing is associated with **Layer 2**.

---

# 2. What Is a Switch?

## Exam-Ready Definition

A **network switch** is a Layer 2 networking device that forwards Ethernet frames within a LAN based primarily on destination MAC addresses.

### Core Job

```text
Receive Frame
      ↓
Read Destination MAC
      ↓
Look in MAC Address Table
      ↓
Forward / Flood
```

### Key Memory

**Switch → MAC → Frame → Layer 2**

---

# 3. Switch vs Hub

This is a very common exam comparison.

| Feature | Hub | Switch |
|---|---|---|
| Main Layer | Layer 1 | Layer 2 |
| Data unit | Bits/signals | Frames |
| Uses MAC table | No | Yes |
| Intelligent forwarding | No | Yes |
| Typical forwarding | Repeats to ports | Selective forwarding |
| Collision domains | Shared | Each port typically separate |
| Duplex | Traditionally half-duplex | Commonly full-duplex |

### Simple Difference

**Hub:** "Send this signal everywhere."

**Switch:** "I know which port leads to that MAC address."

---

# 4. MAC Address

## Exam-Ready Definition

A **MAC (Media Access Control) address** is a link-layer address used for local network communication.

A typical Ethernet MAC address is **48 bits**, commonly written as six hexadecimal octets.

Example:

```text
00:1A:2B:3C:4D:5E
```

### Important

MAC addresses operate at the **Data Link layer**.

IP addresses operate at the **Network layer**.

### Memory

**MAC = Local/link identity**

**IP = Logical/network identity**

---

# 5. MAC Address Table

A switch maintains a table that maps:

```text
MAC Address → Switch Port
```

Example:

| MAC Address | Port |
|---|---|
| AA:AA:AA:AA:AA:01 | Port 1 |
| BB:BB:BB:BB:BB:02 | Port 2 |
| CC:CC:CC:CC:CC:03 | Port 3 |

The switch uses this table to make forwarding decisions.

---

# 6. How a Switch Learns MAC Addresses

A switch learns from the **source MAC address** of incoming Ethernet frames.

Example:

```text
Frame arrives on Port 1

Source MAC = AA:AA:AA:AA:AA:01
```

The switch learns:

```text
AA:AA:AA:AA:AA:01 → Port 1
```

### High-ROI Trap

A switch learns the **source MAC**, not the destination MAC, from an incoming frame.

---

# 7. Unknown Unicast

Suppose the switch receives a frame whose destination MAC is not in its MAC table.

What does it do?

It generally **floods the frame out relevant ports except the incoming port**.

Example:

```text
        Switch
       /   |        PC-A PC-B PC-C

Destination MAC unknown
       ↓
Flood to PC-B and PC-C
```

When the destination responds, the switch can learn its source MAC and improve the table.

### Important

This is called **unknown-unicast flooding**.

---

# 8. Known Unicast

If the destination MAC exists in the MAC table:

```text
Destination MAC → Port 3
```

the switch forwards the frame specifically toward Port 3.

It does not normally send the unicast frame to every port.

### Memory

**Known destination → Forward**

**Unknown destination → Flood**

---

# 9. Broadcast Frames

Ethernet broadcasts use:

```text
FF:FF:FF:FF:FF:FF
```

A switch normally floods a broadcast frame throughout the relevant Layer 2 broadcast domain, except back out the incoming port.

### Example

ARP requests commonly use Layer 2 broadcast behavior.

---

# 10. Unicast, Broadcast and Multicast

### Unicast

One sender → one receiver.

Example:

```text
PC-A → PC-B
```

### Broadcast

One sender → all devices in the relevant broadcast domain.

Example:

```text
ARP Request
```

### Multicast

One sender → a subscribed/group of receivers.

### Memory

**Uni = One**

**Broadcast = Everyone in the broadcast domain**

**Multi = Group**

---

# 11. Ethernet Frame

An Ethernet frame is the Layer 2 data unit used to carry higher-layer information.

A simplified Ethernet frame contains:

```text
Destination MAC
Source MAC
Type/Length
Payload
FCS
```

### Important Fields

**Destination MAC**

Identifies the local Layer 2 destination.

**Source MAC**

Identifies the sender at Layer 2.

**EtherType**

Can indicate the encapsulated network-layer protocol, such as IPv4 or IPv6.

**Payload**

Carries higher-layer data.

**FCS**

Frame Check Sequence used for error detection.

---

# 12. FCS — Frame Check Sequence

The **FCS** is used for detecting errors in an Ethernet frame.

It is based on a CRC calculation.

### Exam Trap

FCS provides **error detection**, not guaranteed error correction.

If a frame is corrupted, Ethernet does not generally repair the frame itself.

Higher-layer protocols may provide recovery when needed.

---

# 13. Ethernet Frame Size

Traditional Ethernet commonly uses a frame size of approximately:

**64 to 1518 bytes**, excluding certain modern extensions such as VLAN tagging and jumbo frames.

### Important

Do not confuse:

**Ethernet frame size**

with

**IP packet size**

or

**TCP segment size**.

They are different protocol data units.

### Exam Tip

If an exam asks for the traditional Ethernet maximum frame size:

**1518 bytes**

is the classic answer.

---

# 14. MTU

**MTU (Maximum Transmission Unit)** is the largest IP packet size that can normally be carried in a network-layer payload over a particular link without fragmentation at that link.

For standard Ethernet, the common IP MTU is:

**1500 bytes**

### Critical Difference

Traditional Ethernet maximum frame:

**1518 bytes**

Standard Ethernet IP MTU:

**1500 bytes**

Why?

The Ethernet frame includes its own Layer 2 header/trailer around the IP packet.

---

# 15. Collision Domain

A **collision domain** is a network area where simultaneous transmissions could potentially interfere.

### Hub

A hub creates one shared collision domain.

### Switch

Each switch port generally forms a separate collision domain.

Modern full-duplex switched Ethernet eliminates the traditional collision problem on a full-duplex link.

### Exam Memory

**Hub → Shared collision domain**

**Switch → Separate collision domains per port**

---

# 16. Broadcast Domain

A **broadcast domain** is the set of devices that receive a Layer 2 broadcast.

A normal Layer 2 switch forwards broadcasts within the same broadcast domain.

### Router

A router normally separates broadcast domains.

### VLAN

Each VLAN is a separate logical Layer 2 broadcast domain.

### Memory

**Switch forwards broadcasts within a VLAN.**

**Router separates broadcast domains.**

---

# 17. Switch Forwarding Process

Suppose:

```text
PC-A
MAC = AA
   |
 Port 1
   |
 SWITCH
   |
 Port 3
   |
PC-C
MAC = CC
```

PC-A sends a frame to PC-C.

### Step 1

Frame enters Port 1.

### Step 2

Switch learns:

```text
AA → Port 1
```

### Step 3

Switch checks destination:

```text
CC
```

### Step 4

If:

```text
CC → Port 3
```

exists in the MAC table, switch forwards the frame to Port 3.

### Step 5

PC-C receives the frame.

---

# 18. What Happens When Destination MAC Is Unknown?

Suppose:

```text
Destination = DD
```

but:

```text
DD
```

is not in the switch's table.

The switch floods the frame to the appropriate ports except the incoming port.

When the destination responds:

```text
DD → Port X
```

can be learned from the source MAC of that response.

---

# 19. MAC Table Aging

MAC address table entries are not necessarily permanent.

Switches use **aging timers** to remove stale dynamic entries after inactivity.

This allows the switch to adapt when devices move or network topology changes.

### Exam Concept

**Dynamic MAC entries can expire.**

---

# 20. VLAN Connection

You already studied VLAN basics.

Now connect them to switching:

```text
Switch
 ├── VLAN 10
 │     ├── PC-A
 │     └── PC-B
 │
 └── VLAN 20
       ├── PC-C
       └── PC-D
```

A VLAN creates a separate logical Layer 2 broadcast domain.

A Layer 2 switch normally does not forward broadcasts between different VLANs.

Communication between VLANs requires Layer 3 routing.

This leads directly to the next topic:

**VLAN + Trunking + STP**

---

# 21. Access Port vs Trunk Port

## Access Port

Normally carries traffic belonging to one VLAN.

Commonly used to connect:

```text
PC → Switch
```

## Trunk Port

Carries traffic for multiple VLANs between network devices.

Commonly:

```text
Switch ↔ Switch
```

or:

```text
Switch ↔ Router / Layer-3 device
```

### VLAN Tagging

**802.1Q** is a widely used VLAN tagging standard for Ethernet trunks.

### Memory

**Access = One VLAN**

**Trunk = Multiple VLANs**

---

# 22. Switching vs Routing

| Switching | Routing |
|---|---|
| Primarily Layer 2 | Layer 3 |
| MAC addresses | IP addresses |
| Frames | Packets |
| Local/link forwarding | Between networks |
| Switch | Router / Layer-3 device |

### Example

```text
Same subnet:
PC-A → Switch → PC-B
```

Different networks:

```text
PC-A → Switch → Router → Switch → PC-B
```

---

# 23. Layer 2 Switch vs Layer 3 Switch

### Layer 2 Switch

Primarily performs:

**MAC-based frame forwarding**

### Layer 3 Switch

Can perform:

**Layer 2 switching + Layer 3 routing**

This allows a Layer 3 switch to route between VLANs/subnets.

### Exam Trap

A switch is not always limited to Layer 2.

When the question says **traditional/basic switch**, think Layer 2.

---

# 24. Ethernet and ARP Connection

You already studied ARP.

Now connect it:

Suppose:

```text
IP = 192.168.1.20
```

but the host needs:

```text
MAC = ?
```

ARP resolves:

```text
IPv4 → MAC
```

The resulting Ethernet frame can then use the MAC address for local delivery.

### Flow

```text
IP destination
      ↓
ARP
      ↓
MAC destination
      ↓
Ethernet Frame
      ↓
Switch
```

This is why ARP and Ethernet are closely connected.

---

# 25. Ethernet and TCP/IP Connection

Suppose an application sends an HTTPS request.

The simplified encapsulation is:

```text
HTTPS data
    ↓
TCP segment
    ↓
IP packet
    ↓
Ethernet frame
    ↓
Bits/signals
```

The switch mainly handles the Ethernet frame at Layer 2.

The router handles the IP packet at Layer 3.

---

# 26. Duplex

### Half-Duplex

Communication can occur in both directions, but not simultaneously.

### Full-Duplex

Both sides can transmit simultaneously.

Modern switched Ethernet commonly operates in full-duplex mode.

### Why Important?

Full-duplex switched Ethernet avoids the traditional shared-medium collision behavior associated with half-duplex Ethernet.

---

# 27. Ethernet Media

Ethernet can operate over different physical media.

### Copper

Examples include twisted-pair Ethernet cables.

### Fiber

Uses optical signals.

### Important

Ethernet is not synonymous with copper cable.

Ethernet technologies can use both copper and fiber.

---

# 28. CSMA/CD

**CSMA/CD = Carrier Sense Multiple Access with Collision Detection**

It was historically used with shared, half-duplex Ethernet.

Basic idea:

1. Listen before transmitting.
2. Transmit if the medium appears free.
3. Detect collision.
4. Stop transmission.
5. Wait a randomized backoff period.
6. Try again.

### Very Important Modern Context

CSMA/CD is largely historical for modern switched full-duplex Ethernet because collisions do not occur in the traditional way on dedicated full-duplex links.

### Exam Trap

Do not claim:

**"Modern Ethernet always uses CSMA/CD."**

That is outdated.

---

# 29. Broadcast, Unknown Unicast and Multicast

### Broadcast

Flooded throughout the relevant broadcast domain.

Example:

**ARP Request**

### Unknown Unicast

Flooded because the switch does not know the destination MAC location.

### Multicast

Forwarding depends on switch configuration and multicast handling.

Do not automatically assume every multicast frame is treated exactly like broadcast in every modern switch configuration.

---

# 30. High-ROI Comparison Table

| Concept | Remember |
|---|---|
| MAC | Layer 2 address |
| IP | Layer 3 address |
| Frame | Layer 2 PDU |
| Packet | Layer 3 PDU |
| Switch | Primarily Layer 2 |
| Router | Primarily Layer 3 |
| Hub | Layer 1 |
| Broadcast | All devices in broadcast domain |
| Unknown unicast | Flooded by switch |
| Known unicast | Forwarded to learned port |
| Access port | Normally one VLAN |
| Trunk | Multiple VLANs |
| FCS | Error detection |
| MTU | Common Ethernet IP MTU = 1500 bytes |
| Traditional max Ethernet frame | 1518 bytes |
| CSMA/CD | Historical shared/half-duplex Ethernet |

---

# 31. Common Accenture MCQ Traps

### Trap 1

**Switch = Layer 3**

Usually wrong for basic switch questions.

Think:

**Switch → Layer 2**

unless the question specifically says Layer 3 switch.

### Trap 2

**Switch learns destination MAC from incoming frame.**

Wrong.

It learns the **source MAC**.

### Trap 3

**Unknown destination MAC is dropped immediately.**

Usually wrong.

A Layer 2 switch generally floods unknown unicast traffic.

### Trap 4

**Broadcast is sent to the Internet.**

Wrong.

Routers normally do not forward Layer 2 broadcasts between networks.

### Trap 5

**MAC address = Layer 3.**

Wrong.

MAC = Layer 2.

### Trap 6

**IP address = Layer 2.**

Wrong.

IP = Layer 3.

### Trap 7

**Frame = Layer 3 PDU.**

Wrong.

Frame = Layer 2.

### Trap 8

**Packet = Layer 2 PDU.**

Wrong.

Packet = Layer 3.

### Trap 9

**Ethernet MTU = 1518 bytes.**

Careful.

Standard Ethernet IP MTU is commonly **1500 bytes**.

1518 bytes is the classic maximum Ethernet frame size.

### Trap 10

**FCS corrects corrupted frames.**

Wrong.

FCS detects errors.

### Trap 11

**CSMA/CD is required on modern full-duplex switched Ethernet.**

Wrong/outdated.

It applies to traditional shared/half-duplex Ethernet.

### Trap 12

**Every switch port belongs to the same broadcast domain.**

Not necessarily.

VLANs create separate broadcast domains.

---

# 32. Scenario Recognition

### Scenario A

A device needs to send a frame to a known MAC address.

**Answer: Switch forwards using its MAC table.**

### Scenario B

Destination MAC is unknown.

**Answer: Unknown-unicast flooding.**

### Scenario C

A device sends an ARP request.

**Answer: Broadcast behavior at Layer 2.**

### Scenario D

Two computers are in different VLANs and need to communicate.

**Answer: Layer 3 routing is required.**

### Scenario E

A switch connects multiple VLANs between two switches.

**Answer: Trunk link.**

### Scenario F

A PC connects to a switch and should normally belong to one VLAN.

**Answer: Access port.**

### Scenario G

A router forwards based on destination IP.

**Answer: Layer 3 routing.**

### Scenario H

A switch learns that MAC AA is reachable through Port 4.

**Answer: MAC table entry AA → Port 4.**

### Scenario I

A corrupted Ethernet frame reaches the receiver.

**Answer: FCS/CRC can detect the error; Ethernet itself does not provide guaranteed correction.**

### Scenario J

A modern switch operates over a dedicated full-duplex link.

**Answer: Traditional collision behavior/CSMA/CD is not required.**

---

# 33. Accenture-Style Practice Questions

## Q1
What is Ethernet primarily used for?

**Answer: LAN networking**

## Q2
Which OSI layer is Ethernet framing primarily associated with?

**Answer: Data Link**

## Q3
Which layer also contains Ethernet physical transmission functions?

**Answer: Physical**

## Q4
What address does a basic Layer 2 switch primarily use?

**Answer: MAC address**

## Q5
What does a switch forward?

**Answer: Ethernet frames**

## Q6
What does a router primarily forward?

**Answer: IP packets**

## Q7
What is a MAC address?

**Answer: Layer 2/link-layer address**

## Q8
How large is a typical Ethernet MAC address?

**Answer: 48 bits**

## Q9
What table does a switch use for MAC-based forwarding?

**Answer: MAC address table**

## Q10
What does a switch learn from an incoming frame?

**Answer: Source MAC and incoming port**

## Q11
What happens to an unknown unicast?

**Answer: Flooded to relevant ports except the incoming port**

## Q12
What is the Ethernet broadcast MAC address?

**Answer: FF:FF:FF:FF:FF:FF**

## Q13
What is unicast?

**Answer: One sender to one receiver**

## Q14
What is broadcast?

**Answer: One sender to all devices in the broadcast domain**

## Q15
What is multicast?

**Answer: One sender to a group of receivers**

## Q16
What is the Ethernet Layer 2 PDU?

**Answer: Frame**

## Q17
What is FCS used for?

**Answer: Error detection**

## Q18
What is the classic maximum Ethernet frame size?

**Answer: 1518 bytes**

## Q19
What is the common Ethernet IP MTU?

**Answer: 1500 bytes**

## Q20
What is a collision domain?

**Answer: Area where simultaneous transmissions could collide**

## Q21
How does a hub handle traffic?

**Answer: Repeats it to connected ports**

## Q22
How does a switch improve forwarding?

**Answer: Uses MAC learning/table**

## Q23
What is a broadcast domain?

**Answer: Set of devices receiving a Layer 2 broadcast**

## Q24
What normally separates broadcast domains?

**Answer: Router / Layer 3 boundary**

## Q25
What does a VLAN create?

**Answer: Separate logical Layer 2 broadcast domain**

## Q26
What is an access port?

**Answer: Port normally associated with one VLAN**

## Q27
What is a trunk port?

**Answer: Port carrying multiple VLANs**

## Q28
Which VLAN tagging standard is widely used?

**Answer: IEEE 802.1Q**

## Q29
Can a Layer 3 switch route traffic?

**Answer: Yes**

## Q30
Which protocol connects ARP to Ethernet delivery?

**Answer: ARP resolves IPv4 to a MAC for local delivery**

## Q31
What does full-duplex mean?

**Answer: Both sides can transmit simultaneously**

## Q32
What does half-duplex mean?

**Answer: Both directions are possible, but not simultaneously**

## Q33
What does CSMA/CD stand for?

**Answer: Carrier Sense Multiple Access with Collision Detection**

## Q34
Where was CSMA/CD historically used?

**Answer: Shared/half-duplex Ethernet**

## Q35
Is CSMA/CD required on modern full-duplex switched Ethernet?

**Answer: No**

## Q36
Does FCS correct errors?

**Answer: No, it detects errors**

## Q37
Does a switch normally forward Layer 2 broadcasts between VLANs?

**Answer: No**

## Q38
Can Ethernet run over fiber?

**Answer: Yes**

## Q39
Can Ethernet run over copper?

**Answer: Yes**

## Q40
What is the basic forwarding rule of a Layer 2 switch?

**Answer: Destination MAC → MAC table → output port**

---

# 34. Rapid Revision Sheet

### Ethernet

**LAN technology**

**Layer 2 framing + Layer 1 physical transmission**

**Frame = Layer 2**

**MAC = Layer 2**

**FCS = Error detection**

**Common IP MTU = 1500 bytes**

**Classic max Ethernet frame = 1518 bytes**

---

### Switch

**Primarily Layer 2**

**Uses MAC addresses**

**Forwards frames**

**Learns source MAC**

**Known unicast → specific port**

**Unknown unicast → flood**

**Broadcast → relevant broadcast domain**

---

### VLAN

**Logical Layer 2 broadcast domain**

**Access → normally one VLAN**

**Trunk → multiple VLANs**

**802.1Q → VLAN tagging**

**Inter-VLAN communication → Layer 3 routing**

---

### Collision / Broadcast

**Hub → shared collision domain**

**Switch port → separate collision domain**

**Router → separates broadcast domains**

**VLAN → separate broadcast domains**

---

# 35. Memory Story

Imagine a college LAN.

You send data to your classmate.

Your computer creates an Ethernet frame containing:

**Destination MAC + Source MAC + Payload + FCS**

The frame reaches the switch.

The switch checks:

> "Do I know where this destination MAC lives?"

### If YES

It forwards the frame to the correct port.

### If NO

It floods the unknown unicast.

The switch continuously learns:

**Source MAC → Incoming Port**

Now suppose your classmate belongs to another VLAN.

The Layer 2 switch cannot simply forward the frame across VLANs.

Traffic needs a Layer 3 device.

The router/Layer 3 switch examines the IP information and routes the packet.

### Memory

**Ethernet creates frames → Switch uses MAC → VLAN separates Layer 2 domains → Router routes between networks**

---

# 36. What You MUST Be Able to Answer

- What is Ethernet?
- What is a switch?
- Switch vs hub?
- What is a MAC address?
- How does a switch learn MAC addresses?
- What is a MAC address table?
- What happens to known unicast?
- What happens to unknown unicast?
- What is broadcast?
- What is multicast?
- What is an Ethernet frame?
- What is FCS?
- FCS vs error correction?
- What is MTU?
- 1500 vs 1518?
- Collision domain?
- Broadcast domain?
- Switch vs router?
- Layer 2 vs Layer 3 switch?
- Access vs trunk port?
- What is 802.1Q?
- VLAN and broadcast domain?
- Why is routing required between VLANs?
- Full vs half duplex?
- CSMA/CD?
- Why is CSMA/CD largely historical in modern switched Ethernet?
- How does ARP interact with Ethernet?
- Explain the complete frame journey.

---

# 37. Final High-ROI Memorization

**Ethernet → LAN**

**Ethernet frame → Layer 2**

**MAC → Layer 2**

**IP → Layer 3**

**Switch → MAC → Frame**

**Router → IP → Packet**

**Hub → Layer 1**

**Source MAC → learned by switch**

**Known unicast → forward**

**Unknown unicast → flood**

**Broadcast → broadcast domain**

**VLAN → separate Layer 2 broadcast domain**

**Access → one VLAN**

**Trunk → multiple VLANs**

**802.1Q → VLAN tagging**

**FCS → error detection**

**MTU → 1500 bytes (standard Ethernet IP MTU)**

**Classic max Ethernet frame → 1518 bytes**

**Full-duplex → simultaneous transmission**

**CSMA/CD → historical shared/half-duplex Ethernet**

**Inter-VLAN → Layer 3 routing**

**Ethernet → Switch → VLAN → Router → Network**

---

# 38. Completion Checklist

- [ ] Ethernet definition
- [ ] Ethernet Layer 1/2 relationship
- [ ] Switch definition
- [ ] Hub vs switch
- [ ] MAC address
- [ ] MAC address table
- [ ] MAC learning
- [ ] Known unicast
- [ ] Unknown unicast
- [ ] Broadcast
- [ ] Multicast
- [ ] Ethernet frame
- [ ] FCS
- [ ] MTU
- [ ] 1500 vs 1518
- [ ] Collision domain
- [ ] Broadcast domain
- [ ] VLAN connection
- [ ] Access ports
- [ ] Trunk ports
- [ ] 802.1Q
- [ ] Layer 2 vs Layer 3 switch
- [ ] Switching vs routing
- [ ] ARP + Ethernet
- [ ] Full/half duplex
- [ ] CSMA/CD
- [ ] MCQ traps
- [ ] Scenario questions
- [ ] Rapid revision
- [ ] Complete packet/frame journey
