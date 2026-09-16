# 03_Accenture_DevOps_MCQA_200.md

# Accenture DevOps — 200+ MCQA Practice Bank

## How to use this file

You asked for **minimum 200 DevOps questions with answers and no options**.

That is intentional: this is an **active-recall bank**, not another theory dump.

For each question:

1. Hide the answer.
2. Answer aloud or write your answer.
3. Compare with the answer.
4. Mark it:
   - ✅ Know
   - ⚠️ Partial
   - ❌ Wrong
5. Revisit every ⚠️/❌ question after the next study session.

## Research basis

Current public Accenture DevOps reports repeatedly mention **Docker, Kubernetes, Jenkins, Git, AWS, Terraform, Linux, monitoring and CI/CD**. A 2025 Accenture DevOps Engineer report lists Docker, Kubernetes, Jenkins, Python, AWS, Terraform, SonarQube, Maven and Git. citeturn0search0

Accenture-oriented 2026 interview material emphasizes Jenkins/Docker, Kubernetes, CI vs CD and cloud fundamentals. citeturn0search1 A recent 2026 candidate/community report describes CI/CD pipeline design, Kubernetes troubleshooting, monitoring, Terraform and secrets. citeturn0search6 Older Accenture candidate reports also describe technical MCQs on shell scripts, Docker, Kubernetes and Ansible followed by Git/CI-CD questions. citeturn0search8

### Evidence warning

These are **not claimed to be official Accenture PYQs**. They are original practice questions built around publicly reported Accenture DevOps themes and the theory covered in your two DevOps files.

The actual campus assessment can vary by hiring track. Treat the questions as **Accenture-relevant practice**, not leaked/official questions.

## Priority distribution

Highest return:

- CI/CD
- Git
- Docker
- Kubernetes
- AWS/cloud fundamentals
- Terraform/IaC
- Monitoring/observability
- Security
- Troubleshooting/scenarios

Lower return for your current 7–10 day window:

- deep service mesh
- advanced Kubernetes internals
- advanced distributed systems
- deep cryptography
- specialized enterprise tooling

---

## Q1. What is DevOps?

**Answer:** A set of practices and culture combining development and operations to deliver and operate software reliably and efficiently.

## Q2. What is Continuous Integration?

**Answer:** Frequently integrating code changes into a shared repository and automatically building and testing them.

## Q3. What is Continuous Delivery?

**Answer:** Keeping software in a releasable state through an automated delivery pipeline, with release potentially requiring approval.

## Q4. What is Continuous Deployment?

**Answer:** Automatically deploying validated changes to production.

## Q5. CI vs Continuous Delivery?

**Answer:** CI validates integrated changes; Continuous Delivery keeps validated software ready for release.

## Q6. Continuous Delivery vs Continuous Deployment?

**Answer:** Delivery may require a release decision; Deployment automatically releases validated changes.

## Q7. What is a CI/CD pipeline?

**Answer:** An automated workflow that builds, tests, packages, deploys and verifies software.

## Q8. What is Jenkins?

**Answer:** An automation server commonly used to implement CI/CD pipelines.

## Q9. What is a Jenkinsfile?

**Answer:** A file that defines a Jenkins pipeline as code.

## Q10. Which language is commonly used for Jenkins Pipeline scripts?

**Answer:** Groovy.

## Q11. What is a Jenkins agent?

**Answer:** An execution environment where Jenkins runs pipeline work.

## Q12. What is a Jenkins controller?

**Answer:** The central Jenkins component that orchestrates jobs and coordinates agents.

## Q13. What is a Jenkins declarative pipeline?

**Answer:** A structured Jenkins Pipeline syntax with a defined declarative model for stages and execution.

## Q14. What is a Jenkins scripted pipeline?

**Answer:** A more programmatic Jenkins Pipeline style using Groovy scripting.

## Q15. What is a Jenkins shared library?

**Answer:** Reusable pipeline code shared across multiple Jenkins projects.

## Q16. What is a Jenkins webhook?

**Answer:** A source-control event notification that can trigger a Jenkins job.

## Q17. What is Git?

**Answer:** A distributed version-control system.

## Q18. What does git add do?

**Answer:** Stages selected changes for the next commit.

## Q19. What does git commit do?

**Answer:** Records staged changes in local Git history.

## Q20. What does git push do?

**Answer:** Sends local commits to a remote repository.

## Q21. What does git fetch do?

**Answer:** Downloads remote updates without automatically integrating them into the current branch.

## Q22. What does git pull do?

**Answer:** Fetches remote changes and integrates them according to the configured pull behavior.

## Q23. What is a Git branch?

**Answer:** An independent line of development.

## Q24. What is a pull request?

**Answer:** A mechanism for reviewing and proposing integration of changes into another branch.

## Q25. What is a merge conflict?

**Answer:** A situation where Git cannot automatically combine competing changes.

## Q26. Merge vs rebase?

**Answer:** Merge combines histories; rebase reapplies commits onto a new base and rewrites commit ancestry.

## Q27. What is git revert?

**Answer:** A command that creates a new commit reversing an earlier commit.

## Q28. Why is git revert safer than rewriting shared history?

**Answer:** It preserves existing history while adding a reversing commit.

## Q29. What is a Git tag?

**Answer:** A named reference commonly used to mark a specific commit or release.

## Q30. What is branch protection?

**Answer:** Rules that restrict unsafe changes to important branches and can require reviews/checks.

## Q31. What is a required status check?

**Answer:** An automated check that must pass before a protected branch change can be merged.

## Q32. What is Docker?

**Answer:** A platform for packaging and running applications in containers.

## Q33. What is a Docker image?

**Answer:** A packaged template used to create containers.

## Q34. What is a Docker container?

**Answer:** A running instance of a Docker image.

## Q35. What is a Dockerfile?

**Answer:** Instructions used to build a Docker image.

## Q36. What is a container registry?

**Answer:** A repository that stores and distributes container images.

## Q37. What is Docker Compose?

**Answer:** A tool for defining and running multi-container applications.

## Q38. What is a Docker volume?

**Answer:** Persistent storage managed separately from a container's writable lifecycle.

## Q39. What is a Docker network?

**Answer:** A virtual network that enables controlled communication between containers.

## Q40. What does EXPOSE do in a Dockerfile?

**Answer:** Documents the port an application intends to use; it does not by itself publish that port.

## Q41. What does 8080:3000 mean in Docker port mapping?

**Answer:** Host port 8080 is mapped to container port 3000.

## Q42. What is a multi-stage Docker build?

**Answer:** A build using multiple stages so build dependencies can be excluded from the final runtime image.

## Q43. Why use .dockerignore?

**Answer:** To exclude unnecessary or sensitive files from the Docker build context.

## Q44. What is a Docker image layer?

**Answer:** A filesystem layer used to construct an image and enable caching.

## Q45. Why order Dockerfile instructions carefully?

**Answer:** To maximize cache reuse and avoid rebuilding unchanged layers.

## Q46. Image vs container?

**Answer:** An image is the packaged template; a container is a running instance of that image.

## Q47. Container vs VM?

**Answer:** Containers generally share the host kernel; VMs run a guest operating system.

## Q48. What is a Docker registry tag?

**Answer:** A human-readable reference associated with an image version or variant.

## Q49. Why is latest risky in production?

**Answer:** It is mutable and can point to different image contents over time.

## Q50. Why pin images by digest?

**Answer:** A digest identifies exact image content and improves deployment reproducibility.

## Q51. What is a non-root container?

**Answer:** A container whose main process runs without root privileges.

## Q52. Why avoid root containers?

**Answer:** It reduces the impact of a container compromise.

## Q53. What is Kubernetes?

**Answer:** A platform for orchestrating containerized workloads.

## Q54. What is a Kubernetes Pod?

**Answer:** The smallest deployable Kubernetes unit containing one or more containers.

## Q55. What is a Kubernetes Deployment?

**Answer:** A controller that manages replicated Pods and controlled updates.

## Q56. What is a Kubernetes ReplicaSet?

**Answer:** A controller that maintains a specified number of Pod replicas.

## Q57. What is a Kubernetes Service?

**Answer:** A stable network abstraction for accessing a set of Pods.

## Q58. What is Ingress?

