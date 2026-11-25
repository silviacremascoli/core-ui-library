<template>
  <component :is="as" :class="classNames" v-bind="$attrs">
    <slot />
  </component>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import type { GridRowCols, GridGutter, GridAlignItems, GridJustifyContent } from '../../components/Grid/Grid.types';

export default defineComponent({
  name: 'Row',
  props: {
    cols: { type: Number as PropType<GridRowCols>, default: 0 },
    colsSm: { type: Number as PropType<GridRowCols>, default: 0 },
    colsMd: { type: Number as PropType<GridRowCols>, default: 0 },
    colsLg: { type: Number as PropType<GridRowCols>, default: 0 },
    colsXl: { type: Number as PropType<GridRowCols>, default: 0 },
    colsXxl: { type: Number as PropType<GridRowCols>, default: 0 },
    g: { type: Number as PropType<GridGutter>, default: undefined },
    gSm: { type: Number as PropType<GridGutter>, default: undefined },
    gMd: { type: Number as PropType<GridGutter>, default: undefined },
    gLg: { type: Number as PropType<GridGutter>, default: undefined },
    gXl: { type: Number as PropType<GridGutter>, default: undefined },
    gXxl: { type: Number as PropType<GridGutter>, default: undefined },
    gx: { type: Number as PropType<GridGutter>, default: undefined },
    gxSm: { type: Number as PropType<GridGutter>, default: undefined },
    gxMd: { type: Number as PropType<GridGutter>, default: undefined },
    gxLg: { type: Number as PropType<GridGutter>, default: undefined },
    gxXl: { type: Number as PropType<GridGutter>, default: undefined },
    gxXxl: { type: Number as PropType<GridGutter>, default: undefined },
    gy: { type: Number as PropType<GridGutter>, default: undefined },
    gySm: { type: Number as PropType<GridGutter>, default: undefined },
    gyMd: { type: Number as PropType<GridGutter>, default: undefined },
    gyLg: { type: Number as PropType<GridGutter>, default: undefined },
    gyXl: { type: Number as PropType<GridGutter>, default: undefined },
    gyXxl: { type: Number as PropType<GridGutter>, default: undefined },
    alignItems: { type: String as PropType<GridAlignItems>, default: undefined },
    justifyContent: { type: String as PropType<GridJustifyContent>, default: undefined },
    auto: { type: Boolean, default: false },
    as: { type: String, default: 'div' },
    className: { type: String, default: '' },
  },
  setup(props) {
    const classNames = computed(() => {
      const classes = ['cui-row'];
      if (props.cols) classes.push(`cui-row--cols-${props.cols}`);
      if (props.colsSm) classes.push(`cui-row--cols-sm-${props.colsSm}`);
      if (props.colsMd) classes.push(`cui-row--cols-md-${props.colsMd}`);
      if (props.colsLg) classes.push(`cui-row--cols-lg-${props.colsLg}`);
      if (props.colsXl) classes.push(`cui-row--cols-xl-${props.colsXl}`);
      if (props.colsXxl) classes.push(`cui-row--cols-xxl-${props.colsXxl}`);
      if (props.g) classes.push(`cui-row--g-${props.g}`);
      if (props.gSm) classes.push(`cui-row--g-sm-${props.gSm}`);
      if (props.gMd) classes.push(`cui-row--g-md-${props.gMd}`);
      if (props.gLg) classes.push(`cui-row--g-lg-${props.gLg}`);
      if (props.gXl) classes.push(`cui-row--g-xl-${props.gXl}`);
      if (props.gXxl) classes.push(`cui-row--g-xxl-${props.gXxl}`);
      if (props.gx) classes.push(`cui-row--gx-${props.gx}`);
      if (props.gxSm) classes.push(`cui-row--gx-sm-${props.gxSm}`);
      if (props.gxMd) classes.push(`cui-row--gx-md-${props.gxMd}`);
      if (props.gxLg) classes.push(`cui-row--gx-lg-${props.gxLg}`);
      if (props.gxXl) classes.push(`cui-row--gx-xl-${props.gxXl}`);
      if (props.gxXxl) classes.push(`cui-row--gx-xxl-${props.gxXxl}`);
      if (props.gy) classes.push(`cui-row--gy-${props.gy}`);
      if (props.gySm) classes.push(`cui-row--gy-sm-${props.gySm}`);
      if (props.gyMd) classes.push(`cui-row--gy-md-${props.gyMd}`);
      if (props.gyLg) classes.push(`cui-row--gy-lg-${props.gyLg}`);
      if (props.gyXl) classes.push(`cui-row--gy-xl-${props.gyXl}`);
      if (props.gyXxl) classes.push(`cui-row--gy-xxl-${props.gyXxl}`);
      if (props.alignItems) classes.push(`cui-row--align-items-${props.alignItems}`);
      if (props.justifyContent) classes.push(`cui-row--justify-content-${props.justifyContent}`);
      if (props.auto) classes.push('cui-row--auto');
      if (props.className) classes.push(props.className);
      return classes.join(' ');
    });

    return { classNames };
  }
});
</script>

<style src="../../components/Grid/Grid.css"></style>
