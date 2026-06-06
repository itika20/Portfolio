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
    'Real-time risk workflows',
    'Data-driven UI at the edge of markets',
    'Anomaly detection in production',
  ],
  summary:
    'Software Engineer with 2.5 years building scalable financial systems and real-time risk workflows at JP Morgan Chase. I design and ship the UI that operations teams trust during volatile markets — backed by Java, Python and cloud-native AWS systems. Currently pursuing an M.Tech in AI/ML at BITS while building applied ML expertise in anomaly detection.',
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
    summary:
      'Enhancing low-equity determination logic by incorporating additional risk parameters into the existing algorithm — improving account-classification accuracy and strengthening margin risk controls.',
    points: [
      'Currently architecting risk-parameter enhancements that sharpen account classification and margin risk controls.',
    ],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Software Engineer I',
    period: "Aug '23 — Jan '26",
    status: 'SHIPPED',
    current: false,
    summary:
      'Owned end-to-end margin risk workflows and led the UI for a real-time risk monitoring dashboard used to track exposure and execute near-real-time liquidations.',
    points: [
      'Built real-time notification systems delivering ~300 daily margin call alerts (~$500K monthly notional), ensuring timely risk communication in trading environments.',
      'Developed and led the UI for a real-time risk monitoring dashboard — enabling ops teams to track exposure and execute near-real-time liquidations during volatile markets.',
      'Owned the full development cycle and deployed a Python anomaly-detection system to production, flagging abnormal margin-call patterns for early issue detection.',
      'Architected cloud-native systems on AWS (ECS, Lambda) with CloudWatch + Splunk monitoring, improving reliability and reducing manual intervention.',
      'Streamlined CI/CD pipelines and grew automated test coverage for risk-critical services.',
    ],
  },
  {
    company: 'JP Morgan Chase',
    role: 'Software Engineer Intern',
    period: "Feb '23 — Jul '23",
    status: 'SHIPPED',
    current: false,
    summary:
      'Delivered an internal advisor workflow for capturing and tracking margin-call curing plans, cutting resolution time from 5 days to 3.',
    points: [
      'Built an internal workflow for advisors to capture and track margin-call curing plans — improving cross-team visibility and cutting resolution time from 5 days to 3.',
      'Built end-to-end and component-level automated testing, reducing regression issues for a risk-sensitive environment.',
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
    items: ['React', 'Angular', 'Spring Boot', 'NumPy', 'Pandas', 'Scikit-Learn', 'OpenCV'],
  },
  {
    category: 'Cloud',
    items: ['Amazon ECS', 'AWS Lambda', 'Amazon EC2', 'Amazon CloudWatch'],
  },
  {
    category: 'Tools & Testing',
    items: ['JUnit', 'Selenium', 'Cucumber', 'Hoverfly', 'Jenkins', 'Splunk'],
  },
  {
    category: 'AI & Productivity',
    items: ['GitHub Copilot', 'Prompt Engineering', 'LLM-Assisted Development'],
  },
]

// Work shipped at JP Morgan Chase
export const workProjects = [
  {
    name: 'Real-Time Risk Monitoring Dashboard',
    tag: 'PRODUCTION · JPMC',
    stack: ['Angular', 'TypeScript', 'AWS', 'WebSocket'],
    description:
      'Led the UI for a real-time dashboard that lets operations teams track exposure and execute near-real-time liquidations, directly supporting loss mitigation during volatile markets.',
  },
  {
    name: 'Margin-Call Anomaly Detection',
    tag: 'PRODUCTION · JPMC',
    stack: ['Python', 'Scikit-Learn', 'AWS Lambda', 'CloudWatch'],
    description:
      'A production anomaly-detection system that monitors margin-call ticket generation, automatically flagging abnormal patterns to enable early issue detection and improve reliability.',
  },
]

// Personal projects built outside of work
export const personalProjects = [
  {
    name: 'Driver Drowsiness Detection System',
    tag: 'COMPUTER VISION',
    stack: ['Python', 'OpenCV', 'dlib'],
    description:
      'A facial-recognition safety system that alerts drivers of drowsiness or fatigue by calculating eye-aspect-ratio and detecting yawning in real time.',
  },
  {
    name: 'Path Finder Visualizer',
    tag: 'ALGORITHMS',
    stack: ['Python', 'A* Search', 'Pygame'],
    description:
      'A dynamic visualization tool using the A* search algorithm to determine the shortest path between two points — built to make navigation logic intuitive.',
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
