<template>
  <div :class="classNames" v-bind="$attrs">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { GridColSize, GridOffset, GridOrder } from '../../components/Grid/Grid.types';

function isValidSize(value: unknown): boolean {
  return value === 'auto' || (typeof value === 'number' && value >= 1 && value <= 12);
}

function isValidOrder(value: unknown): boolean {
  return value === 'first' || value === 'last' || (typeof value === 'number' && value >= 0 && value <= 5);
}

function sizeClass(prefix: string, value?: GridColSize): string {
  if (!value) return '';
  return value === 'auto' ? `${prefix}-auto` : `${prefix}-${value}`;
}

function offsetClass(bp: string, value?: GridOffset): string {
  if (value === undefined || value === null) return '';
  return `cui-col--offset-${bp ? bp + '-' : ''}${value}`;
}

function orderClass(bp: string, value?: GridOrder): string {
  if (value === undefined || value === null) return '';
  return `cui-col--order-${bp ? bp + '-' : ''}${value}`;
}

export default defineComponent({
  name: 'Col',
  props: {
    span: { type: [Number, String] as PropType<GridColSize>, default: undefined, validator: isValidSize },
    sm: { type: [Number, String] as PropType<GridColSize>, default: undefined, validator: isValidSize },
    md: { type: [Number, String] as PropType<GridColSize>, default: undefined, validator: isValidSize },
    lg: { type: [Number, String] as PropType<GridColSize>, default: undefined, validator: isValidSize },
    xl: { type: [Number, String] as PropType<GridColSize>, default: undefined, validator: isValidSize },
    xxl: { type: [Number, String] as PropType<GridColSize>, default: undefined, validator: isValidSize },
    offset: { type: Number as PropType<GridOffset>, default: undefined },
    offsetSm: { type: Number as PropType<GridOffset>, default: undefined },
    offsetMd: { type: Number as PropType<GridOffset>, default: undefined },
    offsetLg: { type: Number as PropType<GridOffset>, default: undefined },
    offsetXl: { type: Number as PropType<GridOffset>, default: undefined },
    offsetXxl: { type: Number as PropType<GridOffset>, default: undefined },
    order: { type: [Number, String] as PropType<GridOrder>, default: undefined, validator: isValidOrder },
    orderSm: { type: [Number, String] as PropType<GridOrder>, default: undefined, validator: isValidOrder },
    orderMd: { type: [Number, String] as PropType<GridOrder>, default: undefined, validator: isValidOrder },
    orderLg: { type: [Number, String] as PropType<GridOrder>, default: undefined, validator: isValidOrder },
    orderXl: { type: [Number, String] as PropType<GridOrder>, default: undefined, validator: isValidOrder },
    orderXxl: { type: [Number, String] as PropType<GridOrder>, default: undefined, validator: isValidOrder },
    className: { type: String, default: '' },
  },
  setup(props) {
    const classNames = computed(() => {
      const classes = ['cui-col'];
      const base = sizeClass('cui-col', props.span);
      if (base) classes.push(base);
      const cSm = sizeClass('cui-col-sm', props.sm);
      if (cSm) classes.push(cSm);
      const cMd = sizeClass('cui-col-md', props.md);
      if (cMd) classes.push(cMd);
      const cLg = sizeClass('cui-col-lg', props.lg);
      if (cLg) classes.push(cLg);
      const cXl = sizeClass('cui-col-xl', props.xl);
      if (cXl) classes.push(cXl);
      const cXxl = sizeClass('cui-col-xxl', props.xxl);
      if (cXxl) classes.push(cXxl);
      const off0 = offsetClass('', props.offset); if (off0) classes.push(off0);
      const offSm = offsetClass('sm', props.offsetSm); if (offSm) classes.push(offSm);
      const offMd = offsetClass('md', props.offsetMd); if (offMd) classes.push(offMd);
      const offLg = offsetClass('lg', props.offsetLg); if (offLg) classes.push(offLg);
      const offXl = offsetClass('xl', props.offsetXl); if (offXl) classes.push(offXl);
      const offXxl = offsetClass('xxl', props.offsetXxl); if (offXxl) classes.push(offXxl);
      const ord0 = orderClass('', props.order); if (ord0) classes.push(ord0);
      const ordSm = orderClass('sm', props.orderSm); if (ordSm) classes.push(ordSm);
      const ordMd = orderClass('md', props.orderMd); if (ordMd) classes.push(ordMd);
      const ordLg = orderClass('lg', props.orderLg); if (ordLg) classes.push(ordLg);
      const ordXl = orderClass('xl', props.orderXl); if (ordXl) classes.push(ordXl);
      const ordXxl = orderClass('xxl', props.orderXxl); if (ordXxl) classes.push(ordXxl);
      if (props.className) classes.push(props.className);
      return classes.filter(Boolean).join(' ');
    });

    return { classNames };
  }
});
</script>

<style src="../../components/Grid/Grid.css"></style>
