export default {
    state: {
        pageOpened: 'none',
    },
  
    getters: {
        getPageOpened: (state) => state.pageOpened,

    },
  
    mutations: {
        CHANGE_PAGE_OPEN(state, payload) {
            if (payload === state.pageOpened) {
                window.scrollTo(0, 0)
                setTimeout(() => (state.pageOpened = 'none'), 500);
            } else {
                state.pageOpened = payload
            }
        },
    },
  
    actions: {
    }
  };
  