export default {
    filters: {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    },
    computed: {
        filterList() {
            return this.$store.getters.filters;
        }
    },
    methods: {
        updateSelectedFilter() {
            this.$store.dispatch("updateSelectedFilters");
        }
    }
};