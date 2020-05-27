export default {
    methods: {
        selectedFilterClick(value, name, index) {
            this.$store.dispatch("clickSelectedFilter", { value, name });
        }
    },
    computed: {
        selectedFilterList() {
            return this.$store.getters.selectedFilters;
        }
    }
};