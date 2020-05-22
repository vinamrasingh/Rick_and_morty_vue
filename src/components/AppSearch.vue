<template>
	<section class="d-flex flex-sm-column flex-md-row justify-content-md-between">
		<form class="form-inline">
			<input
				class="form-control mr-sm-2"
				type="search"
				placeholder="Search"
				aria-label="Search"
				v-model="name"
			/>
			<button
				class="btn btn-outline-primary my-2 my-sm-0"
				type="submit"
				@click.prevent="searchByName"
			>Search <i class="fa fa-search" aria-hidden="true"></i></button>
		</form>

		<div class="d-flex flex-sm-column">
			<div class="form-group">
				<select name="sortBy" v-model="sortBy" @change="sortArrangement" class="form-control my-2">
					<option value="id">Sort by ID</option>
					<option value="name">Sort by Name</option>
				</select>
				<select name="orderBy" v-model="orderBy" @change="sortArrangement" class="form-control my-2">
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
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