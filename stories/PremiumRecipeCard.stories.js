import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    // Add your props here and hook them up to the template below
  },
  template: '<PremiumRecipeCard @click="action" />',
  methods: { action: action("clicked") }
});
