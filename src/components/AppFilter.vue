<template>
	<section>
		<div>
			<ul v-for="(filter,key) in filterList" :key="filter.category">
				{{key | toUpperCase}}
				<li v-for="(filterItem, filterKey) in filter" :key="filterKey">
					<input type="checkbox" v-model="filterItem.selected" @change="updateSelectedFilter" />
					{{filterItem.value}}
				</li>
			</ul>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {};
	},
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
</script>