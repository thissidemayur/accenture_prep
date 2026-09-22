# Accenture Paid Batch — Technical Assessment Set 1

## Source
Extracted from the two uploaded Set 1 assessment files. Answers below are based on the supplied question wording. Questions with broken/inconsistent options are explicitly flagged.

---

# Part 1 — Questions 1–45

## Q1 — Microservice OOM
**Answer: B — Examine application heap usage logs and trace memory allocation profiles.**

OOM with low CPU indicates a memory bottleneck. Investigate heap usage, allocation patterns, and possible memory leaks rather than increasing CPU.

**Remember:** OOM + low CPU → investigate memory.

## Q2 — Transaction Anomaly
**Answer: B — Non-repeatable Read.**

Transaction A reads the same row twice and sees different committed values.

- Dirty read → uncommitted data
- Non-repeatable read → same row, different value
- Phantom read → different row set
- Lost update → overwritten update

## Q3 — Primary Key
**Answer: C — MedicalRecordID.**

It is the stable record identifier. Email can change; ZIP is not unique; SSN is sensitive and is not the appropriate application identifier here.

## Q4 — DevSecOps Quality Gate
**Answer: A — Continuous Delivery Pipeline Quality Gate.**

A pipeline quality gate can block progression when SAST/security results exceed configured severity thresholds.

## Q5 — API Evolution
**Answer: B — Content Negotiation via Accept headers while supporting legacy endpoints.**

This permits newer representations while retaining compatibility. In real systems explicit versioning is also common, but B is the intended supplied option.

## Q6 — HTTP Authorization
**Answer: B — 403 Forbidden.**

401 is authentication failure/missing credentials; 403 means the caller is authenticated but lacks permission.

## Q7 — Method Overloading
**Answer: A — Static polymorphism / Method Overloading.**

Same method name with different parameter lists in the same class.

## Q8 — Java Reference vs Object
**Answer: B — `vehicle` is an object reference to an instance of the subclass `ElectricCar`.**

`Vehicle vehicle = new ElectricCar();` → reference type = Vehicle, actual object = ElectricCar.

## Q9 — Inline IPS Trade-off
**Answer: B — Increased network latency and elevated hardware processing overhead.**

Inline deep inspection adds processing work to traffic.

## Q10 — Java Inheritance + Overriding
**Answer: A.**

`extends` establishes class inheritance and `@Override` indicates overriding.

## Q11 — CSS Corner Rounding
**Answer: B — `border-radius: 0 15px 0 15px;`**

Four values map clockwise: top-left, top-right, bottom-right, bottom-left.

## Q12 — HTML5 Audio
**Answer: A — `<audio controls>`**

Provides native browser audio controls.

## Q13 — JavaScript `map()`
**Answer: B — 20, 40, 60, 80.**

`map()` applies `val * 2` to every element.

## Q14 — JavaScript `getAttribute()`
**Answer: C — `alert("System Ready");`**

`getAttribute("onclick")` retrieves the attribute's source string; it does not execute it.

## Q15 — Micro-segmentation
**Answer: B — Restricting lateral movement of unauthorized attackers.**

Segmentation limits how far an attacker can move after a compromise.

## Q16 — IPsec
**Answer: C — ESP.**

ESP can provide confidentiality plus integrity/authentication. AH does not encrypt payloads.

## Q17 — Remote VPN
**Answer: A — Remote-access VPN.**

An individual remote client connects securely to corporate resources.

## Q18 — Low-Latency Game
**Answer: C — UDP.**

UDP avoids TCP retransmission/connection overhead where occasional loss is acceptable.

## Q19 — OSI Transport Layer
**Answer: C — Transport Layer.**

Layer 4 handles segmentation and end-to-end transport; TCP also provides flow/error mechanisms.

## Q20 — Stateful Firewall
**Answer: A — Stateful Packet Inspection Firewall.**

It tracks connection state such as SYN/SYN-ACK/ACK.

## Q21 — CRM Cloud Model
**Answer: C — SaaS.**

Ready-to-use web software is Software as a Service.

## Q22 — Data Virtualization
**Answer: C — Data Virtualization / Abstraction Layer.**

Provides unified logical access across sources without requiring all data to be physically copied into one store.

## Q23 — Dedicated Cloud
**Answer: B — Private Cloud.**

The organization gets dedicated infrastructure rather than shared public multi-tenant infrastructure.

## Q24 — Hardware Virtualization
**Answer: A — Hypervisor-based Virtualization.**

A hypervisor abstracts hardware resources for guest operating systems.

## Q25 — Cloud OS Control
**Answer: C — IaaS.**

With IaaS the customer normally controls the guest OS while the provider manages the underlying physical infrastructure.

