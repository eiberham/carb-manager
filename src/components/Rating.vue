<template>
  <section class="rating">
    <ul class="rating__score">
      <li
        class="star"
        :class="{
          'full-star': star.class == 'full-star',
          'half-star': star.class == 'half-star',
          'empty-star': star.class == 'empty-star'
        }"
        v-for="(star, index) in stars"
        :key="index"
      ></li>
    </ul>
    <div class="rating__count">{{ count }} ratings</div>
  </section>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    },
    score: {
      type: Number,
      required: false,
      default: 0
    }
  },
  computed: {
    stars() {
      return [...Array(5)].reduce((acc, _, index) => {
        const val = index + 1;
        if (val - this.score <= 0) {
          acc.push({ class: "full-star" });
        } else if (val - Math.abs(this.score) === 0.5) {
          acc.push({ class: "half-star" });
        } else {
          acc.push({ class: "empty-star" });
        }
        return acc;
      }, []);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.rating {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
}

.rating__score {
  display: inline;
  margin: 0;
  padding: 0;
  margin-right: 4px;
}

.star {
  background-repeat: no-repeat;
  background-size: 12px 12px;
  background-position: center top;
  width: 12px;
  height: 12px;
  list-style: none;
  float: left;
}

.star.full-star {
  background-image: url("../assets/star.svg");
}

.star.half-star {
  background-image: url("../assets/half-star.svg");
}

.star.empty-star {
  background-image: url("../assets/empty-star.svg");
}

.rating__count {
  font-family: Proxima Nova;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: #1ca677;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 4px;
}
</style>
