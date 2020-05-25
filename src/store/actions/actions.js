import axios from 'axios';

export const updateSelectedFilters = ({ dispatch, commit, state }) => {
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
}

export const clickSelectedFilter = ({ dispatch, commit, state }, filter) => {
    let filters = state.filters;
    filters[filter.key][filter.index].selected = false;
    commit("filters", filters);
    dispatch('updateSelectedFilters');
}

export const runFilters = ({ dispatch, state }) => {
    let filterData = state.appliedFilters;
    let query = '';
    filterData.forEach(obj => {
        query += obj.key + '=' + obj.value + '&'
    });
    dispatch("fetchCharacters", { query });
}

export const fetchCharacters = ({ commit, state }, params) => {
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