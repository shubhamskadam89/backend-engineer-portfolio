export interface Project {
  id: string;
  title: string;
  subtitle: string;
  question: string;
  description: string;
  problem: string;
  architecture: string;
  decision: string;
  outcome: string;
  lessonsLearned: string | string[];
  category: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  image: string;
  githubUrl?: string;
  keyTakeaways: string[];
  rateLimiting?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface JourneyStep {
  year: string;
  title?: string;
  description: string;
}

export interface CapabilityItem {
  title: string;
  sublabel: string;
  icon: string;
  statement: string;
  tools: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    roleSubtitle: string;
    headline: string;
    subtitle: string;
    bio: string;
    status: string;
    email: string;
    location: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
  philosophy: string;
  journey: JourneyStep[];
  heroMetrics: {
    value: string;
    label: string;
  }[];
  experience: ExperienceItem[];
  caseStudies: Project[];
  capabilities: CapabilityItem[];
  evidence: {
    title: string;
    subtitle: string;
    detail: string;
    whyItMatters: string;
    highlight?: string;
    stat?: {
      value: string;
      label: string;
    };
  }[];
  lessonsLearned: {
    title: string;
    topic: string;
    takeaway: string;
  }[];
}

export const initialPortfolioData: PortfolioData = {
  personal: {
    name: "Shubham Kadam",
    role: "Backend Engineer",
    roleSubtitle: "Seeking Backend Engineering Internships",
    headline: "BUILDING DISTRIBUTED BACKEND SYSTEMS",
    subtitle: "Java Backend Engineer who believes you don't really understand a system until you've built it, broken it, and measured it. No assumptions — just implementation and data.",
    bio: "I learn by building, not by reading about it. Currently deep in backend engineering fundamentals, chasing correctness and honest numbers over shortcuts.",
    status: "Available for Internships & Full-Time Roles",
    email: "shubhamskadam89@gmail.com",
    location: "Pune, India",
    github: "https://github.com/shubhamkadam",
    linkedin: "https://linkedin.com/in/shubhamkadam",
    resumeUrl: "#"
  },
  philosophy: "I don't pick a project because it's trendy — I pick it because I have a question I can't answer just by reading about it. Before I write a line of code, I ask what's actually going to break, how I'll know if my approach is better or just different, and which of my assumptions I'm most likely wrong about. Building is how I test the answer, not the goal itself.",
  journey: [
    { year: "2025", description: "I begin with a question I can't answer yet." },
    { year: "2025", description: "I figure out what \"broken\" looks like before I write the fix." },
    { year: "2025", description: "I don't trust a claim I haven't measured myself." },
    { year: "2026", description: "I stop asking \"does it work\" and start asking \"when does it stop working.\"" },
    { year: "2026", description: "I care less about shipping something and more about whether it holds up after." }
  ],
  heroMetrics: [
    { value: "4", label: "Microservices" },
    { value: "3", label: "Communication Protocols" },
    { value: "~50%", label: "Lower Average REST Latency" }
  ],
  experience: [
    {
      role: "Software Development Engineer Intern",
      company: "Campus Credentials · Backend & Dispatch Systems",
      period: "Jun 2025 – Aug 2025",
      description: "Built backend modules and optimized data access for a real-time emergency dispatch coordination tool, in a 3-member Agile team.",
      bullets: [
        "Developed Java/Spring Boot backend modules for REACT (Rapid Emergency Action & Coordination Tool), with React dashboard components for dispatch-status visibility.",
        "Reduced average MySQL query execution time by ~40% through indexing, query tuning, and eliminating N+1 queries.",
        "Automated CI/CD with GitHub Actions and Docker, cutting release time from ~15 minutes to under 2 minutes on AWS EC2 staging."
      ]
    }
  ],
  caseStudies: [
    {
      id: "api-comm-lab",
      title: "API Communication Lab",
      subtitle: "REST vs gRPC Performance Benchmarking",
      question: "Is gRPC actually faster than REST under identical workloads?",
      description: "Compared REST and gRPC under identical multi-service workloads to measure latency, throughput, and migration trade-offs.",
      problem: "Benchmark REST vs gRPC fairly under identical, controlled multi-service workloads — and find out whether the bottleneck is really the network layer or something else.",
      architecture: "5 services — API Gateway, User, Repository, Activity (Gradle multi-module) and Identity (Maven) — each with an isolated PostgreSQL database, so all cross-service communication goes through API boundaries, not shared tables.",
      decision: "Established a REST baseline first, then migrated the same workload to gRPC/Protobuf. Used a k6 load-testing harness (smoke → heavy, up to 100 VUs) with Prometheus/Grafana to separate network-serialization latency from actual database time.",
      outcome: "Parallel orchestration with Java 21 CompletableFuture cut average gateway latency ~50% (39ms → 19ms) while CPU stayed flat at 2–2.4% — proving the bottleneck was serialization overhead, not compute. Migrating to gRPC/Protobuf cut it further, ~64% at p99.",
      lessonsLearned: "I expected CPU utilization to improve significantly. Instead, latency improved while CPU remained almost unchanged, changing how I evaluate communication protocols.",
      category: "Microservices",
      tags: ["Java", "Spring Boot", "gRPC", "REST", "Protobuf", "Docker", "k6"],
      metrics: [
        { label: "p99 Latency Reduction", value: "64%" },
        { label: "Throughput (RPS)", value: "12,400" },
        { label: "Payload Reduction", value: "52%" }
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/shubhamkadam/api-comm-lab",
      keyTakeaways: [
        "Used HTTP/2 multiplexing in gRPC to eliminate head-of-line blocking.",
        "Protobuf binary serialization compressed payload size by ~52% compared to JSON.",
        "Created an automated k6 benchmarking runner with Grafana dashboards."
      ]
    },
    {
      id: "flash-sale-engine",
      title: "Flash Sale Engine",
      subtitle: "High-Concurrency Inventory Management",
      question: "How do you prevent overselling under heavy concurrency?",
      description: "Prevented overselling during high-concurrency purchase events using Redis Lua scripts, idempotency, and contention-aware request handling.",
      problem: "Prevent race conditions on stock decrement under heavy concurrency, without serializing every request through a single database lock — and without letting retries or duplicate clicks cause duplicate purchases.",
      architecture: "Spring Boot on Java 21 (Virtual Threads for async workers), Redis for rate limiting, idempotency, and inventory reservation, MySQL for durable order storage, NGINX as reverse proxy, Server-Sent Events for live inventory updates.",
      decision: "Move inventory reservation out of MySQL into an atomic Redis Lua script — check stock, check per-user limits, and decrement in one uninterruptible operation. Purchases return success immediately; a background worker asynchronously drains a Redis queue into MySQL, trading strict consistency for speed.",
      outcome: "Zero overselling and zero duplicate orders verified across every load test, from 500 to 5,000 concurrent users — confirmed by matching Redis inventory counts against MySQL order records. The system's real bottleneck was host CPU: at 5,000 VUs, CPU hit 98%, Tomcat's thread pool saturated, and NGINX began returning 502s, even though the backend kept processing orders correctly underneath.",
      lessonsLearned: [
        "Under heavy concurrency, NGINX itself became a bottleneck — it was opening and tearing down a new TCP connection for every request, exhausting available ports. Enabling connection keepalive between NGINX and the backend fixed it. It reminded me that scaling bugs aren't always in your application code.",
        "Fixed Window was the fastest rate limiter, but it let clients double their quota by bursting right at the window boundary. Sliding Window fixed that fairness gap, but the cost was real — storing every timestamp meant Redis sets grew past 280,000 keys under load. Token Bucket sat in between: smoothest for handling jitter, but the most expensive per request. There's no free option, only which trade-off fits the endpoint."
      ],
      category: "Distributed Systems",
      tags: ["Java 21", "Spring Boot", "Redis", "MySQL", "NGINX", "Docker", "k6"],
      metrics: [
        { label: "Rate limiter throughput", value: "11,533 req/s" },
        { label: "Double-sell rate", value: "0.00%" },
        { label: "Peak CPU at breaking point", value: "98%" }
      ],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/shubhamkadam/flash-sale-engine",
      keyTakeaways: [
        "Built atomic inventory reservation entirely in a Redis Lua script — stock check, per-user limit check, and decrement in one uninterruptible operation, eliminating race conditions without database locking.",
        "Benchmarked all three rate-limiting strategies under identical load: Fixed Window (11,533 req/s, fastest but boundary-bursts), Sliding Window (9,449 req/s, fair but memory-heavy), Token Bucket (8,261 req/s, best jitter handling).",
        "Fixed NGINX socket exhaustion by enabling upstream keepalive connections, eliminating dropped connections at high concurrency.",
        "Verified zero data loss and zero overselling via Redis-to-MySQL reconciliation across four progressive load tests, up to 5,000 concurrent virtual users."
      ],
      rateLimiting: "Rejected a single global policy for per-endpoint policies — strict Sliding Window on auth, bursty Token Bucket on purchases/admin, cheap Fixed Window on general reads."
    },
    {
      id: "identity-service",
      title: "Identity Service",
      subtitle: "OAuth2 & JWT Trust Infrastructure",
      question: "How should stateless authentication work across multiple services?",
      description: "Built stateless authentication with JWT, OAuth2, and refresh-token rotation — designed to fail safely under breach conditions.",
      problem: "Let multiple downstream services verify user identity independently, without every request hitting a shared auth database — while still keeping key management and revocation under control.",
      architecture: "Spring Boot + Spring Security filter chains, RSA key pairs persisted in a database, a public JWKS endpoint for stateless verification, and PostgreSQL for user, token, and key storage.",
      decision: "Sign access tokens with RS256 instead of a shared secret, so any service can verify a token using only a public key — no call back to the identity service required. Publish those public keys at a standard JWKS endpoint. Rotate the signing key on a schedule (monthly) rather than never, so a compromised key has a bounded lifetime, with old keys kept around just long enough to verify tokens issued before rotation.",
      outcome: "Downstream services validate tokens locally against published public keys — no database round-trip needed per request. Refresh tokens are stored server-side and rotated on use, so a stolen refresh token can be revoked without needing to invalidate every access token still in flight.",
      lessonsLearned: "Stateless doesn't mean the system remembers nothing — it means the *verification path* doesn't need to. The interesting design problem wasn't 'can I skip the database,' it was deciding exactly what still has to live server-side (refresh tokens, key state) versus what can be proven with just a public key.",
      category: "Security & Auth",
      tags: ["Java", "Spring Boot", "Spring Security", "JWT/JWKS", "OAuth2", "PostgreSQL"],
      metrics: [
        { label: "asymmetric JWT signing", value: "RS256" },
        { label: "verification via JWKS, no DB hit per request", value: "Stateless" },
        { label: "refresh token expiration", value: "30 days" }
      ],
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      githubUrl: "https://github.com/shubhamkadam/identity-service",
      keyTakeaways: [
        "Signed access tokens with RS256, distributing public keys via a JWKS endpoint so downstream services verify tokens without a database call.",
        "Ran automated monthly key rotation, keeping previously active keys available just long enough to validate tokens issued before the rotation.",
        "Stored refresh tokens server-side with rotation on use, so a compromised refresh token can be revoked directly.",
        "Integrated Google OAuth2 alongside local email/password login through a custom success handler, linking both identity types to the same user account."
      ]
    }
  ],
  capabilities: [
    {
      title: "Foundations",
      sublabel: "CORE BACKEND",
      icon: "Server",
      statement: "Building robust core microservices using Java, Spring Boot, Spring Security, and Hibernate with clean OOP principles.",
      tools: ["Java", "Spring Boot", "Spring Security", "Hibernate", "SQL"]
    },
    {
      title: "Communication",
      sublabel: "SERVICE INTERACTION",
      icon: "GitBranch",
      statement: "Choosing REST, gRPC, or Server-Sent Events based on what a call actually needs — request/response, low-latency binary, or one-way live updates — instead of defaulting to REST everywhere.",
      tools: ["REST", "gRPC", "Protobuf", "SSE"]
    },
    {
      title: "Infrastructure",
      sublabel: "DEPLOYMENT & OPS",
      icon: "Cloud",
      statement: "Containerizing services with Docker, deploying to AWS EC2, and monitoring with Prometheus and Grafana. Currently extending this into Kubernetes.",
      tools: ["Docker", "AWS", "Prometheus", "Grafana", "Kubernetes (learning)"]
    },
    {
      title: "Data & Storage",
      sublabel: "PERSISTENCE & CACHING",
      icon: "Database",
      statement: "Designing transactional schemas in PostgreSQL and MySQL, with Redis and Lua scripts for atomic, low-latency operations where the database alone isn't fast enough.",
      tools: ["PostgreSQL", "Redis", "MySQL", "HikariCP", "Lua"]
    }
  ],
  evidence: [
    {
      title: "President, Entrepreneurship Cell",
      subtitle: "Ownership & Team Delivery",
      detail: "Led a 44-member cross-functional team organizing national entrepreneurship events for 600+ participants, and grew the club's social media reach through a data-driven content strategy.",
      whyItMatters: "Taught me real ownership, cross-functional coordination, and how to translate strategy into a measurable result.",
      stat: {
        value: "400%",
        label: "social media reach growth"
      }
    }
  ],
  lessonsLearned: [
    {
      title: "REST vs gRPC",
      topic: "Protocol Trade-offs",
      takeaway: "I expected CPU utilization to improve significantly. Instead, latency improved while CPU remained almost unchanged, changing how I evaluate communication protocols."
    },
    {
      title: "Flash Sale Engine",
      topic: "Concurrency & Correctness",
      takeaway: "Correctness under concurrency mattered more than maximizing request throughput. Atomic Redis Lua scripts proved far more resilient than optimistic DB locking."
    },
    {
      title: "Kubernetes Orchestration",
      topic: "Infrastructure & Desired State",
      takeaway: "Running containers locally is simple; understanding orchestration requires thinking in desired state configuration rather than individual machines."
    }
  ]
};
