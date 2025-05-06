<!--<script setup lang="ts">-->

<!--interface Props {-->
<!--  name?: string;-->
<!--  id?: string;-->
<!--  checked?: boolean;-->
<!--}-->

<!--const props = defineProps({-->
<!--  name: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  id: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  checked: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--});-->
<!--</script>-->
<script setup lang="ts">

defineProps({
  name: {
    type: String,
    default: "",
  },
  id: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="form-check">
    <input
      :id="id"
      class="form-check-input"
      type="checkbox"
      :name="name"
      :checked="checked"
    />
    <label :for="id" class="custom-control-label" :class="$attrs.class">
      <slot />
    </label>
  </div>
</template>

<!--<script setup lang="ts">-->
<!--defineProps({-->
<!--  name: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  id: {-->
<!--    type: String,-->
<!--    default: "",-->
<!--  },-->
<!--  checked: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--});-->
<!--</script>-->
