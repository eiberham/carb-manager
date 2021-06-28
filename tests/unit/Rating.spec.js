import { mount } from "@vue/test-utils";
import Rating from "../../src/components/Rating.vue";

describe("Rating.vue", () => {
  const props = {
    count: 200,
    score: 4.5
  };

  const wrapper = mount(Rating, {
    propsData: {
      ...props
    }
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("renders stars correctly", () => {
    expect(wrapper.findAll(".star.full-star")).toHaveLength(4);
    expect(wrapper.findAll(".star.half-star")).toHaveLength(1);
  });

  test("matches snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
