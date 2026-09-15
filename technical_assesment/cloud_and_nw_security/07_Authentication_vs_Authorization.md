# Authentication vs Authorization — Accenture Technical Assessment

## 1. Exam Priority

**Priority: 🔴 MUST KNOW**

Core areas:
- Authentication vs Authorization
- Identity
- Credentials
- Access control
- Password authentication
- MFA
- Session-based authentication
- Token-based authentication
- JWT
- OAuth 2.0
- RBAC
- Least privilege
- 401 vs 403
- Authentication vs accounting/auditing

### The most important distinction

**Authentication = Who are you?**

**Authorization = What are you allowed to do?**

Memory hook:

> **AuthN → Identity**  
> **AuthZ → Permissions**

---

# 2. Authentication

### Exam-ready definition

**Authentication is the process of verifying the identity of a user, device, or system.**

It answers:

> **"Who are you?"**

### Real-life analogy

At a college gate, you show your ID card to prove that you are a student.

That is **authentication**.

### Common authentication factors

#### 1. Something you know
- Password
- PIN
- Security answer

#### 2. Something you have
- Phone
- Hardware security key
- Smart card
- OTP-generating device

#### 3. Something you are
- Fingerprint
- Face
- Iris
- Other biometric characteristic

### 🔴 Must know

**Authentication verifies identity.**

---

# 3. Authorization

### Exam-ready definition

**Authorization is the process of determining what an authenticated user, device, or system is permitted to access or perform.**

It answers:

> **"What are you allowed to do?"**

### Real-life analogy

After showing your college ID, a security guard checks whether you are allowed into the **computer lab**.

ID verification = Authentication.

Permission to enter the lab = Authorization.

### Examples

A user may be authorized to:
- Read a file
- Edit a document
- Delete a record
- Access an API endpoint
- View financial data
- Manage users

### 🔴 Must know

**Authorization determines permissions/access.**

---

# 4. Authentication vs Authorization

| Feature | Authentication | Authorization |
|---|---|---|
| Question | Who are you? | What can you do? |
| Purpose | Verify identity | Determine permissions |
| Happens | Usually before authorization | Usually after identity is established |
| Example | Password/login | Admin can delete users |
| Related concept | Credentials | Access control |
| Memory | Identity | Permission |

### Golden rule

**You generally authenticate first, then authorize.**

Example:

`Login → Identity verified → Permissions checked → Resource accessed`

---

# 5. Authentication Factors

Authentication factors are commonly divided into three major categories.

### Knowledge factor

Something you know:
- Password
- PIN

### Possession factor

Something you have:
- Phone
- Security key
- Smart card

### Inherence factor

Something you are:
- Fingerprint
- Face
- Iris

### Common MCQ trap

A password is:

**Something you know**

A fingerprint is:

**Something you are**

A hardware security key is:

**Something you have**

---

# 6. Multi-Factor Authentication (MFA)

### Exam-ready definition

**MFA requires authentication using two or more independent authentication factors.**

Example:

**Password + hardware security key**

This uses:
- Something you know
- Something you have

### Important distinction

Two passwords are **not necessarily MFA** because both are the same factor category: something you know.

### MFA vs 2FA

**2FA = exactly two authentication factors.**

**MFA = two or more factors.**

Therefore, 2FA is a type of MFA.

### Common MCQ trap

> Password + PIN

This is two credentials, but both are **knowledge factors**, so it is not true multi-factor authentication.

---

# 7. Credentials

### Definition

**Credentials are information or objects used to establish or verify identity.**

Examples:
- Username/password
- Security token
- Certificate
- Biometric authentication data

### Important

A username alone usually identifies a claimed identity.

A password helps prove possession of the associated secret.

---

# 8. Password Authentication

Typical flow:

1. User enters username/password.
2. Server identifies the account.
3. Server verifies the password against a securely stored password representation.
4. If correct, the user is authenticated.
5. The system establishes an authenticated session or issues a token.

### Security rule

Never store user passwords in plaintext.

Use a suitable password hashing/KDF mechanism such as:
- Argon2
- bcrypt
- scrypt
- PBKDF2

with an appropriate salt and configuration.

### Connection to Topic 06

**Authentication → Passwords → Password hashing**

---

# 9. Session-Based Authentication

After successful login, a server may create a session.

Typical flow:

`Login → Server validates credentials → Session created → Session ID sent to client → Client sends session ID with later requests`

The server uses the session ID to identify the authenticated session.

### Important security concerns

- Session hijacking
- Session fixation
- Session theft
- Weak session identifiers
- Improper session expiration

### Common protections

- HTTPS/TLS
- Secure random session IDs
- Secure and HttpOnly cookie attributes
- Appropriate SameSite settings
- Session expiration
- Session invalidation after logout

