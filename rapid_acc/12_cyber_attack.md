# Accenture Cyber Attack — 40 High-Return MCQs

> Focus: high-frequency attack identification and scenario recognition.
> The 10 supplied routing/DNS/ARP/BGP questions are intentionally NOT repeated.

---

## 1. SQL Injection

A web application directly concatenates user input into a SQL query. An attacker enters crafted SQL syntax to retrieve unauthorized database records. What attack is this?

A) XSS
B) SQL Injection
C) CSRF
D) SSRF

**Answer: B) SQL Injection**

**Pattern:** Malicious input changes the structure/meaning of a database query → **SQL Injection**.

---

## 2. Cross-Site Scripting

An attacker stores malicious JavaScript in a comment field. Other users open the page and the script executes in their browsers.

A) SQL Injection
B) XSS
C) CSRF
D) Command Injection

**Answer: B) XSS**

**Pattern:** Attacker-controlled script executes in a victim's browser → **XSS**.

---

## 3. Stored XSS

A malicious script is permanently stored in a website's database and executes whenever users view the affected page.

A) Reflected XSS
B) Stored XSS
C) CSRF
D) SSRF

**Answer: B) Stored XSS**

**Pattern:** Script is stored on the server/application → **Stored XSS**.

---

## 4. Reflected XSS

A malicious script is included in a crafted URL and immediately reflected by the vulnerable web application into the response.

A) Stored XSS
B) Reflected XSS
C) SQL Injection
D) Ransomware

**Answer: B) Reflected XSS**

**Pattern:** Malicious input is reflected immediately in the response → **Reflected XSS**.

---

## 5. Cross-Site Request Forgery

A victim is logged into a banking website. They visit an attacker's page, which causes the victim's browser to submit an unwanted money-transfer request using the existing session.

A) CSRF
B) XSS
C) SQL Injection
D) Session fixation

**Answer: A) CSRF**

**Pattern:** Victim's authenticated browser is tricked into performing an unwanted action → **CSRF**.

---

## 6. Server-Side Request Forgery

A vulnerable web server accepts a URL supplied by the user and fetches it. An attacker uses this functionality to make the server request an internal cloud metadata endpoint.

A) SSRF
B) XSS
C) CSRF
D) Port scanning

**Answer: A) SSRF**

**Pattern:** Attacker makes the **server** send requests to unintended destinations → **SSRF**.

---

## 7. Command Injection

A web application passes unsanitized user input into an operating-system command. An attacker adds shell commands and gets them executed by the server.

A) SQL Injection
B) Command Injection
C) XSS
D) CSRF

**Answer: B) Command Injection**

**Pattern:** User input executes OS/shell commands → **Command Injection**.

---

## 8. Path Traversal

An attacker manipulates a filename such as `../../etc/passwd` to access files outside the application's intended directory.

A) Path Traversal
B) SQL Injection
C) XSS
D) CSRF

**Answer: A) Path Traversal**

**Pattern:** `../` or directory traversal used to access unauthorized files → **Path Traversal**.

---

## 9. File Inclusion

A vulnerable application allows an attacker to manipulate a parameter so that the server includes an unintended local file.

A) Local File Inclusion
B) SYN Flood
C) Password Spraying
D) XSS

**Answer: A) Local File Inclusion**

**Pattern:** Application includes an unintended file from the local system → **LFI**.

---

## 10. Remote File Inclusion

A poorly configured application allows an attacker to cause the server to include and execute a file hosted on an attacker-controlled remote server.

A) RFI
B) CSRF
C) SQL Injection
D) Session Hijacking

**Answer: A) RFI**

**RFI = Remote File Inclusion.**

---

## 11. Brute-Force Attack

An attacker repeatedly tries many possible passwords against a single account until one succeeds.

A) Credential Stuffing
B) Brute Force
C) Password Spraying
D) Phishing

**Answer: B) Brute Force**

**Pattern:** Many password combinations against an account → **Brute Force**.

---

## 12. Password Spraying

An attacker tries one common password against hundreds of different user accounts to avoid account lockouts.

A) Brute Force
B) Password Spraying
C) Credential Stuffing
D) Phishing

**Answer: B) Password Spraying**

**Pattern:** Few/common passwords → many accounts → **Password Spraying**.

---

## 13. Credential Stuffing

Attackers use username/password pairs leaked from another website to log into accounts on the target service.

A) Brute Force
B) Credential Stuffing
C) Password Spraying
D) Shoulder Surfing

