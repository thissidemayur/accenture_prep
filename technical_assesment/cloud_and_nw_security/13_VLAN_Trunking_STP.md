# 13 — VLAN, Trunking & STP

## Accenture Technical Assessment — Topic Mastery Notes

---

# 1. VLAN — Virtual Local Area Network

## Exam-Ready Definition

A **VLAN (Virtual Local Area Network)** is a logical Layer 2 segmentation mechanism that divides a physical switched network into separate broadcast domains.

Devices can be connected to the same physical switch but belong to different VLANs.

### Real-Life Analogy

Imagine one office building with different departments:

- HR
- Engineering
- Finance

They share the same building and switches, but logically their local networks are separated.

### Core Idea

**VLAN = Logical Layer 2 segmentation**

---

# 2. Why VLANs Are Used

Without VLANs:

```text
One Switch
   ↓
One large broadcast domain
```

With VLANs:

```text
Switch
 ├── VLAN 10 → HR
 ├── VLAN 20 → Engineering
 └── VLAN 30 → Finance
```

Each VLAN is a separate Layer 2 broadcast domain.

### Benefits

- Broadcast-domain segmentation
- Logical separation
- Better organization
- Improved security isolation
- Reduced unnecessary broadcast propagation
- Flexible network design

### Important

VLANs improve segmentation, but **VLAN alone is not a complete security boundary**.

---

# 3. VLAN and Broadcast Domain

This is one of the highest-value concepts.

### Rule

**Each VLAN = separate Layer 2 broadcast domain**

Example:

```text
VLAN 10
PC-A
PC-B

VLAN 20
PC-C
PC-D
```

A broadcast from PC-A is normally delivered to devices in VLAN 10, not VLAN 20.

### Therefore

**VLANs limit Layer 2 broadcast propagation.**

---

# 4. VLAN and Subnets

A common enterprise design maps:

```text
VLAN 10 ↔ Subnet A
VLAN 20 ↔ Subnet B
```

For example:

```text
VLAN 10 → 192.168.10.0/24
VLAN 20 → 192.168.20.0/24
```

This is common, but remember:

**VLAN = Layer 2 concept**

**Subnet = Layer 3 concept**

They are related but not identical.

---

# 5. VLAN IDs

VLANs are identified using a **VLAN ID**.

With standard IEEE 802.1Q VLAN tagging, VLAN IDs are in the range:

**0–4095**

However, usable VLAN IDs for normal VLAN identification are commonly:

**1–4094**

### High-ROI

**VLAN ID = 12 bits**

**Normal usable VLAN range = 1–4094**

### Exam Trap

Do not simply say:

> "There are 4096 usable VLANs."

Reserved values such as 0 and 4095 have special purposes.

---

# 6. Access Port

## Definition

An **access port** is a switch port normally assigned to one VLAN and commonly used to connect end devices.

Example:

```text
PC
 ↓
Access Port
 ↓
VLAN 10
```

### Typical Devices

- PC
- Printer
- Server
- IP phone configurations can be more complex

### Memory

**Access = One VLAN**

---

# 7. Trunk Port

## Definition

A **trunk port** carries traffic belonging to multiple VLANs across a single physical link.

Typical use:

```text
Switch A
   ||
   || Trunk
   ||
Switch B
```

Without a trunk, separate physical links could be required for different VLANs.

### Memory

**Trunk = Multiple VLANs**

---

# 8. 802.1Q VLAN Tagging

**IEEE 802.1Q** is a standard for VLAN tagging on Ethernet frames.

A VLAN tag identifies the VLAN associated with the frame on a trunk.

Conceptually:

```text
Ethernet Frame
     +
802.1Q VLAN Tag
```

The tag contains a **12-bit VLAN Identifier (VID)**.

### Important

802.1Q is commonly associated with **VLAN trunking/tagging**.

---

# 9. Access vs Trunk

| Feature | Access Port | Trunk Port |
|---|---|---|
| Typical VLANs | One | Multiple |
| Common connection | End device | Network device |
| VLAN tagging | Usually frames are handled as untagged/access traffic toward endpoint | VLAN tags used for multiple VLANs |
| Example | PC → Switch | Switch → Switch |
| Main purpose | Assign endpoint to VLAN | Carry multiple VLANs |

### High-ROI Memory

**Access = endpoint**

**Trunk = network infrastructure**

---

# 10. Native VLAN

