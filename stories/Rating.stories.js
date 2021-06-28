import { number, withKnobs } from "@storybook/addon-knobs";

import Rating from "../src/components/Rating.vue";

export default {
  title: "Rating",
  component: Rating,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Rating },
  props: {
    count: {
      default: number("count", 200)
    },
    score: {
      default: number("score", 4.5)
    }
  },
  template: '<Rating :count="count" :score="score" />'
});