**Answer:** A Kubernetes mechanism for HTTP/HTTPS routing into Services.

## Q59. What is an Ingress controller?

**Answer:** A component that implements Ingress routing behavior.

## Q60. What is kubectl?

**Answer:** The command-line client commonly used to interact with Kubernetes.

## Q61. What does kubectl get do?

**Answer:** Lists or retrieves information about Kubernetes resources.

## Q62. What does kubectl describe do?

**Answer:** Shows detailed resource information and events.

## Q63. What does kubectl logs do?

**Answer:** Displays container logs for a Pod.

## Q64. What does kubectl exec do?

**Answer:** Executes a command inside a running container when permitted.

## Q65. What is a Kubernetes manifest?

**Answer:** A declarative file describing Kubernetes resources and desired state.

## Q66. What is a ConfigMap?

**Answer:** A Kubernetes object for non-sensitive configuration data.

## Q67. What is a Kubernetes Secret?

**Answer:** A Kubernetes object intended for sensitive configuration data, requiring appropriate protection.

## Q68. What is a Namespace?

**Answer:** A logical scope for organizing and isolating Kubernetes resources.

## Q69. What is Kubernetes RBAC?

**Answer:** Role-Based Access Control for permissions within the Kubernetes API.

## Q70. What is a NetworkPolicy?

**Answer:** A policy controlling allowed network traffic to and from selected Pods.

## Q71. What is HPA?

**Answer:** Horizontal Pod Autoscaler, which adjusts Pod replicas based on configured metrics.

## Q72. What is a DaemonSet?

**Answer:** A controller that ensures a Pod runs on eligible nodes, often for node-level agents.

## Q73. What is a StatefulSet?

**Answer:** A controller for stateful workloads needing stable identity and storage characteristics.

## Q74. What is a Job?

**Answer:** A Kubernetes resource for finite work that runs to completion.

## Q75. What is a CronJob?

**Answer:** A resource that creates Jobs according to a schedule.

## Q76. What is a PodDisruptionBudget?

**Answer:** A policy limiting voluntary disruptions to help maintain availability.

## Q77. What is a readiness probe?

**Answer:** A check determining whether a Pod should receive traffic.

## Q78. What is a liveness probe?

**Answer:** A check determining whether a container is alive and may need restarting.

## Q79. What is a startup probe?

**Answer:** A probe that gives slow-starting applications time to initialize before liveness behavior takes effect.

## Q80. What is CrashLoopBackOff?

**Answer:** A status indicating a container repeatedly crashes and Kubernetes backs off before restarting it.

## Q81. What does OOMKilled mean?

**Answer:** A container was terminated because of an out-of-memory condition, commonly after exceeding its memory limit.

## Q82. What is ImagePullBackOff?

**Answer:** A status indicating repeated failure to pull a container image with increasing retry delays.

## Q83. What commonly causes ImagePullBackOff?

**Answer:** Wrong image/tag, registry authentication failure, unavailable registry, network problems, or a missing image.

## Q84. What commonly causes a Pending Pod?

**Answer:** Insufficient resources, taints, affinity rules, quotas, or other scheduling constraints.

## Q85. How do you troubleshoot CrashLoopBackOff?

**Answer:** Inspect logs, previous logs, events, exit codes, configuration, dependencies and resource limits.

## Q86. How do you troubleshoot OOMKilled?

**Answer:** Inspect memory usage, requests/limits, workload behavior and possible leaks.

## Q87. How do you troubleshoot a Service with no traffic?

**Answer:** Check selectors, matching Pods, readiness, ports and endpoints.

## Q88. What is targetPort?

**Answer:** The Pod/container port to which a Kubernetes Service forwards traffic.

## Q89. What is service port?

**Answer:** The port exposed by a Kubernetes Service for clients.

## Q90. What is NodePort?

**Answer:** A Service type that exposes a service through a port on cluster nodes.

## Q91. What is ClusterIP?

**Answer:** The default Kubernetes Service type providing an internal cluster IP.

## Q92. What is a Kubernetes node?

**Answer:** A machine that runs Kubernetes workloads.

## Q93. What is the Kubernetes control plane?

**Answer:** Components responsible for cluster management, API handling, scheduling and reconciliation.

## Q94. What is the Kubernetes API server?

**Answer:** The central API endpoint used by Kubernetes clients and components.

## Q95. What is etcd?

**Answer:** A distributed key-value store used by Kubernetes to store cluster state.

## Q96. What is kubelet?

**Answer:** An agent on each Kubernetes node that manages assigned Pods.

## Q97. What is a Kubernetes controller?

**Answer:** A control-loop component that reconciles actual state toward desired state.

## Q98. What is reconciliation?

**Answer:** Comparing desired and actual state and taking actions to make them converge.

## Q99. What is a Kubernetes scheduler?

**Answer:** The component that selects suitable nodes for unscheduled Pods.

## Q100. What is Helm?

**Answer:** A package manager/tool for Kubernetes applications.

## Q101. What is a Helm chart?

**Answer:** A package containing Kubernetes templates and metadata.

## Q102. What is a Helm release?

**Answer:** A deployed instance of a Helm chart.

## Q103. What is a Kubernetes resource request?

**Answer:** The CPU/memory amount a workload requests for scheduling purposes.

## Q104. What is a Kubernetes resource limit?

**Answer:** The maximum CPU/memory a container may use according to configured limits.

## Q105. What is a taint?

**Answer:** A node property that repels Pods unless they have a matching toleration.

## Q106. What is a toleration?

**Answer:** A Pod setting allowing it to schedule onto nodes with matching taints.

## Q107. What is node affinity?

**Answer:** A scheduling rule influencing which nodes a Pod can or should run on.

## Q108. Why spread replicas across zones?

**Answer:** To reduce correlated failure risk from losing one failure domain.

## Q109. What is Terraform?

**Answer:** An Infrastructure-as-Code tool for defining and managing infrastructure declaratively.

## Q110. What does terraform init do?

**Answer:** Initializes a Terraform working directory and obtains required providers/modules.

## Q111. What does terraform plan do?

**Answer:** Previews proposed infrastructure changes.

## Q112. What does terraform apply do?

**Answer:** Applies Terraform changes to infrastructure.

## Q113. What does terraform destroy do?

**Answer:** Requests deletion of infrastructure managed by the configuration/state.

## Q114. What is Terraform state?

**Answer:** A record Terraform uses to track resources it manages.

## Q115. Why is Terraform state sensitive?

**Answer:** It can contain resource metadata and sometimes sensitive values.

## Q116. What is a Terraform backend?

**Answer:** The mechanism used to store Terraform state.

## Q117. Why use remote Terraform state?

**Answer:** It enables shared state and can provide locking/versioning depending on the backend.

## Q118. What is state locking?

**Answer:** A mechanism preventing concurrent Terraform operations from modifying shared state simultaneously.

## Q119. What is a Terraform provider?

**Answer:** A plugin that lets Terraform interact with a platform or API.

## Q120. What is a Terraform module?

**Answer:** A reusable collection of Terraform configuration.

## Q121. What is terraform validate?

**Answer:** A command that checks Terraform configuration syntax and structural validity.

## Q122. What is terraform fmt?

**Answer:** A command that formats Terraform configuration consistently.

## Q123. What is Terraform drift?

**Answer:** A difference between declared/expected infrastructure and actual infrastructure.

## Q124. What causes configuration drift?

**Answer:** Untracked manual changes or other differences between intended and actual state.

## Q125. Why review terraform plan in pull requests?

**Answer:** It shows proposed infrastructure changes before they are applied.

## Q126. Terraform vs CloudFormation?

**Answer:** Terraform is multi-provider; CloudFormation is AWS-native infrastructure as code.

## Q127. What is Ansible?

**Answer:** An automation and configuration-management tool.

## Q128. What is an Ansible playbook?

**Answer:** A YAML file describing automation tasks and desired configuration.

## Q129. What is Ansible Vault?

**Answer:** A mechanism for encrypting sensitive Ansible data.

## Q130. Terraform vs Ansible?

**Answer:** Terraform primarily provisions/manages infrastructure; Ansible commonly configures systems and automates tasks.

## Q131. What is monitoring?

**Answer:** Collecting and analyzing signals about system health and performance.

## Q132. What is logging?

