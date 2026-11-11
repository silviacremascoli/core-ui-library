<template>
  <component
    :is="computedTag"
    :class="classNames"
    :style="fontFamilyStyle"
    v-bind="$attrs"
  >
    <slot>{{ content }}</slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { TypographyVariant, TypographyAlign, TypographyWeight, TypographyFontFamily, TypographyColor, TypographyTag } from '../../components/Typography/Typography.types';

export default defineComponent({
  name: 'Typography',
  props: {
    content: { type: String, default: '' },
    tag: { type: String as PropType<TypographyTag>, default: '' },
    variant: { type: String as PropType<TypographyVariant>, default: 'body1' },
    align: { type: String as PropType<TypographyAlign>, default: '' },
    weight: { type: String as PropType<TypographyWeight>, default: '' },
    fontFamily: { type: String as PropType<TypographyFontFamily>, default: '' },
    color: { type: String as PropType<TypographyColor>, default: '' },
    truncate: { type: Boolean, default: false },
    noWrap: { type: Boolean, default: false },
    className: { type: String, default: '' },
  },
  setup(props) {
    const computedTag = computed(() => {
      return props.tag || getTagFromVariant(props.variant);
    });

    const fontFamilyStyle = computed(() => {
      if (!props.fontFamily) return undefined;
      if (props.fontFamily === 'text') return { fontFamily: 'var(--cui-font-family)' };
      if (props.fontFamily === 'heading') return { fontFamily: 'var(--cui-font-family-heading, var(--cui-font-family))' };
      return { fontFamily: props.fontFamily };
    });

    const classNames = computed(() => {
      return [
        'cui-typography',
        `cui-typography--${props.variant}`,
        props.align ? `cui-typography--align-${props.align}` : '',
        props.weight ? `cui-typography--weight-${props.weight}` : '',
        props.color ? `cui-typography--color-${props.color}` : '',
        props.truncate ? 'cui-typography--truncate' : '',
        props.noWrap ? 'cui-typography--no-wrap' : '',
        props.className
      ].filter(Boolean).join(' ');
    });

    return { computedTag, classNames, fontFamilyStyle };
  }
});

function getTagFromVariant(variant: TypographyVariant): TypographyTag {
  switch (variant) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    case 'h4': return 'h4';
    case 'h5': return 'h5';
    case 'h6': return 'h6';
    case 'subtitle1':
    case 'subtitle2':
    case 'body1':
    case 'body2': return 'p';
    case 'caption':
    case 'overline':
    default: return 'span';
  }
}
</script>

<style src="../../components/Typography/Typography.css"></style>