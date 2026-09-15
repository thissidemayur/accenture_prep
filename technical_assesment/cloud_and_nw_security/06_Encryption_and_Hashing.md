# Encryption & Hashing — Accenture Technical Assessment

## 1. Exam Priority
**Priority: 🔴 MUST KNOW**

Core areas:
- Encryption vs hashing
- Symmetric encryption
- Asymmetric encryption
- Public key vs private key
- AES
- RSA
- Digital signatures
- Diffie-Hellman / key exchange
- Hash functions and SHA
- Password hashing
- Salt
- Confidentiality vs integrity

**Memory hook:** Encryption = lock/unlock. Hashing = fingerprint.

---

## 2. Encryption
**Exam-ready definition:** Encryption converts plaintext into ciphertext using an algorithm and key so unauthorized users cannot understand the data.

**Flow:** Plaintext → Encryption + Key → Ciphertext → Decryption + Key → Plaintext

**Main security goal:** Confidentiality.

---

## 3. Symmetric Encryption
**Definition:** Uses the same secret key for encryption and decryption.

**Flow:** Plaintext → Encrypt + Secret Key → Ciphertext → Decrypt + Same Key → Plaintext

**Analogy:** Two people have the same key to a locked box.

### Advantages
- Fast
- Efficient for large amounts of data
- Lower computational overhead

### Disadvantage
**Key distribution:** both parties must obtain the secret key securely.

### Examples
- AES
- ChaCha20

**🔴 Must know:** Symmetric = same secret key.

---

## 4. AES
**AES (Advanced Encryption Standard)** is a symmetric block cipher.

Supported key sizes:
- 128-bit
- 192-bit
- 256-bit

**MCQ trap:** AES is symmetric encryption, not hashing or asymmetric encryption.

---

## 5. Asymmetric Encryption
**Definition:** Uses a mathematically related public/private key pair.

- Public key → can be shared
- Private key → must remain secret

### Confidentiality example
If Alice wants only Bob to read a message:
- Alice encrypts with **Bob's public key**
- Bob decrypts with **Bob's private key**

**Memory:** Public key locks; private key unlocks.

---

## 6. RSA
**RSA** is an asymmetric public-key cryptographic algorithm.

Common uses:
- Public-key cryptography
- Digital signatures
- Cryptographic key operations

| AES | RSA |
|---|---|
| Symmetric | Asymmetric |
| Secret key | Public + private |
| Fast | Generally slower |
| Bulk data | Key/signature operations |

**MCQ trap:** RSA is not hashing.

---

## 7. Why Both Symmetric and Asymmetric?
Symmetric encryption is fast but has a key-distribution problem. Asymmetric cryptography helps with key establishment and identity-related operations but is computationally heavier.

Modern secure protocols commonly use a **hybrid approach**:
1. Use asymmetric cryptography/key agreement to establish or protect keying material.
2. Use symmetric encryption for bulk data.

---

## 8. Diffie-Hellman
**Definition:** Diffie-Hellman is a key-agreement method that allows parties to establish shared secret key material over an insecure channel.

**Important:** It is primarily for key agreement, not bulk-data encryption itself.

**MCQ trap:** Do not treat DH as the algorithm that encrypts all application data.

---

## 9. Hashing
**Definition:** Hashing converts input data into a fixed-length output called a hash value/digest.

**Flow:** Input → Hash Function → Fixed-Length Digest

A cryptographic hash is designed to be **one-way**.

**Analogy:** A fingerprint identifies something but is not a reversible copy of the entire original.

### Uses
- Integrity verification
- Password storage
- Digital signatures as part of the signing process
- Data identification

---

## 10. Cryptographic Hash Properties

### Preimage resistance
Given a hash, it should be computationally difficult to recover the original input.

### Collision resistance
It should be difficult to find two different inputs producing the same hash.

### Avalanche effect
A small input change should produce a substantially different digest.

### Fixed-length output
A particular hash algorithm produces a fixed-size digest regardless of input length.

---

## 11. SHA Family
**SHA = Secure Hash Algorithm family**

Important examples:
- SHA-256
- SHA-512
- SHA-3

**MCQ trap:** SHA algorithms are hashing algorithms, not encryption algorithms.

---

## 12. MD5 and SHA-1
MD5 and SHA-1 are still encountered in older material, but they are cryptographically broken for collision resistance and should not be selected for new security-sensitive designs where collision resistance is required.

For modern general-purpose cryptographic hashing, think:
**SHA-256 / SHA-512 / SHA-3**

---