**Answer:** Recording application or system events and messages.

## Q133. What is tracing?

**Answer:** Following a request through multiple components/services.

## Q134. What is Prometheus?

**Answer:** A monitoring and time-series metrics system.

## Q135. What is Grafana?

**Answer:** A dashboard and visualization platform commonly used with metrics sources.

## Q136. Prometheus vs Grafana?

**Answer:** Prometheus collects/stores/queries metrics; Grafana visualizes data from sources.

## Q137. What is Loki?

**Answer:** A log aggregation system commonly used with Grafana.

## Q138. What is Node Exporter?

**Answer:** A Prometheus exporter exposing host metrics.

## Q139. What is a metric?

**Answer:** A numerical measurement of system behavior over time.

## Q140. What is a log?

**Answer:** A recorded event or message generated by software or infrastructure.

## Q141. What is a trace span?

**Answer:** A timed operation within a distributed trace.

## Q142. What is a trace ID?

**Answer:** An identifier linking spans belonging to the same distributed request.

## Q143. Why use correlation IDs?

**Answer:** They make it easier to trace one request across distributed services.

## Q144. What is OpenTelemetry?

**Answer:** An open-source framework for generating, collecting and exporting telemetry.

## Q145. What is alert fatigue?

**Answer:** Reduced effectiveness caused by too many noisy or non-actionable alerts.

## Q146. Why should alerts be actionable?

**Answer:** Non-actionable alerts create noise and can cause important alerts to be ignored.

## Q147. What is log aggregation?

**Answer:** Collecting logs from multiple systems into a central searchable system.

## Q148. Why use structured logging?

**Answer:** Structured logs are easier to search, filter, correlate and analyze.

## Q149. Why avoid logging secrets?

**Answer:** Logs can be broadly accessible and retained, creating persistent credential exposure.

## Q150. What is CI artifact?

**Answer:** A generated build output such as a package, binary, report or container image.

## Q151. What is an artifact repository?

**Answer:** A system for storing and distributing generated artifacts.

## Q152. What is a build once, deploy many principle?

**Answer:** Build one validated artifact and promote that same artifact across environments.

## Q153. Why avoid rebuilding before production?

**Answer:** A rebuilt artifact may differ from the one tested in staging.

## Q154. What is a pipeline runner?

**Answer:** An environment that executes CI/CD jobs.

## Q155. What is a pipeline stage?

**Answer:** A logical phase such as build, test, scan or deploy.

## Q156. What is a pipeline quality gate?

**Answer:** A required condition that must pass before promotion continues.

## Q157. What is a deployment gate?

**Answer:** A condition or approval required before a deployment stage proceeds.

## Q158. Why parallelize independent CI jobs?

**Answer:** To reduce total pipeline duration.

## Q159. What is pipeline fan-out/fan-in?

**Answer:** Fan-out runs independent jobs in parallel; fan-in waits for required jobs before continuing.

## Q160. What is pipeline timeout?

**Answer:** A maximum allowed duration for a job/workflow.

## Q161. Why use pipeline timeouts?

**Answer:** To prevent hung jobs from consuming runners indefinitely.

## Q162. What is caching in CI?

**Answer:** Persisting reusable dependencies/intermediate results to reduce repeated work.

## Q163. Why cache dependencies?

**Answer:** To reduce installation/download time when dependencies have not changed.

## Q164. What is a flaky test?

**Answer:** A test whose result changes inconsistently without the intended code behavior changing.

## Q165. Why are flaky tests dangerous?

**Answer:** They reduce trust in CI and can hide real failures or block valid changes.

## Q166. What is a smoke test?

**Answer:** A small set of checks verifying basic functionality after a change/deployment.

## Q167. What is an integration test?

**Answer:** A test verifying interactions between components or systems.

## Q168. What is a regression test?

**Answer:** A test detecting whether existing behavior was broken by a change.

## Q169. What is a deployment strategy?

**Answer:** A defined method for releasing a new version to users or infrastructure.

## Q170. What is rolling deployment?

**Answer:** Gradually replacing old instances with new ones.

## Q171. What is blue-green deployment?

**Answer:** Maintaining old and new environments and switching traffic between them.

## Q172. What is canary deployment?

**Answer:** Exposing a new version to a small subset of traffic before wider rollout.

## Q173. Rolling vs blue-green?

**Answer:** Rolling gradually replaces instances; blue-green switches traffic between two environments.

## Q174. Blue-green vs canary?

**Answer:** Blue-green switches between environments; canary gradually exposes a subset of traffic.

## Q175. Why use canary releases?

**Answer:** They limit initial blast radius and provide real-traffic validation.

## Q176. Why use blue-green releases?

**Answer:** They can provide fast traffic switching and rollback when both environments remain available.

## Q177. What is rollback?

**Answer:** Returning to a previous known-good release.

## Q178. What is fix-forward?

**Answer:** Deploying a new version that fixes the problem rather than reverting.

## Q179. Why can rollback be unsafe after a database migration?

**Answer:** The previous application version may not be compatible with the changed schema.

## Q180. What is graceful shutdown?

**Answer:** Stopping a service in a controlled way while allowing active work and resources to finish/close safely.

## Q181. What is connection draining?

**Answer:** Allowing existing requests/connections to finish before removing an instance from service.

## Q182. What is a health check?

**Answer:** A test used to determine whether a service is alive, ready or healthy.

## Q183. Liveness vs readiness?

**Answer:** Liveness asks whether the process is alive; readiness asks whether it should receive traffic.

## Q184. What is DevSecOps?

**Answer:** Integrating security throughout development, CI/CD and operations.

## Q185. What is least privilege?

**Answer:** Giving identities/processes only the permissions required for their tasks.

## Q186. Why should secrets not be hard-coded?

**Answer:** Source code and history can expose them to unauthorized users.

## Q187. What is secret scanning?

**Answer:** Detecting credentials or sensitive tokens accidentally exposed in source repositories.

## Q188. What is dependency scanning?

**Answer:** Checking third-party dependencies for known vulnerabilities or policy issues.

## Q189. What is container image scanning?

**Answer:** Checking images for vulnerabilities, secrets or policy violations.

## Q190. What is SAST?

**Answer:** Static Application Security Testing that analyzes code without executing it.

## Q191. What is DAST?

**Answer:** Dynamic Application Security Testing against a running application.

## Q192. What is SBOM?

**Answer:** A Software Bill of Materials listing software components and dependencies.

## Q193. Why is SBOM useful?

**Answer:** It helps inventory components and identify vulnerability exposure.

## Q194. What is supply-chain security?

**Answer:** Protecting source, dependencies, build systems, artifacts, registries and deployment paths from compromise.

## Q195. Why sign artifacts?

**Answer:** To help verify artifact authenticity and integrity.

## Q196. What is artifact immutability?

**Answer:** Treating a released artifact as fixed rather than silently modifying it.

## Q197. Why separate build and deployment credentials?

**Answer:** To reduce blast radius if one pipeline stage is compromised.

## Q198. Why limit CI production permissions?

**Answer:** Untrusted or compromised build code should not automatically gain broad production access.

## Q199. What is secret rotation?

**Answer:** Replacing credentials periodically or after exposure.

## Q200. What is credential revocation?

**Answer:** Invalidating a credential so it can no longer be used.

## Q201. What is HashiCorp Vault?

**Answer:** A secrets-management platform for securely storing and controlling access to sensitive data.

## Q202. What is AWS Secrets Manager?

**Answer:** A managed AWS service for storing and retrieving secrets.

## Q203. What is IAM?

**Answer:** Identity and Access Management for controlling identities and permissions.

## Q204. What is an IAM role?

**Answer:** An identity with permissions that authorized users/workloads can assume.

## Q205. Why prefer IAM roles over long-lived keys for workloads?

**Answer:** They can provide temporary scoped credentials and reduce long-lived secret exposure.

## Q206. What is an AWS security group?

**Answer:** A stateful virtual firewall controlling allowed traffic for supported resources.

## Q207. What is a VPC?

**Answer:** A logically isolated virtual cloud network.

## Q208. What is a private subnet?

**Answer:** A subnet designed without direct public internet ingress, commonly using controlled egress when needed.

## Q209. What is a public subnet?

**Answer:** A subnet with routing that can provide public internet connectivity to appropriately configured resources.

## Q210. What is a NAT gateway?

**Answer:** A service commonly used to allow private-subnet resources to initiate outbound internet connections.

## Q211. What is an Internet Gateway?

**Answer:** A VPC component providing internet connectivity for appropriately routed public resources.

## Q212. What is an Availability Zone?

**Answer:** An isolated infrastructure location within a cloud region.

## Q213. What is a cloud region?

**Answer:** A geographic cloud infrastructure area containing multiple availability zones.

## Q214. What is high availability?

**Answer:** Designing a service to remain available despite expected component failures.

## Q215. What is fault tolerance?

**Answer:** The ability to continue operating despite certain component failures.

## Q216. What is elasticity?

**Answer:** The ability to dynamically adjust resources according to demand.

## Q217. What is scalability?

**Answer:** The ability to handle increased workload by adding resources or changing architecture.

## Q218. What is serverless computing?

**Answer:** A model where the provider manages much of the underlying server infrastructure and users run code/services on demand.

## Q219. What is object storage?

**Answer:** Storage that manages data as objects with metadata, commonly for files and unstructured data.

## Q220. What is AWS EC2?

**Answer:** A service providing virtual compute instances.

## Q221. What is AWS S3?

**Answer:** An object storage service.

## Q222. What is AWS CloudWatch?

**Answer:** An AWS observability service for metrics, logs, alarms and related operational data.

## Q223. What is an Application Load Balancer?

**Answer:** An AWS load balancer for HTTP/HTTPS application-layer routing.

## Q224. What is an Auto Scaling Group?

**Answer:** An AWS mechanism for maintaining and adjusting a group of EC2 instances.

## Q225. What is RDS?

**Answer:** AWS's managed relational database service.

## Q226. What is CloudTrail?

**Answer:** An AWS service recording API/control-plane activity for auditing.

## Q227. What is ECR?

**Answer:** Amazon Elastic Container Registry, a managed AWS container image registry.

## Q228. What is EKS?

**Answer:** Amazon Elastic Kubernetes Service, AWS's managed Kubernetes service.

## Q229. What is ECS?

**Answer:** Amazon Elastic Container Service, AWS's managed container orchestration service.

## Q230. What is Fargate?

**Answer:** AWS compute technology for running containers without managing underlying servers directly.

## Q231. What is Lambda?

**Answer:** AWS serverless compute for running code in response to events without managing servers directly.

## Q232. Terraform vs CloudFormation?

**Answer:** Terraform supports multiple providers; CloudFormation is AWS-native.

## Q233. What is a reverse proxy?

**Answer:** A server that receives client requests and forwards them to backend servers.

## Q234. What is a load balancer?

**Answer:** A component that distributes traffic across backend instances.

## Q235. What is TLS termination?

**Answer:** Decrypting TLS traffic at an endpoint such as a load balancer or reverse proxy.

## Q236. What is rate limiting?

**Answer:** Restricting the number of requests/actions allowed over a defined period.

## Q237. What is a WAF?

**Answer:** A Web Application Firewall that filters and protects HTTP/HTTPS application traffic.

## Q238. What is network segmentation?

**Answer:** Separating network zones with controlled communication paths.

## Q239. What is authentication vs authorization?

**Answer:** Authentication verifies identity; authorization determines permitted actions.

## Q240. What is RBAC?

**Answer:** Role-Based Access Control, assigning permissions through roles.

## Q241. What is mTLS?

**Answer:** Mutual TLS, where both communicating endpoints authenticate each other using certificates.

## Q242. What is certificate rotation?

**Answer:** Replacing expiring or compromised certificates with new valid certificates.

## Q243. Why automate certificate renewal?

**Answer:** To reduce outages caused by expired certificates and manual renewal mistakes.

## Q244. What is a circuit breaker?

**Answer:** A resilience pattern that temporarily stops calls to a failing dependency.

## Q245. Why use timeouts?

**Answer:** To prevent operations from waiting indefinitely on a failing or slow dependency.

## Q246. Why use exponential backoff?

**Answer:** To space retries increasingly farther apart and reduce pressure on a failing dependency.

## Q247. Why add jitter to retries?

**Answer:** To prevent many clients from retrying simultaneously.

## Q248. Why are unlimited retries dangerous?

**Answer:** They can amplify load against an already failing dependency.

## Q249. What is cascading failure?

**Answer:** A failure propagating from one component to dependent components.

## Q250. What is bulkheading?

**Answer:** Isolating resources so failure in one workload does not consume all shared capacity.

## Q251. What is graceful degradation?

**Answer:** Providing reduced functionality when some components fail instead of failing completely.

## Q252. What is load shedding?

**Answer:** Deliberately rejecting lower-priority work to protect critical capacity.

## Q253. What is backpressure?

**Answer:** Slowing or limiting producers when downstream capacity is constrained.

## Q254. What is queue-based decoupling?

**Answer:** Using a queue so producers and consumers do not need to operate synchronously.

## Q255. What is a dead-letter queue?

**Answer:** A queue holding messages that repeatedly fail processing.

## Q256. What is at-least-once delivery?

**Answer:** A delivery model where a message may be delivered more than once.

## Q257. Why is idempotency important?

**Answer:** Retries and duplicate deliveries can otherwise cause duplicate side effects.

## Q258. What is an idempotency key?

**Answer:** A unique key allowing a service to recognize repeated requests and avoid duplicate processing.

## Q259. What is a service dependency?

**Answer:** Another service or resource required for an application function.

## Q260. What is service discovery?

**Answer:** A mechanism allowing services to locate other service instances dynamically.

## Q261. What is a microservice?

**Answer:** An independently deployable service organized around a bounded responsibility or capability.

## Q262. Why can microservices increase DevOps complexity?

**Answer:** They increase the number of deployable components, dependencies, networks and operational surfaces.

## Q263. What is a sidecar container?

**Answer:** A supporting container deployed alongside an application container.

## Q264. What is a service mesh?

**Answer:** An infrastructure layer managing service-to-service communication concerns such as traffic, security and observability.

## Q265. Why can service mesh be overkill for a small application?

**Answer:** Its operational complexity may not justify its benefits.

## Q266. What is GitOps?

**Answer:** An operational model where desired state is stored in Git and automated systems reconcile environments to it.

## Q267. What is a GitOps controller?

**Answer:** A controller that observes Git-defined desired state and reconciles the environment.

## Q268. What is Argo CD?

**Answer:** A GitOps continuous-delivery tool commonly used to synchronize Kubernetes environments with Git.

## Q269. Declarative vs imperative configuration?

**Answer:** Declarative specifies desired state; imperative specifies the steps to perform.

## Q270. What is infrastructure drift detection?

**Answer:** Automatically identifying differences between intended and actual infrastructure.

## Q271. Why avoid manual cloud-console changes?

**Answer:** They bypass review/version control and can create configuration drift.

## Q272. What is configuration management?

**Answer:** Managing system/application configuration consistently across environments.

## Q273. What is infrastructure provisioning?

**Answer:** Creating infrastructure resources such as networks, compute, storage and databases.

## Q274. Provisioning vs configuration management?

**Answer:** Provisioning creates infrastructure; configuration management configures systems/software.

## Q275. What is orchestration?

**Answer:** Coordinating multiple automated tasks/workloads into a broader operational workflow.

## Q276. What is idempotence?

**Answer:** The property that repeating an operation produces the same intended result without harmful cumulative effects.

## Q277. Why is idempotence valuable in DevOps?

**Answer:** It makes retries safer and automation more predictable.

## Q278. What is a runbook?

**Answer:** Documented procedures for performing or troubleshooting an operational task.

## Q279. What is a playbook?

**Answer:** A documented or automated response procedure for a class of operational situations.

## Q280. What is an incident?

**Answer:** An event causing or risking service degradation.

## Q281. What is mitigation?

**Answer:** An action that reduces current incident impact before the root cause is necessarily fixed.

## Q282. What is root-cause analysis?

**Answer:** Investigation to identify underlying causes rather than only symptoms.

## Q283. What is a blameless postmortem?

**Answer:** An incident review focused on system/process improvement rather than personal blame.

## Q284. What is blast radius?

**Answer:** The scope of systems or users potentially affected by a failure or change.

