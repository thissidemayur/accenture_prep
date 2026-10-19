# Accenture-Style Networking + Network Security MCQs — 160 Questions

Original practice questions based on the networking/network-security theory already covered. These are NOT official or leaked Accenture questions.

## Section A — Protocols, Ports & Identification

1. A developer securely connects to a Linux server from a terminal. Which protocol/default port?
A. FTP, 21
B. SSH, 22
C. Telnet, 23
D. SMTP, 25
**Answer: B — SSH, 22.** SSH provides encrypted remote shell access.

2. A browser requests `https://example.com`. Which destination port is normally used?
A. 80
B. 110
C. 443
D. 8080
**Answer: C — 443.**

3. A browser communicates using plain HTTP. Which default port?
A. 20
B. 53
C. 80
D. 443
**Answer: C — 80.**

4. A normal DNS query commonly uses:
A. TCP 25
B. UDP 53
C. TCP 80
D. UDP 67
**Answer: B — UDP 53.** TCP 53 is also used in cases such as zone transfers or when TCP is required.

5. DHCP normally uses:
A. TCP
B. UDP
C. ICMP
D. ARP
**Answer: B — UDP.** Server 67, client 68.

6. Port 123 is commonly associated with:
A. DNS
B. NTP
C. SMTP
D. SNMP
**Answer: B — NTP.**

7. Traditional FTP is associated with:
A. 20 and 21
B. 22 and 23
C. 53 and 67
D. 80 and 443
**Answer: A — 20 and 21.**

8. TCP port 25 is commonly:
A. SMTP
B. IMAP
C. DNS
D. SSH
**Answer: A — SMTP.**

9. IMAPS normally uses:
A. 143
B. 443
C. 993
D. 995
**Answer: C — 993.**

10. UDP port 69 is commonly:
A. TFTP
B. SSH
C. SMTP
D. HTTPS
**Answer: A — TFTP.**

11. SNMP queries commonly use UDP:
A. 123
B. 161
C. 443
D. 514
**Answer: B — 161.**

12. UDP 514 is commonly associated with:
A. Syslog
B. DHCP
C. DNS
D. NTP
**Answer: A — Syslog.**

## Section B — TCP, UDP, Headers & Flags

13. A banking application needs reliable, ordered transaction delivery. Which transport protocol?
A. UDP
B. TCP
C. ARP
D. ICMP
**Answer: B — TCP.**

14. A video application prioritizes low latency and can tolerate some packet loss. Which is commonly suitable?
A. TCP
B. UDP
C. ARP
D. FTP
**Answer: B — UDP.**

15. Correct TCP connection-establishment sequence:
A. ACK → SYN → SYN-ACK
B. SYN → ACK → FIN
C. SYN → SYN-ACK → ACK
D. FIN → SYN → ACK
**Answer: C.**

16. After a client sends TCP SYN, the server normally responds:
A. FIN
B. RST
C. SYN-ACK
D. PSH
**Answer: C — SYN-ACK.**

17. Which TCP flag initiates a connection?
A. FIN
B. SYN
C. ACK
D. RST
**Answer: B — SYN.**

18. Which TCP flag is associated with graceful termination?
A. FIN
B. SYN
C. PSH
D. URG
**Answer: A — FIN.**

19. Which TCP flag is commonly used to abruptly reset/abort a connection?
A. SYN
B. ACK
C. RST
D. FIN
**Answer: C — RST.**

20. Which TCP field identifies the position of bytes in the stream?
A. Window
B. Sequence number
C. Checksum
D. Destination port
**Answer: B — Sequence number.**

21. Which TCP field communicates how much data the receiver is prepared to accept?
A. Sequence number
B. Window size
C. Urgent pointer
D. Source port
**Answer: B — Window size.**

22. If a TCP receiver has received bytes through 5000 and expects byte 5001 next, its ACK is normally:
A. 4999
B. 5000
C. 5001
D. 5002
**Answer: C — 5001.**

23. TCP is best described as:
A. Connectionless and unordered
B. Connection-oriented and reliable
C. DNS-only
D. Without acknowledgements
**Answer: B.**

24. Which transport protocol has a smaller/simple header and does not provide TCP-style reliability itself?
A. TCP
B. UDP
C. HTTP
D. TLS
**Answer: B — UDP.**