On an 802.1Q trunk, a **native VLAN** is a VLAN whose traffic is traditionally sent untagged on the trunk.

### Important

The exact behavior/configuration depends on the network equipment and configuration.

### Exam-Level Knowledge

Remember:

**Native VLAN = untagged VLAN on an 802.1Q trunk**

Do not confuse native VLAN with:

- Management VLAN
- Default VLAN
- Access VLAN

They are different concepts.

---

# 11. Default VLAN

Many switch implementations have a default VLAN, commonly VLAN 1.

### Important

Do not assume:

**Default VLAN = native VLAN = management VLAN**

They can be configured differently.

---

# 12. Management VLAN

A **management VLAN** is a VLAN used to carry management traffic for network devices.

Examples:

- Switch management access
- Network administration

### Important

A management VLAN is a design choice, not a universal requirement that it must be VLAN 1.

---

# 13. Inter-VLAN Communication

Different VLANs are separate Layer 2 broadcast domains.

Therefore:

```text
VLAN 10
   ↓
Layer 3 device
   ↓
VLAN 20
```

is required for communication between them.

### Options

- Router
- Layer 3 switch

### Example

```text
PC-A
VLAN 10
192.168.10.10
       ↓
    Switch
       ↓
 Layer 3 device
       ↓
    Switch
       ↓
PC-B
VLAN 20
192.168.20.10
```

### High-ROI

**Same VLAN → Layer 2 switching can deliver locally**

**Different VLAN → Layer 3 routing is required**

---

# 14. Router-on-a-Stick

**Router-on-a-stick** is a design where one physical router interface uses multiple logical subinterfaces to route between VLANs over an 802.1Q trunk.

Conceptually:

```text
VLAN 10 ─┐
         │
         ├── Trunk ── Router
         │              ├── Subinterface VLAN 10
VLAN 20 ─┘              └── Subinterface VLAN 20
```

### Why "stick"?

One physical router interface is used for multiple VLANs.

### Exam Priority

Know the concept.

Do not spend excessive time memorizing vendor-specific configuration commands.

---

# 15. Layer 3 Switch Inter-VLAN Routing

A Layer 3 switch can perform both:

- Layer 2 switching
- Layer 3 routing

Therefore it can route between VLANs directly.

### Common architecture

```text
VLAN 10
   ↓
Layer 3 Switch
   ↓
VLAN 20
```

### Memory

**Layer 3 switch = Switching + Routing**

---

# 16. What Happens to a Broadcast?

Suppose PC-A in VLAN 10 sends an ARP broadcast.

The switch floods the broadcast within:

**VLAN 10**

It does not normally forward that Layer 2 broadcast into VLAN 20.

### Why?

Because VLAN 10 and VLAN 20 are different broadcast domains.

### Important

A router normally does not forward Layer 2 broadcasts between interfaces/subnets.

---

# 17. VLAN Security

VLAN segmentation can reduce unwanted Layer 2 communication.

But:

**VLAN ≠ firewall**

**VLAN ≠ encryption**

**VLAN ≠ complete security**

For stronger isolation, organizations may use:

- ACLs
- Firewalls
- Network policies
- Private VLANs
- Authentication/access control

---

# 18. VLAN Hopping

**VLAN hopping** is an attack category in which an attacker attempts to gain access to traffic belonging to another VLAN.

Two commonly discussed techniques include:

- Switch spoofing
- Double-tagging

### Exam-Level Idea

VLAN hopping attempts to bypass intended VLAN separation.

### Security Principle

Proper trunk configuration and disabling unnecessary trunk negotiation can reduce certain risks.

Do not spend excessive time on attack implementation details for an Accenture fundamentals assessment.

---

# 19. Why Do We Need STP?

Now imagine redundant switch links:

```text
Switch A -------- Switch B
   \                /
    \              /
     ---- Switch C
```

The redundant links provide resilience.

But Layer 2 Ethernet does not have a normal IP-style TTL mechanism to automatically stop endlessly circulating frames.

A Layer 2 loop can cause:

- Broadcast storms
- Duplicate frames
- MAC-table instability
- Severe network disruption

Therefore we need:

**STP — Spanning Tree Protocol**

---

# 20. STP — Spanning Tree Protocol

## Exam-Ready Definition

**STP (Spanning Tree Protocol)** is a Layer 2 protocol that prevents switching loops by logically blocking redundant paths while maintaining a loop-free topology.

### Core Idea

STP allows physical redundancy but creates a logical loop-free topology.

