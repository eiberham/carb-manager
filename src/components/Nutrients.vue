<template>
  <section class="nutrients">
    <div class="nutrients__carbs">{{ nutrients.carbs }} g</div>
    <div class="nutrients__proteins">{{ nutrients.proteins }} g</div>
    <div class="nutrients__fats">{{ nutrients.fats }} g</div>
  </section>
</template>

<script>
export default {
  props: {
    nutrients: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.nutrients {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.nutrients > * {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #6f737a;
  position: relative;
  padding-left: 8px;
  padding-top: 8px;
}

.nutrients > *::before {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  position: absolute;
  top: 12px;
  left: 0;
  border-radius: 50%;
}

.nutrients__carbs::before {
  background: #f94642;
}

.nutrients__proteins::before {
  background: #3177bb;
}

.nutrients__fats::before {
  background: #fda120;
}
</style>
