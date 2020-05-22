export const selectedFilters = (state, selectedFilters) => {
    state.selectedFilters = selectedFilters
    state.appliedFilters = [...state.selectedFilters, {
        key: "name",
        value: state.searchText,
        index: null
    }]
}
export const characters = (state, characters) => {
    state.characters = characters
}
export const nameSearch = (state, name) => {
    state.searchText = name;
    state.appliedFilters = [...state.selectedFilters, {
        key: "name",
        value: state.searchText,
        index: null
    }]
}
export const filters = (state, filters) => {
    state.filters = filters;
}