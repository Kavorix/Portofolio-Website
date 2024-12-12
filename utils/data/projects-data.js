import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Programming languages',
        subname: 'advanced',
        subname1: 'intermediate',
        subtitle: 'language',
        description: "Me and my team built an AI-powered financial mobile application. I have developed API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for the authentication system. Built AI assistants using OpenAI's latest model and trained using our dataset. Voice messages are converted to text using AWS Transcribe. The app fetches data from Google Sheets and generates a PDF term sheet, sent via AWS SES.",
        tools: ['Typescript', 'Rust', 'Solidity', 'Go', 'Python', 'C++'],
        tools1: ['SQL', 'Java'],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Full Stack Development',
        subname: 'frontend',
        subname1: 'backend',
        subname2: 'database',
        subtitle: 'skill',
        description: 'I have designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. I created the UI using NextJS, Typescript, MUI, TailwindCSS, Google Maps, Sun-Editor, and React Slick. The app supports multiple languages and currencies. I developed the API using NestJS, Typescript, MySQL, TypeORM, AWS, and Nodemailer. I deployed the front-end app to AWS Amplify and the back-end app to AWS EC2.',
        tools: ['React.js', 'Next.js', 'Vue.js', 'React Native', 'Flutter'],
        tools1: ['Node.js', 'Django', 'FastAPI', 'Flask'],
        tools2: ['PostgreSQL', 'MongoDB', 'SQLite', 'MySQL'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Blockchain Development',
        subtitle: 'blockchain',
        subname: 'experience',
        subname1: 'ecosystem',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['DEX', "DApps", "NFT Marketplace", "Wallet", "Bridges", "Telegram Mini App", "Launchpads", "Meme coin", "Trading Bot"],
        tools1: ["Ethereum", "Solana", "Polkadot", "Cosmos", "Polygon", "Ton", "Tron"],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Automation Development',
        subtitle: 'skill',
        subname: 'experience',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['Trading Bot', 'Discord Bot', 'Telegram Bot'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },