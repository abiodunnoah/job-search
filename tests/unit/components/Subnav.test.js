import { mount } from "@vue/test-utils";

import Subnav from "@/components/Subnav.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

describe("Subnav", () => {
  describe("when user is on job page", () => {
    it("it display job count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count' ]");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when user is noton job page", () => {
    it("does NOT display job count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count]");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