**Answer: B) Credential Stuffing**

**Pattern:** Previously leaked valid credentials reused across services → **Credential Stuffing**.

---

## 14. Session Hijacking

An attacker obtains a victim's valid session token and uses it to access the victim's authenticated account.

A) Session Hijacking
B) Password Spraying
C) SQL Injection
D) CSRF

**Answer: A) Session Hijacking**

**Pattern:** Stolen session ID/token → **Session Hijacking**.

---

## 15. Session Fixation

An attacker causes a victim to authenticate using a session identifier already known to the attacker.

A) Session Fixation
B) Session Hijacking
C) Credential Stuffing
D) XSS

**Answer: A) Session Fixation**

**Pattern:** Attacker establishes/knows the session ID before authentication → **Session Fixation**.

---

## 16. Replay Attack

An attacker captures a previously valid authentication message and sends the same message again later to gain unauthorized access.

A) Replay Attack
B) Brute Force
C) XSS
D) SQL Injection

**Answer: A) Replay Attack**

**Pattern:** Capture valid communication → reuse it later → **Replay**.

---

## 17. Man-in-the-Middle

An attacker secretly positions themselves between two communicating parties and can intercept or modify their communication.

A) MITM
B) DDoS
C) Ransomware
D) Privilege Escalation

**Answer: A) MITM**

**MITM = Man-in-the-Middle.**

---

## 18. Evil Twin

An attacker creates a fake Wi-Fi access point that looks like a legitimate public hotspot and tricks users into connecting.

A) Evil Twin
B) SQL Injection
C) Botnet
D) Ransomware

**Answer: A) Evil Twin**

**Pattern:** Fake Wi-Fi AP impersonating a legitimate network → **Evil Twin**.

---

## 19. Rogue Access Point

An unauthorized wireless access point is connected to an organization's network without approval.

A) Rogue Access Point
B) Evil Twin
C) DHCP Server
D) VPN Gateway

**Answer: A) Rogue Access Point**

**Difference:** Rogue AP = unauthorized AP; Evil Twin = fake AP impersonating a trusted network.

---

## 20. SYN Flood

An attacker sends huge numbers of TCP SYN requests but does not complete the handshake, exhausting server resources.

A) SYN Flood
B) UDP Flood
C) SQL Injection
D) Smishing

**Answer: A) SYN Flood**

**Pattern:** TCP connection requests without completing handshake → **SYN Flood**.

---

## 21. UDP Flood

An attacker sends a very large number of UDP packets to overwhelm a target's network or processing capacity.

A) UDP Flood
B) SYN Flood
C) XSS
D) Credential Stuffing

**Answer: A) UDP Flood**

**Pattern:** Large volume of UDP traffic → **UDP Flood**.

---

## 22. HTTP Flood

An attacker sends huge numbers of apparently legitimate HTTP requests to exhaust a web application's resources.

A) HTTP Flood
B) ARP Poisoning
C) SQL Injection
D) Password Spraying

**Answer: A) HTTP Flood**

**Pattern:** Application-layer request flood → **HTTP Flood**.

---

## 23. Distributed Denial of Service

Thousands of compromised devices simultaneously send traffic toward one target, overwhelming its resources.

A) DoS
B) DDoS
C) Brute Force
D) Port Scanning

**Answer: B) DDoS**

**DDoS = Distributed Denial of Service.**

---

## 24. Botnet

A large collection of compromised devices is remotely controlled by an attacker and used to launch attacks.

A) Botnet
B) Firewall
C) Honeypot
D) Proxy

**Answer: A) Botnet**

**Pattern:** Network of compromised devices under attacker control → **Botnet**.

---

## 25. Ransomware

Malware encrypts an organization's files and demands payment for restoring access.

A) Spyware
B) Ransomware
C) Adware
D) Rootkit

**Answer: B) Ransomware**

**Pattern:** Encrypt/lock data + demand payment → **Ransomware**.

---

## 26. Trojan Horse

An attacker disguises malicious software as a legitimate application so that the victim installs it.

A) Trojan
B) Worm
C) Ransomware
D) Rootkit

**Answer: A) Trojan**

**Pattern:** Malware disguised as legitimate software → **Trojan**.

---

## 27. Worm

Malware automatically spreads from one vulnerable system to another without requiring the user to manually install it on every system.

A) Trojan
B) Worm
C) Spyware
D) Adware

