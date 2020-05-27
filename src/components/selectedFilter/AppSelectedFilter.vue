<template>
	<section class="d-flex flex-column">
		<h3>Selected Filters</h3>
		<div>
			<ul class="list-inline d-flex flex-row flex-wrap list-unstyled p-0">
				<li
					v-for="(filterValue, filterName,filterIndex) in selectedFilterList"
					:key="filterIndex"
					class="list-unstyled"
				>
					<ul class="p-0">
						<transition-group name="fade" mode="out-in" class="d-flex flex-row flex-wrap list-unstyled">
							<li v-for="filterText in filterValue" :key="filterText" class="mx-1">
								<button class="btn btn-primary" @click="selectedFilterClick(filterText,filterName)">
									{{filterText}}
									<i class="fa fa-times"></i>
								</button>
							</li>
						</transition-group>
					</ul>
				</li>
			</ul>
		</div>
	</section>
</template>

<script src="./app-selected-filter.js">
</script>

<style scoped lang="scss" src="./app-selected-filter.scss">
</style>
