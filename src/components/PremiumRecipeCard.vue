<template>
  <article class="recipe-card">
    <section class="recipe-card__wrapper" role="button" @click="$emit('click')">
      <button class="recipe-card__like" :class="{ active: liked }"></button>
      <img class="recipe-card__picture" :src="image" :alt="title" />
      <div class="recipe-card__premium">
        <img src="../assets/trophy.svg" alt="trophy" />
        Premium Recipe
      </div>
      <div class="recipe-card__content">
        <div class="recipe-card__title-wrapper">
          <h1 class="recipe-card__title overflow">{{ title }}</h1>
        </div>
        <Rating :count="rating.count" :score="rating.score" />
        <div class="recipe-card__detail">
          <div class="recipe-card__timing">
            <div class="recipe-card__time" v-html="getTimeFormat"></div>
            <div class="recipe-card__energy" v-html="getEnergyUnit"></div>
          </div>
          <Nutrients :nutrients="nutrients" />
        </div>
      </div>
    </section>
  </article>
</template>

<script>
import Nutrients from "./Nutrients.vue";
import Rating from "./Rating.vue";

import { kJtoCal, formatTime } from "../utils";

export default {
  components: {
    Nutrients,
    Rating
  },
  props: {
    title: {
      type: String,
      required: true,
      default: ""
    },
    image: {
      type: String,
      required: true,
      default: ""
    },
    nutrients: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    },
    liked: {
      type: Boolean,
      required: false,
      default: false
    },
    time: {
      type: Number,
      required: true,
      default: 0
    },
    rating: {
      type: Object,
      required: true,
      default: function() {
        return {};
      }
    },
    energy: {
      type: Number,
      required: true,
      default: 0
    },
    energyUnits: {
      type: String,
      required: true,
      default: "calories",
      validator: function(_val) {
        return ["calories", "kilojoules"].includes(_val);
      }
    }
  },
  computed: {
    /**
     * Gets correct energy unit based on energy unit prop.
     * @returns {string}
     */
    getEnergyUnit: function() {
      return this.energyUnits == "kilojoules"
        ? kJtoCal(this.energy) + " Kilojoules"
        : this.energy + " Calories";
    },
    /**
     * Gets correct time format based on time prop.
     * @returns {string}
     */
    getTimeFormat: function() {
      return formatTime(this.time);
    }
  }
};
</script>

<style lang="css" scoped>
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
  padding: 8px 16px;
}

.recipe-card__wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
}

.recipe-card__premium {
  align-items: center;
  background-image: url("../assets/trophy.svg");
  background-position: left center;
  background-repeat: no-repeat;
  background-size: 12px 12px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  color: #fff;
  display: flex;
  font-family: Proxima Nova;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  height: 20px;
  left: 8px;
  letter-spacing: -0.2px;
  line-height: 12px;
  padding: 4px 8px;
  position: absolute;
  top: 172px;
  width: 117px;
}

.recipe-card__premium img {
  margin: 0 2px;
}

.recipe-card__like {
  align-self: flex-end;
  background: transparent;
  border: 0;
  height: 20px;
  padding: 0;
  position: absolute;
  width: 23px;
}

.recipe-card__like:hover {
  cursor: pointer;
}

.recipe-card__like::after {
  background-image: url("../assets/heart.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 23px 20px;
  content: "";
  display: block;
  height: 20px;
  height: 20px;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 23px;
}

.recipe-card__like.active::after {
  background-image: url("../assets/heart--green.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 23px 20px;
  content: "";
  display: block;
  height: 20px;
  height: 20px;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 23px;
}

.recipe-card__title {
  font-family: Proxima Nova;
  font-size: 18px;
  font-style: normal;
  font-weight: bold;
  height: 2.6em;
  margin: 0 0 8px 0;
  overflow: hidden;
  text-align: left;
  width: 311px;
}

.overflow {
  --max-lines: 2;
  max-height: calc(var(--lh) * var(--max-lines));
  overflow: hidden;
  position: relative;
}

.overflow::before {
  bottom: 0;
  content: "...";
  position: absolute;
  right: 0;
}

.overflow::after {
  background: white;
  content: "";
  height: 1rem;
  position: absolute;
  right: 0;
  width: 1rem;
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
  height: 200px;
  object-fit: cover;
  overflow: hidden;
  width: 343px;
}

.recipe-card__picture:hover {
  opacity: 0.2;
}

.recipe-card__detail,
.recipe-card__timing {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.recipe-card__detail > * {
  color: #393c40;
  font-family: Proxima Nova;
  font-size: 12px;
  line-height: 14px;
}

.recipe-card__timing {
  margin-top: 8px;
  min-width: 70%;
  width: 100%;
}

.recipe-card__time {
  height: 16px;
  padding-left: 18px;
  position: relative;
  width: auto;
}

.recipe-card__time::before {
  background-image: url("../assets/clock.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  content: "";
  display: block;
  height: 16px;
  left: 0;
  position: absolute;
  top: 0;
  width: 16px;
}

.recipe-card__energy {
  height: 16px;
  margin-left: 16px;
  margin-right: auto;
  padding-left: 18px;
  position: relative;
  width: auto;
}

.recipe-card__energy::before {
  background-image: url("../assets/cals.svg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  content: "";
  display: block;
  height: 16px;
  left: 0;
  position: absolute;
  top: 0;
  width: 16px;
}
</style>