**Answer: B) Worm**

**Pattern:** Self-spreading malware → **Worm**.

---

## 28. Rootkit

An attacker installs software designed to maintain privileged access while hiding malicious processes or files from normal system tools.

A) Rootkit
B) Worm
C) Trojan
D) Botnet

**Answer: A) Rootkit**

**Pattern:** Hide malicious activity + maintain privileged access → **Rootkit**.

---

## 29. Privilege Escalation

An attacker compromises a normal user account and exploits a vulnerability to obtain administrator-level privileges.

A) Privilege Escalation
B) Port Scanning
C) Phishing
D) DDoS

**Answer: A) Privilege Escalation**

**Pattern:** Low privilege → higher privilege → **Privilege Escalation**.

---

## 30. Zero-Day Exploitation

Attackers exploit a software vulnerability before the vendor has released a patch or effective fix.

A) Zero-Day Exploitation
B) Brute Force
C) SQL Injection
D) Password Spraying

**Answer: A) Zero-Day Exploitation**

**Pattern:** Unknown/unpatched vulnerability being exploited → **Zero-Day**.

---

## 31. Phishing

An attacker sends a fraudulent email pretending to be a trusted organization and asks the victim to click a malicious login link.

A) Phishing
B) Vishing
C) Smishing
D) Tailgating

**Answer: A) Phishing**

**Pattern:** General fraudulent electronic message, commonly email → **Phishing**.

---

## 32. Vishing

An attacker calls a victim while pretending to be a bank employee and asks for authentication information.

A) Phishing
B) Vishing
C) Smishing
D) Shoulder Surfing

**Answer: B) Vishing**

**Vishing = Voice phishing.**

---

## 33. Smishing

A victim receives a fraudulent SMS containing a malicious link that claims to be from a delivery company.

A) Vishing
B) Smishing
C) Phishing
D) Tailgating

**Answer: B) Smishing**

**Smishing = SMS phishing.**

---

## 34. Social Engineering

An attacker manipulates an employee into revealing confidential information by pretending to be an IT administrator.

A) Social Engineering
B) SQL Injection
C) DDoS
D) Port Scanning

**Answer: A) Social Engineering**

**Pattern:** Manipulating people rather than exploiting software directly → **Social Engineering**.

---

## 35. Tailgating

An unauthorized person follows an employee through a secure door without using their own access credentials.

A) Tailgating
B) Phishing
C) Credential Stuffing
D) Shoulder Surfing

**Answer: A) Tailgating**

**Pattern:** Physically following an authorized person into a restricted area → **Tailgating**.

---

## 36. Shoulder Surfing

An attacker watches someone enter their password in a public place and later uses the observed credentials.

A) Shoulder Surfing
B) Phishing
C) Smishing
D) Session Fixation

**Answer: A) Shoulder Surfing**

**Pattern:** Observing sensitive information physically → **Shoulder Surfing**.

---

## 37. Port Scanning

An attacker scans a server to determine which TCP/UDP ports and services are reachable.

A) Port Scanning
B) Privilege Escalation
C) Ransomware
D) XSS

**Answer: A) Port Scanning**

**Pattern:** Discover open ports/services → **Port Scanning**.

---

## 38. Vulnerability Scanning

A security tool checks systems for known vulnerabilities, missing patches, and insecure configurations.

A) Vulnerability Scanning
B) Password Spraying
C) Session Hijacking
D) DDoS

**Answer: A) Vulnerability Scanning**

**Pattern:** Find known weaknesses/misconfigurations → **Vulnerability Scanning**.

---

## 39. Data Exfiltration

After compromising a company's server, an attacker secretly transfers sensitive customer records to an external server.

A) Data Exfiltration
B) Data Replication
C) Load Balancing
D) Sandboxing

**Answer: A) Data Exfiltration**

**Pattern:** Unauthorized extraction/transfer of data → **Data Exfiltration**.

---

## 40. Supply Chain Attack

Attackers compromise a widely used software dependency or vendor's build process so malicious code reaches many downstream customers.

A) Supply Chain Attack
B) Brute Force
C) SYN Flood
D) Port Scanning

**Answer: A) Supply Chain Attack**

**Pattern:** Compromise trusted vendor/dependency → attack downstream users → **Supply Chain Attack**.

---

# High-Return Cyber Attack Memory Map

