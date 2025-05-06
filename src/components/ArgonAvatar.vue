<!--<script setup lang="ts">-->
<!--defineProps({-->
<!--  image: {-->
<!--    type: String,-->
<!--    required: true,-->
<!--  },-->
<!--  alt: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  size: {-->
<!--    type: String,-->
<!--    default: null,-->
<!--  },-->
<!--  shadow: {-->
<!--    type: String,-->
<!--    default: null,-->
<!--  },-->
<!--  borderRadius: {-->
<!--    type: String,-->
<!--    default: null,-->
<!--  },-->
<!--  circular: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--});-->
<!--const getSize = (size) => (size ? `avatar-${size}` : null);-->
<!--const getClasses = (shadow, circular, borderRadius) => {-->
<!--  let shadowValue, circularValue, borderRadiusValue;-->

<!--  if (shadow) {-->
<!--    shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;-->
<!--  } else {-->
<!--    shadowValue = null;-->
<!--  }-->

<!--  circularValue = circular ? "rounded-circle" : null;-->

<!--  borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : null;-->

<!--  return `${shadowValue} ${circularValue} ${borderRadiusValue}`;-->
<!--};-->
<!--</script>-->
<!--<template>-->
<!--  <div class="avatar" :class="getSize(size)">-->
<!--    <img-->
<!--      :src="image"-->
<!--      :alt="alt"-->
<!--      :class="[getClasses(shadow, circular, borderRadius)]"-->
<!--    />-->
<!--  </div>-->
<!--</template>-->


<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

interface Props {
  image: string;
  alt?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | null;
  shadow?: 'regular' | 'sm' | 'md' | 'lg' | null;
  borderRadius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null;
  circular?: boolean;
}

const props: Props = defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | null>,
    default: null,
  },
  shadow: {
    type: String as PropType<'regular' | 'sm' | 'md' | 'lg' | null>,
    default: null,
  },
  borderRadius: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | null>,
    default: null,
  },
  circular: {
    type: Boolean,
    default: false,
  },
});

const getSize = (size?: 'xs' | 'sm' | 'md' | 'lg' | null): string | null => (size ? `avatar-${size}` : null);

const getClasses = (
  shadow?: 'regular' | 'sm' | 'md' | 'lg' | null,
  circular: boolean = false,
  borderRadius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null
): string => {
  let shadowValue = '';
  let circularValue = '';
  let borderRadiusValue = '';

  if (shadow) {
    shadowValue = shadow === "regular" ? "shadow" : `shadow-${shadow}`;
  }

  circularValue = circular ? "rounded-circle" : "";

  borderRadiusValue = borderRadius ? `border-radius-${borderRadius}` : "";

  return `${shadowValue} ${circularValue} ${borderRadiusValue}`.trim();
};
</script>

<template>
  <div class="avatar" :class="getSize(props.size)">
    <img
      :src="props.image"
      :alt="props.alt"
      :class="[getClasses(props.shadow, props.circular, props.borderRadius)]"
    />
  </div>
</template>
