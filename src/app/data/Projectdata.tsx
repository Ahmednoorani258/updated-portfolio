// Enum for project levels (Easy, Medium, Hard)
enum ProjectLevel {
  EASY = "EASY",
  MEDIUM = "MEDIUM",
  HARD = "HARD",
}

interface projectCard {
  image: string | null;
  id: number;
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
interface ProjectDatatype extends projectCard {
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
const projectData: ProjectDatatype[] = [
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
    image: "/CarSellingWeb.jpg",
    id: 5,
    projectName: "Car Selling WebSite",
    techStack: ["NEXT.Js", "TypeScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink:
      "https://github.com/Ahmednoorani258/quarter-2-assignmenTypeScript/tree/main/assignment3_carsellingwebclone",
    vercelLink: "https://carsellingclone.vercel.app/",
  },
  {
    image: "/MusicAcademy.jpg",
    id: 6,
    projectName: "MUSIC ACADEMY PROJECT",
    techStack: ["NEXT.Js", "TypeScript", "TAILWINDCSS", "ACETERNITY UI"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: true,
    githubLink:
      "https://github.com/Ahmednoorani258/NextJavaScript-Project-music-academy",
    vercelLink: "https://nextjs-project-music-academy.vercel.app/",
  },
  {
    image: "/countdowntimer.png",
    id: 7,
    projectName: "COUNTDOWN TIMER",
    techStack: ["NEXT.JS", "TypeScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: true,
    githubLink:
      "https://github.com/Ahmednoorani258/30days-30projecTypeScript-nextJavaScript/tree/main/countdown-timer",
    vercelLink: "https://countdown-timer-five-tan.vercel.app/",
  },
  {
    image: "/weatherapp.png",
    id: 8,
    projectName: "WEATHER APP",
    techStack: ["NEXT.Js", "TypeScript", "TAILWINDCSS"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.HARD,
    isFeatured: false,
    githubLink:
      "https://github.com/Ahmednoorani258/30days-30projecTypeScript-nextJavaScript/tree/main/weather-app",
    vercelLink: "https://30days-30projecTypeScript-nextJavaScript.vercel.app/",
  },
  {
    image: "/functions.jpg",
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
    image: "/calculator.jpg",
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
    image: "/CLIMyBank.jpg",
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
    image: "/countdowntimer.png",
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
    image: "/quizapp.png",
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
    image: "/spacegame.jpg",
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
    image: "/StudentManagmentSystem.jpg",
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
    image: "/rockgame.jpg",
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
    image: "/wordcounter.png",
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
    image: "/atm.jpg",
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
    image: "/todo.jpg",
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
    image: "/unitconverter.png",
    id: 24,
    projectName: "Unit Converter",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.EASY,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/quartr-3-assignments/blob/main/01-unit-converter/app.py",
    vercelLink: "https://unitconverterbyahmed.streamlit.app/",
  },
  {
    image: "/passwordmeter.jpg",
    id: 25,
    projectName: "Password Strength Meter",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.EASY,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/quartr-3-assignments/blob/main/02-password-strenght-meter/main.py",
    vercelLink: "https://passwordstrenghtmeterbyahmed.streamlit.app/",
  },
  {
    image: "/exceltoword.jpg",
    id: 26,
    projectName: "Excel to Word Voucher",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/ahmednoorani258-excel_to_voucher_converter/blob/main/app.py",
    vercelLink:
      "https://ahmednoorani258-exceltovoucherconverter-tqxjryqgz3f8c5hg2ygjzq.streamlit.app/",
  },
  {
    image: "/dataviz.jpg",
    id: 27,
    projectName: "Data Visualization Dashboard",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/30_days_chatgpt_challenge/blob/main/11_ML_libs_and_Data_Visualization/04_data_viualization_dashboard/main.py",
    vercelLink: "https://titanic-data-dashboard.streamlit.app/",
  },
  {
    image: "/examscore.jpg",
    id: 28,
    projectName: "Exam Score Predictor",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/30_days_chatgpt_challenge/blob/main/10_Intro_To_Machine_Learning/07_streamlit_app_exam_score/main.py",
    vercelLink: "https://exam-score-predict-by-study-hour.streamlit.app/",
  },
  {
    image: "/dsplayground.jpg",
    id: 29,
    projectName: "Data Structure Playground",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/30_days_chatgpt_challenge/blob/main/09_Data_Structure_Playground/main.py",
    vercelLink: "https://datastructureplayground.streamlit.app/",
  },
  {
    image: "/webscrapper.jpg",
    id: 30,
    projectName: "Advanced Web Scraper",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/ahmednoorani258/30_days_chatgpt_challenge/blob/main/08_day_Build_Projects/projects/Advance_Web_Scrapper/main.py",
    vercelLink: "https://webscrapperbyahmed.streamlit.app/",
  },
  {
    image: "/sentiment.jpg",
    id: 31,
    projectName: "Sentiment Analyzer",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/Ahmednoorani258/30_days_chatgpt_challenge/tree/main/18_Experiiment_with_hugging_face/05_Text_news_Summarizer",
    vercelLink: "https://sentimentanalyzerbyahmed.streamlit.app/",
  },
  {
    image: "/aiblog.jpg",
    id: 32,
    projectName: "AI Blog Writer",
    techStack: ["Python"],
    interfaceType: InterfaceType.BROWSER,
    level: ProjectLevel.MEDIUM,
    isFeatured: false,
    githubLink:
      "https://github.com/Ahmednoorani258/30_days_chatgpt_challenge/tree/main/28_Portfolio_Plaan",
    vercelLink:
      "https://30dayschatgptchallenge-rnkp2dqnh6cezfrc3zsfiz.streamlit.app/",
  },
];

export { projectData };
export type { ProjectDatatype, InterfaceType, ProjectLevel, projectCard };