| Scenario | Attack |
|---|---|
| Manipulate database query | SQL Injection |
| Script executes in browser | XSS |
| Script stored on server | Stored XSS |
| Script reflected immediately | Reflected XSS |
| Trick authenticated browser into action | CSRF |
| Server makes attacker-controlled request | SSRF |
| Execute OS command through input | Command Injection |
| `../` used to escape directory | Path Traversal |
| Include local unintended file | LFI |
| Include remote attacker file | RFI |
| Many passwords → one account | Brute Force |
| One/few common passwords → many accounts | Password Spraying |
| Leaked credentials reused | Credential Stuffing |
| Stolen session token | Session Hijacking |
| Attacker knows session ID beforehand | Session Fixation |
| Capture valid message and reuse | Replay |
| Intercept communication | MITM |
| Fake Wi-Fi impersonating trusted hotspot | Evil Twin |
| Unauthorized AP | Rogue AP |
| TCP SYN requests overwhelm server | SYN Flood |
| Massive UDP traffic | UDP Flood |
| Massive HTTP requests | HTTP Flood |
| Many compromised devices attack target | DDoS |
| Network of compromised devices | Botnet |
| Encrypt files + demand payment | Ransomware |
| Malware disguised as legitimate software | Trojan |
| Self-spreading malware | Worm |
| Hide privileged malicious access | Rootkit |
| Gain higher privileges | Privilege Escalation |
| Exploit before patch/fix | Zero-Day |
| Fraudulent email/message | Phishing |
| Fraudulent phone call | Vishing |
| Fraudulent SMS | Smishing |
| Manipulate a person | Social Engineering |
| Follow employee through secure door | Tailgating |
| Observe password physically | Shoulder Surfing |
| Discover open ports | Port Scanning |
| Find known vulnerabilities | Vulnerability Scanning |
| Steal data to external system | Data Exfiltration |
| Compromise trusted vendor/dependency | Supply Chain Attack |

## Important Distinctions

### Brute Force vs Password Spraying vs Credential Stuffing
- **Brute Force:** many passwords → one account
- **Password Spraying:** one/few common passwords → many accounts
- **Credential Stuffing:** leaked username/password pairs → another service

### XSS vs SQL Injection vs CSRF vs SSRF
- **XSS:** attacker's script executes in the victim's browser
- **SQL Injection:** malicious input changes database query
- **CSRF:** victim's browser is tricked into performing an authenticated action
- **SSRF:** vulnerable server is tricked into making a request

### DoS vs DDoS
- **DoS:** attack from one/fewer sources
- **DDoS:** distributed attack from many compromised sources

### Trojan vs Worm vs Ransomware vs Rootkit
- **Trojan:** disguised as legitimate software
- **Worm:** self-spreads
- **Ransomware:** locks/encrypts data for extortion
- **Rootkit:** hides malicious activity and maintains privileged access

### Phishing Family
- **Phishing:** fraudulent electronic message
- **Vishing:** voice/phone
- **Smishing:** SMS

### Discovery vs Exploitation
- **Port scanning:** discovers reachable ports/services
- **Vulnerability scanning:** discovers known weaknesses
- **Exploitation:** uses a weakness to gain unauthorized capability

---

# 60-Second Exam Revision

**Database → SQLi**

**Browser script → XSS**

**Authenticated browser tricked → CSRF**

**Server tricked into making request → SSRF**

**OS command execution → Command Injection**

**File path escape → Path Traversal**

**Many passwords/one account → Brute Force**

**One common password/many accounts → Password Spraying**

**Leaked credentials reused → Credential Stuffing**

**Stolen session token → Session Hijacking**

**Capture + reuse valid message → Replay**

**Intercept communication → MITM**

**Fake Wi-Fi → Evil Twin**

**TCP SYN flood → SYN Flood**

**Many attacking machines → DDoS**

**Compromised device army → Botnet**

**Encrypt + ransom → Ransomware**

**Disguised malware → Trojan**

**Self-spreading → Worm**

**Hidden privileged malware → Rootkit**

**Higher privileges → Privilege Escalation**

**Unpatched/unknown vulnerability → Zero-Day**

**Email → Phishing**

**Phone → Vishing**

**SMS → Smishing**

**Human manipulation → Social Engineering**

**Physical following → Tailgating**

**Observe password → Shoulder Surfing**

**Open ports → Port Scanning**

**Known weaknesses → Vulnerability Scanning**

**Steal data → Exfiltration**

**Compromised vendor/dependency → Supply Chain Attack**
