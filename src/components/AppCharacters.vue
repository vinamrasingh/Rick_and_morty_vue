<template>
	<div>
		<section class="row">
			<ul class="list-unstyled col-sm-12 card-grid p-0">
				<transition-group name="fade" mode="out-in" class="d-flex flex-row flex-wrap">
					<li
						v-for="character in characters"
						:key="character.id"
						class="col col-6 col-sm-6 col-md-3 d-flex align-items-stretch p-0"
					>
						<div class="card m-2">
							<div class="card-image">
								<img :src="character.image" :alt="character.name" class="card-img-top" />
								<div class="card-name card-body col-12">
									<h4>{{character.name}}</h4>
									id: {{character.id}} - created {{parseInt((new Date() - new Date(character.created)) / (1000 * 3600 * 24) / 365)}} years ago
								</div>
							</div>
							<ul class="card-body list-unstyled">
								<li class="card-text d-flex justify-content-between">
									<span>Status</span>
									<span class="card-text_status text-right">{{character.status}}</span>
								</li>
								<li class="card-text d-flex justify-content-between">
									<span>Species</span>
									<span class="card-text_status text-right">{{character.species}}</span>
								</li>
								<li class="card-text d-flex justify-content-between">
									<span>Gender</span>
									<span class="card-text_status text-right">{{character.gender}}</span>
								</li>
								<li class="card-text d-flex justify-content-between">
									<span>Origin</span>
									<span class="card-text_status text-right">{{character.origin.name}}</span>
								</li>
								<li class="card-text d-flex justify-content-between">
									<span>Last Location</span>
									<span class="card-text_status text-right">{{character.location.name}}</span>
								</li>
							</ul>
						</div>
					</li>
				</transition-group>
			</ul>
		</section>
		<section class="d-flex col-sm-12 justify-content-center">
			<button class="btn btn-outline-primary mr-3" @click="prevPage" :class="{disabled:!checkPrev}">
				<i class="fa fa-arrow-left" aria-hidden="true"></i> Prev
			</button>
			<button class="btn btn-outline-primary ml-3" @click="nextPage" :class="{disabled:!checkNext}">
				Next
				<i class="fa fa-arrow-right" aria-hidden="true"></i>
			</button>
		</section>
	</div>
</template>
<script>
export default {
	computed: {
		characters() {
			return !this.$store.getters.characters
				? false
				: this.$store.getters.characters;
		},
		checkPrev() {
			let prev = this.$store.getters.prev;
			return prev != null ? true : false;
		},
		checkNext() {
			let next = this.$store.getters.next;
			return next != null ? true : false;
		}
	},
	created() {
		this.$store.dispatch("fetchCharacters");
	},
	methods: {
		prevPage() {
			const prev = this.$store.getters.prev;
			if (prev != null) {
				this.$store.dispatch("fetchCharacters", {url:prev});
			}
		},
		nextPage() {
			const next = this.$store.getters.next;
			if (next != null) {
				this.$store.dispatch("fetchCharacters", {url:next});
			}
		}
	}
};
</script>

<style scoped lang="scss">
.card {
	&-grid {
		background: #dddddd;
		padding: 1rem;
	}
	&-img-top {
		width: 100%;
	}
	&-image {
		position: relative;
	}
	&-name {
		position: absolute;
		bottom: 0;
	}
	&-body {
		background: rgba(0, 0, 0, 0.7);
		color: #ccc;
	}
	&-text {
		padding: 0.9375rem 0;
		border-bottom: 1px solid #ccc;
		span {
			text-transform: uppercase;
			&.card-text_status {
				text-transform: unset;
				color: orange;
			}
		}
	}
}
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