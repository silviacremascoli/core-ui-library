<template>
  <component :is="as" :class="classNames" v-bind="$attrs">
    <slot>{{ content }}</slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { ContainerSize, ContainerAlign } from '../../components/Container/Container.types';

export default defineComponent({
  name: 'Container',
  props: {
    content: { type: String, default: '' },
    size: { type: String as PropType<ContainerSize>, default: 'large' },
    align: { type: String as PropType<ContainerAlign>, default: 'center' },
    noPadding: { type: Boolean, default: false },
    fluid: { type: Boolean, default: false },
    queryable: { type: Boolean, default: false },
    as: { type: String, default: 'div' },
    className: { type: String, default: '' },
  },
  setup(props) {
    const classNames = computed(() => {
      return [
        'cui-container',
        `cui-container--${props.size}`,
        props.align !== 'center' ? `cui-container--align-${props.align}` : '',
        props.noPadding ? 'cui-container--no-padding' : '',
        props.fluid ? 'cui-container--fluid' : '',
        props.queryable ? 'cui-container--queryable' : '',
        props.className
      ].filter(Boolean).join(' ');
    });

    return { classNames };
  }
});
</script>

<style src="../../components/Container/Container.css"></style>