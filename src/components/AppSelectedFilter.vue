<template>
	<section class="container">
		<ul class="list-inline">
			<li
				v-for="filter in selectedFilterList"
				:key="filter.value"
				@click="selectedFilterClick(filter)"
			>
				<button class="btn btn-primary">
					{{filter.value}}
					<i class="fa fa-times"></i>
				</button>
			</li>
		</ul>
	</section>
</template>
<script>
export default {
	methods: {
		selectedFilterClick(filter) {
			this.$store.dispatch("clickSelectedFilter", filter);
		}
	},
	computed: {
		selectedFilterList() {
			return this.$store.getters.selectedFilters;
		}
	}
};
</script>