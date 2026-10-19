# Accenture DevOps — High-Return MCQs

## 1. CI/CD — Pipeline Failure
A CI/CD pipeline automatically builds the application, but deployment should run only when all tests pass. What should control deployment?
A) Monitoring dashboard
B) Quality gate
C) Load balancer
D) Version control

Answer: B) Quality gate

## 2. Git — Version Control
A developer accidentally introduces a bug in the latest commit. The team wants to identify exactly which commit introduced the problem. Which Git capability is most useful?
A) Git clone
B) Git history/log
C) Git push
D) Git stash

Answer: B) Git history/log

## 3. Docker — Container
A developer wants an application and all its dependencies to run consistently across different environments. Which technology is most appropriate?
A) Docker container
B) DNS
C) Load balancer
D) VPN

Answer: A) Docker container

## 4. Docker — Image vs Container
A team creates a packaged, immutable template containing an application's code and dependencies. What is it?
A) Container
B) Docker Image
C) Volume
D) Network

Answer: B) Docker Image

Remember: Image = template; Container = running instance of an image.

## 5. Docker — Persistent Data
A database runs inside a Docker container. The team wants its data to survive even when the container is deleted. What should they use?
A) Docker image
B) Docker volume
C) Docker network
D) Docker registry

Answer: B) Docker volume

## 6. Docker — Registry
A company wants to store and distribute private Docker images for its development teams. Which component is designed for this?
A) Docker Registry
B) Docker Compose
C) Docker Volume
D) Dockerfile

Answer: A) Docker Registry

## 7. Dockerfile
Which Dockerfile instruction is commonly used to specify the command executed when a container starts?
A) FROM
B) COPY
C) CMD
D) EXPOSE

Answer: C) CMD

## 8. Docker Compose
An application consists of Node.js backend, PostgreSQL, and Redis. The developer wants to start all three services together using one configuration file. Which tool is appropriate?
A) Docker Compose
B) Git
C) Jenkins
D) Terraform

Answer: A) Docker Compose

## 9. Kubernetes — Scaling
A web application experiences a sudden increase in traffic. Kubernetes should automatically increase the number of pod replicas based on CPU utilization. Which feature is appropriate?
A) ConfigMap
B) Horizontal Pod Autoscaler
C) PersistentVolume
D) ServiceAccount

Answer: B) Horizontal Pod Autoscaler

## 10. Kubernetes — Service
Pods are ephemeral and their IP addresses may change. A stable endpoint is required to access a group of Pods. What should be used?
A) Kubernetes Service
B) ConfigMap
C) Secret
D) Namespace

Answer: A) Kubernetes Service

## 11. Kubernetes — Configuration
An application needs environment-specific configuration such as APP_MODE=production and LOG_LEVEL=info. No sensitive credentials are involved. Which Kubernetes object is appropriate?
A) Secret
B) ConfigMap
C) Service
D) Deployment

Answer: B) ConfigMap

## 12. Kubernetes — Secrets
A Kubernetes application needs to access a database password. Which object is designed for this purpose?
A) ConfigMap
B) Secret
C) Service
D) Namespace

Answer: B) Secret

## 13. Terraform
A DevOps engineer wants to create AWS EC2 instances, networks, and databases using declarative configuration files. Which tool is most appropriate?
A) Jenkins
B) Terraform
C) Prometheus
D) Grafana

Answer: B) Terraform

## 14. Terraform — Idempotency
A Terraform configuration is executed multiple times without changing the desired infrastructure configuration. What should Terraform generally do?
A) Create duplicate infrastructure every time
B) Detect that infrastructure already matches the desired state
C) Delete all infrastructure
D) Reinstall the operating system

Answer: B

## 15. Monitoring
A company wants to collect CPU utilization, memory usage, request rates, and application metrics. Which tool is commonly used?
A) Prometheus
B) Git
C) Jenkins
D) Terraform

Answer: A) Prometheus

## 16. Visualization
Prometheus is collecting application metrics. The team wants dashboards showing those metrics visually. Which tool is commonly used?
A) Docker
B) Grafana
C) Git
D) Terraform

Answer: B) Grafana

## 17. Logging
An application produces thousands of logs per minute. The team wants centralized log collection and searching. Which category of tooling is most appropriate?
A) Centralized logging
B) Load balancing
C) Infrastructure provisioning
D) Source control

Answer: A) Centralized logging

High-return distinction: Metrics = Prometheus; Visualization = Grafana; Logs = Loki/ELK-type systems.

