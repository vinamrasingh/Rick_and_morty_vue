export default {
    data() {
        return {
            name: "",
            sortBy: "id",
            orderBy: "asc",
            errorStyle: {
                color: "red",
                "font-size": 0.7 + "rem",
                "font-style": "italic"
            }
        };
    },
    methods: {
        searchByName() {
            this.$store.dispatch("searchByName", this.name);
        },
        sortArrangement() {
            this.$store.dispatch("sortArrangement", {
                sortBy: this.sortBy,
                orderBy: this.orderBy
            });
        },
        updateNameSearch() {
            this.$store.commit("nameSearch", this.name);
        }
    },
    computed: {
        error() {
            return (
                this.$store.getters.errorShow &&
                this.$store.getters.searchText != ""
            );
        }
    }
};