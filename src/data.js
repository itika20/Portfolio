// ─────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT  ·  edit anything here to update the site
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Itika Bhattacharjee',
  role: 'Software Engineer · UI Developer',
  location: 'Mumbai, Maharashtra',
  email: 'ibhattacharjee20@gmail.com',
  phone: '+91 8802909280',
  github: 'https://github.com/itika20',
  linkedin: 'https://www.linkedin.com/in/itika-bhattacharjee/',
  tagline: [
    'Building scalable financial systems',
    'Near-real-time risk workflows',
    'Data-driven UI at the edge of markets',
    'Anomaly detection in production',
  ],
  summary:
    'Software Engineer with 2.5 years building scalable financial systems and near-real-time risk workflows at JP Morgan Chase. I design and ship the UI that operations teams trust during volatile markets — backed by Java, Python and cloud-native AWS systems. Currently pursuing an M.Tech in AI/ML at BITS while building applied ML expertise in anomaly detection.',
}

// Quick-facts shown in the hero terminal (profile.json)
export const profileStats = [
  { k: 'role', v: 'Software Engineer II' },
  { k: 'company', v: 'JP Morgan Chase' },
  { k: 'domain', v: 'Margin Risk · Trading' },
  { k: 'pursuing', v: 'M.Tech AI/ML · BITS' },
  { k: 'location', v: 'Mumbai, IN' },
]

export const experience = [
  {
    company: 'JP Morgan Chase',
    role: 'Software Engineer II',
    period: "Feb '26 — Present",
    status: 'PRESENT',
    current: true,
    points: [
      'Enhancing the notification systems by automatically triggering tailored client and advisor notifications whenever a draw or pay request is raised on a Securities Based Lending (SBL) loan, **closing a long-standing visibility gap** between lending operations, advisors and clients.',
      'Owned the data layer end to end for draw and pay communications, designing the schema and table architecture and governing **schema versioning through Liquibase**, with migrations executed automatically via Lambda-invoked deployments.',
      'Enhanced the low-equity determination algorithm by incorporating additional risk parameters, sharpening **account-classification accuracy** and strengthening margin-risk controls.',
    ],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Software Engineer I',
    period: "Aug '23 — Jan '26",
    status: 'SHIPPED',
    current: false,
    points: [
      'Owned end-to-end margin-risk workflows and led the UI for a near-real-time risk monitoring dashboard used to track exposure and execute **near-real-time liquidations**.',
      'Built real-time notification systems delivering **~300 daily margin call alerts** (~$500K monthly notional), ensuring timely risk communication in trading environments.',
      'Engineered a parallel-processing batch pipeline over **5M+ cumulative SBL records daily**, replacing sequential processing with parallel streams to dramatically cut batch run time for welcome-email notifications.',
      'Owned the full development cycle and **deployed a Python anomaly-detection system to production**, flagging abnormal margin-call patterns for early issue detection.',
      'Provisioned resilient **multi-region infrastructure** (us-east-1 / us-east-2) with active / hot-passive failover orchestrated through Terraform, guaranteeing high availability and seamless disaster recovery.',
      'Architected **cloud-native systems on AWS** (ECS, Lambda) with CloudWatch and Splunk monitoring, improving reliability and reducing manual intervention.',
      'Streamlined CI/CD pipelines and **grew automated test coverage** for risk-critical services.',
    ],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Software Engineer Intern',
    period: "Feb '23 — Jul '23",
    status: 'SHIPPED',
    current: false,
    points: [
      'Delivered an internal advisor workflow for capturing and tracking margin-call curing plans, **cutting resolution time from 5 days to 3**.',
      'Built the workflow enabling advisors to capture and track margin-call curing plans, **improving cross-team visibility** across operations.',
      'Built end-to-end and component-level automated testing, **reducing regression issues** for a risk-sensitive environment.',
    ],
  },
]

// Grouped skills — no self-ratings, just a clean inventory
export const skills = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Angular', 'Spring Boot', 'Node.js', 'Express', 'NumPy', 'Pandas', 'Scikit-Learn', 'OpenCV'],
  },
  {
    category: 'Cloud',
    items: ['Amazon ECS', 'AWS Lambda', 'Amazon EC2', 'Amazon CloudWatch'],
  },
  {
    category: 'Tools & Testing',
    items: ['JUnit', 'Selenium', 'Cucumber', 'Hoverfly', 'Jenkins', 'Splunk', 'Docker', 'PostgreSQL', 'JWT'],
  },
  {
    category: 'AI & Productivity',
    items: ['GPT-4o', 'GitHub Copilot', 'Prompt Engineering', 'LLM-Assisted Development'],
  },
]