25. Which is a TCP header field?
A. Source port
B. TTL
C. Destination MAC
D. EtherType
**Answer: A — Source port.**

26. Which is an IPv4 header field rather than a TCP header field?
A. Sequence number
B. Acknowledgement number
C. TTL
D. Window size
**Answer: C — TTL.**

## Section C — DNS, DHCP & ARP

27. A user types `www.example.com`; which service translates the hostname into an IP address?
A. DHCP
B. DNS
C. ARP
D. NAT
**Answer: B — DNS.**

28. Which DNS record maps a hostname to an IPv4 address?
A. AAAA
B. MX
C. A
D. PTR
**Answer: C — A.**

29. Which DNS record maps a hostname to an IPv6 address?
A. A
B. AAAA
C. MX
D. NS
**Answer: B — AAAA.**

30. Which DNS record commonly creates a hostname alias?
A. CNAME
B. MX
C. PTR
D. TXT
**Answer: A — CNAME.**

31. Which DNS record identifies mail servers?
A. A
B. MX
C. NS
D. PTR
**Answer: B — MX.**

32. A host knows another device's IPv4 address but needs its local MAC address. Which protocol?
A. DNS
B. DHCP
C. ARP
D. NAT
**Answer: C — ARP.**

33. The main purpose of an ARP request is:
A. Find MAC for an IPv4 address
B. Find IP for a domain
C. Assign an IP dynamically
D. Encrypt Ethernet
**Answer: A.**

34. A new laptop joins a network and needs IP configuration. Which DHCP process?
A. SYN/ACK
B. DORA
C. FIN/ACK
D. DNSSEC
**Answer: B — DORA.**

35. DORA means:
A. Discover, Offer, Request, Acknowledge
B. Discover, Open, Route, Accept
C. Domain, Offer, Resolve, Authorize
D. Discover, Obtain, Relay, Assign
**Answer: A.**

36. Why does a DHCP client initially broadcast DHCPDISCOVER?
A. It already has a permanent IP
B. It needs network configuration and may not know the DHCP server
C. It is doing DNS resolution
D. It is performing a TCP handshake
**Answer: B.**

37. DNS TTL primarily controls:
A. TCP retransmission
B. How long DNS information may be cached
C. Ethernet frame size
D. VPN encryption strength
**Answer: B.**

38. Which technology uses cryptographic signatures to improve DNS authenticity/integrity?
A. NAT
B. DNSSEC
C. DHCP
D. PAT
**Answer: B — DNSSEC.**

## Section D — IP, NAT, PAT & Routing

39. Which is a private IPv4 address?
A. 8.8.8.8
B. 172.20.10.5
C. 1.1.1.1
D. 203.0.113.10
**Answer: B.**

40. Which is a private IPv4 range?
A. 10.0.0.0/8
B. 11.0.0.0/8
C. 100.0.0.0/8
D. 200.0.0.0/8
**Answer: A.**

41. Many private hosts share one public IPv4 address using different port numbers. What is this commonly called?
A. Static routing
B. PAT
C. ARP
D. DNSSEC
**Answer: B — PAT.**

42. Main purpose of NAT:
A. Translate between address spaces
B. Encrypt all application data
C. Replace DNS
D. Detect malware
**Answer: A.**

43. A host sends traffic for a remote network to its default gateway. The gateway is typically:
A. DNS cache
B. Router interface on the local network
C. DHCP client
D. Web server
**Answer: B.**

44. A device receives a 169.254.x.x address after DHCP failure. This commonly indicates:
A. Successful DNS
B. Link-local/APIPA addressing
C. Public cloud addressing
D. VPN establishment
**Answer: B.**

45. IPv6 uses:
A. 32-bit addresses
B. 128-bit addresses
C. 64-bit addresses only
D. MAC addresses as IP addresses
**Answer: B.**

46. A router primarily uses which information to choose an IP forwarding path?
A. Destination IP address
B. Source MAC only
C. HTTP payload
D. DNS MX record
**Answer: A.**

## Section E — HTTP, HTTPS, Headers, Payload & Status Codes

47. A browser retrieves `/products`. Which HTTP method?
A. GET
B. POST
C. DELETE
D. PATCH
**Answer: A — GET.**

48. A client submits a new user registration to an API. Which method is commonly used?
A. GET
B. POST
C. DELETE
D. HEAD
**Answer: B — POST.**