### Memory

**STP = Prevent Layer 2 loops**

---

# 21. Why Layer 2 Loops Are Dangerous

Suppose:

```text
A → B → C → A
```

A broadcast can continuously circulate.

This can cause:

### Broadcast Storm

Huge volumes of repeated broadcast traffic.

### Duplicate Frames

The same frame may reach a destination multiple times.

### MAC Table Instability

The switch may repeatedly learn the same source MAC from different ports.

### Network Outage

The network can become severely congested.

---

# 22. STP Root Bridge

STP elects one switch as the:

**Root Bridge**

The root becomes the reference point for calculating the spanning tree.

### Election Rule

The switch with the **lowest Bridge ID** becomes the root bridge.

Bridge ID is based on:

- Bridge priority
- MAC address

### Important

**Lowest Bridge ID wins.**

Do not memorize:

> "Highest MAC wins."

It is the opposite for the election when priority is equal.

---

# 23. Bridge ID

A simplified Bridge ID consists of:

**Bridge Priority + MAC Address**

If two switches have the same priority:

**Lower MAC address wins.**

### Memory

**STP election = Lowest Bridge ID**

---

# 24. Root Port

Each non-root switch selects a:

**Root Port**

The root port is the port that provides the best path toward the root bridge.

### Important

The root bridge itself does not have a root port.

### Memory

**Root Port = Best path toward Root**

---

# 25. Designated Port

A **designated port** is selected for a network segment to provide the forwarding path toward the root.

### Simplified Exam View

For each Layer 2 segment, STP selects a designated forwarding port.

### Memory

**Designated Port = Forwarding representative for a segment**

---

# 26. Blocked / Alternate Path

If a redundant path would create a loop, STP places an appropriate port/path into a non-forwarding state.

This preserves redundancy without allowing the loop to operate.

### Concept

```text
Physical topology:
Multiple paths

STP logical topology:
Loop-free path
```

If an active path fails, STP can reconverge and allow a previously blocked redundant path.

---

# 27. STP Path Cost

STP uses path cost to determine the preferred path toward the root.

A path with a lower total cost is generally preferred.

### Simplified Decision Logic

```text
Choose path with:
Lowest root path cost
```

If there is a tie, additional bridge/port identifiers are considered according to STP's selection rules.

### Exam Priority

Know:

**Lower path cost = preferred path**

Do not memorize vendor-specific port-cost tables unless specifically required.

---

# 28. Classic STP Port States

Traditional 802.1D STP has these states:

1. Blocking
2. Listening
3. Learning
4. Forwarding
5. Disabled

### Memory

**B → L → L → F**

Blocking → Listening → Learning → Forwarding

### Important

The disabled state is administratively disabled rather than a normal transition stage.

---

# 29. Blocking

A blocking port:

- Does not forward normal data frames
- Does not learn source MAC addresses from normal user traffic
- Helps prevent loops

It can still process certain STP control information.

---

# 30. Listening

In listening state, STP is determining the topology and preparing for forwarding.

It does not forward normal user traffic.

---

# 31. Learning

In learning state, the switch begins learning MAC addresses.

It still does not forward normal user data frames.

---

# 32. Forwarding

In forwarding state, the port:

- Forwards frames
- Learns MAC addresses
- Participates in normal data forwarding

---

# 33. RSTP

**RSTP — Rapid Spanning Tree Protocol**

RSTP is a faster-converging evolution of STP standardized as IEEE 802.1w.

### Why?

Traditional STP can take significant time to converge after topology changes.

RSTP improves convergence.

### Exam-Level Knowledge

**STP = loop prevention**

**RSTP = faster convergence**

---

# 34. STP vs RSTP

| STP | RSTP |
|---|---|
| IEEE 802.1D | IEEE 802.1w |
| Traditional | Faster evolution |
| Slower convergence | Faster convergence |
| Loop prevention | Loop prevention |

### Don't Overstudy

For Accenture fundamentals, know the purpose and basic distinction.

---

# 35. BPDU

**BPDU = Bridge Protocol Data Unit**

Switches use BPDUs to exchange STP information.

BPDUs help switches determine:

- Root bridge
- Path information
- Topology

### Memory

**BPDU = STP control message**

---

# 36. STP Election Story

Imagine three switches:

```text
A: Priority 32768, MAC 00:00:00:00:00:01

B: Priority 32768, MAC 00:00:00:00:00:02

C: Priority 32768, MAC 00:00:00:00:00:03
```

