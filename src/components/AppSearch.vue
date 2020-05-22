<template>
	<section class="">
		<div>
			<input type="text" v-model="name" />
			<button @click="searchByName">Search</button>
		</div>
		<div class="">
			<select name="sortBy" v-model="sortBy" @change="sortArrangement">
				<option value="id">Sort by ID</option>
				<option value="name">Sort by Name</option>
			</select>
			<select name="orderBy" v-model="orderBy" @change="sortArrangement">
				<option value="asc">Ascending</option>
				<option value="desc">Descending</option>
			</select>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			name: "",
			sortBy: "id",
			orderBy: "asc"
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
		}
	},
	computed: {}
};
</script>