## Q285. Why reduce blast radius?

**Answer:** To limit the impact of failures and make recovery safer.

## Q286. What is MTTD?

**Answer:** Mean Time To Detect.

## Q287. What is MTTR?

**Answer:** Mean Time To Recovery or Repair, depending on the organization's definition.

## Q288. What is an SLI?

**Answer:** A Service Level Indicator: a measured value representing service performance or reliability.

## Q289. What is an SLO?

**Answer:** A Service Level Objective: a target for an SLI.

## Q290. What is an SLA?

**Answer:** A contractual service-level commitment.

## Q291. SLI vs SLO vs SLA?

**Answer:** SLI is the measurement; SLO is the target; SLA is the contractual commitment.

## Q292. What is an error budget?

**Answer:** The amount of unreliability permitted by an SLO over a defined period.

## Q293. What is deployment frequency?

**Answer:** How often successful production deployments occur.

## Q294. What is lead time for changes?

**Answer:** Time from a change entering the delivery process to successful production deployment, according to the metric definition.

## Q295. What is change failure rate?

**Answer:** The proportion of deployments that cause production failure or require remediation.

## Q296. What is recovery time?

**Answer:** Time required to restore normal service after failure.

## Q297. What is RTO?

**Answer:** Recovery Time Objective: target maximum time to restore service after disruption.

## Q298. What is RPO?

**Answer:** Recovery Point Objective: target maximum acceptable data-loss window.

## Q299. Why test backups?

**Answer:** An untested backup may be incomplete, corrupt or impossible to restore.

## Q300. What is disaster recovery?

**Answer:** Processes and technology for restoring systems/data after major disruption.

## Q301. What is failover?

**Answer:** Switching service operation to an alternate healthy component/system.

## Q302. What is failback?

**Answer:** Returning operation from the alternate system to the primary system.

## Q303. What is a single point of failure?

**Answer:** A component whose failure can stop a critical service path.

## Q304. What is redundancy?

**Answer:** Additional components/capacity allowing service to survive some failures.

## Q305. What is capacity planning?

**Answer:** Estimating and preparing resources needed for expected workloads and growth.

## Q306. What is autoscaling?

**Answer:** Automatically adjusting capacity or replicas according to demand/conditions.

## Q307. What is a bottleneck?

**Answer:** A resource or component limiting overall throughput/performance.

## Q308. What is throughput?

**Answer:** Amount of work processed per unit time.

## Q309. What is latency?

**Answer:** Time taken for an operation/request to complete.

## Q310. Why monitor p95/p99 latency?

**Answer:** Averages can hide slow tail requests that affect a significant minority of users.

## Q311. What are the four Golden Signals?

**Answer:** Latency, traffic, errors and saturation.

## Q312. What is saturation?

**Answer:** How close a resource/service is to its capacity limit.

## Q313. What is a deployment marker?

**Answer:** An observable record showing when a release occurred so metric changes can be correlated with it.

## Q314. What is structured logging?

**Answer:** Logging in a consistent machine-readable format such as JSON with fields.

## Q315. What is centralized logging?

**Answer:** Collecting logs from multiple systems into a central searchable platform.

## Q316. What is alert grouping?

**Answer:** Combining related alerts into one notification/incident.

## Q317. What is alert deduplication?

**Answer:** Suppressing repeated alerts that represent the same underlying issue.

## Q318. What is alert flapping?

**Answer:** An alert repeatedly switching between firing and resolved states.

## Q319. How can alert flapping be reduced?

**Answer:** Use stable thresholds, evaluation windows and hysteresis.

## Q320. What is a golden image?

**Answer:** A standardized approved base image for deployments.

## Q321. Why use hardened base images?

**Answer:** To reduce unnecessary software and security exposure.

## Q322. What is image bloat?

**Answer:** Unnecessary size/content in a container image.

## Q323. How do multi-stage builds reduce bloat?

**Answer:** They exclude build dependencies from the final runtime image.

## Q324. What is Docker build context?

**Answer:** The files made available to the Docker build process.

## Q325. What is a Docker bind mount?

**Answer:** A mount mapping a host filesystem path into a container.

## Q326. Volume vs bind mount?

**Answer:** A volume is managed by Docker; a bind mount maps a specific host path.

## Q327. Why can bind mounts be risky?

**Answer:** They can tightly couple containers to host paths and expose host data if misconfigured.

## Q328. What is CMD vs ENTRYPOINT?

**Answer:** ENTRYPOINT defines primary executable behavior; CMD supplies default command/arguments and interacts with ENTRYPOINT.

## Q329. What is a Docker healthcheck?

**Answer:** A configured test used to determine container application health.

## Q330. What is an ephemeral container?

**Answer:** A short-lived, replaceable container not intended to hold critical persistent state.

## Q331. Why keep state outside containers?

**Answer:** Container replacement can otherwise destroy important data.

## Q332. What is statelessness?

**Answer:** Designing instances without relying on unique local persistent state.

## Q333. Why are stateless services easier to scale?

**Answer:** Any healthy instance can usually handle requests without unique local state.

## Q334. What is sticky session?

**Answer:** Routing a client's requests preferentially to the same backend instance.

## Q335. Why can sticky sessions complicate scaling?

**Answer:** They reduce routing flexibility and create dependence on individual instances.

## Q336. What is externalized session storage?

**Answer:** Storing session state in a shared service rather than individual application instances.

## Q337. What is cache invalidation?

**Answer:** Updating/removing cached data when the underlying source changes.

## Q338. What is cache stampede?

**Answer:** Many requests simultaneously rebuilding/fetching the same expired cache entry.

## Q339. What is consumer lag?

**Answer:** The amount of message work a consumer is behind the producer/current position.

## Q340. Why monitor queue depth?

**Answer:** Growing depth can indicate consumers cannot keep up with incoming work.

## Q341. What is connection pooling?

**Answer:** Reusing a managed set of connections instead of creating a new one for every request.

## Q342. Why can too many DB connections be harmful?

**Answer:** They consume resources and can exhaust database connection limits.

## Q343. What is a database migration?

**Answer:** A controlled schema or data change required by an application version.

## Q344. Why can rollback after a schema change fail?

**Answer:** The old application may not be compatible with the new schema.

## Q345. What is expand-and-contract migration?

**Answer:** Adding compatible schema first, migrating usage, then removing old structures later.

## Q346. What is backward-compatible API change?

**Answer:** A change that allows existing valid clients to continue working.

## Q347. Why is compatibility important in rolling deployments?

**Answer:** Old and new application versions coexist temporarily.

## Q348. What is a feature flag?

**Answer:** A mechanism for enabling/disabling functionality through controlled configuration.

## Q349. Why use feature flags?

**Answer:** They can separate deployment from feature exposure and enable rapid disablement.

## Q350. What is a dark launch?

**Answer:** Deploying functionality without exposing it normally to users until validation.

## Q351. What is shadow traffic?

**Answer:** Sending copies of production requests to a new system without using its response for users.

## Q352. What is progressive delivery?

**Answer:** Gradually exposing a new version using controlled rollout techniques.

## Q353. What is a release candidate?

**Answer:** A near-final version undergoing final validation before release.

## Q354. Why retain previous artifacts?

**Answer:** To support reproducible deployment and safer rollback.

## Q355. What is artifact retention?

**Answer:** The policy defining how long generated artifacts are stored.

## Q356. Why version infrastructure configuration?

**Answer:** It makes changes reviewable, reproducible and traceable.

## Q357. What is policy as code?

**Answer:** Machine-readable rules that automatically enforce security/compliance policies.

## Q358. What is compliance as code?

**Answer:** Expressing compliance requirements as automated checks or policies.

## Q359. What is a security baseline?

**Answer:** A minimum set of approved security configurations and controls.

## Q360. What is hardening?

**Answer:** Reducing unnecessary functionality, privileges and exposure in a system.

## Q361. What is defense in depth?

**Answer:** Using multiple independent security controls so one failure does not expose everything.

## Q362. What is zero trust?

**Answer:** A model that does not automatically trust users/devices/network locations and continuously verifies access.

## Q363. What is network segmentation?

**Answer:** Separating network areas with controlled communication.

## Q364. Why keep databases private?

**Answer:** To reduce direct public exposure and restrict access to authorized application paths.

