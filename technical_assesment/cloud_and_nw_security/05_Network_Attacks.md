# Network Attacks --- Accenture Technical Assessment

## 1. Exam Priority

**Priority: 🔴 MUST KNOW**

Core attacks: - DoS / DDoS - Phishing - Spoofing - Sniffing -
Man-in-the-Middle (MITM)

Accenture's official careers guidance says technical assessments test
applied technical knowledge and real-world scenarios. Current
third-party Accenture preparation sources also explicitly include attack
types and practice questions covering DoS/DDoS, phishing, DNS spoofing
and MITM. These are preparation/reporting sources, **not a verified
official question bank**.

------------------------------------------------------------------------

# 2. DoS --- Denial of Service

### Exam-ready definition

A **DoS attack** attempts to make a system, server, network, or service
unavailable to legitimate users by exhausting its resources.

### Real-life analogy

Imagine one person repeatedly calling a restaurant and keeping every
phone line busy. Real customers cannot get through.

### What resource can be exhausted?

-   Network bandwidth
-   CPU
-   Memory
-   Connection tables
-   Application/server capacity

### Key point

**Goal = Availability**

DoS generally comes from a **single attacking source** or a limited
number of sources.

------------------------------------------------------------------------

# 3. DDoS --- Distributed Denial of Service

### Exam-ready definition

A **DDoS attack** is a DoS attack launched from **many distributed
systems** simultaneously to overwhelm a target.

### Real-life analogy

Instead of one person blocking every restaurant phone line, thousands of
people call simultaneously.

### DoS vs DDoS

  Feature                DoS                        DDoS
  ---------------------- -------------------------- --------------------------
  Sources                Usually one                Many distributed sources
  Goal                   Make service unavailable   Make service unavailable
  Main target            Availability               Availability
  Detection/mitigation   Relatively easier          Usually harder

### Important term: Botnet

A **botnet** is a collection of compromised devices controlled by an
attacker. Botnets are commonly used to generate distributed attack
traffic.

### Common MCQ trap

DDoS does **not** mean "data destruction." The primary objective is
**service unavailability**.

------------------------------------------------------------------------

# 4. Phishing

### Exam-ready definition

**Phishing** is a social-engineering attack in which an attacker
impersonates a trusted entity to trick a victim into revealing sensitive
information, clicking a malicious link, opening a malicious attachment,
or performing an unsafe action.

### Real-life analogy

Someone wears a bank employee's uniform and asks you for your password.

### Common targets

-   Passwords
-   OTPs
-   Banking information
-   Credit/debit card information
-   Login credentials
-   Personal information

### Common channels

-   Email
-   Fake websites
-   SMS
-   Messaging apps
-   Social media
-   Phone calls

### Related terms

**Spear phishing:** targeted phishing against a specific person or
organization.

**Whaling:** phishing targeting high-value individuals such as
executives.

**Smishing:** phishing through SMS/text messages.

**Vishing:** phishing through voice/phone calls.

### Common MCQ trap

Phishing is primarily a **social-engineering technique**, not a network
protocol and not necessarily malware.

------------------------------------------------------------------------

# 5. Spoofing

### Exam-ready definition

**Spoofing** is the act of falsifying or impersonating an identity,
address, or source so that communication appears to come from a trusted
or legitimate source.

### Real-life analogy

Someone puts another person's name on their ID card and pretends to be
them.

### Important types

#### IP Spoofing

Attacker falsifies the source IP address in packets.

#### MAC Spoofing

Attacker changes the MAC address presented by a network interface.

#### ARP Spoofing / ARP Poisoning

Attacker sends forged ARP information so devices associate the
attacker's MAC address with another IP address, potentially enabling
interception.

#### DNS Spoofing

Attacker provides false DNS information so a domain name resolves to an
incorrect/malicious destination.

#### Email Spoofing

Attacker forges email sender information to make a message appear to
come from another sender.

### Common MCQ trap

