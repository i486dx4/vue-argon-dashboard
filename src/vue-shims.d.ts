// In a .d.ts file (e.g., `vue-shims.d.ts` or a similar declaration file)
import type { ComponentPublicInstance } from 'vue';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $parent?: ComponentPublicInstance<{ dark?: boolean }>;
  }
}