---

# 10. Token-Based Authentication

Instead of relying on a server-side session for every request, an application may issue a token after successful authentication.

Flow:

`Login → Authentication → Token issued → Client sends token → Server validates token`

### Important

A token is typically evidence of an authenticated state/authorization context. It is not automatically proof of identity merely because it exists; the server must validate it correctly.

---

# 11. JWT

### Exam-ready definition

**JWT (JSON Web Token) is a compact, URL-safe token format used to represent claims between parties.**

A JWT commonly has:

`Header.Payload.Signature`

### Three parts

#### Header
Contains metadata such as the signing algorithm/type.

#### Payload
Contains claims.

Examples:
- `sub`
- `iss`
- `aud`
- `exp`

#### Signature
Helps verify that the token was not modified and, depending on the signing method, provides evidence of who signed it.

### Critical point

A normal signed JWT is **not automatically encrypted**.

Its payload is commonly encoded, not encrypted.

### Common MCQ trap

**Base64URL encoding ≠ encryption.**

Do not put sensitive information into a JWT payload merely because it is "signed."

---

# 12. Authentication vs JWT

JWT itself is a **token format**, not an authentication protocol by itself.

It can be used in authentication systems to carry claims about an authenticated subject.

### Important exam distinction

- Authentication → verifying identity
- JWT → token format for carrying claims
- Authorization → deciding permitted actions

---

# 13. OAuth 2.0

### Exam-ready definition

**OAuth 2.0 is an authorization framework that allows a client application to obtain limited access to resources on behalf of a resource owner.**

### Famous example

You allow an application to access selected information from another service without giving that application your password.

### Key idea

OAuth is primarily about:

**Delegated authorization**

### Common MCQ trap

OAuth 2.0 is **not primarily an authentication protocol**.

For user authentication/identity, **OpenID Connect (OIDC)** is built on top of OAuth 2.0.

---

# 14. RBAC

### Exam-ready definition

**RBAC (Role-Based Access Control) assigns permissions to roles and assigns users to those roles.**

Example:

`User → Developer role → Read/write code repository`

`User → Viewer role → Read-only access`

### Advantages

- Easier permission management
- Centralized role definitions
- Reduces repetitive per-user permission configuration

### Common roles

- Admin
- Developer
- Manager
- Viewer
- Auditor

### Memory

**RBAC = Role → Permissions → User**

---

# 15. Least Privilege

### Exam-ready definition

**The principle of least privilege gives a user, process, or system only the minimum permissions required to perform its task.**

Example:

A reporting application needs to read sales data.

Do not give it permission to:
- Delete the database
- Create administrators
- Modify unrelated systems

### Why?

If the account is compromised, the attacker's potential damage is reduced.

### 🔴 Must know

**Least privilege = minimum necessary access.**

---

# 16. Access Control Models

### DAC — Discretionary Access Control

The resource owner can decide who gets access.

### MAC — Mandatory Access Control

Access is controlled according to centrally defined security classifications/policies.

### RBAC — Role-Based Access Control

Permissions are assigned to roles.

### ABAC — Attribute-Based Access Control

Access decisions use attributes such as:
- User attributes
- Resource attributes
- Environment/context

### Quick comparison

| Model | Main idea |
|---|---|
| DAC | Owner decides |
| MAC | Central policy/classification |
| RBAC | Role decides permissions |
| ABAC | Attributes/context decide |

---

# 17. 401 vs 403

This is a common web/API interview and MCQ trap.

### HTTP 401 Unauthorized

Usually means the request lacks valid authentication credentials.

Think:

> **"I don't know who you are / your authentication is invalid."**

### HTTP 403 Forbidden

The server understands the request and identity context, but access is not permitted.

Think:

> **"I know who you are, but you are not allowed to do this."**

### Memory

**401 → Authentication problem**

**403 → Authorization problem**

---

# 18. Authentication vs Authorization vs Accounting

This is sometimes called **AAA**.

### Authentication
**Who are you?**

### Authorization
**What can you do?**

### Accounting / Auditing
**What did you do?**

Example:

- Login with password → Authentication
- Allowed to access admin panel → Authorization
- System records admin action → Accounting/Auditing

### Memory

**AuthN → Who**

**AuthZ → What**

**Accounting → What happened**

---

# 19. Common Authentication Attacks

Know the basic names:

### Brute force
Trying many possible passwords.

### Credential stuffing
Using stolen username/password pairs from other breaches.

### Password spraying
Trying a small number of common passwords against many accounts.

### Phishing
Tricking users into revealing credentials or performing unsafe actions.

