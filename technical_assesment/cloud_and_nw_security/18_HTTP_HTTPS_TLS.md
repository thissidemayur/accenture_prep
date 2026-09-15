# 18 — HTTP / HTTPS & TLS

## Accenture Technical Assessment — Topic Mastery

**Priority:** ⭐⭐⭐⭐⭐  |  **Placement ROI:** Very High

## 1. Exam-Ready Definitions

**HTTP (Hypertext Transfer Protocol)** is an application-layer protocol used for communication between clients and servers, especially for web resources and APIs.

**HTTPS = HTTP over TLS.** It provides HTTP communication with TLS protection.

**TLS (Transport Layer Security)** is a cryptographic security protocol providing confidentiality, integrity, and authentication of the server (typically through certificates).

> **HTTP = web communication. HTTPS = HTTP protected by TLS. TLS = security layer.**

## 2. Where HTTP Fits

HTTP is an **Application Layer** protocol.

Classic HTTPS stack:

```text
HTTP
  ↓
TLS
  ↓
TCP
  ↓
IP
  ↓
Ethernet / Wi-Fi
```

HTTP/3:

```text
HTTP/3
  ↓
QUIC
  ↓
UDP
  ↓
IP
```

**Trap:** HTTP itself does not provide encryption.

## 3. HTTP vs HTTPS

| Feature | HTTP | HTTPS |
|---|---|---|
| Encryption | No | Yes, via TLS |
| Integrity protection | No cryptographic transport protection | TLS provides it |
| Server authentication | No TLS certificate authentication | Usually certificate-based |
| Common port | 80 | 443 |

## 4. What Happens When You Open HTTPS?

Simplified classic flow:

```text
DNS resolution
 ↓
TCP connection
 ↓
TLS handshake
 ↓
Certificate verification
 ↓
Session keys
 ↓
HTTP request
 ↓
HTTP response
```

For HTTP/3, QUIC provides the transport and TLS 1.3 is integrated with QUIC.

## 5. HTTP Request / Response

```text
Client → HTTP Request → Server
Client ← HTTP Response ← Server
```

A request can contain:

- Method
- Request target/path
- Version
- Headers
- Optional body

Example:

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{"name":"Alice"}
```

## 6. HTTP Methods

- **GET** → retrieve a resource
- **POST** → submit data / request creation or processing
- **PUT** → replace a resource representation
- **PATCH** → partially modify a resource
- **DELETE** → request deletion
- **HEAD** → retrieve headers/metadata without the normal response body
- **OPTIONS** → query supported communication options

## 7. Safe vs Idempotent

Safe methods commonly include:

- GET
- HEAD
- OPTIONS

Idempotent methods commonly include:

- GET
- HEAD
- OPTIONS
- PUT
- DELETE

**Idempotent does not mean the request is sent only once.** It means repeated application has the same intended effect.

## 8. Important Headers

Examples:

```text
Host
Content-Type
Content-Length
Authorization
Cookie
User-Agent
Accept
Cache-Control
Location
```

`Content-Type: application/json` describes the representation format of the message body.

## 9. HTTP Status Code Classes

```text
1xx → Informational
2xx → Success
3xx → Redirection
4xx → Client error
5xx → Server error
```

Important codes:

- **200** → OK
- **201** → Created
- **204** → No Content
- **301** → Moved Permanently
- **302** → Found / commonly temporary redirect
- **304** → Not Modified
- **400** → Bad Request
- **401** → Authentication required/failed
- **403** → Forbidden
- **404** → Not Found
- **405** → Method Not Allowed
- **408** → Request Timeout
- **429** → Too Many Requests
- **500** → Internal Server Error
- **502** → Bad Gateway
- **503** → Service Unavailable
- **504** → Gateway Timeout

### 401 vs 403

> **401 = authentication problem. 403 = access is forbidden.**

### 502 vs 504

> **502 = bad/invalid upstream response. 504 = upstream response timed out.**

## 10. Cookies

Cookies are data associated with a website that a browser stores and sends with subsequent requests according to cookie rules.

Common uses:

- Session identification
- Preferences
- Authentication/session state

Important attributes:

- **Secure** → send only over secure HTTPS connections
- **HttpOnly** → prevents normal JavaScript access through `document.cookie`
- **SameSite** → controls cross-site cookie sending behavior and helps mitigate some CSRF scenarios

## 11. HTTP Statelessness

HTTP is fundamentally stateless at the protocol level. Applications can add state using:

- Cookies
- Session IDs
- Tokens
- Server-side session storage

Typical flow:

```text
Login
 ↓
