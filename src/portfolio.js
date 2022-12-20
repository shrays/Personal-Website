import aboutpic from './components/Access/profile.png'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://shrayswarup.com',
  title: 'SS.',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Zak Goisman',
  role: 'A Physics and Electrical Engineering Major',
  description:
    'Double Major at Barrett, Arizona State University. Interested in Signal Processing and Quantum Mechanics. Currently, I am doing research using Python for a cosmology group at ASU. Looking for career opportunities in the Big Yoshi related field.',
  social: {
    linkedin: 'https://www.linkedin.com/in/zachary-goisman/',
    YouTube: 'https://www.youtube.com/@Izzakkar',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'Crop Yield Predictor',
  //   description:
  //     'Prediction models using current USDA crop data, past NOAA and future CMIP6 climate data, and GAEZv4 soil data. Visualize future projected yield data based on different climate emission scenarios using ML techniques.',
  //   stack: ['Python', 'TensorFlow', 'SQL', 'Supabase', 'USDA API'],
  //   sourceCode: 'https://github.com/shrays',
  //   livePreview: 'https://github.com/shrays',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Yoshi',
  'Blendr',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'zgoisman@gmail.com',
}

export { header, about, projects, skills, contact }
