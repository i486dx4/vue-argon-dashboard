<!--<script setup lang="ts">-->
<!--defineProps({-->
<!--  color: {-->
<!--    type: String,-->
<!--    default: 'success',-->
<!--  },-->
<!--  size: {-->
<!--    type: String,-->
<!--    default: 'md',-->
<!--  },-->
<!--  variant: {-->
<!--    type: String,-->
<!--    default: 'fill',-->
<!--  },-->
<!--  fullWidth: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--  active: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--})-->
<!--const getClasses = (variant, color, size, fullWidth, active) => {-->
<!--  let colorValue, sizeValue, fullWidthValue, activeValue-->

<!--  // Setting the button variant and color-->
<!--  if (variant === 'gradient') {-->
<!--    colorValue = `bg-gradient-${color}`-->
<!--  } else if (variant === 'outline') {-->
<!--    colorValue = `btn-outline-${color}`-->
<!--  } else {-->
<!--    colorValue = `btn-${color}`-->
<!--  }-->

<!--  sizeValue = size ? `btn-${size}` : null-->

<!--  fullWidthValue = fullWidth ? `w-100` : null-->

<!--  activeValue = active ? `active` : null-->

<!--  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`-->
<!--}-->
<!--</script>-->
<!--<template>-->
<!--  <button class="btn mb-0" :class="getClasses(variant, color, size, fullWidth, active)">-->
<!--    <slot />-->
<!--  </button>-->
<!--</template>-->


<script setup lang="ts">
import { defineProps, type PropType } from 'vue';

interface Props {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'fill' | 'outline' | 'gradient';
  fullWidth?: boolean;
  active?: boolean;
}

const props: Props  = defineProps({
  color: {
    type: String as PropType<'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark'>,
    default: 'success',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  variant: {
    type: String as PropType<'fill' | 'outline' | 'gradient'>,
    default: 'fill',
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
});

const getClasses = (
  variant: 'fill' | 'outline' | 'gradient' = 'fill',
  color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'light' | 'dark' = 'success',
  size?: 'sm' | 'md' | 'lg',
  fullWidth: boolean = false,
  active: boolean = false
): string => {
  let colorValue = '';
  let sizeValue = '';
  let fullWidthValue = '';
  let activeValue = '';

  // Setting the button variant and color
  if (variant === 'gradient') {
    colorValue = `bg-gradient-${color}`;
  } else if (variant === 'outline') {
    colorValue = `btn-outline-${color}`;
  } else {
    colorValue = `btn-${color}`;
  }

  sizeValue = size ? `btn-${size}` : '';

  fullWidthValue = fullWidth ? `w-100` : '';

  activeValue = active ? `active` : '';

  return `${colorValue} ${sizeValue} ${fullWidthValue} ${activeValue}`.trim();
};
</script>

<template>
  <button class="btn mb-0" :class="getClasses(props.variant, props.color, props.size, props.fullWidth, props.active)">
    <slot />
  </button>
</template>