**Spoofing = impersonation/falsification.**

It does not automatically mean the attacker has intercepted the
communication. Interception is more directly associated with MITM.

------------------------------------------------------------------------

# 6. Sniffing

### Exam-ready definition

**Sniffing** is the capture and analysis of network traffic, usually to
observe data being transmitted.

### Real-life analogy

Someone secretly listens to conversations happening in a room.

### What can an attacker observe?

Depending on the traffic and security controls: - IP addresses - MAC
addresses - Protocol information - Metadata - Unencrypted credentials -
Unencrypted application data

### Passive vs Active Sniffing

**Passive sniffing** - Attacker observes traffic without altering it. -
Easier to associate with shared/broadcast network environments. -
Primarily an observation/eavesdropping technique.

**Active sniffing** - Attacker actively interacts with or manipulates
the network to capture traffic. - Can involve techniques such as ARP
poisoning.

### Critical point

HTTPS/TLS encryption protects the contents of properly secured traffic
from ordinary passive interception, although metadata and other
information may still be visible.

### Common MCQ trap

Sniffing is about **capturing/observing traffic**. It is not
automatically the same as MITM.

------------------------------------------------------------------------

# 7. MITM --- Man-in-the-Middle

### Exam-ready definition

A **Man-in-the-Middle attack** occurs when an attacker positions
themselves between two communicating parties and intercepts, and
potentially modifies, their communication without the parties realizing
it.

### Real-life analogy

A student sends a message to a teacher through a messenger. The
messenger secretly reads it, changes it, and then delivers it.

### Typical flow

Normal:

**Client → Server**

MITM:

**Client → Attacker → Server**

The attacker may: - Observe communication - Steal information - Modify
messages - Redirect traffic - Impersonate one side to the other

### Common enabling techniques

-   Rogue Wi-Fi / evil-twin networks
-   ARP spoofing
-   DNS spoofing
-   Session hijacking
-   Weak or improperly validated encryption

### Defense concepts

-   HTTPS/TLS
-   Proper certificate validation
-   VPNs where appropriate
-   Secure Wi-Fi
-   MFA
-   Avoiding untrusted networks
-   Network segmentation and monitoring

### Common MCQ trap

MITM is not simply "someone reading packets." The defining idea is
**interception between communicating parties**, potentially with
modification.

------------------------------------------------------------------------

# 8. The Most Important Comparison

  -----------------------------------------------------------------------------------
  Attack            Core idea           Main target/effect          Key word
  ----------------- ------------------- --------------------------- -----------------
  DoS               Overwhelm/exhaust a Availability                Flood
                    service                                         

  DDoS              Distributed         Availability                Many sources
                    overwhelming attack                             

  Phishing          Trick a person      Credentials/actions         Deception

  Spoofing          Fake                Trust/identity              Impersonation
                    identity/source                                 

  Sniffing          Capture traffic     Confidentiality             Observe

  MITM              Intercept           Confidentiality/integrity   Intercept
                    communication                                   
  -----------------------------------------------------------------------------------

### Memory hook

**DoS = Destroy Availability**

**Phishing = Fool Person**

**Spoofing = Fake Identity**

**Sniffing = See Traffic**

**MITM = Stand in the Middle**

------------------------------------------------------------------------

# 9. Attack vs Security Property

  Attack     Security property commonly affected
  ---------- --------------------------------------------------
  DoS/DDoS   Availability
  Sniffing   Confidentiality
  MITM       Confidentiality + Integrity
  Phishing   Confidentiality / authentication
  Spoofing   Authentication / trust; may enable other attacks

Remember the CIA triad:

**Confidentiality --- Integrity --- Availability**

------------------------------------------------------------------------

# 10. Common Accenture-Style Scenario Patterns

### Pattern 1 --- Flood

"Thousands of devices send traffic to a web server and legitimate users
cannot access it."

**Answer: DDoS**

### Pattern 2 --- Fake bank email

"An email appears to come from a bank and asks the user to enter
credentials."