## Q365. What is a private endpoint?

**Answer:** A private network path to a managed service without public internet exposure, depending on provider.

## Q366. What is cloud cost optimization?

**Answer:** Balancing resource usage, performance, reliability and business requirements to avoid unnecessary cost.

## Q367. What is rightsizing?

**Answer:** Adjusting resource capacity to better match actual workload requirements.

## Q368. What is serverless cold start?

**Answer:** Startup latency when a function/service instance must initialize before processing a request.

## Q369. What is managed Kubernetes?

**Answer:** A cloud service where the provider manages significant cluster operations.

## Q370. Why might Kubernetes be overkill?

**Answer:** Its operational complexity may not be justified for simple workloads.

## Q371. What is a CDN?

**Answer:** A Content Delivery Network that distributes/caches content closer to users.

## Q372. Why use a CDN?

**Answer:** To reduce latency and origin load for cacheable content.

## Q373. What is DNS?

**Answer:** A system that maps domain names to network records such as IP addresses.

## Q374. What is DNS TTL?

**Answer:** The time a DNS record may be cached before it should be refreshed.

## Q375. Why can DNS changes take time to propagate?

**Answer:** Resolvers and clients may cache records according to TTL and other behavior.

## Q376. What is a load-balancer health check?

**Answer:** A periodic check determining whether a backend should receive traffic.

## Q377. Why remove unhealthy backends from rotation?

**Answer:** To prevent traffic from being sent to instances that cannot serve it correctly.

## Q378. What is TLS?

**Answer:** A protocol used to protect data in transit and authenticate endpoints according to configuration.

## Q379. What is TLS passthrough?

**Answer:** Forwarding encrypted TLS traffic to a backend without terminating TLS at the intermediate proxy.

## Q380. TLS termination vs passthrough?

**Answer:** Termination decrypts at the proxy; passthrough forwards encrypted traffic to the backend.

## Q381. What is certificate expiry risk?

**Answer:** Expired certificates can cause TLS connections and integrations to fail.

## Q382. What is secret rotation failure?

**Answer:** Credentials change but dependent workloads fail to update and lose authentication.

## Q383. How can zero-downtime secret rotation work?

**Answer:** Use overlapping valid credentials, update consumers, verify, then revoke the old credential.

## Q384. What is vulnerability management?

**Answer:** Identifying, assessing, prioritizing, remediating and tracking vulnerabilities.

## Q385. What is CVE?

**Answer:** A standardized identifier for a publicly known vulnerability.

## Q386. What is CVSS?

**Answer:** A system for characterizing vulnerability severity.

## Q387. Why is CVSS not the whole risk picture?

**Answer:** Exposure, exploitability, business impact and compensating controls also matter.

## Q388. What is a compensating control?

**Answer:** A security measure that reduces risk when the preferred fix is not immediately possible.

## Q389. What is vulnerability exception?

**Answer:** A documented temporary decision to defer a vulnerability under defined risk controls.

## Q390. Why should exceptions expire?

**Answer:** Permanent exceptions can become unmanaged vulnerabilities.

## Q391. What is shift-left security?

**Answer:** Moving security checks earlier into development and CI.

## Q392. What is shift-right security?

**Answer:** Using runtime monitoring and validation after release.

## Q393. Why use both shift-left and shift-right security?

**Answer:** Pre-release controls prevent known issues while runtime controls detect issues that emerge in production.

## Q394. What is runtime security?

**Answer:** Protecting and monitoring workloads while they execute.

## Q395. What is workload identity?

**Answer:** An identity assigned to an application/workload for controlled resource access.

## Q396. What is privilege escalation?

**Answer:** Gaining permissions beyond those originally authorized.

## Q397. What is a break-glass account/procedure?

**Answer:** Controlled emergency access used when normal access paths are unavailable, with auditing.

## Q398. Why audit break-glass access?

**Answer:** It bypasses normal controls and must be reviewed.

## Q399. What is a security incident?

**Answer:** An event threatening confidentiality, integrity or availability or violating security policy.

## Q400. What is incident containment?

**Answer:** Limiting the impact of a security incident while investigation continues.

## Q401. What is incident eradication?

**Answer:** Removing the underlying malicious cause or compromised components.

## Q402. What is incident recovery?

**Answer:** Restoring normal trusted operation after containment and remediation.

## Q403. What is a postmortem?

**Answer:** A structured analysis after an incident to identify causes and improvements.

## Q404. Why assign owners to postmortem actions?

**Answer:** Unowned actions are less likely to be completed.

## Q405. What is a runbook used for during incidents?

**Answer:** It provides tested steps for diagnosing and mitigating known problems.

## Q406. What is a workaround?

**Answer:** A temporary method that reduces or bypasses an issue without fixing its root cause.

## Q407. What is a permanent fix?

**Answer:** A change intended to remove the underlying cause.

## Q408. What is a deployment freeze?

**Answer:** A period when non-essential deployments are restricted.

## Q409. Why use a change freeze during a major incident?

**Answer:** To reduce variables and prevent additional failures while stabilizing the service.

## Q410. What is a deployment audit trail?

**Answer:** Records linking a production change to source, artifact, pipeline, approvals and time.

## Q411. Why is traceability important?

**Answer:** It speeds incident investigation, auditing, rollback and accountability.

## Q412. What is reproducible deployment?

**Answer:** A deployment that produces consistent results from controlled versioned inputs.

## Q413. Why pin dependency versions?

**Answer:** To improve reproducibility and avoid unexpected dependency changes.

## Q414. What is dependency confusion?

**Answer:** An attack where a malicious package is selected instead of an intended internal dependency.

## Q415. What is typosquatting?

**Answer:** Using a look-alike package/domain name to trick users into selecting a malicious resource.

## Q416. What is a CI runner compromise?

**Answer:** Compromise of the environment executing pipeline code, potentially exposing credentials/artifacts.

## Q417. Why use ephemeral CI runners?

**Answer:** Each job starts clean, reducing persistence and cross-job contamination.

## Q418. Why restrict CI egress?

**Answer:** To reduce opportunities for malicious code to exfiltrate secrets/data.

## Q419. What is artifact provenance?

**Answer:** Evidence describing where and how an artifact was built.

## Q420. What is build reproducibility?

**Answer:** Producing equivalent build output from the same controlled inputs.

## Q421. What is a software supply-chain attack?

**Answer:** Compromising dependencies, source, build systems or artifacts to affect downstream software.

## Q422. What is image signing?

**Answer:** Cryptographically signing image/artifact metadata to help verify authenticity/integrity.

## Q423. What is an SBOM attestation?

**Answer:** Verifiable metadata associating a software-component inventory with an artifact.

## Q424. What is a golden path?

**Answer:** A recommended standardized workflow for teams to build and deploy software.

## Q425. What is platform engineering?

**Answer:** Building internal platforms and reusable tooling that help teams deliver and operate software.

## Q426. What is an internal developer platform?

**Answer:** A self-service platform providing standardized ways to build, deploy and operate applications.

## Q427. Why standardize enterprise DevOps workflows?

**Answer:** To reduce duplicated effort and inconsistent operational practices.

## Q428. What is toil?

**Answer:** Repetitive manual operational work that can often be reduced through automation.

## Q429. Why automate toil?

**Answer:** To reduce effort, errors and operational cost.

## Q430. What is capacity planning?

**Answer:** Estimating and preparing resources for expected workload and growth.

## Q431. What is overprovisioning?

**Answer:** Allocating more capacity than current demand requires.

## Q432. What is underprovisioning?

**Answer:** Allocating insufficient capacity, causing performance or availability problems.

## Q433. What is a noisy neighbor?

**Answer:** One workload consumes shared resources and degrades other workloads.

## Q434. What is CPU throttling?

**Answer:** Limiting CPU usage when a workload reaches its configured CPU limit.

## Q435. What is memory leak?

**Answer:** Memory that remains allocated unnecessarily and causes usage to grow.

## Q436. What is queue backpressure?

**Answer:** Slowing producers when downstream processing capacity is constrained.

## Q437. What is retry storm?

**Answer:** A surge of retries that can overload an already failing dependency.

## Q438. What is circuit breaker open state?

**Answer:** A state where calls to an unhealthy dependency are blocked or fail fast.