All priorities are equal.

Lowest MAC belongs to A.

Therefore:

**A becomes Root Bridge.**

---

# 37. STP Complete Example

Imagine:

```text
        A
       /       B---C
```

There are three physical paths.

Without STP:

```text
A ↔ B ↔ C ↔ A
```

creates a loop.

STP chooses a loop-free logical topology.

Conceptually:

```text
        A
       /       B   C
```

One redundant path is logically blocked.

If an active path fails, STP can reconverge and use redundancy.

---

# 38. VLAN + Trunk + STP Together

These three concepts are closely connected.

### VLAN

Creates logical Layer 2 broadcast domains.

### Trunk

Carries multiple VLANs between network devices.

### STP

Prevents Layer 2 loops caused by redundant paths.

### Big Picture

```text
              Switch A
             /                  Trunk      Trunk
           /                  Switch B -------- Switch C
```

VLANs travel across trunks.

STP ensures redundant Layer 2 links do not create loops.

---

# 39. End-to-End Scenario

Suppose:

```text
PC-A → VLAN 10
PC-B → VLAN 20
```

They are connected to the same physical switching infrastructure.

### Step 1

VLAN 10 and VLAN 20 are separate Layer 2 broadcast domains.

### Step 2

If switches are connected together, a trunk can carry VLAN 10 and VLAN 20 traffic.

### Step 3

If redundant switch links exist, STP prevents Layer 2 loops.

### Step 4

If PC-A needs to communicate with PC-B:

```text
VLAN 10
   ↓
Layer 3 routing
   ↓
VLAN 20
```

### Complete Concept

**VLAN = segmentation**

**Trunk = transport of multiple VLANs**

**STP = loop prevention**

**Routing = communication between VLANs**

---

# 40. Common Accenture MCQ Traps

### Trap 1

**VLAN operates at Layer 3.**

Wrong.

VLAN is primarily a Layer 2 segmentation mechanism.

### Trap 2

**Every VLAN is the same broadcast domain.**

Wrong.

Each VLAN is a separate Layer 2 broadcast domain.

### Trap 3

**Access port carries multiple VLANs.**

Normally wrong.

Access ports are normally associated with one VLAN.

### Trap 4

**Trunk port is only for Internet traffic.**

Wrong.

Trunks carry traffic for multiple VLANs between network devices.

### Trap 5

**802.1Q is a routing protocol.**

Wrong.

802.1Q is a VLAN tagging standard.

### Trap 6

**Router forwards Layer 2 broadcasts between networks.**

Normally wrong.

Routers separate broadcast domains.

### Trap 7

**VLANs automatically provide encryption.**

Wrong.

VLANs provide logical segmentation, not encryption.

### Trap 8

**STP increases Layer 2 loops.**

Wrong.

STP prevents Layer 2 loops.

### Trap 9

**Highest Bridge ID becomes root.**

Wrong.

Lowest Bridge ID wins.

### Trap 10

**Root bridge has a root port.**

Wrong.

The root bridge has no root port.

### Trap 11

**Root port means port directly connected to the root.**

Not necessarily.

It is the best path toward the root.

### Trap 12

**STP physically removes redundant cables.**

Wrong.

STP logically places redundant paths into a non-forwarding state.

### Trap 13

**STP's purpose is routing between VLANs.**

Wrong.

Routing between VLANs is a Layer 3 function.

### Trap 14

**RSTP and STP are completely unrelated.**

Wrong.

RSTP is a faster-converging evolution of STP.

### Trap 15

**Faster STP means no loop prevention is required.**

Wrong.

RSTP still prevents Layer 2 loops.

---

# 41. Scenario Recognition

### Scenario A

A company wants HR and Engineering on separate logical networks while using the same switch infrastructure.

**Answer: VLAN**

### Scenario B

Two switches need to carry VLAN 10, 20 and 30 over one physical link.

**Answer: Trunk**

### Scenario C

An endpoint is connected to a switch and should belong to VLAN 20.

**Answer: Access port**

### Scenario D

Multiple redundant Layer 2 paths exist between switches.

**Answer: STP**

### Scenario E

A company wants faster STP convergence.

**Answer: RSTP**

### Scenario F

A switch needs to identify the root bridge.

**Answer: STP/BPDUs**

### Scenario G

Three switches have equal priority; switch A has the lowest MAC address.

**Answer: A becomes root bridge**

### Scenario H

