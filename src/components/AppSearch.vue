<template>
	<section class="d-flex flex-sm-column flex-md-row justify-content-md-between">
		<div class="d-flex flex-sm-column justify-content-start">
			<form class="form-inline">
				<input
					class="form-control mr-sm-2"
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

		<div class="d-flex flex-sm-column">
			<div class="form-group d-flex flex-sm-column">
				<select name="sortBy" v-model="sortBy" @change="sortArrangement" class="form-control mb-2">
					<option value="id">Sort by ID</option>
					<option value="name">Sort by Name</option>
				</select>
				<select name="orderBy" v-model="orderBy" @change="sortArrangement" class="form-control">
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
			return this.$store.getters.errorShow;
		}
	}
};
</script>
<style lang="scss" scoped>
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

.slide-enter {
	/* transform: translateY(20px); */
	opacity: 0;
}
.slide-enter-active {
	animation: slide-in 1s ease-out forwards;
	transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
	animation: slide-out 1s ease-out forwards;
	transition: opacity 1s;
	opacity: 0;
	position: absolute;
}
.slide-move {
	transition: transform 1s;
}
@keyframes slide-in {
	from {
		transform: translateY(20px);
	}
	to {
		transform: translateY(0);
	}
}
@keyframes slide-out {
	from {
		transform: translateY(0);
	}
	to {
		transform: translateY(20px);
	}
}
</style>