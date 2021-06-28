import { object, withKnobs } from "@storybook/addon-knobs";

import Nutrients from "../src/components/Nutrients.vue";

export default {
  title: "Nutrients",
  component: Nutrients,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { Nutrients },
  props: {
    nutrients: {
      default: object("nutrients", { proteins: 20, carbs: 16, fats: 6 })
    }
  },
  template: '<Nutrients :nutrients="nutrients" />'
});