**Answer: Phishing**

### Pattern 3 --- Fake source address

"An attacker modifies the source IP address in packets."

**Answer: IP spoofing**

### Pattern 4 --- Capturing packets

"An attacker captures packets traveling through a network."

**Answer: Sniffing**

### Pattern 5 --- Intercepting communication

"An attacker secretly sits between a client and server and can alter
messages."

**Answer: MITM**

------------------------------------------------------------------------

# 11. High-Value Relationships

### Spoofing can enable MITM

Example:

**ARP spoofing → attacker becomes traffic intermediary → MITM**

### Sniffing can be part of MITM

MITM positioning can allow the attacker to **sniff/intercept**
communication.

### Phishing can lead to credential theft

**Fake message → victim clicks link → fake login page → credentials
stolen**

### DDoS can use a botnet

**Compromised devices → botnet → massive distributed traffic → target
unavailable**

------------------------------------------------------------------------

# 12. Common MCQ Traps

1.  **DoS vs DDoS**
    -   Distributed = DDoS.
2.  **Phishing vs spoofing**
    -   Phishing = deception to make a victim perform an action/reveal
        information.
    -   Spoofing = falsifying identity/source.
3.  **Sniffing vs MITM**
    -   Sniffing = capture/observe traffic.
    -   MITM = attacker positions between communicating parties.
4.  **DDoS objective**
    -   Availability, not credential theft.
5.  **ARP spoofing**
    -   False ARP mappings.
6.  **DNS spoofing**
    -   False DNS resolution information.
7.  **IP spoofing**
    -   Forged source IP.
8.  **Phishing**
    -   Social engineering.
9.  **MITM**
    -   Can involve both interception and modification.
10. **DoS**

-   Does not necessarily mean permanent destruction.

------------------------------------------------------------------------

# 13. Verified vs Reported vs Practice Questions

## Verified official PYQs

No publicly accessible official Accenture question bank was found that
allows these exact questions to be independently verified as official
PYQs.

## Candidate-reported / preparation-source questions

Current Accenture-oriented preparation sources explicitly include: -
DoS/DDoS - Phishing - Man-in-the-Middle - DNS spoofing - Attack types

Older Accenture preparation material also contains a question
identifying phishing from a fraudulent-email scenario.

Treat these as **reported/preparation questions**, not guaranteed
official PYQs.

------------------------------------------------------------------------

# 14. 35 Practice Questions

### Q1

What is the primary objective of a DoS attack?

A. Steal credentials\
B. Make a service unavailable\
C. Encrypt files\
D. Modify DNS records

**Answer: B**

### Q2

What distinguishes DDoS from DoS?

A. DDoS uses encryption\
B. DDoS targets databases only\
C. DDoS uses multiple distributed sources\
D. DDoS is always slower

**Answer: C**

### Q3

A web server is overwhelmed by traffic from thousands of compromised
devices. What is this?

A. Phishing\
B. DDoS\
C. Sniffing\
D. Spoofing

**Answer: B**

### Q4

Which security property is primarily targeted by DoS?

A. Availability\
B. Confidentiality\
C. Integrity\
D. Authentication

**Answer: A**

### Q5

What is a botnet?

A. Encryption protocol\
B. Collection of compromised devices controlled by an attacker\
C. Firewall rule\
D. DNS server

**Answer: B**

### Q6

A fake bank email asks a victim to enter a password. What attack?

A. Sniffing\
B. Phishing\
C. DDoS\
D. ARP spoofing

**Answer: B**

### Q7

Phishing is primarily a form of:

A. Social engineering\
B. Routing\
C. Encryption\
D. Compression

**Answer: A**

### Q8

Phishing through SMS is commonly called:

A. Vishing\
B. Smishing\
C. Whaling\
D. Spoofing

**Answer: B**

### Q9

Phishing through voice calls is called:

A. Smishing\
B. Vishing\
C. Sniffing\
D. Flooding

