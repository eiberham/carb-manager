import { action } from "@storybook/addon-actions";
import {
  object,
  text,
  number,
  boolean,
  withKnobs
} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    title: {
      default: text(
        "title",
        "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions"
      )
    },
    image: {
      default: text(
        "image",
        "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
      )
    },
    liked: true
  },
  template:
    '<PremiumRecipeCard @click="action" :title="title" :image="image" :liked="liked"/>',
  methods: { action: action("clicked") }
});
