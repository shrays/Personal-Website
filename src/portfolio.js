import aboutpic from './components/Access/profile.webp'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shrayswarup.com',
  title: 'SS.',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Shray Swarup',
  role: 'Software Developer, Web/Data/ML',
  description:
    'Computer Science Grad with experience working with and leading software development teams in full-stack projects involving prediction modeling, model bias detection, and more! Former intern at Deloitte Consulting.',
  social: {
    linkedin: 'https://www.linkedin.com/in/shrayswarup',
    github: 'https://github.com/shrays',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Lobster Lines',
    description:
      'Website designed to gather statistics/visualize store-specific differences in chain restaurant wait times. Data gathered from restaurant website API requests.',
    stack: ['TypeScript', 'React', 'Next.js', 'Redux', 'Node.js', 'FastAPI', 'MapLibre GL JS'],
    sourceCode: 'https://github.com/shrays/lobster-lines',
    livePreview: 'https://www.lobsterlines.com/',
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
      'Worked with SVB AI Lab to implement and assess fraud detection models against adversarial attacks and biasing. Researched novel ML and data anomaly detection alongside team',
    stack: ['JavaScript', 'HTML', 'CSS', 'React', 'NPM', 'Node.js', 'Dash', 'PostgreSQL', 'PyTorch', 'SkLearn'],
  },
  {
    name: 'This Website',
    description:
      'Resume-style website deployed with Netlify. Implemented backend serverless functions and UI components to enable lightbulb hardware control over HTTP',
    stack: ['JavaScript', 'React', 'Node.js', 'npm', 'HTML', 'CSS', 'LIFX API'],
    sourceCode: 'https://github.com/shrays/Personal-Website',
    livePreview: 'https://shrayswarup.com',
  },
  {
    name: 'Hackathon Accesibility Chrome Extension',
    description:
      'Gives any chrome text box speech-to-text capabilities. Developed with a team to win multiple categories at sunhacks 2021 hackathon.',
    stack: ['HTML', 'CSS', 'JavaScript', 'AssemblyAI API', 'jQuery', 'RecordRTC'],
    sourceCode: 'https://github.com/shrays/sunhacks2021',
    livePreview: 'https://devpost.com/software/speech-box',
  },
  {
    name: 'TicTacTen Desktop App',
    description:
      'Also known as Ultimate TicTacToe. A packaged Windows and macOS compatible desktop app built via JavaFX.',
    stack: ['Java', 'JavaFX', 'Launch4j', 'MacJavaPackager'],
    sourceCode: 'https://github.com/shrays/TicTacTen',
    livePreview: 'https://github.com/shrays/TicTacTen/releases/tag/1.1',
  },
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
  // email is optional - if left empty Contact section won't show up
  email: 'shrayswarup@gmail.com',
}

export { header, about, projects, lightbulb, skills, contact }