// Personal projects built outside of work
export const personalProjects = [
  {
    name: 'Finsight',
    tag: 'FULL-STACK · AI',
    github: 'https://github.com/itika20/FinSight',
    stack: ['GPT-4o', 'PostgreSQL', 'Docker', 'JWT'],
    description:
      'A full-stack personal finance platform that parses bank and credit-card PDF statements with GPT-4o, auto-categorizes transactions through a 4-layer ML pipeline (regex, VPA memory, heuristics, fallback) and visualizes spending with interactive dashboards. Includes JWT authentication and a goal-planning engine that computes required monthly savings against real spending data, all served by a Dockerized backend over a PostgreSQL data store.',
  },
  {
    name: 'Driver Drowsiness Detection System',
    tag: 'COMPUTER VISION',
    github: 'https://github.com/itika20/Driver-Drowsiness-Detection-System',
    stack: ['Python', 'OpenCV', 'dlib', 'NumPy'],
    description:
      'A computer-vision safety system that streams live webcam frames through dlib’s 68-point facial-landmark detector, computing eye-aspect-ratio (EAR) and mouth-aspect-ratio per frame to flag prolonged eye closure and yawning. Sustained sub-threshold EAR triggers an audio alarm, alerting fatigued drivers before micro-sleep sets in.',
  },
  {
    name: 'Maya Care — Elderly Assistance Web Application',
    tag: 'FULL-STACK · SOCIAL IMPACT',
    stack: ['Node.js', 'Express', 'MongoDB'],
    description:
      'A full-stack elderly-care intake portal built for the Maya Care nonprofit during JPMorgan’s Code for Good, backed by a Node.js / Express API over MongoDB. The platform lets staff capture, validate and securely store patient contact and health information, replacing manual paperwork with a structured, searchable record system.',
  },
  {
    name: 'Path Finder Visualizer',
    tag: 'ALGORITHMS',
    github: 'https://github.com/itika20/PathFinder',
    stack: ['Python', 'A* Search', 'Pygame'],
    description:
      'An interactive Pygame grid that animates the A* search algorithm in real time, driving node expansion with a Manhattan-distance heuristic and a priority-queue-backed open/closed set. Users place walls and weighted obstacles on the fly and watch the frontier explore, backtrack and reconstruct the optimal shortest path step by step.',
  },
]

export const education = [
  {
    school: 'BITS — Work Integrated Learning Programme',
    degree: 'M.Tech, Artificial Intelligence & Machine Learning',
    period: '2025 — 27',
    grade: 'In Progress',
  },
  {
    school: 'VESIT — University of Mumbai',
    degree: 'Master of Computer Application',
    period: '2021 — 23',
    grade: 'GPA 9.0 / 10',
  },
  {
    school: 'Indraprastha College for Women — University of Delhi',
    degree: 'B.Sc. (Hons) Computer Science',
    period: '2018 — 21',
    grade: 'GPA 8.74 / 10',
  },
  {
    school: 'Presentation Convent Sr. Sec. School, Delhi',
    degree: 'AISSCE (Science)',
    period: '2017 — 18',
    grade: '92%',
  },
]

export const interests = [
  {
    name: 'Yarn Tale',
    role: 'Founder · Crochet Small Business',
    tag: 'SIDE VENTURE',
    icon: 'heart',
    url: 'https://yarntalescrochet.smartbiz.in/',
    description:
      'My own handmade-crochet brand — I design and craft each piece, and run the store end-to-end from product to storefront. The same eye for detail and care I bring to UI, made by hand.',
  },
  {
    name: 'Kathak — Visharad',
    role: 'Graduate Diploma · Bengal Music School',
    tag: 'CLASSICAL DANCE',
    icon: 'music',
    description:
      'A Visharad (graduate) degree in Kathak — years of training in Indian classical dance. It is where I learned discipline, rhythm and presence, and the patience that detailed craft demands.',
  },
]

export const achievements = [
  { label: 'AWS Certified Developer — Associate', type: 'cert' },
  { label: 'AWS Certified Cloud Practitioner', type: 'cert' },
  { label: 'Intro to Cyber Security — CISCO', type: 'cert' },
  { label: '2nd Place · SEPathon 2025, JPMC Hackathon', type: 'award' },
  { label: 'Winner · SEPs Trip to Cloud, JPMC AWS Quiz', type: 'award' },
  { label: 'Top 7 of 120 teams · JPMC AWS DeepRacer', type: 'award' },
  { label: "Qualified · Code for Good '2022, JPMorgan Chase", type: 'award' },
  { label: 'Placement Cell Coordinator · VESIT', type: 'award' },
]
