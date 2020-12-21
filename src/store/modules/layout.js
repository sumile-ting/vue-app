
import {permissions} from '@/api/layout/permissions.js';
import GLOBAL from '@/constants/global.js';
import permissionUtil from '@/utils/permissions.js';
import _ from "lodash";

//初始化state
const state = () => ({
  activeMainMenu: '',
  modules: GLOBAL.TOP_MENUES,
  asideItems: GLOBAL.TOP_MENUES
});


const getters = {
  getModules: state => state.modules,
  getAsideItems: state => state.asideItems
};

const actions = {
   async getPermissions({commit}) {
    await permissions().then((res) => {
      commit('setModules', res.data.resources);
      commit('setAsideItems', res.data.resources);
    })
  }
};

const mutations = {
  setActiveMainMenu(state, mainMenu) {
    state.activeMainMenu = mainMenu;
  },
  setModules(state, res) {
    state.modules = permissionUtil.getHaveModules(GLOBAL.TOP_MENUES, res);
  },
  setAsideItems(state, res) {
    let sideItems = _.defaultsDeep({}, GLOBAL.ASIDE_ITEMS);
    _.map(sideItems, (sideItem, moduleName) => {
      permissionUtil.removeNotHaveDot(sideItem, res, moduleName);
    });
    state.asideItems = sideItems;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
