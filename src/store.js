import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import filterData from './data/filterData'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filters: filterData,
        selectedFilters: [],
        searchText: '',
        appliedFilters: [],
        characters: []
    },
    mutations: {
        selectedFilters(state, selectedFilters) {
            state.selectedFilters = selectedFilters
            state.appliedFilters = [...state.selectedFilters, {
                key: "name",
                value: state.searchText,
                index: null
            }]
        },
        characters(state, characters) {
            state.characters = characters
        },
        nameSearch(state, name) {
            state.searchText = name;
            state.appliedFilters = [...state.selectedFilters, {
                key: "name",
                value: state.searchText,
                index: null
            }]
        },
        filters(state, filters) {
            state.filters = filters;
        }
    },
    actions: {
        updateSelectedFilters({ dispatch, commit, state }) {
            const selectedFilters = [];
            for (let key in state.filters) {
                let filterItem = state.filters[key];
                filterItem.forEach((element, index) => {
                    if (element.selected) {
                        selectedFilters.push(
                            {
                                key,
                                index,
                                value: element.value
                            }
                        )
                    }
                });
            }
            commit('selectedFilters', selectedFilters);
            dispatch('runFilters');
        },

        clickSelectedFilter({ dispatch, commit, state }, filter) {
            let filters = state.filters;
            filters[filter.key][filter.index].selected = false;
            commit("filters", filters);
            dispatch('updateSelectedFilters');
        },

        runFilters({ dispatch, state }) {
            let filterData = state.appliedFilters;
            let query = '';
            filterData.forEach(obj => {
                query += obj.key + '=' + obj.value + '&'
            });
            dispatch("fetchCharacters", query);
        },

        fetchCharacters({ commit, state }, query) {
            if (!query) {
                query = '';
            }
            let url = 'https://rickandmortyapi.com/api/character/?' + query;
            console.log('url', url);
            axios.get(url)
                .then(res => {
                    const data = res.data.results;
                    console.log(data);
                    commit('characters', data);
                })
                .catch(error => console.error(error));
        },

        searchByName({ dispatch, commit, state }, text) {
            commit("nameSearch", text);
            dispatch("runFilters");
        },

        sortArrangement({ commit, state }, sortOrder) {
            let characters = state.characters;
            if (sortOrder.orderBy === 'asc') {
                characters.sort((a, b) => {
                    return a[sortOrder.sortBy] - b[sortOrder.sortBy];
                })
            }
            if (sortOrder.orderBy === 'desc') {
                characters.sort((a, b) => {
                    return a[sortOrder.sortBy] - b[sortOrder.sortBy];
                })
                characters.reverse();
            }
            commit("characters", characters);
        }
    },
    getters: {
        filters(state) {
            return state.filters;
        },
        selectedFilters(state) {
            return state.selectedFilters;
        },
        characters(state) {
            return state.characters;
        },
        searchText(state) {
            return state.searchText;
        }
    }
})