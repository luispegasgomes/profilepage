export default {
  state: {
    hobbies: [],
    projects: [],
    academics:[],
    oneProject: [],
    programming:[],
    extra: [],
  },

  getters: {
    getHobbies: (state) => state.hobbies,
    getProjects: (state) => state.projects,
    getAcademics: (state) => state.academics,
    getOneProject: (state) => state.oneProject,
    getProgramming: (state) => state.programming,
    getExtra: (state) => state.extra,
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