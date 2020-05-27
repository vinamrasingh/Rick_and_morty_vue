export const selectedFilters = (state, selectedFilters) => {
    state.selectedFilters = selectedFilters
    if (name == "") {
        if (state.selectedFilters["name"]) {
            delete state.selectedFilters.name
        }
    }
    else {
        state.selectedFilters["name"] = []
        state.selectedFilters["name"].push(state.searchText);
    }
}
export const characters = (state, characters) => {
    state.characters = characters;
}
export const filteredCharacters = (state, filteredCharacters) => {
    state.filteredCharacters = filteredCharacters;
}
export const nameSearch = (state, name) => {
    state.searchText = name;
    if (name == "") {
        if (state.selectedFilters["name"]) {
            delete state.selectedFilters.name
        }
    }
    else {
        state.selectedFilters["name"] = []
        state.selectedFilters["name"].push(state.searchText);
    }

}
export const filters = (state, filters) => {
    state.filters = filters;
}
export const errorShow = (state, error) => {
    state.errorShow = error;
}
export const prev = (state, prev) => {
    state.prev = prev;
}
export const next = (state, next) => {
    state.next = next;
}
