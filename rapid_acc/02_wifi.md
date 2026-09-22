# Accenture Wi-Fi Security — High-ROI Theory + 20 Practice Questions

## How to use this file

This is intentionally **not a full Wi-Fi networking chapter**.

The theory contains only the concepts that are most useful for solving placement-style Wi-Fi/Wi-Fi-security questions. The questions then test those concepts in scenario, configuration, and direct-MCQ form.

---

# PART 1 — HIGH-ROI THEORY

## 1. WPA / WPA2 / WPA3

### WPA
**WPA = Wi-Fi Protected Access**

An older Wi-Fi security standard introduced as an improvement over WEP.

### WPA2
WPA2 is based on the IEEE 802.11i security standard. Modern WPA2 deployments normally use AES-based protection rather than legacy TKIP.

**Exam pattern:**
- WPA2 → think **AES**
- Old/legacy security → think **WEP/TKIP**

### WPA3
WPA3 is the newer Wi-Fi security generation.

For placement questions, remember its two important modes:

- **WPA3-Personal → SAE**
- **WPA3-Enterprise → 802.1X / EAP**

---

## 2. WPA3-Personal vs WPA3-Enterprise

### WPA3-Personal

Uses:

**SAE = Simultaneous Authentication of Equals**

Think:

> Home / personal Wi-Fi → SAE

### WPA3-Enterprise

Uses:

**802.1X + EAP**

Enterprise authentication commonly involves an authentication server such as a **RADIUS** server.

**RADIUS = Remote Authentication Dial-In User Service**

Think:

> Organization / enterprise → 802.1X / EAP / RADIUS

### One-line memory trick

```text
Personal   → SAE
Enterprise → 802.1X + EAP
```

---

## 3. SAE

**SAE = Simultaneous Authentication of Equals**

SAE is the authentication mechanism associated with WPA3-Personal.

Its important exam-level advantage is that it improves resistance to password-guessing attacks compared with the older WPA2-Personal PSK handshake.

Do NOT memorize:

> SAE makes weak passwords safe.

Instead:

> SAE improves the authentication protocol, but password quality still matters.

---

## 4. 802.1X and EAP

**802.1X** provides port-based network access control.

**EAP = Extensible Authentication Protocol**

In enterprise Wi-Fi, EAP methods are used for authentication.

Common names you may see:

- **EAP-TLS** → certificate-based authentication
- **PEAP** → Protected Extensible Authentication Protocol
- **EAP-TTLS** → EAP Tunneled Transport Layer Security

For Accenture-style MCQs, the key mapping is:

```text
Enterprise Wi-Fi
       ↓
802.1X
       ↓
EAP
       ↓
Authentication server / RADIUS
```

---

## 5. WPA3-Enterprise 192-bit Mode

WPA3-Enterprise also has a **192-bit security mode**, commonly associated with **Suite B / Suite-B-192** terminology.

It is intended for environments requiring a higher cryptographic security level.

Important:

> If a question specifically says **highest-security WPA3-Enterprise / 192-bit mode**, look for **SuiteB192 / 192-bit security**.

Example:

```text
CONFIG_SUITEB192=y  → enabled
CONFIG_SUITEB192=n  → disabled
```

**Do not assume that ordinary WPA3-Enterprise automatically means 192-bit mode.** The 192-bit mode is a distinct option.

---

## 6. PMF

**PMF = Protected Management Frames**

PMF protects Wi-Fi management frames from manipulation.

Placement questions commonly connect PMF with:

- Deauthentication attacks
- Disassociation attacks
- Management-frame spoofing

Memory:

> **PMF → Management frames**

WPA3 requires PMF for WPA3 connections; transition configurations can have different requirements for WPA2 connections.

---

## 7. WPA3 Transition Mode

Transition mode exists to support environments where both WPA3-capable and older WPA2 devices need to connect.

The tradeoff:

```text
WPA3 only
   ↓
Stronger / cleaner security boundary

WPA3 + WPA2 transition
   ↓
Compatibility
   ↓
Potential downgrade/security concerns
```

If an exam question asks about allowing fallback from WPA3 to WPA2, think:

> **Downgrade risk**

---

## 8. Wi-Fi Encryption: AES, CCMP, GCMP

### AES
**AES = Advanced Encryption Standard**

AES is a modern symmetric encryption algorithm widely used for Wi-Fi security.

### CCMP
**CCMP = Counter Mode with Cipher Block Chaining Message Authentication Code Protocol**

For exam purposes:

> WPA2 → commonly associated with **AES-CCMP**

### GCMP
**GCMP = Galois/Counter Mode Protocol**

WPA3 and newer Wi-Fi security configurations can use GCMP, including stronger suites for 192-bit security.

You do NOT need to memorize the internal cryptographic mathematics for placement MCQs.

---