## Q26 — Resource Pooling / Elasticity
**Answer: C — Dynamic resource allocation on demand.**

Pooling lets cloud resources be allocated and reallocated as demand changes.

## Q27 — Cipher Collision
**Answer: B — Information loss due to ambiguous reverse mapping.**

If E→X and T→X, ciphertext X cannot uniquely identify the original character.

## Q28 — 802.1X Password + Server Certificate
**Answer: B — PEAP.**

PEAP creates a protected TLS tunnel, commonly with username/password authentication inside it. EAP-TLS normally uses certificates for both client and server.

## Q29 — Pseudocode
**Answer: B — 12.**

`a+c > c+a` is false. The second comparison is also false, so `c=a+b=6`. Final = `2+4+6=12`.

## Q30 — Pseudocode
**Answer: B — 41, assuming `^` means bitwise XOR.**

`p=3,q=6,r=5`. First condition is true, so `q=17`. `17 XOR 3 = 18`; `20 < 13` is false; `r=21`. Final = `3+17+21=41`.

**Source warning:** The supplied question does not define `^`. This answer assumes bitwise XOR.

## Q31 — Pseudocode
**Answer: A — 12.**

Outer condition: `1+8+3 < 2+3-1` → `12 < 4`, false. Nothing changes. Final = 12.

## Q32 — Recursion
**Answer: A — 5 factorial = 120.**

`n * compute(n-1)` gives `5×4×3×2×1`.

## Q33 — 2D Array + AND
**Answer: A — 5.**

`1 & 2 = 0`; conditional is false; `(5 & 3) & 2 = 1 & 2 = 0`; final `5+0=5`.

## Q34 — Bitwise AND Loop
**Answer: A — 31.**

Starting `a=5,b=2`, after two iterations `b=26`, so `a+b=31`.

## Q35 — Regex
**Answer: A — `AB1234`.**

`^[A-Z]{2}[0-9]{4}$` means exactly two uppercase letters followed by four digits.

## Q36 — Zero-Based Array
**Answer: B — `scores[2]`.**

The third element is index 2.

## Q37 — SQL Employee + Department
**Answer: C — LEFT JOIN from Employees.**

```sql
SELECT E.EmpName, D.DeptTitle
FROM Employees E
LEFT JOIN Departments D
  ON E.DeptID = D.DeptID;
```

This preserves employees with no department.

## Q38 — SQL Count Character
**Answer: B.**

```sql
SELECT EmployeeName,
       LENGTH(EmployeeName) - LENGTH(REPLACE(EmployeeName, 'e', ''))
FROM Staff;
```

Removing all `e` characters reduces the length by the number of `e`s.

## Q39 — Expansion Bus
**Answer: A — PCIe.**

PCI Express is the modern high-speed expansion bus.

## Q40 — SSD Controller Architecture
**Answer: No clean match among the supplied options.**

The description concerns modern SSD/flash-controller caching, but A–D do not cleanly represent that technology. Do not memorize an arbitrary option.

## Q41 — OS Access Control
**Answer: B — Access Control and File Permission Management.**

File permissions and access controls restrict unauthorized reads/writes/execution.

## Q42 — PowerPoint
**Answer: B — Set text animation sequence to By Paragraph.**

This reveals bullet paragraphs individually on successive clicks.

## Q43 — Word Current Time
**Answer: A — Alt + Shift + T.**

This inserts the current time in Word.

## Q44 — Excel INDEX/MATCH
**Answer: D — Cable.**

Minimum Unit Price is 15, which belongs to Cable.

## Q45 — Least Privilege
**Answer: A — User Access Control and Least Privilege Policy.**

Give users only the permissions required for their tasks.

---

# Part 2 — Second Uploaded Set, Questions 1–44

## Q1 — JavaScript `this`
**Answer: A — `button`.**

`this` refers to the clicked button. `tagName` gives `BUTTON`; `.toLowerCase()` gives `button`.

## Q2 — JavaScript `map()`
**Answer: B — 5, 10, 15.**

Each value is divided by two.

## Q3 — Semantic HTML
**Answer: B — `<header>`.**

`<header>` represents introductory/navigation content for a page or section.

## Q4 — Circular Avatar
**Answer: A — `border-radius: 50%;`**

For a square element, 50% radius produces a circle.

## Q5 — Java Inheritance
**Answer: A.**

Java class inheritance uses `extends`.

## Q6 — WAF Advantage
**Answer: C — It intercepts and drops SQL injection and XSS payloads before application servers.**

The other choices describe operational costs or limitations.

## Q7 — Java Class vs Object
**Answer: A — `Book` is the class definition; `myBook` is an object instance.**

`new Book(...)` creates the object.

## Q8 — Java Method Overloading
**Answer: A — Method Overloading / Compile-time Polymorphism.**