49. A client partially updates a user profile. Which method best matches?
A. GET
B. PATCH
C. HEAD
D. OPTIONS
**Answer: B — PATCH.**

50. Where does JSON submitted to an API commonly appear?
A. Request body/payload
B. MAC address
C. TCP flag
D. DNS record
**Answer: A.**

51. Which HTTP header commonly identifies the media type of a request body?
A. Content-Type
B. Host
C. Accept-Encoding
D. User-Agent
**Answer: A — Content-Type.**

52. Which HTTP header identifies the requested hostname?
A. Host
B. Authorization
C. Content-Length
D. Referer
**Answer: A — Host.**

53. Which HTTP header commonly carries an authorization credential/token?
A. Authorization
B. Host
C. Location
D. Accept
**Answer: A.**

54. Which status code indicates success?
A. 200
B. 301
C. 404
D. 500
**Answer: A — 200.**

55. Resource not found:
A. 201
B. 301
C. 404
D. 503
**Answer: C — 404.**

56. User is authenticated but not permitted to access an admin resource:
A. 200
B. 401
C. 403
D. 404
**Answer: C — 403.**

57. Valid authentication credentials are missing/invalid:
A. 401
B. 403
C. 404
D. 502
**Answer: A — 401.**

58. A reverse proxy receives an invalid response from an upstream server:
A. 201
B. 301
C. 502
D. 504
**Answer: C — 502.**

59. A proxy/gateway times out waiting for an upstream server:
A. 400
B. 404
C. 502
D. 504
**Answer: D — 504.**

60. HTTPS is:
A. HTTP protected using TLS
B. A routing protocol
C. UDP only
D. A replacement for IP
**Answer: A.**

61. HTTP/3 is built on:
A. TCP
B. UDP through QUIC
C. ARP
D. FTP
**Answer: B — UDP through QUIC.**

## Section F — OSI/TCP-IP & Encapsulation

62. A normal Ethernet switch primarily forwards using which OSI layer?
A. Physical
B. Data Link
C. Network
D. Transport
**Answer: B.**

63. A router primarily makes forwarding decisions at:
A. Application
B. Transport
C. Network
D. Presentation
**Answer: C.**

64. TCP and UDP belong to:
A. Network
B. Transport
C. Session
D. Data Link
**Answer: B.**

65. HTTP belongs primarily to:
A. Application
B. Transport
C. Network
D. Physical
**Answer: A.**

66. Typical PDU at TCP:
A. Frame
B. Packet
C. Segment
D. Bit
**Answer: C.**

67. Typical PDU at IP:
A. Frame
B. Packet
C. Segment
D. Stream
**Answer: B.**

68. Typical PDU at Ethernet:
A. Frame
B. Packet
C. Segment
D. Stream
**Answer: A.**

69. Adding headers/trailers as data moves down the stack is:
A. Decapsulation
B. Encapsulation
C. Routing
D. NAT
**Answer: B.**

70. Removing headers as data moves up the stack at the destination is:
A. NAT
B. Encapsulation
C. Decapsulation
D. Routing
**Answer: C.**

## Section G — VLAN, Switching & STP

71. Finance and Engineering must be logically separated on shared switches. Which technology?
A. VLAN
B. DNS
C. NAT
D. FTP
**Answer: A.**

72. A switch port connects to a normal end-user PC in one VLAN:
A. Access port
B. Trunk port
C. Console port
D. Loopback
**Answer: A.**

73. A switch-to-switch link must carry several VLANs:
A. Access
B. Trunk
C. Console
D. Loopback
**Answer: B.**

74. VLAN tagging on Ethernet trunks is commonly associated with:
A. 802.11
B. 802.1Q
C. 802.3af
D. 802.15.4
**Answer: B — 802.1Q.**

75. Redundant Layer-2 links create a risk of switching loops. Which technology helps prevent them?
A. STP
B. DNS
C. DHCP
D. NAT
**Answer: A — STP.**

76. A Layer-2 loop can cause:
A. Broadcast storm
B. Faster DNS
C. Automatic encryption
D. Better routing
**Answer: A.**

## Section H — Firewall, WAF, IDS, IPS & Attacks

77. A company wants to filter inbound traffic based on IP and port:
A. Firewall
B. DNS
C. DHCP
D. CDN
**Answer: A.**

78. A security device detects suspicious traffic and alerts an analyst but does not automatically block it:
A. IDS
B. IPS
C. NAT
D. WAF
**Answer: A.**