Server creates session
 ↓
Browser receives identifier
 ↓
Browser sends identifier later
 ↓
Server identifies session
```

## 12. Persistent Connections

Persistent connections allow multiple HTTP requests/responses to reuse an existing connection where supported, reducing connection setup overhead.

HTTP/1.1 commonly supports persistent connections by default.

## 13. HTTP Versions

### HTTP/1.1

Important concepts:

- Persistent connections
- Host header
- Chunked transfer encoding
- Caching improvements

### HTTP/2

Important improvements:

- Binary framing
- Multiplexing
- HPACK header compression
- Multiple streams over a TCP connection

### HTTP/3

```text
HTTP/3 → QUIC → UDP
```

QUIC provides reliable transport features, stream multiplexing, encryption, and connection migration capabilities.

**Trap:** HTTP/3 does not use TCP as its transport.

## 14. What Is TLS?

TLS protects communication between endpoints and provides:

### Confidentiality

Network observers should not be able to read protected traffic under normal security assumptions.

### Integrity

Unauthorized modification should be detectable.

### Authentication

Certificates can authenticate the server identity.

> **TLS = confidentiality + integrity + authentication mechanisms.**

## 15. TLS Does Not Mean the Website Is Trustworthy

A valid certificate does not prove that:

- The business is legitimate
- The application has no vulnerabilities
- The site is free from malware
- The user cannot be phished

TLS primarily secures the communication channel and authenticates an endpoint according to the certificate trust model.

## 16. Digital Certificates

A TLS certificate binds an identity/domain to a public key and is digitally signed by a trusted CA or otherwise trusted under the client's trust configuration.

It can contain:

- Domain/subject identities
- Public key
- Issuer
- Validity period
- Digital signature
- Extensions

## 17. Certificate Authority

A **CA (Certificate Authority)** issues/signs certificates and participates in the certificate trust chain.

Simplified:

```text
Root CA
 ↓
Intermediate CA
 ↓
Server Certificate
```

The client verifies the chain against trusted roots.

## 18. TLS Handshake

A simplified handshake is:

```text
ClientHello
 ↓
ServerHello
 ↓
Server certificate
 ↓
Certificate verification
 ↓
Key establishment
 ↓
Session keys derived
 ↓
Encrypted application data
```

The exact messages differ by TLS version and configuration.

## 19. TLS 1.2 vs TLS 1.3

TLS 1.3 is the modern TLS version and provides a redesigned handshake with fewer round trips in common cases and removal of several older/weak cryptographic options.

Modern TLS 1.3 key establishment commonly provides forward secrecy.

## 20. SSL vs TLS

SSL is the predecessor to TLS.

Modern secure web communication uses **TLS**, not obsolete SSL versions.

People may still casually say “SSL certificate,” but modern HTTPS uses TLS.

## 21. Symmetric vs Asymmetric Cryptography in TLS

After key establishment, symmetric cryptography is efficient for bulk application data.

Examples:

- AES
- ChaCha20

Public-key cryptography is important for authentication and key establishment.

**Do not say TLS encrypts everything using RSA.** Modern TLS uses multiple cryptographic mechanisms.

## 22. Forward Secrecy

Forward secrecy means compromise of a long-term private key should not allow decryption of previously recorded sessions, under the protocol's security assumptions.

Modern TLS commonly uses ephemeral Diffie-Hellman key exchange mechanisms to provide this property.

## 23. TLS vs Hashing

Encryption is reversible with the appropriate key.

Hashing is a one-way transformation used in integrity/fingerprinting/password-processing constructions.

Do not confuse hashing with encryption.

## 24. HTTPS and Metadata

HTTPS protects HTTP content in transit, but not all network metadata necessarily becomes invisible. Depending on the protocol and network setup, information such as IP addresses, timing, traffic volume, and some connection metadata can remain observable.

## 25. URL Anatomy

Example:

```text
https://example.com:443/products?id=10#reviews
```

```text
https       → scheme
example.com → host
443         → port
/products   → path
?id=10      → query
#reviews    → fragment
```

The URL fragment is generally handled by the client and is not sent to the server as part of the HTTP request target.

## 26. HTTP Caching

Important headers:

```text
Cache-Control
ETag
Last-Modified
Expires
```

A conditional request may result in:

```text
304 Not Modified
```

allowing reuse of a cached representation when appropriate.

## 27. Cookie vs Cache

**Cookie:** client-associated state/metadata such as a session identifier.

**Cache:** stored reusable response representations/resources.

> Cookie = state. Cache = reuse.

## 28. Proxy / Reverse Proxy

Forward proxy:

```text
Client → Proxy → Internet
```

Reverse proxy:

```text
Client → Reverse Proxy → Backend
```

Reverse proxies commonly provide:

- TLS termination
- Load balancing
- Caching
- Routing
- Security controls

## 29. TLS Termination

A reverse proxy can terminate TLS:

```text
Client
  |