**Answer: B**

### Q10

Targeted phishing against a specific individual is:

A. Spear phishing\
B. DDoS\
C. Sniffing\
D. IP spoofing

**Answer: A**

### Q11

What does spoofing generally involve?

A. Encrypting data\
B. Falsifying identity/source information\
C. Destroying hardware\
D. Compressing packets

**Answer: B**

### Q12

An attacker forges the source IP address of packets. This is:

A. IP spoofing\
B. Phishing\
C. Sniffing\
D. DDoS

**Answer: A**

### Q13

An attacker sends forged ARP messages to associate their MAC address
with another device's IP. This is:

A. DNS tunneling\
B. ARP spoofing\
C. Phishing\
D. DDoS

**Answer: B**

### Q14

DNS spoofing primarily attempts to:

A. Encrypt DNS\
B. Provide false DNS resolution information\
C. Block all TCP traffic\
D. Capture keyboard input

**Answer: B**

### Q15

What is sniffing?

A. Capturing/observing network traffic\
B. Flooding a server\
C. Forging an identity\
D. Sending fake emails

**Answer: A**

### Q16

Passive sniffing primarily involves:

A. Observing traffic without altering it\
B. Modifying every packet\
C. Destroying packets\
D. Encrypting traffic

**Answer: A**

### Q17

Active sniffing may involve:

A. Network manipulation\
B. Only reading a password database\
C. File compression\
D. Encryption

**Answer: A**

### Q18

An attacker captures unencrypted credentials traveling across a network.
What technique is involved?

A. Sniffing\
B. DDoS\
C. Phishing only\
D. SQL injection

**Answer: A**

### Q19

What defines a MITM attack?

A. Flooding a server\
B. Intercepting communication between parties\
C. Guessing passwords\
D. Encrypting a database

**Answer: B**

### Q20

Which flow represents MITM?

A. Client → Server\
B. Client → Attacker → Server\
C. Server → Firewall\
D. Router → Switch

**Answer: B**

### Q21

A MITM attacker may:

A. Only observe\
B. Only delete files\
C. Intercept and potentially modify communication\
D. Only perform DDoS

**Answer: C**

### Q22

Which technique can help an attacker position themselves for MITM on a
LAN?

A. ARP spoofing\
B. File compression\
C. RAID\
D. DHCP reservation

**Answer: A**

### Q23

Which attack impersonates a trusted sender to trick a user?

A. Phishing\
B. DDoS\
C. Sniffing\
D. Fragmentation

**Answer: A**

### Q24

Which term best matches "fake identity/source"?

A. Spoofing\
B. Sniffing\
C. DDoS\
D. Phishing

**Answer: A**

### Q25

Which term best matches "capture network packets"?

A. Phishing\
B. Sniffing\
C. Spoofing\
D. DoS

**Answer: B**

### Q26

Which term best matches "attacker secretly relays communication"?

A. MITM\
B. DoS\
C. Phishing\
D. Spam

**Answer: A**

### Q27

A service becomes unavailable because its connection table is exhausted.
Which attack could cause this?

A. DoS\
B. Phishing\
C. Spoofing only\
D. Sniffing only

**Answer: A**

### Q28

Which attack is most directly associated with social engineering?

A. Phishing\
B. DDoS\
C. ARP spoofing\
D. Packet sniffing

**Answer: A**

### Q29

Which attack can use thousands of compromised computers?

A. DDoS\
B. Phishing\
C. Passive sniffing\
D. Password hashing

**Answer: A**

### Q30

A user receives a fake Microsoft 365 login page through an email. What
is the most likely attack?

A. Phishing\
B. DDoS\
C. ARP spoofing\
D. Sniffing

**Answer: A**

### Q31

An attacker changes DNS responses so a legitimate domain resolves to a
malicious server. What is this?

A. DNS spoofing\
B. DDoS\
C. Sniffing\
D. Vishing

**Answer: A**

### Q32

Which attack primarily threatens availability?