79. A security device detects malicious traffic and actively blocks it:
A. IDS
B. IPS
C. DNS
D. DHCP
**Answer: B.**

80. A company wants to protect a web application against malicious HTTP requests such as SQL injection/XSS patterns:
A. WAF
B. Switch
C. DHCP
D. NAT
**Answer: A — WAF.**

81. Best distinction:
A. WAF focuses specifically on web/application traffic
B. WAF assigns IPs
C. Firewall only handles DNS
D. They are identical
**Answer: A.**

82. A firewall tracks active connections and makes decisions based on connection state:
A. Stateless
B. Stateful
C. DNS firewall
D. VPN
**Answer: B — Stateful.**

83. A firewall evaluates packets independently without tracking connection state:
A. Stateful
B. Stateless
C. WAF
D. VPN
**Answer: B — Stateless.**

84. Many compromised devices overwhelm a public server with traffic:
A. DDoS
B. Phishing
C. ARP discovery
D. DNS caching
**Answer: A — DDoS.**

85. An attacker sends fake ARP messages associating their MAC with another host's IP:
A. ARP spoofing/poisoning
B. DNSSEC
C. Port forwarding
D. VLAN tagging
**Answer: A.**

86. An attacker secretly intercepts and may modify communication between two parties:
A. MITM
B. DORA
C. PAT
D. STP
**Answer: A — MITM.**

87. A fake bank email directs a user to a fake login page:
A. Phishing
B. NAT
C. ARP
D. STP
**Answer: A.**

88. An attacker tries a few common passwords against many accounts:
A. Credential stuffing
B. Password spraying
C. DDoS
D. DNSSEC
**Answer: B — Password spraying.**

89. An attacker uses stolen username/password pairs from another breach:
A. Credential stuffing
B. VLAN hopping
C. ARP
D. SYN handshake
**Answer: A.**

## Section I — VPN, TLS, Encryption & Identity

90. Employees need secure access to internal resources from home:
A. Remote-access VPN
B. Site-to-site VPN
C. DNS VPN
D. VLAN VPN
**Answer: A.**

91. Two company offices need a persistent encrypted connection between their networks:
A. Remote-access VPN
B. Site-to-site VPN
C. Browser cache
D. WAF
**Answer: B.**

92. Encrypted IP-layer VPN tunnels are strongly associated with:
A. IPsec
B. HTTP
C. FTP
D. ARP
**Answer: A.**

93. Which IPsec component provides encryption/integrity for IP packets?
A. ESP
B. DNS
C. DHCP
D. ARP
**Answer: A — ESP.**

94. A modern lightweight VPN protocol with a small codebase:
A. WireGuard
B. Telnet
C. FTP
D. POP3
**Answer: A.**

95. HTTPS relies on:
A. TLS
B. ARP
C. DHCP
D. STP
**Answer: A.**

96. A major purpose of a TLS certificate is to:
A. Bind a public key to an identity/domain and support authenticated TLS
B. Assign a private IP
C. Replace TCP
D. Store DNS cache
**Answer: A.**

97. A publicly trusted website certificate is normally signed by a:
A. Certificate Authority
B. DHCP client
C. Router
D. Switch
**Answer: A — CA.**

98. Which statement about cryptography in secure communication is correct?
A. Symmetric cryptography is efficient for bulk data encryption
B. Asymmetric encryption is always faster for bulk data
C. Hashing decrypts ciphertext
D. TLS does not use cryptography
**Answer: A.**

99. A cryptographic hash is primarily:
A. A one-way transformation useful for integrity/password-storage schemes
B. Reversible encryption
C. IP routing
D. VLAN tagging
**Answer: A.**

100. Why use a salt when hashing passwords?
A. To make identical passwords produce different hashes and make precomputed attacks harder
B. To make passwords reversible
C. To increase bandwidth
D. To assign IP addresses
**Answer: A.**

101. Password plus a time-based authenticator code is:
A. MFA
B. NAT
C. VLAN
D. DNSSEC
**Answer: A.**

102. A user proves identity and the system then checks whether they may access an admin API. The second step is:
A. Authentication
B. Authorization
C. Encryption
D. Hashing
**Answer: B — Authorization.**

## Section J — Troubleshooting Scenarios

