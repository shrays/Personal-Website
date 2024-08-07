import aboutpic from './components/Access/profile.webp'
  // properties are optional - empty fields don't show up

const header = {
  homepage: 'https://shrayswarup.com',
  title: 'SS.',
}

const about = {
  photo: aboutpic,
  name: 'Shray Swarup',
  role: 'Software Developer, Web/Cloud/Data',
  description:
    'Full-Stack Software Developer with experience working on projects in scalable web development with real-time capabilities, cloud architecture, and predictive modeling using agile methodologies alongside development teams!',
  social: {
    linkedin: 'https://www.linkedin.com/in/shrayswarup',
    github: 'https://github.com/shrays',
  },
}

const projects = [
  {
    name: 'Slanted',
    description:
      'Designing and launching an unreleased monetizable web application featuring detailed user progress tracking, private lobbies, and an intelligently curated database alongside small developer team.',
    stack: ['TypeScript', 'React', 'Next.js', 'AWS', 'Node.js', 'CloudFormation', 'Docker', 'JIRA'],
  },
  {
    name: 'Deloitte Consulting',
    description:
      'Developed internal web tools and python/shell automations for client project. Removed technical debt in data pipelines via NoSQL for data-center team as an Intern.',
    stack: ['JavaScript', 'JQuery', 'MongoDB', 'Python', 'Bash', 'Automation', 'DevOps'],
  },
  {
    name: 'Lobster Lines',
    description:
      'Displayed nation-wide Red Lobster data via third party API requests and dynamic mapping. Features statistics to visualize store-specific differences in chain restaurant data, scalable components to apply to other sources, and a development blog.',
    stack: ['TypeScript', 'React', 'Next.js', 'Redux', 'Node.js', 'FastAPI', 'MapLibre GL JS'],
    sourceCode: 'https://github.com/shrays/lobster-lines',
    livePreview: 'https://www.lobsterlines.com/',
  },
  {
    name: 'This Website',
    description:
      'Resume-style website implementing backend serverless functions and UI components to enable lightbulb hardware control over HTTP. Deployed with Netlify.',
    stack: ['JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'LIFX API'],
    sourceCode: 'https://github.com/shrays/Personal-Website',
    livePreview: 'https://shrayswarup.com',
  },
  {
    name: 'Thesis Paper: Crop Yield Prediction',
    description:
      'Prediction models using current USDA crop information, NOAA climate, CMIP6 climate, and GAEZv4 soil data. Visualize future projected yield data based on different climate emission scenarios using ML techniques.',
    stack: ['Python', 'PyTorch', 'sklearn', 'SQL', 'Supabase', 'NASS API'],
    livePreview: 'https://drive.google.com/file/d/1-K9PkMMuyQ-jjB3fdcQuV_MADTxVmdDY/view',
  },
  {
    name: 'Silicon Valley Bank: ML/AI Bias Research',
    description:
      'Researched implementing and assessing fraud detection models against adversarial attacks and biasing  alongside research team with assistance from the SVB AI Lab. Used novel ML and data anomaly detection practices.',
    stack: ['JavaScript', 'HTML', 'CSS', 'React', 'NPM', 'Node.js', 'Dash', 'PostgreSQL', 'PyTorch', 'SkLearn'],
  },
  // {
  //   name: 'Accesibility Chrome Extension',
  //   description:
  //     'Gives any chrome text box speech-to-text capabilities. Developed with a team to win multiple categories at sunhacks 2021 hackathon.',
  //   stack: ['HTML', 'CSS', 'JavaScript', 'AssemblyAI API', 'jQuery', 'RecordRTC'],
  //   sourceCode: 'https://github.com/shrays/sunhacks2021',
  //   livePreview: 'https://devpost.com/software/speech-box',
  // },
  // {
  //   name: 'TicTacTen Desktop App',
  //   description:
  //     'Also known as Ultimate TicTacToe. A packaged Windows and macOS compatible desktop app built via JavaFX.',
  //   stack: ['Java', 'JavaFX', 'Launch4j', 'MacJavaPackager'],
  //   sourceCode: 'https://github.com/shrays/TicTacTen',
  //   livePreview: 'https://github.com/shrays/TicTacTen/releases/tag/1.1',
  // },
]
const lightbulb = {
  enabled: true,
}
const skills = [
  // 'Python',
  // 'C++',
  // 'Java',
  // 'R',
  // 'JavaScript',
  // 'CSS',
  // 'HTML',
  // 'Git',
  // 'TensorFlow',
  // 'Sklearn',
  // 'PostgreSQL',
  // 'React',
  // 'AWS',
  // 'Supabase',
  // 'Tableau',
  // 'Adobe Photoshop',
  // 'Jira',
  // 'Confluence',
]

const contact = {
  email: 'shrayswarup@gmail.com',
}

export { header, about, projects, lightbulb, skills, contact }