Same method name, different parameter lists.

## Q9 — Missing JWT
**Answer: A — 401 Unauthorized.**

Missing/invalid authentication credentials → 401. Authenticated but insufficient permission → 403.

## Q10 — REST Breaking Changes
**Answer: B — Versioned API endpoints such as `/v1/` and `/v2/`.**

Versioning lets old clients continue using the old contract.

## Q11 — DevOps Artifact Storage
**Answer: B — Artifact Repository.**

JARs and container artifacts should be versioned/stored in an artifact repository.

## Q12 — Orders Primary Key
**Answer: C — OrderID.**

A primary key should uniquely identify each order.

## Q13 — Non-repeatable Read
**Answer: B — Non-repeatable Read.**

Same row, different value on a later read within the transaction.

## Q14 — Database CPU Troubleshooting
**Answer: B — Analyze process lists, slow-query logs, and APM metrics.**

Diagnose the bottleneck before changing hardware or rebooting.

## Q15 — Micro-segmentation
**Answer: B — Containing breaches by restricting unauthorized lateral movement.**

## Q16 — IPsec
**Answer: B — ESP.**

ESP provides encryption and can provide integrity/authentication.

## Q17 — Permanent Branch Connectivity
**Answer: A — Site-to-Site VPN.**

Connects networks/branches rather than one individual user device.

## Q18 — Live Streaming
**Answer: B — UDP.**

The question prioritizes low latency and accepts occasional loss.

**Note:** QUIC also runs over UDP and is important in modern systems, but UDP is the intended basic answer here.

## Q19 — IP Routing
**Answer: B — Network Layer (Layer 3).**

IP addressing/routing belongs to Layer 3.

## Q20 — Stateful Firewall
**Answer: B — Stateful Packet Inspection Firewall.**

Tracks connection state.

## Q21 — Cloud Model
**Answer: C — IaaS.**

VPCs, compute instances, and block storage are infrastructure resources.

## Q22 — Dedicated Cloud
**Answer: B — Private Cloud.**

Dedicated infrastructure for one organization.

## Q23 — Virtualization Layer
**Answer: A — Hypervisor.**

A hypervisor virtualizes host hardware for guest OSs.

## Q24 — AWS Shared Responsibility
**Answer: C — Applying OS patches on guest VM instances.**

For typical IaaS VMs, the customer manages the guest OS; the provider manages physical infrastructure/hypervisor.

## Q25 — Resource Pooling
**Answer: B — Dynamically reallocating compute resources from a shared pool based on load.**

This is the foundation of cloud elasticity/resource pooling.

## Q26 — Caesar Cipher
**Answer: B — The message undergoes another +3 shift, effectively producing a +6 transformation and incorrect text.**

Correct decryption of +3 encryption requires -3.

## Q27 — Mutual Certificate Authentication
**Answer: A — EAP-TLS.**

EAP-TLS supports certificate-based authentication of both client and server.

## Q28 — SQL Character Count
**Answer: B.**

`LENGTH(LastName) - LENGTH(REPLACE(LastName, 'a', ''))` counts occurrences of `a`.

## Q29 — Departments With Zero Employees
**Answer: B — LEFT JOIN from Departments.**

```sql
SELECT D.DeptName, E.EmpName
FROM Departments D
LEFT JOIN Employees E
  ON D.DeptID = E.DeptID;
```

## Q30 — Third Array Element
**Answer: B — `scores[2]`.**

Zero-indexing means 1st=0, 2nd=1, 3rd=2.

## Q31 — Regex
Pattern: `[a-zA-Z0-9]{6}`

**Answer: B — `code12`.**

Exactly six alphanumeric characters.

## Q32 — Bitwise Loop — SOURCE ERROR
The supplied options are unrelated strings, but the pseudocode produces a numerical result.

Calculation:

- Start `x=6,y=10`
- Iteration 1: `y=14`; `14 & 12=12`; `y=18`
- Iteration 2: `y=22`; `22 & 12=4`; `y=10`
- Final `x+y = 6+10 = 16`

**Correct numerical result: 16. No supplied option matches.**

## Q33 — 2D Array — SOURCE ERROR
Initial `{{3,5},{4,8}}`.

`arr[0][1] = 4 & 3 = 0`.

`3 > 0`, so `arr[0][0] = 4`.

Final = `0+4 = 4`.

**Correct numerical result: 4. No supplied option (14,16,20,24) matches.**

## Q34 — Recursion
**Answer: B — Sum of consecutive integers from 1 to n.**

`n + sumSeries(n-1)` gives `1+2+...+n`.

## Q35 — Conditional Pseudocode
For `a=2,b=4,c=5`:

`2+4 < 5` is false → `b=2+5=7`.

`c=a+b=9`.

Return `2+7+9=18`.

**Answer: C — 18.**

## Q36 — Bitwise XOR
`3 ^ 6 = 5`, and `5 > 4`, so `p=3+4=7`.

Final `7+6+4=17`.

**Answer: B — 17.**

## Q37 — Simple Conditional — SOURCE ERROR
`a=2,b=3,c=4`.

`a+b+c=9`, and `9 < 5` is false.

Return = **9**.

**No supplied option matches** (15, 17, 21, 25).

## Q38 — CPU/Memory Bus
**Answer: A — System Bus.**

## Q39 — SSD over PCIe
**Answer: B — NVMe.**

NVMe is designed for modern non-volatile storage over PCIe.

## Q40 — Linux File Permissions
**Answer: A — File System Access Control.**

Read/write/execute permissions are enforced through filesystem access controls.

## Q41 — PowerPoint
**Answer: B — Entrance animation + Effect Options → By Paragraph.**

## Q42 — Excel Current Time
**Answer: A — Ctrl + Shift + ;**

`Ctrl + ;` = current date; `Ctrl + Shift + ;` = current time.

## Q43 — Excel INDEX/MATCH
Maximum sales = 450, corresponding to Smartphone.

**Answer: C — Smartphone.**

## Q44 — Least Privilege
**Answer: A — Principle of Least Privilege.**

Users should receive only the minimum permissions required.

---

# High-ROI Topics Repeated Across This Set

## Tier 1 — Revise Hard
- Pseudocode tracing
- SQL JOINs
- SQL string functions
- Transaction anomalies
- OOP inheritance/overloading/overriding
- TCP vs UDP
- Stateful firewall
- IPsec ESP vs AH
- VPN types
- Micro-segmentation
- IaaS/PaaS/SaaS
- Hypervisor
- AWS Shared Responsibility
- OS permissions / least privilege

## Tier 2
- JavaScript `map()`
- DOM `this`
- HTML5 semantic tags
- CSS basics
- DevSecOps quality gates
- Artifact repositories
- WAF/IPS
- PowerPoint/Excel/Word shortcuts

## Tier 3
- Hardware terminology such as PCIe, NVMe, system bus

Given your current placement preparation, do **not** spend disproportionate time memorizing obscure hardware questions while pseudocode/DSA and core CS remain weaker.

---

# Must-Memorize Traps

1. `401` = authentication missing/invalid.
2. `403` = authenticated but not authorized.
3. Non-repeatable read = same row gives different values.
4. Dirty read = uncommitted data read.
5. LEFT JOIN preserves all rows from the left table.
6. ESP can encrypt; AH does not encrypt.
7. Remote individual user → remote-access VPN.
8. Branch/network-to-network → site-to-site VPN.
9. IP routing → OSI Layer 3.
10. TCP/UDP → OSI Layer 4.
11. Stateful firewall tracks connection state.
12. IaaS → customer controls guest OS.
13. Hypervisor → hardware virtualization for guest OSs.
14. Typical IaaS guest OS patching → customer responsibility.
15. PEAP → TLS tunnel commonly carrying inner username/password authentication.
16. EAP-TLS → certificate-based mutual authentication.
17. Overloading → same method name, different parameters.
18. Overriding → derived class replaces inherited method implementation.
19. Java `extends` → class inheritance.
20. `Vehicle v = new ElectricCar()` → Vehicle reference, ElectricCar object.
21. `map()` transforms every element.
22. Event-handler `this` → current HTML element.
23. `border-radius: 0 15px 0 15px` → top-right + bottom-left.
24. `border-radius: 50%` → circular square avatar.
25. `<audio controls>` → native audio controls.
26. Excel `Ctrl + ;` → current date.
27. Excel `Ctrl + Shift + ;` → current time.
28. PowerPoint `By Paragraph` → bullets appear individually.
29. PCIe → high-speed expansion bus.
30. NVMe → modern SSD protocol over PCIe.
31. Least privilege → minimum required permissions.
32. Micro-segmentation → restrict lateral movement.
33. `n * f(n-1)` → factorial.
34. `n + f(n-1)` → sum 1..n.
35. Zero-indexed third element → `[2]`.

---

# Source-Error List

The supplied batch contains several apparent answer-option errors. Treat these as source problems, not concepts to memorize:

- Part 1 Q40: no supplied option cleanly matches the described SSD controller/cache architecture.
- Part 2 Q32: correct numerical result is **16**, but supplied options are unrelated strings.
- Part 2 Q33: correct numerical result is **4**, but no supplied option matches.
- Part 2 Q37: correct numerical result is **9**, but no supplied option matches.
- Part 1 Q30: `^` is not explicitly defined; answer assumes bitwise XOR.
