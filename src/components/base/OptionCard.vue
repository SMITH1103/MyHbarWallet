<template>
  <component
    :is="container"
    :class="[
      'cursor-pointer',
      'bg-white rounded shadow-md max-w-3xl border border-transparent',
      'flex items-center relative',
      'hover:shadow-lg transition-shadow outline-none',
      'focus-visible:ring-bright-navy-blue focus-visible:ring-2',
      'dark:bg-dreamless-sleep dark:border-midnight-express dark:text-white',
    ]"
    :to="to"
  >
    <div class="flex items-center py-6 pr-5">
      <Image
        v-if="md"
        class="px-5 w-36"
        :light="lightIcon"
        :dark="darkIcon"
      />

      <div class="flex flex-col max-w-md">
        <div
          class="flex items-center text-xl font-medium text-black dark:text-white"
        >
          <Image
            v-if="!md"
            class="mx-4 w-14"
            :light="lightIcon"
            :dark="darkIcon"
          />

          <span>{{ title }}</span>
        </div>

        <div class="mt-3 ml-5 text-sm text-gray-400 md:ml-0">
          {{ desc }}
        </div>
      </div>
    </div>

    <div class="flex-1" />

    <Image
      class="w-6 mr-8"
      :light="lightChevron"
      :dark="darkChevron"
    />

    <div
      v-if="recommended"
      class="
                absolute
                top-2.5
                right-2.5
                inline-flex
                text-xs text-white
                font-semibold
                py-1.5
                px-3
                rounded
                bg-bright-navy-blue
            "
    >
      {{ $t("BaseOptionCard.recommended") }}
    </div>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteLocationRaw } from "vue-router";

import { useScreen } from "../../hooks/screen";
import lightChevron from "../../assets/chevron_right.svg";
import darkChevron from "../../assets/dark/chevron_right.svg";

import Image from "./Image.vue";

export default defineComponent({
  name: "OptionCard",
  components: { Image },
  props: {
    lightIcon: { type: String, required: true },
    darkIcon: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
    to: {
      type: Object as PropType<RouteLocationRaw | null>,
      default: null,
    },
    recommended: { type: Boolean, default: false },
  },
  setup(props) {
    const sm = useScreen("sm");
    const md = useScreen("md");

    const container = props.to != null ? "router-link" : "div";

    return { md, sm, lightChevron, darkChevron, container };
  },
});
</script>