## 13. Password Hashing
Passwords should generally not be stored as plaintext.

A **salt** is a unique random value added to a password before password hashing.

**Password + Salt → Password Hash**

### Why salt?
- Prevents identical passwords from having identical stored hashes
- Reduces effectiveness of precomputed rainbow tables
- Forces separate cracking work for each salted hash

**Important:** A salt is generally not secret and can be stored with the hash.

### Password hashing/KDF choices
- Argon2
- bcrypt
- scrypt
- PBKDF2

**MCQ trap:** SHA-256 is a cryptographic hash but is not a password-specific password-hashing function designed to make guessing expensive.

---

## 14. Encryption vs Hashing

| Feature | Encryption | Hashing |
|---|---|---|
| Main goal | Confidentiality | Integrity / verification |
| Reversible? | Yes, with correct key | Designed to be one-way |
| Key required? | Yes | No for ordinary hashing |
| Output | Ciphertext | Digest |
| Examples | AES, RSA | SHA-256, SHA-3 |

**🔴 Memorize:** Encryption = reversible with key. Hashing = one-way.

---

## 15. Symmetric vs Asymmetric

| Feature | Symmetric | Asymmetric |
|---|---|---|
| Keys | One shared secret | Public + private pair |
| Speed | Faster | Generally slower |
| Bulk data | Excellent | Usually not preferred |
| Main challenge | Key distribution | Computational cost |
| Examples | AES, ChaCha20 | RSA, ECC |

**Memory:** Symmetric = Same. Asymmetric = A Pair.

---

## 16. Public Key vs Private Key

### Confidentiality
**Recipient's public key → encryption**  
**Recipient's private key → decryption**

### Digital signature
**Sender's private key → sign**  
**Sender's public key → verify**

**Critical MCQ trap:** Do not reverse these two scenarios.

---

## 17. Digital Signature
A digital signature is a cryptographic mechanism providing message integrity and origin authentication, and supporting non-repudiation in appropriate systems.

Simplified:
1. Sender hashes the message.
2. Sender signs the hash using their private key.
3. Receiver verifies using the sender's public key.
4. Receiver checks the message digest.

**Digital signature ≠ encryption.**

---

## 18. Encryption vs Digital Signature

| Purpose | Encryption | Digital Signature |
|---|---|---|
| Confidentiality | Yes | No, by itself |
| Integrity | Not its primary goal | Yes |
| Authentication | Not inherently | Yes / origin authentication |
| Typical key use | Recipient public key | Sender private key |

---

## 19. CIA Triad Connection

- **Confidentiality → Encryption**
- **Integrity → Hashing / MAC / Digital Signatures**
- **Availability → DoS/DDoS defenses**

Memory:
**Encryption → Confidentiality**  
**Hash → Integrity**  
**DoS → Availability**

---

## 20. Accenture-Style Scenario Patterns

1. Same key for encryption/decryption → **Symmetric**
2. Public/private pair → **Asymmetric**
3. Symmetric block cipher → **AES**
4. Public-key cryptosystem → **RSA**
5. Fixed-length one-way digest → **Hashing**
6. 256-bit SHA digest → **SHA-256**
7. Detect modified downloaded file → **Hash/integrity verification**
8. Secure password storage → **Password hashing/KDF + salt**
9. Alice wants only Bob to decrypt → **Bob's public key; Bob's private key**
10. Alice wants Bob to verify her signature → **Alice's private key signs; Alice's public key verifies**

---

# 21. 35 Practice Questions

### Q1
Same secret key for encryption and decryption?
**Answer: Symmetric encryption**

### Q2
Symmetric encryption algorithm?
**Answer: AES**

### Q3
Asymmetric cryptographic algorithm?
**Answer: RSA**

### Q4
Technique designed to be one-way?
**Answer: Hashing**

### Q5
Cryptographic hash algorithm?
**Answer: SHA-256**

### Q6
Primary purpose of encryption?
**Answer: Confidentiality**

### Q7
Major symmetric-encryption challenge?
**Answer: Key distribution**

### Q8
Key Alice uses to encrypt a confidential message for Bob?
**Answer: Bob's public key**

### Q9
Key Bob uses to decrypt it?
**Answer: Bob's private key**

### Q10
Key Alice uses to create a digital signature?
**Answer: Alice's private key**

### Q11
Key Bob uses to verify Alice's signature?
**Answer: Alice's public key**

### Q12
Hashing file data primarily helps verify?
**Answer: Integrity**

### Q13
Which is designed to be non-reversible?
**Answer: Hashing**

