import { mount } from "@vue/test-utils";
import PremiumRecipeCard from "../../src/components/PremiumRecipeCard.vue";

describe("PremiumRecipeCard.vue", () => {
  const props = {
    title:
      "Low Carb Buffalo Chicken Mac And Cheese W Smashed Cauliflower Medallions",
    image:
      "https://images.carbmanager.com/iYKrSEf7P6EAGx3desxGmcPJTVea2lJoBiXom24tevA/resize:fit:535/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby91c2VyJTJGNGdkMlJoRVpqM2NGR1NKWDVuYjhFQzROWjBEMiUyRmltYWdlcyUyRmJiNmExNjY4LTU1NDMtNGE3Ny1hMDQ0LWQ0ODVhM2U0ZDMwNS5qcGc_YWx0PW1lZGlh"
  };

  const wrapper = mount(PremiumRecipeCard, {
    propsData: {
      ...props
    }
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("received props", () => {
    expect(wrapper.props().title).toBeDefined();
    expect(wrapper.props().image).toBeDefined();
    expect(wrapper.props().liked).toBeDefined();
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("liked prop works", async () => {
    const wrapper = mount(PremiumRecipeCard, {
      propsData: {
        ...props,
        liked: true
      }
    });
    const like = wrapper.find(".recipe-card__like");
    await like.trigger("click");

    expect(like.classes()).toContain("active");
  });
});