## Q439. What is circuit breaker half-open state?

**Answer:** A state allowing limited calls to test whether a dependency recovered.

## Q440. Why should non-idempotent operations not be blindly retried?

**Answer:** Retries can execute side effects more than once.

## Q441. What is exactly-once processing challenge?

**Answer:** Distributed failures make true exactly-once effects difficult; systems often use at-least-once delivery plus idempotency.

## Q442. What is a message broker?

**Answer:** A system that transports and manages messages between producers and consumers.

## Q443. What is Kafka?

**Answer:** A distributed event-streaming platform for high-throughput messaging and event processing.

## Q444. What is Kafka consumer lag?

**Answer:** The difference between the latest available record position and a consumer group's processed position.

## Q445. What is a Kafka partition?

**Answer:** An ordered sequence of records within a Kafka topic.

## Q446. What is graceful degradation?

**Answer:** Continuing critical functionality with reduced features when some dependencies fail.

## Q447. What is load shedding?

**Answer:** Rejecting lower-priority work to protect core system capacity.

## Q448. What is backpressure?

**Answer:** A mechanism limiting producers when downstream capacity is constrained.

## Q449. What is a service dependency map?

**Answer:** A representation of which services and infrastructure components depend on each other.

## Q450. Why map dependencies during incidents?

**Answer:** It helps identify upstream/downstream impact and failure propagation.

## Q451. What is incident triage?

**Answer:** Quickly assessing impact, urgency, scope and response actions.

## Q452. What is an incident commander?

**Answer:** The person coordinating priorities, communication and decisions during a major incident.

## Q453. What is an escalation policy?

**Answer:** Rules defining who should be contacted when an incident is unresolved or worsens.

## Q454. What is a service owner?

**Answer:** The team/person responsible for operating and maintaining a service.

## Q455. What is on-call?

**Answer:** A responsibility arrangement where designated engineers respond to operational incidents.

## Q456. What is a production readiness review?

**Answer:** A check that a service has required reliability, security, monitoring and operational capabilities before production.

## Q457. What is a deployment precondition?

**Answer:** A required condition that must be satisfied before release proceeds.

## Q458. Why validate postconditions?

**Answer:** A successful command exit code does not prove the intended system state was achieved.

## Q459. What is a deployment health threshold?

**Answer:** A predefined acceptable boundary for signals such as error rate or latency during rollout.

## Q460. What is automated rollback?

**Answer:** Automatically reverting a release when predefined health conditions fail.

## Q461. Why can automatic rollback be dangerous?

**Answer:** Bad signals can cause rollback loops or hide deeper issues, and data changes may make rollback unsafe.

## Q462. What is progressive rollout?

**Answer:** Increasing exposure to a new version in controlled steps.

## Q463. What is a deployment pause?

**Answer:** Temporarily stopping rollout to evaluate health or investigate risk.

## Q464. What is a deployment abort?

**Answer:** Stopping an in-progress rollout before completion.

## Q465. Why use small deployment batches?

**Answer:** They reduce blast radius and make failures easier to isolate.

## Q466. What is connection draining during deployment?

**Answer:** Allowing active requests to finish before removing an instance.

## Q467. What is a rolling deployment compatibility requirement?

**Answer:** Old and new versions must coexist safely while the rollout is in progress.

## Q468. What is expand-and-contract useful for?

**Answer:** Making database changes compatible with gradual/rolling application migration.

## Q469. What is data backfill?

**Answer:** Populating newly introduced schema fields or structures with historical data.

## Q470. Why can backfill affect production?

**Answer:** Large data operations can consume database resources and increase latency.

## Q471. What is throttled migration?

**Answer:** Running migration work at a controlled rate to reduce production impact.

## Q472. What is a backward-compatible schema change?

**Answer:** A schema change that old and new application versions can both use during transition.

## Q473. What is a destructive migration?

**Answer:** A schema change that removes or irreversibly modifies data/structure.

## Q474. Why postpone destructive migrations?

**Answer:** Keeping old structures temporarily makes rollback safer.

## Q475. What is a contract test?

**Answer:** A test verifying that service interfaces meet agreed expectations between consumers and providers.

## Q476. Why are API contracts important?

**Answer:** They reduce unexpected breaking changes between independently deployed services.

## Q477. What is a breaking change?

**Answer:** A change that causes previously valid consumers to fail without modification.

## Q478. What is API versioning?

**Answer:** Maintaining distinct API versions so clients can migrate without immediate breaking changes.

## Q479. What is a feature-flag kill switch?

**Answer:** A control that rapidly disables a problematic feature without requiring a full application rollback.

## Q480. What is shadow traffic?

**Answer:** Duplicating production requests to a new system without using its response for real users.

## Q481. Why use shadow traffic?

**Answer:** To test a new implementation under realistic traffic without affecting user responses.

## Q482. What is a canary metric?

**Answer:** A health signal such as error rate or latency used to evaluate a canary release.

## Q483. What is a deployment marker in monitoring?

**Answer:** An event showing when a release happened so metric changes can be correlated with it.

## Q484. What is p95 latency?

**Answer:** The latency below which 95% of measured requests fall.

## Q485. What is p99 latency?

**Answer:** The latency below which 99% of measured requests fall.

## Q486. Why can averages hide tail latency?

**Answer:** A small group of very slow requests can have little effect on the average.

## Q487. What is a monitoring blind spot?

**Answer:** Important system behavior not covered by available telemetry.

## Q488. Why monitor both infrastructure and application metrics?

**Answer:** Infrastructure can be healthy while the application is broken, and vice versa.

## Q489. What is synthetic monitoring?

**Answer:** Automated checks that simulate user or service interactions.

## Q490. Why use synthetic monitoring?

**Answer:** It can detect user-facing failures even when infrastructure metrics appear healthy.

## Q491. What is an alert threshold?

**Answer:** A defined boundary at which a monitored condition triggers an alert.

## Q492. What is alert deduplication?

**Answer:** Combining repeated alerts representing the same underlying issue.

## Q493. What is alert silencing?

**Answer:** Temporarily suppressing selected alerts, usually during known maintenance or incidents.

## Q494. Why should alert silences expire?

**Answer:** Permanent silences can hide future incidents.

## Q495. What is log rotation?

**Answer:** Archiving/compressing/deleting old logs according to retention policy.

## Q496. What is metric cardinality?

**Answer:** The number of unique label combinations producing time series.

## Q497. Why avoid high-cardinality Prometheus labels?

**Answer:** They can create huge numbers of time series and degrade monitoring performance.

## Q498. What are Prometheus exporters?

**Answer:** Components exposing metrics in a format Prometheus can scrape.

## Q499. What is a Prometheus scrape?

**Answer:** Prometheus collecting metrics from a configured target.

## Q500. What is a Prometheus alert rule?

**Answer:** A rule evaluating an expression and producing an alert when conditions are met.

## Q501. What is Grafana datasource?

**Answer:** A configured source from which Grafana retrieves data.

## Q502. What is OpenTelemetry Collector?

**Answer:** A component that receives, processes and exports telemetry.

## Q503. What is trace sampling?

**Answer:** Collecting only a subset of traces to control cost and storage.

## Q504. What is structured logging?

**Answer:** Machine-readable logs with consistent fields.

## Q505. What is a correlation ID?

**Answer:** An identifier used to connect related logs/events for one request or operation.

## Q506. What is DORA change failure rate?

**Answer:** The proportion of production deployments that cause failure or require remediation.

## Q507. What is DORA deployment frequency?

**Answer:** How often successful production deployments occur.

## Q508. What is DORA lead time for changes?

**Answer:** Time from a change entering the delivery process to successful production deployment.

## Q509. What is DORA recovery time?

**Answer:** Time required to restore service after a production failure.

## Q510. Why should delivery metrics not be gamed?

**Answer:** Optimizing a metric without improving real outcomes can create harmful behavior and misleading results.

## Q511. What is an SLO burn rate?

**Answer:** The rate at which a service consumes its allowed error budget.

## Q512. Why monitor error-budget burn rate?

**Answer:** Rapid burn can reveal worsening reliability before the budget is fully exhausted.

## Q513. What can teams do when error budget is exhausted?

**Answer:** Prioritize reliability work and potentially restrict risky releases according to policy.

