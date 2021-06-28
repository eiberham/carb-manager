import { mount } from "@vue/test-utils";
import Nutrients from "../../src/components/Nutrients.vue";

describe("Nutrients.vue", () => {
  const nutrients = {
    proteins: 20,
    carbs: 16,
    fats: 6
  };

  const wrapper = mount(Nutrients, {
    propsData: {
      nutrients
    }
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("received props", () => {
    expect(wrapper.find(".nutrients__proteins").text()).toContain(
      nutrients.proteins
    );
    expect(wrapper.find(".nutrients__carbs").text()).toContain(nutrients.carbs);
    expect(wrapper.find(".nutrients__fats").text()).toContain(nutrients.fats);
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
