import axios from 'axios';
import { filteredCharacters } from '../mutations/mutations';

export const updateSelectedFilters = ({ dispatch, commit, state }) => {
    let selectedFilters = {};
    for (let key in state.filters) {
        let filterItem = state.filters[key];
        filterItem.forEach((element, index) => {
            if (element.selected) {
                if (!selectedFilters[key]) {
                    selectedFilters[key] = [];
                    selectedFilters[key].push(element.value);
                }
                else {
                    selectedFilters[key].push(element.value);
                }

            }
        });
    }
    console.log('selectedFilters', selectedFilters);
    commit('selectedFilters', selectedFilters);
    dispatch('runFilters');
}

export const clickSelectedFilter = ({ dispatch, commit, state }, filter) => {
    let filters = state.filters;
    filters[filter.name].forEach(item => {
        if (item.value == filter.value) {
            item.selected = false;
        }
    })
    commit("filters", filters);
    dispatch('updateSelectedFilters');
}

export const runFilters = ({ commit, state }) => {
    let filterData = state.selectedFilters;
    let allCharacters = state.characters;
    let filteredCharacters = [];

    var filterKeys = Object.keys(filterData);
    filteredCharacters = allCharacters.filter(function (eachObj) {
        return filterKeys.every(function (eachKey) {
            if (!filterData[eachKey].length) {
                return true;
            }
            if (eachKey == "name") {
                return eachObj[eachKey].includes(filterData[eachKey]);
            } else {
                return filterData[eachKey].includes(eachObj[eachKey]);
            }
        });
    });
    console.log('filteredCharacters', filteredCharacters);
    commit('filteredCharacters', filteredCharacters);
}


export const fetchCharacters = ({ dispatch, commit, state }, params) => {
    let query = "", url = "https://rickandmortyapi.com/api/character/?"
    if (params) {

        if (params.query) {
            query = params.query;
        }
        if (params.url) {
            url = params.url.concat("&");
        }
    }
    let api = `${url}${query}`;
    console.log('url', api);
    axios.get(api)
        .then(res => {
            const info = res.data.info;
            const data = res.data.results;
            console.log(data);
            commit('prev', info.prev);
            commit('next', info.next);
            commit('characters', data);
            commit('errorShow', false);
            dispatch('runFilters');
        })
        .catch(error => {
            commit('errorShow', true);
        });
}

export const searchByName = ({ dispatch, commit, state }, text) => {
    commit("nameSearch", text);
    dispatch("runFilters");
}

export const sortArrangement = ({ commit, state }, sortOrder) => {
    let characters = state.filteredCharacters;
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
    commit("filteredCharacters", characters);
}