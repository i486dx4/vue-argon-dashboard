<!--<script setup lang="ts">-->

<!--defineProps({-->
<!--  rowReverse: {-->
<!--    type: Boolean,-->
<!--    default: false,-->
<!--  },-->
<!--  title: {-->
<!--    type: [Object, String],-->
<!--    required: true,-->
<!--    text: {-->
<!--      type: String,-->
<!--    },-->
<!--    color: {-->
<!--      type: String,-->
<!--    },-->
<!--  },-->
<!--  description: {-->
<!--    type: String,-->
<!--    default: '',-->
<!--  },-->
<!--  value: {-->
<!--    type: [Object, String, Number],-->
<!--    required: true,-->
<!--    text: {-->
<!--      type: [String, Number],-->
<!--    },-->
<!--    color: {-->
<!--      type: String,-->
<!--    },-->
<!--  },-->
<!--  percentage: {-->
<!--    type: [Object, String],-->
<!--    value: {-->
<!--      type: String,-->
<!--    },-->
<!--    color: {-->
<!--      type: String,-->
<!--    },-->
<!--    default: () => ({-->
<!--      color: 'success',-->
<!--    }),-->
<!--  },-->
<!--  icon: {-->
<!--    type: [String, Object],-->
<!--    component: {-->
<!--      type: String,-->
<!--    },-->
<!--    background: {-->
<!--      type: String,-->
<!--    },-->
<!--    shape: {-->
<!--      type: String,-->
<!--    },-->
<!--    default: () => ({-->
<!--      background: 'bg-white',-->
<!--      shape: ' border-radius-md',-->
<!--    }),-->
<!--  },-->
<!--  classContent: {-->
<!--    type: String,-->
<!--    default: '',-->
<!--  },-->
<!--})-->
<!--</script>-->
<script setup lang="ts">
import { type PropType } from 'vue'

interface TitleObject {
  text?: string
  color?: string
}

interface ValueObject {
  text?: string | number
  color?: string
}

interface PercentageObject {
  value?: string
  color?: string
}

interface IconObject {
  component?: string
  background?: string
  shape?: string
}

interface Props {
  rowReverse?: boolean
  title: string | TitleObject
  description?: string
  value: string | number | ValueObject
  percentage?: string | PercentageObject
  icon?: string | IconObject
  classContent?: string
}

const props: Props =defineProps({
  rowReverse: {
    type: Boolean,
    default: false,
  },
  title: {
    type: [Object, String] as PropType<string | TitleObject>,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  value: {
    type: [Object, String, Number] as PropType<string | number | ValueObject>,
    required: true,
  },
  percentage: {
    type: [Object, String] as PropType<string | PercentageObject>,
    default: () => ({
      color: 'success',
    }),
  },
  icon: {
    type: [String, Object] as PropType<string | IconObject>,
    default: () => ({
      background: 'bg-white',
      shape: ' border-radius-md',
    }),
  },
  classContent: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="mb-3 card">
    <div class="p-3 card-body">
      <div class="d-flex" :class="rowReverse ? '' : 'flex-row-reverse justify-content-between'">
        <div
          class="text-center shadow icon icon-shape"
          :class="[
            typeof icon === 'object' ? `${icon.background} ${icon.shape}` : 'border-radius-md',
            rowReverse ? 'me-2' : '',
          ]"
        >
          <i
            class="text-lg opacity-10"
            :class="typeof icon === 'string' ? icon : icon.component"
            aria-hidden="true"
          ></i>
        </div>
        <div :class="classContent">
          <div class="numbers">
            <p class="mb-0 text-sm text-uppercase font-weight-bold" :class="(props.title as TitleObject)?.color">
              {{ typeof title === 'string' ? title : title.text }}
            </p>
            <h5 :class="`mb-0 font-weight-bolder ${(props.value as ValueObject)?.color}`">
              {{
                (props.value && typeof props.value === 'string') || (props.value && typeof props.value === 'number')
                  ? props.value
                  : (props.value as ValueObject)?.text
              }}
              <span
                v-if="percentage && typeof percentage === 'string'"
                class="text-sm font-weight-bolder"
              >
                {{ percentage }}
              </span>
              <span
                v-if="percentage && typeof percentage === 'object'"
                :class="`text-sm font-weight-bolder text-${percentage.color}`"
              >
                {{ percentage.value }}
              </span>
            </h5>
            <!--  eslint-disable-next-line vue/no-v-html -->
            <p v-if="description" class="mt-2 mb-0" v-html="description"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
