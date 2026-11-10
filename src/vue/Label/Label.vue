<template>
  <label
    :for="htmlFor"
    :class="classNames"
    v-bind="$attrs"
  >
    <slot>{{ content }}</slot>
    <span v-if="required && !content.includes('*')" aria-hidden="true">*</span>
  </label>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { LabelSize, LabelWeight, LabelColor } from '../../components/Label/Label.types';

export default defineComponent({
  name: 'Label',
  props: {
    content: { type: String, default: '' },
    htmlFor: { type: String, default: '' },
    size: { type: String as PropType<LabelSize>, default: 'medium' },
    weight: { type: String as PropType<LabelWeight>, default: '' },
    color: { type: String as PropType<LabelColor>, default: '' },
    required: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    visuallyHidden: { type: Boolean, default: false },
    className: { type: String, default: '' },
  },
  setup(props) {
    const classNames = computed(() => {
      return [
        'cui-label',
        `cui-label--${props.size}`,
        props.weight ? `cui-label--weight-${props.weight}` : '',
        props.color ? `cui-label--color-${props.color}` : '',
        props.required ? 'cui-label--required' : '',
        props.disabled ? 'cui-label--disabled' : '',
        props.visuallyHidden ? 'cui-label--visually-hidden' : '',
        props.className
      ].filter(Boolean).join(' ');
    });

    return { classNames };
  }
});
</script>

<style src="../../components/Label/Label.css"></style>