A host in VLAN 10 needs to communicate with VLAN 20.

**Answer: Layer 3 routing**

### Scenario I

An ARP broadcast is generated in VLAN 10.

**Answer: It remains within the VLAN 10 broadcast domain**

### Scenario J

A redundant switch link is causing a potential loop.

**Answer: STP can place a path into a non-forwarding state**

---

# 42. Accenture-Style Practice Questions

## Q1
What does VLAN stand for?

**Answer: Virtual Local Area Network**

## Q2
What is the primary purpose of a VLAN?

**Answer: Layer 2 logical segmentation**

## Q3
What does a VLAN create?

**Answer: A separate Layer 2 broadcast domain**

## Q4
At which OSI layer does VLAN primarily operate?

**Answer: Layer 2**

## Q5
What is a VLAN ID?

**Answer: Identifier for a VLAN**

## Q6
How many bits are used for the 802.1Q VLAN ID?

**Answer: 12 bits**

## Q7
What is an access port?

**Answer: A port normally assigned to one VLAN**

## Q8
What is a trunk port?

**Answer: A port carrying multiple VLANs**

## Q9
Which standard is widely used for VLAN tagging?

**Answer: IEEE 802.1Q**

## Q10
What is the native VLAN?

**Answer: Traditionally the untagged VLAN on an 802.1Q trunk**

## Q11
What is a management VLAN?

**Answer: VLAN used for network-device management traffic**

## Q12
Can a VLAN provide encryption?

**Answer: No**

## Q13
Can devices in different VLANs communicate using only Layer 2 switching?

**Answer: No**

## Q14
What is required for inter-VLAN communication?

**Answer: Layer 3 routing**

## Q15
What is router-on-a-stick?

**Answer: Router subinterfaces routing multiple VLANs over a trunk**

## Q16
Can a Layer 3 switch perform inter-VLAN routing?

**Answer: Yes**

## Q17
What does STP stand for?

**Answer: Spanning Tree Protocol**

## Q18
What problem does STP solve?

**Answer: Layer 2 switching loops**

## Q19
What can Layer 2 loops cause?

**Answer: Broadcast storms, duplicate frames and MAC instability**

## Q20
What is the root bridge?

**Answer: STP's reference/root switch**

## Q21
How is the root bridge elected?

**Answer: Lowest Bridge ID**

## Q22
What makes up the Bridge ID conceptually?

**Answer: Bridge priority and MAC address**

## Q23
If priorities are equal, which switch wins?

**Answer: Lowest MAC address**

## Q24
What is a root port?

**Answer: Best path toward the root bridge on a non-root switch**

## Q25
Does the root bridge have a root port?

**Answer: No**

## Q26
What is a designated port?

**Answer: STP's selected forwarding port for a Layer 2 segment**

## Q27
What happens to redundant paths under STP?

**Answer: An appropriate path can be placed into a non-forwarding state**

## Q28
What is STP path cost?

**Answer: Metric used to select a preferred path toward the root**

## Q29
Which path is generally preferred?

**Answer: Lower root path cost**

## Q30
Name the classic 802.1D STP states.

**Answer: Blocking, Listening, Learning, Forwarding, Disabled**

## Q31
What happens in the learning state?

**Answer: The switch learns MAC addresses but does not forward normal user traffic**

## Q32
What happens in forwarding state?

**Answer: Frames are forwarded and MAC addresses are learned**

## Q33
What does BPDU stand for?

**Answer: Bridge Protocol Data Unit**

## Q34
What is the purpose of BPDUs?

**Answer: Exchange STP topology/control information**

## Q35
What is RSTP?

**Answer: Rapid Spanning Tree Protocol**

## Q36
What is the main advantage of RSTP over traditional STP?

**Answer: Faster convergence**

## Q37
Does RSTP still prevent Layer 2 loops?

**Answer: Yes**

## Q38
What does a trunk allow?

**Answer: Multiple VLANs over one physical link**

## Q39
What does STP provide when redundant links exist?

**Answer: Loop-free Layer 2 topology with redundancy**

## Q40
Summarize VLAN, trunking and STP in one line.

**Answer: VLAN segments Layer 2 networks, trunks carry multiple VLANs, and STP prevents Layer 2 loops**

---

# 43. Rapid Revision Sheet

## VLAN

**Layer 2 segmentation**

**Each VLAN = separate broadcast domain**

**VLAN ≠ encryption**

**VLAN ≠ routing**

**VLAN ID = 12 bits**