## 9. TKIP

**TKIP = Temporal Key Integrity Protocol**

TKIP is a legacy Wi-Fi security mechanism.

For modern security questions:

```text
TKIP → legacy
AES/CCMP/GCMP → modern direction
```

If an organization enables TKIP just for "compatibility", expect the question to ask about weaker/legacy security.

---

## 10. WEP

**WEP = Wired Equivalent Privacy**

WEP is an obsolete and insecure Wi-Fi security mechanism.

Typical exam mapping:

```text
WEP → obsolete / insecure
TKIP → legacy
WPA2-AES → modern older-generation choice
WPA3 → newer generation
```

Do not spend time studying WEP internals unless the question specifically asks.

---

## 11. Open Wi-Fi and OWE

An ordinary open Wi-Fi network does not provide normal Wi-Fi authentication/encryption.

WPA3 introduced:

**OWE = Opportunistic Wireless Encryption**

OWE can provide encryption for networks that retain an open-style user experience.

Exam distinction:

```text
Open Wi-Fi          → traditionally no Wi-Fi encryption
OWE / Enhanced Open → encryption without a traditional password
```

OWE is different from WPA3-Personal SAE.

---

## 12. PSK

**PSK = Pre-Shared Key**

A shared password/key is used by devices to authenticate to the Wi-Fi network.

Basic placement comparison:

```text
Personal → shared secret/password approach
Enterprise → individual/user/device authentication through 802.1X/EAP
```

Do not confuse:

- **PSK** → authentication/key establishment concept
- **AES** → encryption algorithm
- **SAE** → WPA3-Personal authentication mechanism

---

## 13. RADIUS

**RADIUS = Remote Authentication Dial-In User Service**

In enterprise Wi-Fi, the access point/controller can work with a RADIUS server for centralized authentication.

Simple model:

```text
Wi-Fi Client
     ↓
Access Point
     ↓
802.1X / EAP
     ↓
RADIUS / Authentication Server
```

If a question says:

> "Central authentication server for enterprise Wi-Fi"

Think:

> **RADIUS**

---

## 14. EAP-TLS

**EAP-TLS = Extensible Authentication Protocol - Transport Layer Security**

It uses certificates for authentication.

Important exam clue:

> If the question says **certificate-based enterprise Wi-Fi authentication**, think **EAP-TLS**.

For WPA3-Enterprise 192-bit security, EAP-TLS is particularly relevant.

---

## 15. WPA3 Security Keyword Map

Memorize this table:

| Keyword in question | Think |
|---|---|
| WPA3-Personal | SAE |
| WPA3-Enterprise | 802.1X / EAP |
| Enterprise authentication server | RADIUS |
| Certificate authentication | EAP-TLS |
| Management-frame protection | PMF |
| Deauthentication spoofing | PMF |
| Highest WPA3-Enterprise security | 192-bit / Suite-B-192 |
| `CONFIG_SUITEB192=n` | 192-bit disabled |
| Legacy Wi-Fi cipher | TKIP |
| Obsolete Wi-Fi security | WEP |
| WPA3 → WPA2 fallback | Downgrade risk |
| Open network + encryption | OWE |
| Shared Wi-Fi password | PSK |
| Modern Wi-Fi encryption | AES / CCMP / GCMP |

---

# PART 2 — 20 ACCENTURE-STYLE WIFI QUESTIONS

## Q1. WPA3-Personal Authentication

Which authentication mechanism is primarily associated with WPA3-Personal?

A) RADIUS  
B) SAE  
C) EAP-TLS  
D) TKIP

**Answer: B) SAE**

**Explanation:** SAE (Simultaneous Authentication of Equals) is the authentication mechanism used by WPA3-Personal.

**Options:**
- A) RADIUS → authentication server commonly used in enterprise networks.
- B) SAE → WPA3-Personal authentication.
- C) EAP-TLS → certificate-based EAP method used in enterprise authentication.
- D) TKIP → legacy security protocol.

---

## Q2. Enterprise Authentication

A company wants centralized authentication for employee Wi-Fi accounts. Which combination is most appropriate?

A) SAE + WEP  
B) 802.1X + EAP + RADIUS  
C) TKIP + PSK  
D) OWE + WEP

**Answer: B) 802.1X + EAP + RADIUS**

**Explanation:** Enterprise Wi-Fi commonly uses 802.1X/EAP with an authentication server such as RADIUS.

**Options:**
- A → SAE is associated with WPA3-Personal.
- B → Correct enterprise model.
- C → TKIP is legacy; PSK is not the typical centralized enterprise model.
- D → OWE is for open-style networks.

---

## Q3. PMF

An attacker attempts to forge Wi-Fi deauthentication frames. Which feature helps protect against management-frame attacks?

A) PMF  
B) PSK  
C) RADIUS  
D) NAT