103. Users can access websites by IP but not hostname. Investigate first:
A. DNS
B. TCP window only
C. HTTP payload only
D. VLAN name
**Answer: A — DNS.**

104. A workstation gets 169.254.x.x after joining the network:
A. Investigate DHCP connectivity/configuration
B. Investigate HTTP headers
C. Investigate SMTP
D. Investigate WAF
**Answer: A.**

105. HTTP works but HTTPS does not. Which server port should be checked?
A. 22
B. 53
C. 80
D. 443
**Answer: D.**

106. A client repeatedly sends SYN but receives no SYN-ACK. Investigate:
A. Network path/firewall/server listening state
B. DNS MX only
C. HTML payload only
D. VLAN name only
**Answer: A.**

107. A server immediately sends TCP RST after a connection attempt:
A. Connection was reset/rejected; investigate service/listening/firewall state
B. DNS definitely succeeded
C. DHCP completed
D. TLS certificate is definitely valid
**Answer: A.**

108. A reverse proxy returns 502 while the backend is unhealthy. Relevant path:
A. Client → reverse proxy → upstream backend
B. Client → DNS → DHCP
C. Client → ARP → SMTP
D. Client → switch → MAC only
**Answer: A.**

109. An API returns 401 when the client sends no valid credentials. Investigate:
A. Authentication credentials/token
B. VLAN trunking
C. DHCP DORA
D. MAC table
**Answer: A.**

110. An authenticated user gets 403 for `/admin`. Investigate:
A. Authorization/permissions
B. DNS only
C. TCP handshake only
D. DHCP lease
**Answer: A.**

111. Two departments cannot communicate after being moved to separate VLANs. Likely issue:
A. Inter-VLAN routing is not configured/allowed
B. DNS must be disabled
C. TCP cannot cross VLANs
D. VLANs automatically share Layer-2 broadcasts
**Answer: A.**

112. A switch-to-switch link must carry VLAN 10, 20 and 30. Check:
A. Trunking
B. DHCP client mode
C. SMTP
D. NAT only
**Answer: A.**

113. A redundant switch link causes huge repeated broadcasts. Likely issue:
A. Layer-2 loop
B. DNS MX failure
C. HTTP 404
D. TLS expiry
**Answer: A.**

114. Users worldwide experience high latency for static images. Which architecture can reduce geographic latency?
A. CDN
B. DHCP
C. ARP
D. SMTP
**Answer: A — CDN.**

115. One public endpoint distributes requests across several backend servers:
A. Load balancer
B. DHCP server
C. ARP cache
D. DNS TXT only
**Answer: A.**

116. A security layer specifically inspects HTTP requests before they reach a web application:
A. WAF
B. DHCP
C. Switch
D. NTP
**Answer: A.**

117. A user connects to a VPN but cannot reach internal resources. Investigate:
A. VPN routes, access policies, DNS and firewall rules
B. Browser fonts
C. HTML/CSS
D. SMTP only
**Answer: A.**

118. A server is reachable from its LAN but not from another network. Investigate first:
A. Routing/firewall path
B. HTML body
C. DNS MX only
D. Keyboard
**Answer: A.**

119. Hostname resolves correctly, but TCP port 443 connection fails:
A. DNS works; investigate TCP path/service/firewall
B. DNS is definitely broken
C. DHCP must be broken
D. HTTP payload is definitely invalid
**Answer: A.**

120. TCP connection succeeds, but the application returns HTTP 500:
A. Transport worked; the server application encountered an error
B. TCP handshake failed
C. DNS failed
D. ARP failed
**Answer: A.**

## Section K — Mixed High-Trap Questions

121. Which statement is correct?
A. MAC addresses are primarily used for local Layer-2 delivery
B. MAC addresses replace IP routing
C. DNS uses MAC addresses to identify domains
D. TCP uses MAC addresses for sequencing
**Answer: A.**

122. Correct pairing:
A. DNS — hostname resolution
B. DHCP — web encryption
C. ARP — email delivery
D. TCP — IP assignment
**Answer: A.**

123. Correct pairing:
A. TCP — reliable ordered byte stream
B. UDP — guaranteed retransmission
C. ARP — application layer
D. DNS — Ethernet framing
**Answer: A.**

124. Correct port mapping:
A. 22 — SSH
B. 53 — HTTPS
C. 443 — DHCP
D. 67 — SMTP
**Answer: A.**