HTTPS
  |
Reverse Proxy
  |
HTTP or HTTPS
  |
Backend
```

HTTPS between client and proxy does not automatically mean proxy-to-backend traffic is encrypted.

## 30. Troubleshooting Patterns

### Ping works, HTTPS fails

Investigate:

- TCP port 443 / QUIC connectivity
- TLS handshake
- Certificate
- HTTPS service
- Proxy/load balancer
- Application

### HTTP works, HTTPS fails

Investigate:

- TLS configuration
- Certificate
- Port 443
- Firewall
- Reverse proxy
- Protocol/version compatibility

### TLS succeeds, HTTP returns 500

TLS is working. Investigate the server/application layer.

### DNS fails

The browser may not reach the intended server because hostname resolution failed.

## 31. Accenture-Style Question Patterns

Typical conceptual patterns include:

- HTTPS port?
- HTTP vs HTTPS?
- TLS properties?
- Purpose of a certificate?
- Role of CA?
- Meaning of 401/403/404/500/502/504?
- GET vs POST?
- PUT vs PATCH?
- 304 meaning?
- HTTP/2 vs HTTP/3?
- What transport does HTTP/3 use?
- What happens during TLS handshake?
- Symmetric vs asymmetric cryptography?
- Forward secrecy?
- HttpOnly/Secure/SameSite?

## 32. Common MCQ Traps

1. HTTPS is completely unrelated to HTTP. **Wrong** — it is HTTP protected by TLS.
2. HTTPS normally uses port 80. **Wrong** — 443.
3. TLS provides only encryption. **Incomplete** — it also provides integrity and authentication mechanisms.
4. A certificate itself encrypts all application data. **Wrong** — it primarily supports identity/public-key authentication.
5. 401 means forbidden. **Wrong** — 401 concerns authentication; 403 is forbidden.
6. 404 means the server is down. **Wrong.**
7. HTTP/3 uses TCP. **Wrong** — HTTP/3 uses QUIC over UDP.
8. Ping tests HTTPS. **Wrong** — ping uses ICMP.
9. HttpOnly encrypts cookies. **Wrong** — it restricts normal JavaScript access.
10. TLS proves the website is trustworthy. **Wrong.**

## 33. 50 Practice Questions

### Fundamentals

1. What does HTTP stand for? **Hypertext Transfer Protocol**
2. What does HTTPS mean? **HTTP over TLS**
3. HTTP's OSI layer? **Application layer**
4. Normal HTTP port? **80**
5. Normal HTTPS port? **443**
6. TLS stands for? **Transport Layer Security**
7. Major TLS security properties? **Confidentiality, integrity, authentication mechanisms**
8. Does HTTP itself encrypt traffic? **No**
9. Purpose of a TLS certificate? **Bind identity to a public key under a trust model**
10. What is a CA? **Certificate Authority**

### HTTP

11. GET? **Retrieve a resource**
12. POST? **Submit/process data or request creation**
13. PUT? **Replace a resource representation**
14. PATCH? **Partially modify a resource**
15. DELETE? **Request deletion**
16. HEAD? **Headers/metadata without normal response body**
17. OPTIONS? **Query supported communication options**
18. HTTP header? **Message metadata**
19. HTTP response? **Server message containing status, headers and optional body**
20. HTTP statelessness? **Protocol does not inherently retain application state between requests**

### Status Codes

21. 200? **OK**
22. 201? **Created**
23. 204? **No Content**
24. 301? **Moved Permanently**
25. 304? **Not Modified**
26. 400? **Bad Request**
27. 401? **Authentication required/failed**
28. 403? **Forbidden**
29. 404? **Not Found**
30. 429? **Too Many Requests**
31. 500? **Internal Server Error**
32. 502? **Bad Gateway**
33. 503? **Service Unavailable**
34. 504? **Gateway Timeout**
35. 401 vs 403? **Authentication vs authorization/access refusal**
36. 502 vs 504? **Bad upstream response vs upstream timeout**

### TLS

37. What happens in TLS handshake? **Security parameters and keys are established and server authentication is performed**
38. Why certificates? **Authenticate identity/public key**
39. Why symmetric crypto for bulk data? **Efficiency**
40. What is forward secrecy? **Past sessions remain protected if a long-term private key is later compromised, under protocol assumptions**
41. TLS predecessor? **SSL**
42. Modern HTTPS uses? **TLS**
43. HttpOnly? **Restricts normal JavaScript cookie access**
44. Secure cookie attribute? **HTTPS-only sending**
45. SameSite? **Controls cross-site cookie sending**

### Modern HTTP

46. HTTP/2 commonly uses? **TCP**
47. HTTP/3 uses? **QUIC over UDP**
48. HTTP/2 multiplexing? **Multiple streams over one connection**
49. HTTPS/TLS relationship? **HTTPS is HTTP protected by TLS**
50. Why can ping work while HTTPS fails? **They test different layers and dependencies**

## 34. Rapid Revision

```text
HTTP → Application layer → 80
HTTPS → HTTP + TLS → 443
TLS → confidentiality + integrity + authentication
Certificate → identity + public key binding
CA → certificate trust/signing
GET → retrieve
POST → submit/process
PUT → replace
PATCH → partial update
DELETE → delete
200 → success
201 → created
204 → no content
301 → permanent redirect
304 → not modified
400 → bad request
401 → authentication
403 → forbidden
404 → not found
429 → rate limited
500 → server error
502 → bad upstream response
503 → unavailable
504 → upstream timeout
HTTP/2 → multiplexing → TCP
HTTP/3 → QUIC → UDP
HttpOnly → restrict JS cookie access
Secure → HTTPS-only cookie sending
SameSite → cross-site cookie control
```

## 35. Complete Browser Story

When you enter:

`https://example.com/products`

