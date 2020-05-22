<template>
	<section>
		<ul class="d-flex flex-row flex-wrap list-unstyled col-sm-12">
			<li v-for="character in characters" :key="character.id" class="col-md-3 col-sm-12" >
				<div class="card">
					<img :src="character.image" :alt="character.name" class="card-img-top">
					<div class="card-body">

					</div>
				</div>
				
			</li>
		</ul>
	</section>
</template>
<script>
export default {
	computed: {
		characters() {
			return !this.$store.getters.characters
				? false
				: this.$store.getters.characters;
		}
	},
	created() {
		this.$store.dispatch("fetchCharacters");
	}
};
</script>