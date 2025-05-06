<!--<script setup lang="ts">-->
<!--defineProps({-->
<!--  icon: {-->
<!--    type: [String, Object],-->
<!--    required: true,-->
<!--    component: {-->
<!--      type: String,-->
<!--    },-->
<!--    background: {-->
<!--      type: String,-->
<!--    },-->
<!--    default: () => ({-->
<!--      background: "bg-gradient-success",-->
<!--    }),-->
<!--  },-->
<!--  title: {-->
<!--    type: String,-->
<!--    required: true,-->
<!--  },-->
<!--  description: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  value: {-->
<!--    type: [String, Number],-->
<!--    default: "",-->
<!--  },-->
<!--});-->
<!--</script>-->
<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

interface IconObject {
  component?: string;
  background?: string;
}

interface Props {
  icon: string | IconObject;
  title: string;
  description?: string;
  value?: string | number;
}

const props: Props = defineProps({
  icon: {
    type: [String, Object] as PropType<string | IconObject>,
    required: true,
    default: () => ({ background: "bg-gradient-success" }),
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    default: "",
  },
});
</script>
<template>
  <div class="card">
    <div class="p-3 mx-4 text-center card-header d-flex justify-content-center">
      <div
        :class="`icon icon-shape icon-lg shadow text-center border-radius-lg ${(props.icon as IconObject).background}`"
      >
        <i
          class="opacity-10"
          :class="typeof icon === 'string' ? icon : icon.component"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div class="p-3 pt-0 text-center card-body">
      <h6 class="mb-0 text-center">{{ title }}</h6>
      <span class="text-xs">{{ description }}</span>
      <hr class="my-3 horizontal dark" />
      <h5 class="mb-0">{{ value }}</h5>
    </div>
  </div>
</template>
