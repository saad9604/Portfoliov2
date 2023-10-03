import StudyNotion from "./assets/StudyNotion.mp4"
import Movix from "./assets/Movix.mp4"
import play from "./assets/play.png"
import github from "./assets/github 2.png"

const projectsData = [
  {
    id: 1,
    title: "StudyNotion",
    video: StudyNotion,
    description: "EdTech StudyNotion is an integrated educational platform with Razorpay payments, customizable courses, assignment submission, instructor insights, and a rating system. It's user-friendly, secure, and scalable, built with React and Node.js, accessible on all devices, and focused on data analytics and user support .",
    live: play,
    github: github,
    link: "https://studynotion-frontend-one.vercel.app/",
    gitLink:"https://github.com/saad9604/StudyNotion"
  },
  {
    id: 2,
    title: "Movix",
    video: Movix,
    description:"Movix is a web application that provides comprehensive movie and TV show data, including official videos, ratings, and user-friendly functionalities such as filtering and sorting. The app fetches its data from RapidApi.com and is built using React.js and Context API for state management, offering an intuitive and engaging experience for users interested in exploring the world of cinema and television",
    live: play,
    github: github,
    link: "https://movix-yfh6.vercel.app/",
    gitLink:"https://github.com/saad9604/Movix"
  },

];

export default projectsData;