**Answer: A) PMF**

**Explanation:** PMF protects Wi-Fi management frames.

**Options:**
- A → Protected Management Frames.
- B → Pre-Shared Key.
- C → Authentication server.
- D → Network Address Translation; unrelated.

---

## Q4. WPA3-Enterprise 192-bit

A government network requires the 192-bit security mode of WPA3-Enterprise. Which setting should be enabled?

A) TKIP  
B) WEP  
C) SuiteB-192  
D) Open authentication

**Answer: C) SuiteB-192**

**Explanation:** Suite-B-192 is associated with WPA3-Enterprise's 192-bit security mode.

**Options:**
- A → Legacy protocol.
- B → Obsolete security.
- C → Correct.
- D → Does not provide enterprise authentication.

---

## Q5. Configuration Question

Given:

```text
CONFIG_SAE=y
CONFIG_SUITEB=y
CONFIG_SUITEB192=n
```

A system requires WPA3-Enterprise 192-bit security. Which line is problematic?

A) CONFIG_SAE=y  
B) CONFIG_SUITEB=y  
C) CONFIG_SUITEB192=n  
D) None

**Answer: C) CONFIG_SUITEB192=n**

**Explanation:** `n` means the 192-bit Suite B capability is disabled.

---

## Q6. WPA3-Personal vs Enterprise

Which statement is correct?

A) WPA3-Personal uses RADIUS for every connection  
B) WPA3-Personal uses SAE  
C) WPA3-Enterprise uses only WEP  
D) WPA3-Enterprise cannot use 802.1X

**Answer: B) WPA3-Personal uses SAE**

**Explanation:** This is one of the highest-value WPA3 mappings.

---

## Q7. Legacy Security

An administrator enables TKIP on a new enterprise WLAN solely for compatibility. What is the primary concern?

A) Stronger cryptography  
B) Legacy/weaker security  
C) Automatic 192-bit security  
D) Automatic certificate authentication

**Answer: B) Legacy/weaker security**

**Explanation:** TKIP is a legacy Wi-Fi security mechanism.

---

## Q8. WEP

Which Wi-Fi security technology is considered obsolete and insecure?

A) WPA3  
B) WPA2-AES  
C) WEP  
D) EAP-TLS

**Answer: C) WEP**

**Explanation:** WEP is obsolete and should not be used for modern secure deployments.

---

## Q9. Downgrade Attack

An administrator allows clients to connect using either WPA3 or WPA2. What security concern can arise?

A) Downgrade to the weaker protocol  
B) Automatic 192-bit encryption  
C) Stronger SAE authentication for WPA2  
D) RADIUS becomes mandatory

**Answer: A) Downgrade to the weaker protocol**

**Explanation:** Allowing a weaker fallback can create downgrade/security risks.

---

## Q10. OWE

A public Wi-Fi operator wants an open-style network experience but wants to provide wireless encryption without requiring users to enter a traditional Wi-Fi password. Which technology is relevant?

A) OWE  
B) SAE  
C) WEP  
D) TKIP

**Answer: A) OWE**

**Explanation:** OWE (Opportunistic Wireless Encryption) is designed for enhanced protection of open-style Wi-Fi.

**Options:**
- A → Correct.
- B → WPA3-Personal authentication.
- C → Obsolete.
- D → Legacy.

---

## Q11. Certificate Authentication

A company wants certificate-based authentication for enterprise Wi-Fi. Which EAP method should you associate with this requirement?

A) EAP-TLS  
B) TKIP  
C) SAE  
D) PSK

**Answer: A) EAP-TLS**

**Explanation:** EAP-TLS uses certificates for authentication.

---

## Q12. RADIUS

Which component commonly provides centralized authentication for enterprise Wi-Fi?

A) RADIUS server  
B) DHCP switch  
C) NAT gateway  
D) DNS resolver

**Answer: A) RADIUS server**

**Explanation:** RADIUS can provide centralized authentication/accounting services for enterprise network access.

---

## Q13. Encryption Algorithm

Which is a modern symmetric encryption standard commonly used in secure Wi-Fi?

A) AES  
B) WEP  
C) RC4  
D) DES

**Answer: A) AES**

**Explanation:** AES (Advanced Encryption Standard) is widely used for modern Wi-Fi security.

**Options:**
- A → Modern symmetric encryption standard.
- B → Obsolete Wi-Fi security mechanism.
- C → Legacy cipher.
- D → Legacy block cipher.

---

## Q14. WPA2

Which encryption approach is commonly associated with WPA2 deployments?

A) AES-CCMP  
B) WEP  
C) Plaintext  
D) RC4-only

**Answer: A) AES-CCMP**

**Explanation:** WPA2 commonly uses AES-CCMP for data protection.

---

## Q15. Management Frames

Which statement about PMF is correct?

