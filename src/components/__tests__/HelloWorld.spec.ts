/*
 * @Author: jialiangzou
 * @Date: 2022-10-13 20:38:37
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-10-19 21:43:42
 * @FilePath: /lowcode-web/src/components/__tests__/HelloWorld.spec.ts
 */
import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HelloWorld from "../HelloWorld.vue";

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
