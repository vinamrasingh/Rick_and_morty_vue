<template>
	<section class="d-flex flex-column flex-sm-column flex-md-row justify-content-md-between">
		<div class="d-flex flex-column flex-sm-column justify-content-start">
			<form class="form-inline mb-sm-2 mb-md-0">
				<input
					class="form-control col-8 col-sm-10 col-md-7 mr-2 mr-sm-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					v-model.lazy="name"
					@change="updateNameSearch"
				/>
				<button
					class="btn btn-outline-primary my-2 my-sm-0"
					type="submit"
					@click.prevent="searchByName"
				>
					Search
					<i class="fa fa-search" aria-hidden="true"></i>
				</button>
			</form>
			<transition name="fade">
				<div :style="errorStyle" role="alert" v-show="error">Sorry, this character does not exist</div>
			</transition>
		</div>

		<div class="d-flex flex-column flex-sm-column">
			<div class="form-group d-flex flex-md-column">
				<select
					name="sortBy"
					v-model="sortBy"
					@change="sortArrangement"
					class="form-control mb-2 mr-2 mr-sm-2 mr-md-0"
				>
					<option value="id">Sort by ID</option>
					<option value="name">Sort by Name</option>
				</select>
				<select
					name="orderBy"
					v-model="orderBy"
					@change="sortArrangement"
					class="form-control ml-2 ml-sm-2 ml-md-0"
				>
					<option value="asc">Ascending</option>
					<option value="desc">Descending</option>
				</select>
			</div>
		</div>
	</section>
</template>
<script src="./app-search.js">
</script>

<style scoped lang="scss" src="./app-search.scss">
</style>