## Q514. What is availability vs reliability?

**Answer:** Availability concerns accessible service; reliability concerns consistent correct operation over time.

## Q515. What is durability?

**Answer:** The ability to preserve data against loss over time.

## Q516. Backups vs high availability?

**Answer:** Backups support recovery after data loss; high availability keeps service operating during component failures.

## Q517. What is a disaster-recovery drill?

**Answer:** A planned exercise validating recovery procedures and readiness.

## Q518. Why test disaster recovery?

**Answer:** A recovery plan is useful only if systems and people can actually execute it.

## Q519. What is point-in-time recovery?

**Answer:** Restoring data to a selected time using supported backups/logs.

## Q520. What is active-active architecture?

**Answer:** Multiple sites/regions actively serve traffic simultaneously.

## Q521. What is active-passive architecture?

**Answer:** One site serves traffic while another remains ready to take over.

## Q522. What is failover?

**Answer:** Switching traffic/workload from a failed component to a healthy alternate.

## Q523. What is failback?

**Answer:** Returning from an alternate system to the recovered primary system.

## Q524. What is a fault domain?

**Answer:** A group of components likely to fail together due to shared infrastructure.

## Q525. Why distribute workloads across fault domains?

**Answer:** To reduce correlated failure impact.

## Q526. What is quorum?

**Answer:** The minimum number of participating members required for certain distributed decisions.

## Q527. What is split brain?

**Answer:** A distributed condition where partitioned components incorrectly believe they can independently act as authority.

## Q528. Why monitor leader elections?

**Answer:** Frequent unexpected elections can indicate instability.

## Q529. Why is time synchronization important in DevOps?

**Answer:** Accurate clocks improve log correlation, certificates, tokens, auditing and distributed-system behavior.

## Q530. What is NTP?

**Answer:** Network Time Protocol for synchronizing system clocks.

## Q531. What is DNS failover?

**Answer:** Changing DNS/routing so users are directed to a healthy endpoint.

## Q532. Why is DNS failover not instant?

**Answer:** Clients and resolvers may cache DNS records according to TTL.

## Q533. What is CDN cache hit ratio?

**Answer:** The proportion of requests served from cache instead of the origin.

## Q534. Why monitor CDN cache hit ratio?

**Answer:** Low hit ratios can increase origin load and latency.

## Q535. What is an origin server?

**Answer:** The backend source from which a CDN/reverse proxy obtains content.

## Q536. What is cache purge?

**Answer:** Removing cached content so updated origin content can be fetched.

## Q537. What is a private container registry?

**Answer:** A registry accessible only to authorized users/systems.

## Q538. Why use private registries?

**Answer:** To protect proprietary images and control supply-chain access.

## Q539. What is imagePullSecret?

**Answer:** A Kubernetes Secret used to authenticate to a private image registry.

## Q540. What commonly causes image pull failure?

**Answer:** Wrong image/tag, missing credentials, registry/network failure or missing image.

## Q541. What is resource quota in Kubernetes?

**Answer:** A limit on aggregate resource consumption or object counts in a namespace.

## Q542. Why use namespace quotas?

**Answer:** To prevent one workload/team from consuming all cluster resources.

## Q543. What is LimitRange?

**Answer:** A Kubernetes resource that sets default/minimum/maximum resource constraints.

## Q544. What is cluster autoscaler?

**Answer:** A mechanism that adjusts the number of cluster nodes based on workload needs.

## Q545. HPA vs Cluster Autoscaler?

**Answer:** HPA adjusts workload replicas; Cluster Autoscaler adjusts node capacity.

## Q546. What is node drain?

**Answer:** Safely evicting Pods from a node for maintenance or removal.

## Q547. What is cordon?

**Answer:** Marking a node unschedulable for new Pods.

## Q548. What is uncordon?

**Answer:** Marking a node schedulable again.

## Q549. What is Pod anti-affinity?

**Answer:** A scheduling rule encouraging or requiring Pods to run apart.

## Q550. Why use anti-affinity for replicas?

**Answer:** To reduce the chance that one node failure takes down all replicas.

## Q551. What is topology spread constraint?

**Answer:** A Kubernetes mechanism for distributing Pods across topology domains.

## Q552. What is a persistent volume?

**Answer:** A Kubernetes abstraction representing persistent storage.

## Q553. What is a PersistentVolumeClaim?

**Answer:** A workload's request for persistent storage.

## Q554. Why separate storage from Pods?

**Answer:** Pods are replaceable while important state should survive Pod replacement.

## Q555. What is a StorageClass?

**Answer:** A Kubernetes resource describing a class of dynamically provisioned storage.

## Q556. What is a Kubernetes init container?

**Answer:** A container that runs before application containers for initialization work.

## Q557. What is a Kubernetes sidecar?

**Answer:** A supporting container running in the same Pod as the main application.

## Q558. What is a Kubernetes admission controller?

**Answer:** A component that can validate or mutate API requests before they are persisted.

## Q559. What is policy enforcement in Kubernetes?

**Answer:** Automatically rejecting or modifying resources that violate defined rules.

## Q560. What is cluster-admin?

**Answer:** A Kubernetes role with very broad cluster permissions.

## Q561. Why avoid cluster-admin for applications?

**Answer:** It violates least privilege and creates a large blast radius if compromised.

## Q562. What is a service account?

**Answer:** An identity used by workloads or automation.

## Q563. Why limit service-account permissions?

**Answer:** To reduce what a compromised workload can do.

## Q564. What is a managed cloud service?

**Answer:** A service where the provider operates significant underlying infrastructure.

## Q565. What is the shared responsibility model?

**Answer:** A cloud security model dividing responsibilities between provider and customer.

## Q566. What is cloud elasticity vs scalability?

**Answer:** Elasticity emphasizes dynamic adjustment to demand; scalability is the broader ability to handle growth.

## Q567. What is rightsizing?

**Answer:** Selecting resource capacity appropriate for actual workload needs.

## Q568. What is a cloud quota?

**Answer:** A provider-imposed or configured limit on resource usage.

## Q569. Why can quota cause deployment failure?

**Answer:** A deployment may request more resources than the allowed quota.

## Q570. What is a spot/preemptible instance?

**Answer:** Lower-cost compute capacity that can be interrupted by the provider.

## Q571. What is a managed Kubernetes advantage?

**Answer:** The provider handles significant cluster management, reducing operational burden.

## Q572. What is a Kubernetes operational trade-off?

**Answer:** It provides powerful orchestration but adds configuration and operational complexity.

## Q573. What is an ephemeral environment?

**Answer:** A temporary environment created for a branch, pull request or test and later removed.

## Q574. Why clean up ephemeral environments?

**Answer:** To reduce cloud cost and resource accumulation.

## Q575. What is a golden path?

**Answer:** A standardized recommended workflow for building and deploying applications.

## Q576. What is platform engineering?

**Answer:** Building internal platforms and reusable tooling for developer self-service.

## Q577. What is toil?

**Answer:** Repetitive manual operational work that can often be automated.

## Q578. Why automate toil?

**Answer:** To reduce effort, errors and operational cost.

## Q579. What is the safest general troubleshooting mindset?

**Answer:** Use evidence, isolate the failing layer, mitigate impact, then investigate root cause.

## Q580. What should you check first in a severe deployment incident?

**Answer:** User impact, recent changes, rollout state and the first failing system layer.

## Q581. Does a successful deployment command prove the application is healthy?

**Answer:** No; deployment completion and application health are separate concerns.

## Q582. Does a Running Kubernetes Pod prove readiness?

**Answer:** No; a Pod can be running while its application is not ready to serve traffic.

## Q583. Does deleting an exposed secret from Git make it safe?

**Answer:** No; treat it as compromised and rotate/revoke it.

## Q584. Does terraform plan change infrastructure?

**Answer:** Normally no; it previews proposed changes.

## Q585. Does passing unit tests prove production is healthy?

**Answer:** No; integration, infrastructure, dependency and real-world behavior can still fail.

## Q586. Why is rollback not always safe?

**Answer:** Data/schema changes, external side effects or incompatible dependencies can make rollback unsafe.

## Q587. What is the final DevOps principle to remember?

**Answer:** Automate delivery, make changes traceable, limit blast radius, observe outcomes and maintain a safe recovery path.
