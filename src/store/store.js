import Vue from 'vue'
import Vuex from 'vuex'

import filterData from '../data/filterData'
import * as actions from './actions/actions'
import * as mutations from './mutations/mutations'
import * as getters from './getters/getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filters: filterData,
        selectedFilters: [],
        searchText: '',
        characters: [],
        filteredCharacters: [],
        prevUrl: '',
        nextUrl: '',
        errorShow: false,
        prev: null,
        next: null
    },
    mutations,
    actions,
    getters
})