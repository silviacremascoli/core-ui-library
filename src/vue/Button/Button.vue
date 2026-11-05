<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    :aria-label="ariaLabel || (iconOnly ? label : undefined)"
    :aria-busy="loading || undefined"
    v-bind="$attrs"
    @click="onClick"
  >
    <span v-if="$slots.iconLeft" class="cui-btn__icon"><slot name="iconLeft" /></span>
    <span v-if="!iconOnly"><slot>{{ label }}</slot></span>
    <span v-if="$slots.iconRight" class="cui-btn__icon"><slot name="iconRight" /></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ButtonVariant, ButtonShape, ButtonSize, ButtonType } from '../../components/Button/Button.types';

export default defineComponent({
  name: 'Button',
  props: {
    label: { type: String, default: '' },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger', 'outline', 'ghost'].includes(value)
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'default',
      validator: (value: string) => ['default', 'pill'].includes(value)
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    iconOnly: { type: Boolean, default: false },
    ariaLabel: { type: String, default: '' },
    type: {
      type: String as PropType<ButtonType>,
      default: 'button',
      validator: (value: string) => ['button', 'submit', 'reset'].includes(value)
    }
  },
  computed: {
    buttonClasses() {
      return {
        'cui-btn': true,
        [`cui-btn--${this.variant}`]: true,
        [`cui-btn--${this.size}`]: true,
        'cui-btn--pill': this.shape === 'pill',
        'cui-btn--full-width': this.fullWidth,
        'cui-btn--icon-only': this.iconOnly,
        'cui-btn--loading': this.loading
      };
    }
  },
  methods: {
    onClick(event: Event) {
      if (!this.disabled && !this.loading) {
        this.$emit('click', event);
      }
    }
  }
});
</script>

<style src="../../components/Button/Button.css"></style>
