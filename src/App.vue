<template>
  <div id="app">
    <div class="cm-container">
      <div class="cm-logo-wrapper">
        <img alt="Carb Manager" src="./assets/cm-logo.svg" class="cm-logo" />
      </div>
      <h2>Carb Manager Dev Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <div class="premium-recipe-wrapper">
        <PremiumRecipeCardContainer v-slot="{ recipe }">
          <PremiumRecipeCard
            :title="recipe.title"
            :image="recipe.image"
            liked="true"
          />
        </PremiumRecipeCardContainer>
      </div>
    </div>
  </div>
</template>

<script>
import PremiumRecipeCardContainer from "./components/PremiumRecipeCardContainer.vue";
import PremiumRecipeCard from "./components/PremiumRecipeCard.vue";

export default {
  name: "App",
  components: {
    PremiumRecipeCardContainer,
    PremiumRecipeCard
  }
};
</script>

<style>
#app {
  font-family: "proxima-nova", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.cm-logo-wrapper {
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
}

.cm-logo {
  max-width: 150px;
  height: auto;
}

.cm-container {
  max-width: 960px;
  margin: auto;
}

/** Remove these styles when done */
.premium-recipe-wrapper {
  margin-top: 100px;
  /* border: 2px dashed red; */
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
