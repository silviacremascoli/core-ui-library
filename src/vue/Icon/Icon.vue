<template>
  <component
    :is="asLink ? 'a' : 'span'"
    :class="classNames"
    :href="asLink ? href : undefined"
    :target="asLink ? target : undefined"
    :rel="asLink ? rel : undefined"
    :aria-label="ariaLabel"
    :aria-hidden="ariaHidden"
    :role="asLink && !ariaLabel && !iconMarkup ? 'img' : undefined"
    @click="onClick"
    v-bind="{ ...aria, ...$attrs }"
  >
    <span v-if="iconMarkup" v-html="iconMarkup"></span>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { IconSize, IconColor } from '../../components/Icon/Icon.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';

export default defineComponent({
  name: 'Icon',
  props: {
    icon: { 
      type: String, 
      required: true,
      description: 'Registered Font Awesome name'
    },
    size: { type: String as PropType<IconSize>, default: 'md' },
    color: { type: String as PropType<IconColor>, default: '' },
    asLink: { type: Boolean, default: false },
    href: { type: String, default: '#' },
    target: { type: String as PropType<'_blank' | '_self' | '_parent' | '_top'>, default: '_blank' },
    rel: { type: String, default: 'noopener noreferrer' },
    className: { type: String, default: '' },
    ariaLabel: { type: String, default: '' },
    ariaHidden: { type: Boolean, default: false },
    aria: { type: Object as PropType<Record<string, string>>, default: () => ({}) },
    onClick: { type: Function as PropType<(event: MouseEvent) => void>, default: undefined },
  },
  setup(props) {
    const classNames = computed(() => {
      return [
        'cui-icon',
        `cui-icon--${props.size}`,
        props.color ? `cui-icon--color-${props.color}` : '',
        props.asLink ? 'cui-icon--link' : '',
        props.className
      ].filter(Boolean).join(' ');
    });

    const iconMarkup = computed(() => resolveIconMarkup(props.icon));

    return { classNames, iconMarkup };
  }
});
</script>

<style src="../../components/Icon/Icon.css"></style>