think:

```text
URL
 ↓
DNS
 ↓
Server IP
 ↓
Transport connection
 ↓
TLS handshake
 ↓
Certificate verification
 ↓
Session keys
 ↓
HTTP request
 ↓
Reverse proxy/load balancer
 ↓
Backend
 ↓
HTTP response
 ↓
TLS protection
 ↓
Browser
```

This connects DNS, routing, transport, TLS, HTTP, proxying and backend architecture.

## 36. Completion Checklist

- [ ] HTTP / HTTPS
- [ ] TLS
- [ ] Ports 80 / 443
- [ ] Request/response
- [ ] Methods
- [ ] Safe/idempotent
- [ ] Headers/body
- [ ] Status codes
- [ ] Cookies
- [ ] HttpOnly/Secure/SameSite
- [ ] Statelessness
- [ ] Persistent connections
- [ ] HTTP/1.1, HTTP/2, HTTP/3
- [ ] QUIC
- [ ] Certificates and CA
- [ ] TLS handshake
- [ ] Symmetric/asymmetric cryptography
- [ ] Forward secrecy
- [ ] HTTPS troubleshooting

## Final memory hook

> **DNS finds the server. Routing finds the path. TCP/QUIC provides transport. TLS protects the connection. HTTP carries the web request. The server sends the response.**
