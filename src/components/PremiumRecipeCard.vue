<template>
  <article class="recipe-card" v-if="image">
    <section class="recipe-card__wrapper" role="button" @click="$emit('click')">
      <button class="recipe-card__like" :class="{ active: liked }"></button>
      <img class="recipe-card__picture" :src="image" :alt="title" />
      <span class="recipe-card__premium">Premium Recipe</span>
      <div class="recipe-card__content">
        <div class="recipe-card__title-wrapper">
          <h1 class="recipe-card__title overflow">{{ title }}</h1>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    liked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted: function() {},
  methods: {}
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

.recipe-card {
  align-items: center;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 13px 35px rgba(0, 30, 47, 0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-height: 318px;
  max-width: 343px;
  width: 100%;
  --lh: 1.4rem;
  line-height: var(--lh);
}

.recipe-card:hover {
  cursor: pointer;
}

.recipe-card__content {
  padding: 16px;
}

.recipe-card__wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}

.recipe-card__premium {
  background-image: url("../assets/trophy.svg");
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 12px 12px;
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: -0.2px;
  /* color: #fff; */
  width: 117px;
  height: 20px;
  background: #fff;
  opacity: 0.3;
  border-radius: 10px;
  padding: 4px 8px;
  position: absolute;
  left: 8px;
  top: 172px;
}

/* .recipe-card__premium::before {
  background-image: url("../assets/trophy.svg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 12px 12px;
  left: 0;
  top: 0;
  content: "";
  display: block;
  position: absolute;
  width: 12px;
  height: 12px;
} */

.recipe-card__like {
  align-self: flex-end;
  background: transparent;
  border: 0;
  padding: 0;
  width: 23px;
  height: 20px;
  position: absolute;
}

.recipe-card__like:hover {
  cursor: pointer;
}

.recipe-card__like::after {
  background-image: url("../assets/heart.svg");
  background-repeat: no-repeat;
  background-size: 23px 20px;
  background-position: center center;
  content: "";
  display: block;
  height: 20px;
  right: 16px;
  position: absolute;
  top: 16px;
  width: 23px;
  height: 20px;
}

.recipe-card__like.active::after {
  background-image: url("../assets/heart--green.svg");
  background-repeat: no-repeat;
  background-size: 23px 20px;
  background-position: center center;
  content: "";
  display: block;
  height: 20px;
  right: 16px;
  position: absolute;
  top: 16px;
  width: 23px;
  height: 20px;
}

.recipe-card__title {
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  width: 311px;
  margin: 0 0 1em 0;
  overflow: hidden;
  height: 2.6em;
  text-align: left;
}

.overflow {
  --max-lines: 2;
  position: relative;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  /* padding-right: 1rem; */ /* space for ellipsis */
}
.overflow::before {
  position: absolute;
  content: "...";
  bottom: 0;
  right: 0;
}
.overflow::after {
  content: "";
  position: absolute;
  right: 0;
  width: 1rem;
  height: 1rem;
  background: white;
}

.recipe-card__picture {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(22, 27, 35, 0.2) 70.94%,
    rgba(26, 29, 34, 0.79) 106.25%
  );
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 343px;
  height: 200px;
  overflow: hidden;
  object-fit: cover;
}

.recipe-card__picture:hover {
  opacity: 0.2;
}
</style>
