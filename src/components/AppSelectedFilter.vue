<template>
	<section class="d-flex flex-column">
		<h3>Selected Filters</h3>
		<div>
			<ul class="list-inline">
				<transition-group name="fade" mode="out-in" class="d-flex flex-row flex-wrap">
					<li
						v-for="filter in selectedFilterList"
						:key="filter.value"
						@click="selectedFilterClick(filter)"
						class="mx-1"
					>
						<button class="btn btn-primary">
							{{filter.value}}
							<i class="fa fa-times"></i>
						</button>
					</li>
				</transition-group>
			</ul>
		</div>
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
<style scoped lang="scss">
.fade {
	&-enter {
		opacity: 0;
		&-active {
			transition: opacity 1s;
		}
	}
	&-leave {
		&-active {
			transition: opacity 1s;
			opacity: 0;
		}
	}
}
</style>