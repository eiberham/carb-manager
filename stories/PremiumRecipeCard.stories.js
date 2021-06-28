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
    nutrients: {
      default: object("nutrients", { proteins: 20, carbs: 16, fats: 6 })
    },
    liked: {
      default: boolean("liked", true)
    },
    time: {
      default: number("time", 75)
    },
    energy: {
      default: number("energy", 774)
    },
    rating: {
      default: object("rating", { count: 200, score: 4.5 })
    },
    energyUnits: {
      default: text("energy-units", "kilojoules")
    }
  },
  template: `<PremiumRecipeCard 
      @click="action"
      :title="title"
      :image="image"
      :nutrients="nutrients"
      :liked="liked"
      :time="time"
      :energy="energy"
      :rating="rating"
      energy-units="kilojoules"
    />
    `,
  methods: { action: action("clicked") }
});
