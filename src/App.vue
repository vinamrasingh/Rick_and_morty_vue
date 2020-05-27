<template>
	<main id="app" class="d-flex flex-column flex-sm-column flex-md-row py-5 col col-12 col-sm-12 bg">
		<aside class="col col-12 col-sm-12 col-md-2">
			<app-filter></app-filter>
		</aside>
		<article class="col col-12 col-sm-12 col-md-10">
			<app-selected-filter></app-selected-filter>
			<app-search></app-search>
			<app-characters></app-characters>
		</article>
	</main>
</template>

<script>
import AppFilter from "./components/filters/AppFilter.vue";
import AppSearch from "./components/search/AppSearch.vue";
import AppSelectedFilter from "./components/selectedFilter/AppSelectedFilter.vue";
import AppCharacters from "./components/character/AppCharacters";
export default {
	name: "app",
	data() {
		return {};
	},
	components: {
		AppFilter,
		AppSearch,
		AppSelectedFilter,
		AppCharacters
	}
};
</script>

<style lang="scss" scoped>
.bg {
	background: url("./assets/whirlpool.png") center;
	background-repeat: repeat;
	background-size: auto;
}
</style>
