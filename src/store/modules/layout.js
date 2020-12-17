//初始化state
const state = () => ({
    activeMainMenu: ''
});

const getters = {};

const actions = {

};

const mutations = {
    setActiveMainMenu (state, mainMenu) {
        state.activeMainMenu = mainMenu;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};