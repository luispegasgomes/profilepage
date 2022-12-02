export default {
  state: {
    hobbies: [],
    hobbies1: [
      {date: "20/04/2019", img:"car/ge.jpg", title:"Memories..."},
      {date: "23/05/2020", img:"car/hyundai.png", title:"Misses!"},
      {date: "14/07/2021", img:"car/driving.jpeg", title:"Just driving"},
      {date: "08/07/2022", img:"car/piscas.png", title:"New blinkers!"},
      {date: "31/08/2022", img:"car/rim.jpeg", title:"Rim cleaning..."},
      {date: "08/10/2022", img:"car/October 8.jpeg", title:"Tire shining"},
      
    ],
    projects: [],
    projects1: [
      {
        date: "11/2020 - 01/2021", 
        description: "The Auto Conde application consists of a site for selling car parts, this project has a very basic js language and is a basic and not consistent application.", 
        logo: "autoconde.png", 
        name: "Auto Conde",
        promo: "pages/ac.PNG",
        subtitle: "TW Project | Group 7 | TSIW 1st Year", 
        title: "Auto Conde - Auto parts sales application",
        tools: ["icons/html.png", "icons/css.png", "icons/js.png", "icons/vscode.png"],
        website: "none"
      },
      {
        date: "11/2020 - 01/2021", 
        description: "The recipe manager application allows you to manage recipes, create new ones, add to favorites, manage categories, like and comment. It is a basic python application.", 
        logo: "recipe.png", 
        name: "Recipe Manager",
        promo: "pages/rm.png",
        subtitle: "AED Project | Group 2 | TSIW 1st Year", 
        title: "Recipe Manager - Food recipe management application",
        tools: ["icons/python.png", "icons/tkinter.png", "icons/photoshop.png", "icons/vscode.png"],
        website: "none"
      },
      {
        date: "03/2021 - 06/2021", 
        description: "The AtivOn application consists of entertainment for children in confinement during the pandemic, and aimed to amuse and inform them about this new disease, also has several gamification elements, such as achievements and a leaderboard.", 
        logo: "ativon.png", 
        name: "AtivOn",
        promo: "pages/ativon.png",
        subtitle: "Project 1 | Group 1 | TSIW 1st Year", 
        title: "AtivOn - Application of games for children about Covid-19",
        tools: ["icons/js.png", "icons/bootstrap.png", "icons/xd.png", "icons/html.png"],
        website: "https://ativ-on.vercel.app/"
      },
      {
        date: "11/2021 - 12/2021", 
        description: "Is the recreation of the nostalgic game of asteroids, with some simplifications in order to make the game simpler and more didactic.", 
        logo: "ast.png", 
        name: "Asteroids Game",
        promo: "pages/asteroids.png",
        subtitle: "CG Project | Group 10 | TSIW 2nd Year", 
        title: "Asteroids - Recreation of the old asteroids game",
        tools: ["icons/js.png", "icons/html.png", "icons/css.png", "icons/vscode.png"],
        website: "none"
      },
      {
        date: "10/2021 - 06/2022", 
        description: "The AutMe application consists of entertainment for children with autism and allows the tutor and psychologist to track the child's progress and communicate with each other.", 
        logo: "autme.png", 
        name: "AutMe",
        promo: "pages/autme.png",
        subtitle: "Project 2 | Group 1 | TSIW 2nd Year", 
        title: "AutMe - Global application for children with autism",
        tools: ["icons/vue.png", "icons/sequelize.png", "icons/trello.png", "icons/figma.png"],
        website: "https://autme-luispegasgomes.vercel.app/"
      },
      {
        date: "07/2022 - 09/2022", 
        description: "This is my personal information page, which contains information about me, my projects, academic background, my skills, certificates and my personal interests.", 
        logo: "icon.png", 
        name: "My profile Page",
        promo: "pages/lg.png",
        subtitle: "Personal Project", 
        title: "Luís Gomes - Personal Information Page",
        tools: ["icons/vue.png", "icons/mongo.png", "icons/restapi.png", "icons/figma.png"],
        website: "https://luispegasgomes.pt/"
      },
      {
        date: "11/2022 - 12/2022", 
        description: "This is a website that I developed as part of the TW | TSIW | ESMAD, which I decided to repeat to improve the grade, is an e-commerce store that sells sports parts for the BMW brand.", 
        logo: "bmw m.png", 
        name: "M Performance Parts",
        promo: "pages/bmw m.jpg",
        subtitle: "Personal Project | TW | TSIW", 
        title: "BMW M Performance Parts",
        tools: ["icons/html.png", "icons/css.png", "icons/js.png", "icons/vscode.png"],
        website: "https://m-performance-parts.vercel.app/"
      },

    ],
    academics:[],
    academics1:[
      {date: "2017-2020", logo:"academic/resende.png", subtitle:"Secondary Education, Science and Technology", title:"Escola Secundária de Resende"},
      {date: "October 2021", logo:"academic/nucleo.png", subtitle:"English Course B2.2", title:"Formação, Consultoria e Línguas"},
      {date: "2020-2023", logo:"academic/pporto.png", subtitle:"Degree in Technologies and Information Systems for the Web", title:"Instituto Politécnico do Porto - ESMAD"},
    ],
    oneProject: [],
    programming: [], 
    extra: [],
    programming1:[
      {date: "11/2021", download: "ola.pdf", logo: "certificates/fgpe.png", see: "ole.png", subtitle: "Programming Learning Environment", title: "FGPE"},
      {date: "10/2021", download: "ola.pdf", logo: "certificates/codeweek.png", see: "ole.png", subtitle: "JuezLTI", title: "CodeWeek"},
    ],
    extra1: [
      {date: "08/2022", download: "ola.pdf", logo: "certificates/campus.png", see: "ole.png", subtitle: "Graphical presentation utility", title: "Campus Digital"},
      {date: "10/2021", download: "ola.pdf", logo: "certificates/nucleo.png", see: "ole.png", subtitle: "English Course B2.2", title: "Núcleo FCL"},
    ],
    skillsFE: [
      {title: "HTML", porcentage: 95, logo: "/icons/html.png"},
      {title: "CSS", porcentage: 75, logo: "/icons/css.png"},
      {title: "JS", porcentage: 90, logo: "/icons/js.png"},
      {title: "VueJS", porcentage: 95, logo: "/icons/vue.png"},
      {title: "ReactJS", porcentage: 60, logo: "/icons/react.png"},
      {title: "React Native", porcentage: 50, logo: "/icons/react.png"},
    ],
    skillsBE: [
      {title: "Python", porcentage: 65, logo: "/icons/python.png"},
      {title: "NodeJS", porcentage: 85, logo: "/icons/node1.png"},
      {title: "MySQL & Sequelize", porcentage: 85, logo: "/icons/sequelize.png"},
      {title: "MongoDB & Mongoose", porcentage: 85, logo: "/icons/mongo.png"},
      {title: "GraphQL", porcentage: 30, logo: "/icons/graph.png"},
    ],
    others: [
      {title: "Git Hub", porcentage: 90, logo: "/icons/gh.png"},
      {title: "Selenium | JEST", porcentage: 80, logo: "/icons/selenium.png"},
      {title: "Adobe XD", porcentage: 80, logo: "/icons/xd.png"},
      {title: "Figma", porcentage: 90, logo: "/icons/figma.png"},
      {title: "Agile", porcentage: 75, logo: "/icons/agile.png"},
      {title: "Trello", porcentage: 75, logo: "/icons/trello.png"},
    ]
  },

  getters: {
    getHobbies: (state) => state.hobbies1,
    getProjects: (state) => state.projects1,
    getAcademics: (state) => state.academics1,
    getOneProject: (state) => (name1) =>
    state.projects1.find((c) => c.name === name1),
    getProgramming: (state) => state.programming1,
    getExtra: (state) => state.extra1,
    getskillsFE: (state) => state.skillsFE,
    getskillsBE: (state) => state.skillsBE,
    getothers: (state) => state.others,
  },

  mutations: {
    SET_HOBBIES(state, payload) {
      state.hobbies = []
      state.hobbies.push(payload.hobbies)
    },
    SET_PROJECTS(state, payload) {
      state.projects = []
      state.projects.push(payload.projects)
    },
    SET_ACADEMICS(state, payload) {
      state.academics = []
      state.academics.push(payload.academics)
    },
    SET_ONE_PROJECT(state, payload) {
      state.oneProject = []
      state.oneProject.push(payload.project)
    },
    SET_PROGRAMMING(state, payload) {
      state.programming = []
      state.programming.push(payload.certificates)
    },
    SET_EXTRA(state, payload) {
      state.extra = []
      state.extra.push(payload.certificates)
    },
  },

  actions: {
    async loadHobbies(context) {
      const response = await fetch(`https://luisgomesapi.herokuapp.com/luisg_api/hobbies`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_HOBBIES", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loadProjects(context) {
      const response = await fetch(`https://luisgomesapi.herokuapp.com/luisg_api/projects`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_PROJECTS", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loadAcademics(context) {
      const response = await fetch(`https://luisgomesapi.herokuapp.com/luisg_api/academics`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_ACADEMICS", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loadOneProject(context, data) {
      const response = await fetch(`https://luisgomesapi.herokuapp.com/luisg_api/projects/${data}`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_ONE_PROJECT", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loadProgrammingCertificates(context) {
      const response = await fetch(`https://luisgomesapi.herokuapp.com/luisg_api/certificates`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_PROGRAMMING", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
    async loadExtraCertificates(context) {
      const response = await fetch(`https://luisgomesapi.herokuapp.com/luisg_api/certificates/extra`, {
        method: 'GET',
      })
      if (response.ok) {
        context.commit("SET_EXTRA", await response.json());
      } else {
        const err = await response.json()
        throw new Error(err.error)
      }
    },
  }
};