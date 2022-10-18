/*
 * @Author: jialiangzou
 * @Date: 2022-10-13 20:38:37
 * @LastEditors: jialiangzou
 * @LastEditTime: 2022-10-18 16:56:20
 * @FilePath: /lowcode-web/src/stores/counter.ts
 */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
