// Enum for project levels (Easy, Medium, Hard)
enum ProjectLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

interface projectCard {
  image: string | null;
  id:number;
  projectName: string;
  techStack: string[];
  isFeatured: boolean;
  githubLink: string;
  vercelLink: string | null;
}

// Enum for interface types (Browser, Command Line)
enum InterfaceType {
  BROWSER = "BROWSER",
  COMMAND_LINE = "COMMAND LINE",
}

// Interface for individual project data
interface ProjectDatatype  extends projectCard {
  image: string | null;
  id: number;
  projectName: string;
  techStack: string[];
  interfaceType: InterfaceType;
  level: ProjectLevel;
  isFeatured: boolean;
  githubLink: string;
  vercelLink: string | null;
}

// Sample data array (with types)
const projectData: ProjectDatatype[]  = [
  {
    image: "/ResumeBuilder.jpg",
    id: 1,
    projectName: "Resume Builder",
    techStack: ["HTML", "CSS", "TypeScript", "JavaScript"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink: "https://github.com/Ahmednoorani258/updated-hackathon-",
    vercelLink: "https://updated-hackathon.vercel.app/",
  },
  {
    image: null,
    id: 2,
    projectName: "Old Resume Builder",
    techStack: ["HTML", "CSS", "TypeScript", "JavaScript"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/Quarter-2-Hackathon",
    vercelLink: "https://quarter-2-hackathon-ha4s.vercel.app/",
  },
  {
    image:null,
    id: 3,
    projectName: "Q2 ASSIGNMENT 1",
    techStack: ["NEXT.JavaScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.EASY,
    isFeatured: false,
    githubLink:
      "https://github.com/Ahmednoorani258/quarter-2-assignmenTypeScript/tree/main/assignment1_footer",
    vercelLink: "https://assignment1-footer.vercel.app/",
  },
  {
    image:null,
    id: 4,
    projectName: "Q2 ASSIGNMENT 2",
    techStack: ["NEXT.JavaScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/Ahmednoorani258/quarter-2-assignmenTypeScript/tree/main/assignment2_clone0",
    vercelLink: "https://assignment2-clone0.vercel.app/",
  },
  {
    image:"/CarSellingWeb.jpg",
    id: 5,
    projectName: "Car Selling WebSite",
    techStack: ["NEXT.Js","TypeScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink:
      "https://github.com/Ahmednoorani258/quarter-2-assignmenTypeScript/tree/main/assignment3_carsellingwebclone",
    vercelLink: "https://carsellingclone.vercel.app/",
  },
  {
    image:"/MusicAcademy.jpg",
    id: 6,
    projectName: "MUSIC ACADEMY PROJECT",
    techStack: ["NEXT.Js","TypeScript","TAILWINDCSS", "ACETERNITY UI"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink:
      "https://github.com/Ahmednoorani258/NextJavaScript-Project-music-academy",
    vercelLink: "https://music-academy.vercel.app/",
  },
  {
    image:"/CountDownTimer.jpg",
    id: 7,
    projectName: "COUNTDOWN TIMER",
    techStack: ["NEXT.JS","TypeScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: true,
    githubLink:
      "https://github.com/Ahmednoorani258/30days-30projecTypeScript-nextJavaScript/tree/main/countdown-timer",
    vercelLink: "https://countdown-timer-five-tan.vercel.app/",
  },
  {
    image:null,
    id: 8,
    projectName: "WEATHER APP",
    techStack: ["NEXT.Js","TypeScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink:
      "https://github.com/Ahmednoorani258/30days-30projecTypeScript-nextJavaScript/tree/main/weather-app",
    vercelLink: "https://30days-30projecTypeScript-nextJavaScript.vercel.app/",
  },
  {
    image:null,
    id: 9,
    projectName: "CLI FUNCTIONS",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLi_Functions",
    vercelLink: null,
  },
  {
    image:null,
    id: 10,
    projectName: "BASIC PORTFOLIO",
    techStack: ["NEXT.JavaScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/AhmedNooraniBasicPortfolio",
    vercelLink: "https://ahmed-noorani-basic-portfolio.vercel.app/",
  },
  {
    image:null,
    id: 11,
    projectName: "OLD BASIC PORTFOLIO",
    techStack: ["HTML", "CSS", "JavaScript"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/basicportfolio",
    vercelLink: null,
  },
  {
    image:null,
    id: 12,
    projectName: "MODERN CALCULATOR",
    techStack: ["HTML", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/Modern-Calculator",
    vercelLink: "https://modern-calculator-delta.vercel.app/",
  },
  {
    image:"/CLIMyBank.jpg",
    id: 13,
    projectName: "CLI MY BANK",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink: "https://github.com/Ahmednoorani258/CLI_My_Bank_OOP",
    vercelLink: null,
  },
  {
    image:null,
    id: 14,
    projectName: "CLI MY OOP",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_My_OOP",
    vercelLink: null,
  },
  {
    image:null,
    id: 15,
    projectName: "CLI COUNTDOWN TIMER",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Countdown_Timer",
    vercelLink: null,
  },
  {
    image:null,
    id: 16,
    projectName: "CLI QUIZ APP",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Quizapp",
    vercelLink: null,
  },
  {
    image:null,
    id: 17,
    projectName: "CLI SPACE ADVENTURE GAME",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Space_Adventure_game",
    vercelLink: null,
  },
  {
    image:"/StudentManagmentSystem.jpg",
    id: 18,
    projectName: "CLI STUDENT SYSTEM",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Stundent_System",
    vercelLink: null,
  },
  {
    image:null,
    id: 19,
    projectName: "ROCK PAPER SCISSOR",
    techStack: ["HTML", "CSS", "JavaScript"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/Rock-Papper-Scissor-gam",
    vercelLink: "https://rock-papper-scissor-gam.vercel.app/",
  },
  {
    image:null,
    id: 20,
    projectName: "CLI WORD COUNTER",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Word_Counter",
    vercelLink: null,
  },
  {
    image:null,
    id: 21,
    projectName: "CLI PALINDROME CHECKER",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Palindrom_Cheker",
    vercelLink: null,
  },
  {
    image:null,
    id: 22,
    projectName: "CLI ATM",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Atm",
    vercelLink: null,
  },
  {
    image:null,
    id: 23,
    projectName: "CLI TODO APP",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.EASY,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Todo_App",
    vercelLink: null,
  },
  {
    image:null,
    id: 24,
    projectName: "CLI EMAIL SENDING APP",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Email_Sending_app",
    vercelLink: null,
  },
  {
    image:null,
    id: 25,
    projectName: "CLI CHAT APP",
    techStack: ["TypeScript", "JavaScript"],
    interfaceType: InterfaceType.COMMAND_LINE,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink: "https://github.com/Ahmednoorani258/CLI_Chatapp",
    vercelLink: null,
  },
];

export { projectData };
export type { ProjectDatatype, InterfaceType, ProjectLevel, projectCard };