125. Correct port mapping:
A. 993 — IMAPS
B. 995 — SSH
C. 161 — HTTPS
D. 123 — SMTP
**Answer: A.**

126. A packet has reached the correct destination IP but the local MAC is unknown. Which protocol resolves IPv4-to-MAC mapping?
A. ARP
B. DNS
C. DHCP
D. HTTP
**Answer: A.**

127. A default gateway:
A. Provides a next hop for traffic leaving the local IP network
B. Always provides DNS
C. Is always the web server
D. Is a TCP flag
**Answer: A.**

128. A firewall allows TCP 443 but blocks TCP 80. Intended effect:
A. HTTPS may be allowed while plain HTTP is blocked
B. DNS is blocked
C. DHCP is blocked
D. SSH is automatically allowed
**Answer: A.**

129. HTTP method normally used to remove a resource:
A. DELETE
B. PATCH
C. GET
D. OPTIONS
**Answer: A.**

130. HTTP method commonly used to replace/update a resource representation:
A. PUT
B. GET
C. HEAD
D. TRACE
**Answer: A.**

131. HTTP 301 belongs to:
A. Success
B. Redirection
C. Client error
D. Server error
**Answer: B.**

132. HTTP 503 belongs to:
A. Informational
B. Success
C. Client error
D. Server error
**Answer: D.**

133. Which transport protocol is connectionless?
A. UDP
B. TCP
C. SSH
D. HTTPS
**Answer: A.**

134. Which protocol performs a three-way handshake?
A. TCP
B. UDP
C. DNS
D. DHCP
**Answer: A.**

135. Which is NOT a TCP flag?
A. SYN
B. ACK
C. FIN
D. TTL
**Answer: D.**

136. Which is an IPv4 header field?
A. TTL
B. Window Size
C. Sequence Number
D. Destination Port
**Answer: A.**

137. Which is an Ethernet frame field?
A. Source MAC
B. TCP sequence number
C. HTTP Host header
D. DNS MX record
**Answer: A.**

138. A company wants employees to securely access internal applications without exposing those applications directly to the public internet. A possible solution:
A. Remote-access VPN plus access controls
B. Plain FTP
C. Telnet
D. Open DNS recursion
**Answer: A.**

139. A malicious DNS response redirects users to an attacker-controlled IP:
A. DNS spoofing/cache poisoning
B. DHCP DORA
C. STP
D. PAT
**Answer: A.**

140. An attacker captures unencrypted network traffic to obtain credentials:
A. Sniffing
B. VLAN tagging
C. NAT
D. DNSSEC
**Answer: A.**

141. Users/services should receive only the permissions required:
A. Least privilege
B. Open access
C. Maximum privilege
D. Flat networking
**Answer: A.**

142. No network location is automatically trusted; access is continuously verified:
A. Zero Trust
B. Open Trust
C. NAT
D. STP
**Answer: A.**

143. CIA triad:
A. Confidentiality, Integrity, Availability
B. Control, Internet, Authentication
C. Connectivity, Identity, Authorization
D. Compression, Integrity, Addressing
**Answer: A.**

144. Encrypting database storage/disk:
A. Encryption at rest
B. Encryption in transit
C. ARP
D. NAT
**Answer: A.**

145. HTTPS protects data while it travels between client and server:
A. Encryption in transit
B. Encryption at rest
C. VLAN isolation
D. Password hashing
**Answer: A.**

146. Protecting passwords from reversible plaintext storage:
A. Password hashing
B. Base64 encoding
C. Plaintext storage
D. DNS caching
**Answer: A.**

147. Which is NOT the purpose of Base64?
A. Strong encryption
B. Represent binary data as text
C. Encode bytes as printable characters
D. Transport-friendly representation
**Answer: A.**

148. Detect malicious traffic and automatically take preventive action:
A. IPS
B. IDS
C. DNS
D. DHCP
**Answer: A.**

149. Detect suspicious traffic and alert analysts:
A. IDS
B. IPS
C. NAT
D. PAT
**Answer: A.**

150. Separate broadcast domains using logical segmentation on switches:
A. VLAN
B. NAT
C. TCP
D. DNS
**Answer: A.**

## Section L — Final Rapid Scenarios

151. A browser sends GET to an API. The request reaches the server, but the client lacks permission. Most appropriate response:
A. 200
B. 201
C. 403
D. 301
**Answer: C — 403.**

152. Credentials are sent to a server over HTTPS. Which is accurate?
A. HTTPS protects HTTP traffic using TLS
B. HTTPS replaces authentication
C. HTTPS automatically grants authorization
D. HTTPS assigns an IP
**Answer: A.**

153. Packet capture shows SYN, SYN-ACK, ACK:
A. TCP connection establishment
B. DNS resolution
C. DHCP lease renewal
D. TLS certificate expiration
**Answer: A.**

154. Destination IP is outside the local subnet. Where does the host normally send the Ethernet frame?
A. To the default gateway's MAC address
B. Directly to the remote server's MAC
C. To DNS server's MAC
D. To DHCP server only
**Answer: A.**

155. A host wants the MAC address of its IPv4 default gateway:
A. ARP
B. DNS
C. SMTP
D. HTTP
**Answer: A.**

156. A reverse proxy returns 504 because the upstream application does not respond in time:
A. Gateway/proxy timeout
B. Authentication success
C. Resource created
D. DNS failure
**Answer: A.**

157. Internal private IPs need outbound internet access through a public address:
A. NAT/PAT
B. ARP
C. STP
D. DNSSEC
**Answer: A.**

158. Two offices communicate securely over the public internet as private networks:
A. Site-to-site VPN
B. HTTP redirect
C. DNS CNAME
D. VLAN only
**Answer: A.**

159. Block malicious SQL injection requests before reaching a web server:
A. WAF
B. DHCP
C. NTP
D. ARP
**Answer: A.**

160. A fake login URL is sent by email to steal credentials:
A. Phishing
B. NAT
C. STP
D. DHCP
**Answer: A.**

# TOP 40 MUST-MEMORIZE FACTS

1. SSH → TCP 22
2. HTTP → TCP 80
3. HTTPS → TCP 443 traditionally
4. DNS → UDP 53 commonly; TCP 53 in specific cases
5. DHCP → UDP 67 server / 68 client
6. FTP → TCP 20/21
7. SMTP → TCP 25
8. IMAP → TCP 143
9. IMAPS → TCP 993
10. POP3 → TCP 110
11. POP3S → TCP 995
12. NTP → UDP 123
13. SNMP → UDP 161
14. TFTP → UDP 69
15. TCP → reliable, ordered, connection-oriented
16. UDP → connectionless, low overhead
17. TCP handshake → SYN → SYN-ACK → ACK
18. FIN → graceful TCP termination
19. RST → reset/abort
20. Sequence number → byte positioning
21. ACK number → next expected byte
22. Window → receiver flow-control information
23. DNS → name resolution
24. DHCP → IP/network configuration
25. ARP → IPv4-to-MAC mapping on local network
26. NAT → address translation
27. PAT → many private hosts share public IP using ports
28. A record → IPv4
29. AAAA → IPv6
30. MX → mail server
31. CNAME → hostname alias
32. VLAN → logical Layer-2 segmentation
33. Trunk → multiple VLANs
34. Access → normally one VLAN for endpoint
35. STP → prevents Layer-2 loops
36. Firewall → traffic filtering
37. IDS → detect/alert
38. IPS → detect/prevent
39. WAF → web application protection
40. VPN → secure/private connectivity over untrusted networks

# FINAL TRAP LIST

- 401 = authentication problem; 403 = authenticated/identified client is not permitted.
- 502 = bad upstream response; 504 = gateway/proxy timeout.
- DNS = name resolution; DHCP = host IP/configuration; ARP = IPv4-to-MAC on local network.
- TCP = reliability/order/connection; UDP = low overhead/no built-in reliability.
- Firewall = network traffic filtering; WAF = web application protection.
- IDS = detect/alert; IPS = detect/block/prevent.
- Access = endpoint/single VLAN; Trunk = multiple VLANs.
- Authentication = Who are you? Authorization = What may you access?
- Encryption = reversible with a key; hashing = designed as one-way.
- HTTPS = HTTP protected by TLS; HTTP/3 = HTTP over QUIC/UDP.

# PRACTICE RULE

For every question:
1. Identify the scenario.
2. Identify the protocol/technology.
3. Identify the layer.
4. Recall port/header/flag if relevant.
5. Eliminate distractors.
6. Choose the answer.

Do not memorize definitions only. Train yourself to recognize the technology from a practical situation.