## 18. Alerting
A production server's CPU remains above 90% for several minutes. The operations team should automatically receive an alert. What capability is being used?
A) Alerting
B) Version control
C) Containerization
D) Compilation

Answer: A) Alerting

## 19. Health Checks
A load balancer should stop sending traffic to a server that is no longer responding. Which mechanism enables this?
A) Health check
B) Git hook
C) Docker volume
D) DNS caching

Answer: A) Health check

## 20. Load Balancing
A web application has three backend servers. Incoming requests should be distributed across healthy servers. Which component performs this function?
A) Load balancer
B) Database
C) Git repository
D) Secret manager

Answer: A) Load balancer

## 21. Auto Scaling
Traffic increases from 1,000 to 20,000 requests per minute. The application should automatically add compute instances. Which capability is required?
A) Auto Scaling
B) Version control
C) Logging
D) DNS caching

Answer: A) Auto Scaling

## 22. Blue-Green vs Canary
A company wants to expose a new version to only 5% of users before gradually increasing traffic. Which strategy?
A) Blue-Green
B) Canary
C) Rolling
D) Big Bang

Answer: B) Canary

## 23. Rolling Deployment
A company updates instances gradually while keeping some old instances available during the deployment. Which strategy?
A) Canary
B) Blue-Green
C) Rolling
D) Manual

Answer: C) Rolling

## 24. Blue-Green
Two identical production environments exist. Version 1 runs in Blue and version 2 runs in Green. Traffic is switched from Blue to Green after validation. What strategy is this?
A) Rolling
B) Canary
C) Blue-Green
D) Shadow deployment

Answer: C) Blue-Green

## 25. DevSecOps
A company automatically scans dependencies for known vulnerabilities during its CI/CD pipeline. What practice does this represent?
A) DevSecOps
B) Manual deployment
C) Load balancing
D) Capacity planning

Answer: A) DevSecOps

## 26. Secret Management
A developer stores an AWS access key directly inside a Git repository. What is the major problem?
A) Poor load balancing
B) Credential exposure
C) DNS failure
D) Container networking

Answer: B) Credential exposure

Correct approach: use a secret-management system and never commit credentials.

## 27. Infrastructure Drift
An engineer manually changes an AWS security group that was originally created using Terraform. Later, Terraform reports that actual infrastructure differs from declared configuration. What is this called?
A) Containerization
B) Infrastructure drift
C) Continuous integration
D) Load balancing

Answer: B) Infrastructure drift

## 28. Rollback
A newly deployed version causes production errors. The team wants to quickly return to the previously working version. Which DevOps capability is required?
A) Rollback
B) Provisioning
C) Monitoring only
D) Compilation

Answer: A) Rollback

## 29. Immutable Infrastructure
A DevOps team avoids modifying production servers manually. Instead, they create a new machine/image and replace the old one. What principle is this?
A) Immutable infrastructure
B) Manual configuration
C) Vertical scaling
D) Stateful deployment

Answer: A) Immutable infrastructure

## 30. Horizontal vs Vertical Scaling
A company increases the CPU and RAM of an existing server from 4 CPU cores/8 GB RAM to 16 CPU cores/32 GB RAM. What type of scaling is this?
A) Horizontal scaling
B) Vertical scaling
C) Auto healing
D) Load balancing

Answer: B) Vertical scaling

Remember: Vertical = bigger machine; Horizontal = more machines.

# Final High-Return Pattern Map

Merge code frequently -> CI
Automatically release to production -> CD
Automated tests -> Continuous Testing
Production metrics -> Monitoring
Build/test/deploy automatically -> CI/CD Pipeline
Gradually replace instances -> Rolling
Two identical environments -> Blue-Green
Small percentage of users first -> Canary
Infrastructure through code -> Terraform / IaC
Package application + dependencies -> Docker Image
Running image -> Container
Persistent container data -> Volume
Multiple services together -> Docker Compose
Kubernetes CPU-based pod scaling -> HPA
Stable access to Pods -> Service
Non-sensitive configuration -> ConfigMap
Credentials -> Secret
Metrics -> Prometheus
Dashboards -> Grafana
Centralized logs -> Loki/ELK
Infrastructure mismatch -> Drift
Return to previous version -> Rollback
Replace rather than modify servers -> Immutable Infrastructure
Bigger machine -> Vertical Scaling
More machines -> Horizontal Scaling

## 3-Day Priority

1. Docker
2. Kubernetes basics
3. Terraform/IaC
4. Monitoring: Prometheus/Grafana
5. AWS DevOps services
6. Deployment strategies
7. Git/GitHub
8. DevSecOps
9. Scaling + load balancing
10. Troubleshooting scenarios