### Session hijacking
Attacker obtains or takes over a valid authenticated session.

### MFA fatigue / push bombing
Repeated authentication prompts are sent hoping the victim eventually approves one.

---

# 20. Authentication Security Controls

Important defenses:

- Strong unique passwords
- Password managers
- MFA
- Rate limiting
- Account lockout/risk-based controls where appropriate
- Secure password hashing
- HTTPS/TLS
- Secure session management
- Phishing-resistant authentication where possible
- Monitoring and anomaly detection

---

# 21. Phishing-Resistant Authentication

Some authentication methods are resistant to common credential-phishing attacks.

Examples include:
- FIDO2/WebAuthn security keys
- Passkeys

### Why?

They use cryptographic credentials tied to the legitimate origin/domain rather than simply asking the user to type a reusable password into a website.

### Exam priority

🟠 Important, but do not study this before the core Authentication vs Authorization distinction.

---

# 22. Authentication vs Authorization vs Encryption

| Concept | Main question/purpose |
|---|---|
| Authentication | Who are you? |
| Authorization | What can you access/do? |
| Encryption | Who can read the data? |
| Hashing | Has the data/password representation changed / how can it be verified? |

### Example

A user logs into an online banking application.

**Authentication:** Verify the user.

**Authorization:** Determine whether the user can transfer money.

**Encryption:** Protect data exchanged over the network.

**Hashing:** Securely store/verify the user's password or verify data integrity.

---

# 23. Accenture-Style Scenario Patterns

### Pattern 1
"A system verifies a user's password before granting access."

**Answer: Authentication**

### Pattern 2
"An administrator can delete users while a normal employee cannot."

**Answer: Authorization**

### Pattern 3
"A user enters a password and hardware security key."

**Answer: MFA**

### Pattern 4
"A user has a Developer role that grants repository write permission."

**Answer: RBAC**

### Pattern 5
"A user is denied access to an admin API despite being successfully logged in."

**Answer: Authorization failure / HTTP 403**

### Pattern 6
"The request does not contain valid authentication credentials."

**Answer: HTTP 401**

### Pattern 7
"An application receives limited access to a user's resources without receiving the user's password."

**Answer: OAuth 2.0 / delegated authorization**

### Pattern 8
"A token contains Header, Payload and Signature."

**Answer: JWT**

### Pattern 9
"An attacker tries one common password against thousands of accounts."

**Answer: Password spraying**

### Pattern 10
"An attacker uses stolen username/password combinations from previous breaches."

**Answer: Credential stuffing**

---

# 24. Common MCQ Traps

1. Authentication = **identity verification**.
2. Authorization = **permission/access control**.
3. Authentication generally happens before authorization.
4. Password = knowledge factor.
5. Fingerprint = inherence factor.
6. Security key = possession factor.
7. Password + PIN is not necessarily MFA.
8. 2FA is a type of MFA.
9. JWT is a **token format**, not authentication itself.
10. JWT payload is not automatically encrypted.
11. OAuth 2.0 is primarily **authorization/delegation**.
12. OIDC adds an identity/authentication layer on OAuth 2.0.
13. RBAC = permissions associated with roles.
14. Least privilege = minimum necessary permissions.
15. 401 generally indicates missing/invalid authentication.
16. 403 generally indicates insufficient permission.
17. Authentication does not automatically mean authorization.
18. Being logged in does not mean access to every resource.
19. Encryption protects confidentiality; it does not decide user permissions.
20. Hashing does not authenticate a user by itself.

---

# 25. 35 Practice Questions

### Q1
Authentication answers which question?
**Answer: Who are you?**

### Q2
Authorization answers which question?
**Answer: What are you allowed to do?**

### Q3
Which verifies identity?
**Answer: Authentication**

### Q4
Which determines permissions?
**Answer: Authorization**

### Q5
Password belongs to which authentication factor?
**Answer: Something you know**

### Q6
Fingerprint belongs to which factor?
**Answer: Something you are**

### Q7
Hardware security key belongs to which factor?
**Answer: Something you have**

### Q8
Password + hardware security key is an example of?
**Answer: MFA**

### Q9
Is password + PIN automatically MFA?
**Answer: No**

### Q10
What is 2FA?
**Answer: Authentication using exactly two factors**

### Q11
What is RBAC?
**Answer: Role-Based Access Control**

### Q12
What does RBAC associate with roles?
**Answer: Permissions**

### Q13
What is least privilege?
**Answer: Giving only the minimum required permissions**

### Q14
What does HTTP 401 generally indicate?
**Answer: Missing or invalid authentication credentials**

### Q15
What does HTTP 403 generally indicate?
**Answer: Access is forbidden despite valid identity/authentication context**