A. DDoS\
B. Sniffing\
C. Phishing\
D. Passive eavesdropping

**Answer: A**

### Q33

Which attack primarily involves observation of network traffic?

A. Sniffing\
B. DDoS\
C. Phishing\
D. Spoofing

**Answer: A**

### Q34

Which statement is correct?

A. Every spoofing attack is a DDoS attack\
B. Phishing is a social-engineering technique\
C. Sniffing always modifies traffic\
D. DoS always uses thousands of machines

**Answer: B**

### Q35

Which sequence can create a MITM situation on a local network?

A. ARP spoofing → traffic interception\
B. Hashing → compression\
C. DNS caching → encryption\
D. DHCP → RAID

**Answer: A**

------------------------------------------------------------------------

# 15. Quick Revision Sheet

## One-line definitions

**DoS:** Overwhelm/exhaust a service to make it unavailable.

**DDoS:** DoS launched from multiple distributed sources.

**Phishing:** Deceive a victim into revealing information or performing
an unsafe action.

**Spoofing:** Falsify/impersonate an identity or source.

**Sniffing:** Capture/observe network traffic.

**MITM:** Intercept communication between two parties.

## Attack → Keyword

-   DoS → Availability
-   DDoS → Distributed
-   Phishing → Deception
-   Spoofing → Fake identity
-   Sniffing → Capture
-   MITM → Interception

## Types worth memorizing

-   IP spoofing
-   MAC spoofing
-   ARP spoofing
-   DNS spoofing
-   Email spoofing
-   Spear phishing
-   Smishing
-   Vishing
-   Whaling
-   Passive sniffing
-   Active sniffing

------------------------------------------------------------------------

# 16. What You Must Be Able to Answer

Before marking this topic complete, you should be able to answer
instantly:

1.  DoS vs DDoS?
2.  What is the goal of DDoS?
3.  What is a botnet?
4.  What is phishing?
5.  Phishing vs spoofing?
6.  What is IP spoofing?
7.  What is ARP spoofing?
8.  What is DNS spoofing?
9.  What is sniffing?
10. Passive vs active sniffing?
11. What is MITM?
12. How can ARP spoofing enable MITM?
13. Which attack targets availability?
14. Which attack is primarily social engineering?
15. Which attack involves packet capture?
16. Which attack involves an intermediary?
17. Smishing vs vishing?
18. Spear phishing vs normal phishing?
19. Why does HTTPS help against interception?
20. How can multiple attacks be chained together?

------------------------------------------------------------------------

# 17. Cross-Topic Connections

You should connect this topic with:

**Firewall** → Can filter/block suspicious traffic but is not a complete
defense against every attack.

**VPN** → Provides protected communication and can reduce exposure on
untrusted networks.

**Encryption** → Protects confidentiality of data against many forms of
interception.

**Authentication** → Helps prevent successful impersonation.

**ARP** → ARP spoofing is a major connection to MITM.

**DNS** → DNS spoofing can redirect victims to malicious destinations.

**CIA Triad** → DoS/DDoS → Availability; Sniffing → Confidentiality;
MITM → Confidentiality + Integrity.

------------------------------------------------------------------------

# 18. Topic Completion Checklist

-   [ ] DoS
-   [ ] DDoS
-   [ ] Botnet
-   [ ] Phishing
-   [ ] Spear phishing
-   [ ] Smishing
-   [ ] Vishing
-   [ ] Whaling
-   [ ] Spoofing
-   [ ] IP spoofing
-   [ ] MAC spoofing
-   [ ] ARP spoofing
-   [ ] DNS spoofing
-   [ ] Sniffing
-   [ ] Passive vs active sniffing
-   [ ] MITM
-   [ ] Attack comparison
-   [ ] CIA triad mapping
-   [ ] Scenario recognition
-   [ ] MCQ traps

**Status: 🔴 High-priority topic --- complete only when you can identify
each attack from a scenario in a few seconds.**