A) It protects Wi-Fi management frames  
B) It replaces RADIUS  
C) It is a database protocol  
D) It provides IP routing

**Answer: A) It protects Wi-Fi management frames**

**Explanation:** PMF = Protected Management Frames.

---

## Q16. Scenario

A university wants separate credentials for each student instead of one shared Wi-Fi password. Which architecture is most suitable?

A) Enterprise Wi-Fi with 802.1X/EAP  
B) WPA3-Personal with one shared password  
C) WEP  
D) Open Wi-Fi

**Answer: A) Enterprise Wi-Fi with 802.1X/EAP**

**Explanation:** Enterprise authentication supports centralized/individual authentication.

---

## Q17. SAE Meaning

What does SAE stand for?

A) Secure Access Encryption  
B) Simultaneous Authentication of Equals  
C) System Authentication Encryption  
D) Secure AES Environment

**Answer: B) Simultaneous Authentication of Equals**

---

## Q18. Configuration Interpretation

Consider:

```text
CONFIG_SAE=y
```

What does `y` generally indicate in this type of configuration?

A) Feature disabled  
B) Feature enabled  
C) Feature deprecated  
D) Feature removed

**Answer: B) Feature enabled**

**Explanation:** In common build/configuration notation, `y` means enabled and `n` means disabled.

---

## Q19. Highest-Security Clue

A question says:

> "Use WPA3-Enterprise with the highest available cryptographic security for sensitive information."

Which keyword should immediately attract your attention?

A) TKIP  
B) WEP  
C) Suite-B-192 / 192-bit  
D) Open Wi-Fi

**Answer: C) Suite-B-192 / 192-bit**

**Explanation:** The wording "highest security", "192-bit", or sensitive/high-security enterprise deployment should make you think of WPA3-Enterprise's 192-bit mode.

---

## Q20. Mixed Scenario

A security engineer is configuring an enterprise WLAN:

```text
WPA3-Enterprise
802.1X
EAP-TLS
PMF
Suite-B-192
```

Which statement is correct?

A) SAE is the main authentication method in this configuration  
B) EAP-TLS provides certificate-based enterprise authentication  
C) TKIP provides the 192-bit security  
D) PMF provides user authentication

**Answer: B) EAP-TLS provides certificate-based enterprise authentication**

**Explanation:** EAP-TLS is the certificate-based EAP method. PMF protects management frames, while Suite-B-192 refers to the higher-security cryptographic mode.

**Options:**
- A) ❌ SAE → primarily WPA3-Personal.
- B) ✅ EAP-TLS → certificate-based authentication.
- C) ❌ TKIP is legacy.
- D) ❌ PMF protects management frames; it isn't the user-authentication mechanism.

---

# PART 3 — 30-SECOND REVISION

Before an Accenture Wi-Fi question, recall:

```text
WPA3-Personal      → SAE
WPA3-Enterprise    → 802.1X + EAP
Enterprise server  → RADIUS
Certificate auth   → EAP-TLS
Management frames  → PMF
Highest WPA3-Ent.  → Suite-B-192 / 192-bit
TKIP               → Legacy
WEP                → Obsolete
WPA3 + WPA2        → Transition / downgrade concern
Open + encryption  → OWE
WPA2               → AES-CCMP
AES                → Modern symmetric encryption
PSK                → Pre-Shared Key
```

## Priority

### Must memorize
1. WPA3-Personal → SAE
2. WPA3-Enterprise → 802.1X/EAP
3. PMF → management-frame protection
4. Suite-B-192 → WPA3-Enterprise 192-bit mode
5. RADIUS → centralized enterprise authentication
6. EAP-TLS → certificate authentication
7. TKIP/WEP → legacy/obsolete
8. WPA3→WPA2 fallback → downgrade concern
9. OWE → encrypted open-style Wi-Fi
10. WPA2 → AES-CCMP

### Can skip for now

You do **not** need deep knowledge of:
- 802.11 frame formats
- RF propagation
- modulation schemes
- detailed cryptographic mathematics
- AKM suite numeric IDs
- internal WPA handshake packet structure

Those topics have low placement ROI for the type of questions you are currently preparing for.

---

# SOURCES USED FOR THE THEORY

- Cisco WPA3 Deployment Guide: WPA3-Enterprise, 802.1X, PMF and 192-bit Suite-B security.
- Cisco Wi-Fi 6E WLAN Layer 2 Security documentation: WPA3-Personal/Enterprise modes, SAE, PMF, OWE and 192-bit mode.
- NIST CSRC: WPA2 definition and AES-related cryptographic guidance.
- Wi-Fi Alliance certification material: WPA3-Personal and WPA3-Enterprise certification capabilities.

The theory above is intentionally simplified to the level needed for placement MCQs rather than being a complete Wi-Fi security reference.