---

## Ports

**Access = normally one VLAN**

**Trunk = multiple VLANs**

**802.1Q = VLAN tagging**

**Native VLAN = traditionally untagged on trunk**

---

## Inter-VLAN

**Different VLANs → Layer 3 routing**

**Router-on-a-stick → router subinterfaces + trunk**

**Layer 3 switch → can route between VLANs**

---

## STP

**Purpose = Prevent Layer 2 loops**

**Root bridge = lowest Bridge ID**

**Equal priority → lowest MAC wins**

**Root port = best path toward root**

**Root bridge = no root port**

**Lower path cost = generally preferred**

**BPDU = STP control message**

**RSTP = faster convergence**

---

# 44. Memory Story

Imagine a large company office.

There are three departments:

```text
HR
Engineering
Finance
```

### VLAN

You logically separate them:

```text
VLAN 10 → HR
VLAN 20 → Engineering
VLAN 30 → Finance
```

Now each department has its own Layer 2 broadcast domain.

### Trunk

The departments need to travel between multiple switches.

Instead of using three separate physical cables:

```text
Switch A ===== Switch B
```

one trunk can carry traffic for all three VLANs.

### STP

Now imagine multiple links for redundancy:

```text
Switch A
 /     B ----- C
```

Without protection, a Layer 2 loop can occur.

STP logically blocks a redundant path.

### Routing

Finally, HR needs to communicate with Engineering.

They are in different VLANs.

Therefore:

```text
HR VLAN
   ↓
Layer 3 routing
   ↓
Engineering VLAN
```

### One-line memory

**VLAN separates → Trunk carries → STP prevents loops → Router connects VLANs**

---

# 45. What You MUST Be Able to Answer

- What is VLAN?
- Why are VLANs used?
- VLAN vs subnet?
- VLAN vs broadcast domain?
- What is a VLAN ID?
- What is an access port?
- What is a trunk port?
- Access vs trunk?
- What is 802.1Q?
- What is native VLAN?
- Default VLAN vs native VLAN?
- What is a management VLAN?
- Why is inter-VLAN routing required?
- Router-on-a-stick?
- Layer 3 switch?
- What is STP?
- Why are Layer 2 loops dangerous?
- Broadcast storm?
- MAC-table instability?
- Root bridge?
- Bridge ID?
- How is root bridge elected?
- Root port?
- Designated port?
- Path cost?
- What happens to redundant paths?
- STP states?
- BPDU?
- RSTP?
- STP vs RSTP?
- Explain VLAN + trunk + STP together.
- Explain a complete multi-switch packet journey.

---

# 46. Final High-ROI Memorization

**VLAN = Logical Layer 2 segmentation**

**VLAN = Separate broadcast domain**

**Access = One VLAN**

**Trunk = Multiple VLANs**

**802.1Q = VLAN tagging**

**Native VLAN = Untagged trunk VLAN**

**Different VLANs = Layer 3 routing required**

**Router-on-a-stick = Router subinterfaces + trunk**

**Layer 3 switch = Switching + routing**

**STP = Layer 2 loop prevention**

**Root bridge = Lowest Bridge ID**

**Equal priority = Lowest MAC wins**

**Root port = Best path to root**

**Root bridge = No root port**

**Lower path cost = Preferred**

**BPDU = STP control information**

**RSTP = Faster convergence**

**VLAN separates → Trunk carries → STP prevents loops → Routing connects VLANs**

---

# 47. Completion Checklist

- [ ] VLAN definition
- [ ] VLAN purpose
- [ ] VLAN and broadcast domains
- [ ] VLAN vs subnet
- [ ] VLAN IDs
- [ ] Access ports
- [ ] Trunk ports
- [ ] 802.1Q
- [ ] Native VLAN
- [ ] Default VLAN
- [ ] Management VLAN
- [ ] Inter-VLAN routing
- [ ] Router-on-a-stick
- [ ] Layer 3 switch
- [ ] VLAN security
- [ ] VLAN hopping basics
- [ ] STP definition
- [ ] Layer 2 loops
- [ ] Broadcast storms
- [ ] Root bridge
- [ ] Bridge ID
- [ ] Root port
- [ ] Designated port
- [ ] Path cost
- [ ] STP port states
- [ ] BPDU
- [ ] RSTP
- [ ] VLAN + trunk + STP integration
- [ ] MCQ traps
- [ ] Scenario questions
- [ ] Rapid revision
