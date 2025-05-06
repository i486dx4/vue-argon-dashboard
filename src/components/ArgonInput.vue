<!--<script setup lang="ts">-->
<!--import { defineProps } from "vue";-->
<!--const emit = defineEmits(["update:modelValue"]);-->

<!--defineProps({-->
<!--  size: {-->
<!--    type: String,-->
<!--    default: "default",-->
<!--  },-->
<!--  success: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--  error: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--  icon: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  iconDir: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  name: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  id: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  modelValue: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  placeholder: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  type: {-->
<!--    type: String,-->
<!--    default: "text",-->
<!--  },-->
<!--  isRequired: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--});-->

<!--const getClasses = (size, success, error) => {-->
<!--  let isValidValue;-->

<!--  const sizeValue = size ? `form-control-${size}` : null;-->

<!--  if (error) {-->
<!--    isValidValue = "is-invalid";-->
<!--  } else if (success) {-->
<!--    isValidValue = "is-valid";-->
<!--  } else {-->
<!--    isValidValue = "";-->
<!--  }-->

<!--  return `${sizeValue} ${isValidValue}`;-->
<!--};-->
<!--const getIcon = (icon) => (icon ? icon : null);-->
<!--const hasIcon = (icon) => (icon ? "input-group" : null);-->
<!--</script>-->
<script setup lang="ts">
import { defineEmits, defineProps, type PropType } from 'vue'

const emit = defineEmits(['update:modelValue'])

interface Props {
  size?: 'sm' | 'default' | 'lg'
  success?: boolean
  error?: boolean
  icon?: string
  iconDir?: string
  name?: string
  id?: string
  modelValue?: string | number
  placeholder?: string
  type?: 'text' | 'password' | 'email' | 'number' | string
  isRequired?: boolean
}

defineProps({
  size: {
    type: String as PropType<'sm' | 'default' | 'lg'>,
    default: 'default',
  },
  success: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  iconDir: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String as PropType<'text' | 'password' | 'email' | 'number' | string>,
    default: 'text',
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
})

const getClasses = (size?: 'sm' | 'default' | 'lg', success?: boolean, error?: boolean): string => {
  const sizeValue = size ? `form-control-${size}` : ''
  let isValidValue = ''

  if (error) {
    isValidValue = 'is-invalid'
  } else if (success) {
    isValidValue = 'is-valid'
  }

  return `${sizeValue} ${isValidValue}`.trim()
}

const getIcon = (icon?: string): string | null => (icon ? icon : null)
const hasIcon = (icon?: string): string | null => (icon ? 'input-group' : null)

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>
<template>
  <div class="form-group">
    <div :class="hasIcon(icon)">
      <span v-if="iconDir === 'left'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
      <input
        :id="id"
        :type="type"
        class="form-control"
        :class="getClasses(size, success, error)"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :required="isRequired"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="iconDir === 'right'" class="input-group-text">
        <i :class="getIcon(icon)"></i>
      </span>
    </div>
  </div>
</template>