### Q14
Purpose of a password salt?
**Answer: Make password hashes unique and reduce precomputed-attack effectiveness**

### Q15
Suitable password hashing/KDF?
**Answer: Argon2**

### Q16
Correct statement about salt?
**Answer: It is generally stored with the password hash and need not be secret**

### Q17
Primarily a key-agreement method?
**Answer: Diffie-Hellman**

### Q18
Best choice for efficient bulk-data encryption?
**Answer: Symmetric encryption**

### Q19
Correct statement?
**Answer: SHA-256 is a hash function**

### Q20
Small input change causing major hash change?
**Answer: Avalanche effect**

### Q21
Two different inputs with the same hash?
**Answer: Collision**

### Q22
Difficulty of recovering input from hash?
**Answer: Preimage resistance**

### Q23
Key that must remain secret?
**Answer: Private key**

### Q24
Correct pair?
**Answer: SHA-256 — Hashing**

### Q25
Digital signatures primarily provide?
**Answer: Integrity and origin authentication**

### Q26
Detect whether a downloaded file changed?
**Answer: Hash comparison**

### Q27
Generally faster for bulk encryption?
**Answer: Symmetric encryption**

### Q28
Symmetric means?
**Answer: Same shared secret key**

### Q29
Modern hash family?
**Answer: SHA-3**

### Q30
Poor modern password-storage choice?
**Answer: Plain SHA-256 without a password-specific KDF**

### Q31
Alice encrypts with Bob's public key. Who decrypts?
**Answer: Bob using his private key**

### Q32
Alice signs with her private key. Which key verifies?
**Answer: Alice's public key**

### Q33
Security property most directly provided by encryption?
**Answer: Confidentiality**

### Q34
Security property strongly associated with cryptographic hashing?
**Answer: Integrity**

### Q35
Most accurate distinction?
**Answer: Encryption is reversible with the appropriate key; cryptographic hashing is designed to be one-way**

---

## 22. Ultra-Quick Revision

**AES → Symmetric**  
**RSA → Asymmetric**  
**SHA-256 → Hashing**  
**Diffie-Hellman → Key Agreement**  
**Argon2/bcrypt/scrypt/PBKDF2 → Password Hashing/KDF**  
**Symmetric → Same secret key**  
**Asymmetric → Public + Private**  
**Encryption → Confidentiality**  
**Hashing → Integrity / verification**  
**Digital Signature → Private key signs, public key verifies**  
**Salt → Random value added before password hashing**

---

## 23. One-Minute Memory Story

Alice wants to send Bob a secret package.

Bob has a public lock and a private key. Alice uses **Bob's public key** to protect the package; Bob uses **his private key** to open it. That's asymmetric cryptography.

For large amounts of data, the parties establish shared secret key material and use fast symmetric encryption such as **AES**.

Alice can create a fingerprint of the message using **SHA-256** to help verify integrity.

If Alice wants to prove the message came from her, she signs using **her private key** and Bob verifies using **Alice's public key**.

---

## 24. Cross-Topic Connections

**Network Attacks:** Sniffing/MITM can threaten confidentiality.

**VPN:** Uses cryptographic mechanisms to protect communication over untrusted networks.

**HTTPS/TLS:** Commonly combines public-key mechanisms for authentication/key establishment with symmetric cryptography for efficient bulk protection.

**Firewall:** Controls traffic; encryption does not replace firewalling.

**CIA Triad:** Encryption → Confidentiality; Hashing/signatures → Integrity; DoS defenses → Availability.

---

## 25. Completion Checklist

- [ ] Encryption
- [ ] Plaintext / ciphertext
- [ ] Symmetric encryption
- [ ] AES
- [ ] Asymmetric encryption
- [ ] Public/private keys
- [ ] RSA
- [ ] Key distribution
- [ ] Diffie-Hellman
- [ ] Hybrid cryptography
- [ ] Hashing
- [ ] SHA-256 / SHA-512 / SHA-3
- [ ] Preimage resistance
- [ ] Collision resistance
- [ ] Avalanche effect
- [ ] Password hashing
- [ ] Salt
- [ ] Argon2 / bcrypt / scrypt / PBKDF2
- [ ] Digital signatures
- [ ] Encryption vs hashing
- [ ] Symmetric vs asymmetric
- [ ] Public key vs private key
- [ ] CIA triad
- [ ] Scenario recognition
- [ ] MCQ traps

**Status: 🔴 High-priority topic — complete only when you can instantly distinguish AES vs RSA vs SHA and public-key encryption vs digital signatures.**
