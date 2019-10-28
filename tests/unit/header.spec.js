import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Header from "../../src/components/layout/Header.vue";

describe("Header.vue", () => {
  it("should render h1 tag", () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.find("h1").text()).equal("TodoList");
  });
});
