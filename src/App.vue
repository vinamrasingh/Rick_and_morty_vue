<template>
	<main id="app" class="">
		<aside>
			<app-filter></app-filter>
		</aside>
		<article>
			<app-selected-filter></app-selected-filter>
			<app-search></app-search>
			<app-characters></app-characters>
		</article>
	</main>
</template>

<script>
import AppFilter from "./components/AppFilter.vue";
import AppSearch from "./components/AppSearch.vue";
import AppSelectedFilter from "./components/AppSelectedFilter.vue";
import AppCharacters from "./components/AppCharacters.vue";
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

<style lang="scss">
</style>