### Q16
What does JWT stand for?
**Answer: JSON Web Token**

### Q17
What are the three common JWT components?
**Answer: Header, Payload, Signature**

### Q18
Is a normal signed JWT payload automatically encrypted?
**Answer: No**

### Q19
What is OAuth 2.0 primarily concerned with?
**Answer: Delegated authorization**

### Q20
What technology provides an identity layer on OAuth 2.0?
**Answer: OpenID Connect**

### Q21
What is credential stuffing?
**Answer: Using stolen credential pairs against other services**

### Q22
What is password spraying?
**Answer: Trying a small set of common passwords across many accounts**

### Q23
What is brute force?
**Answer: Trying many possible passwords**

### Q24
What is session hijacking?
**Answer: Taking over a valid authenticated session**

### Q25
Authentication generally occurs before what?
**Answer: Authorization**

### Q26
A logged-in employee cannot delete users. Which concept blocks the action?
**Answer: Authorization**

### Q27
A system verifies a fingerprint. What is this?
**Answer: Authentication**

### Q28
A user is assigned a Manager role with specific permissions. What model?
**Answer: RBAC**

### Q29
Which principle limits damage if an account is compromised?
**Answer: Least privilege**

### Q30
Which protects data confidentiality?
**Answer: Encryption**

### Q31
Which helps securely verify passwords without storing plaintext passwords?
**Answer: Password hashing/KDF**

### Q32
A fake login page tricks users into revealing credentials. What attack?
**Answer: Phishing**

### Q33
Which is more closely associated with identity verification: AuthN or AuthZ?
**Answer: AuthN**

### Q34
Which is more closely associated with access control: AuthN or AuthZ?
**Answer: AuthZ**

### Q35
Complete the sequence:
Login → Identity verification → Permission check → Resource access

**Answer: Authentication → Authorization**

---

# 26. Quick Revision Sheet

## One-line definitions

**Authentication:** Verify identity.

**Authorization:** Determine permissions.

**MFA:** Use two or more independent authentication factors.

**RBAC:** Assign permissions through roles.

**Least privilege:** Give only necessary permissions.

**JWT:** Token format containing claims.

**OAuth 2.0:** Delegated authorization framework.

**OIDC:** Authentication/identity layer built on OAuth 2.0.

**401:** Authentication problem.

**403:** Authorization/access problem.

---

# 27. Memory Story

Imagine entering a college computer lab.

### Step 1 — Who are you?

You show your student ID.

**Authentication.**

The guard verifies your identity.

### Step 2 — What can you do?

The guard checks your permission.

Maybe students can enter the lab, but only administrators can enter the server room.

**Authorization.**

### Step 3 — Stronger identity verification

You show your ID and use a security key.

**MFA.**

### Step 4 — Role

Your account has the role:

**Developer**

That role gives you permission to read and modify source code.

**RBAC.**

### Step 5 — Minimum access

You don't need permission to delete the production database.

That's:

**Least privilege.**

### Step 6 — Web/API

If you are not properly authenticated:

**401**

If you are authenticated but forbidden from performing an action:

**403**

---

# 28. Cross-Topic Connections

**Encryption & Hashing**
→ Password authentication relies on secure password hashing/KDFs.
→ Encryption protects confidentiality.

**Network Attacks**
→ Phishing can steal authentication credentials.
→ Credential theft can lead to account compromise.

**VPN**
→ VPN authentication verifies users/devices before allowing protected network access.

**Firewall**
→ Firewall rules control network traffic, while authorization controls what an authenticated identity can access.

**Cloud**
→ IAM systems combine authentication and authorization for cloud resources.

---

# 29. Topic Completion Checklist

- [ ] Authentication definition
- [ ] Authorization definition
- [ ] Authentication vs authorization
- [ ] Authentication factors
- [ ] MFA
- [ ] 2FA
- [ ] Credentials
- [ ] Password authentication
- [ ] Password hashing connection
- [ ] Session-based authentication
- [ ] Token-based authentication
- [ ] JWT
- [ ] OAuth 2.0
- [ ] OpenID Connect
- [ ] RBAC
- [ ] Least privilege
- [ ] DAC
- [ ] MAC
- [ ] ABAC
- [ ] HTTP 401 vs 403
- [ ] AAA
- [ ] Brute force
- [ ] Credential stuffing
- [ ] Password spraying
- [ ] Session hijacking
- [ ] MFA fatigue
- [ ] Phishing-resistant authentication
- [ ] Scenario recognition
- [ ] MCQ traps

**Status: 🔴 High-priority topic — complete only when you can instantly distinguish Authentication, Authorization, MFA, RBAC, 401 and 403 from a scenario.**
