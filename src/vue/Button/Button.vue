<template>
  <a
    v-if="href !== undefined"
    v-bind="$attrs"
    :href="!unavailable ? href : undefined"
    :class="buttonClasses"
    :aria-label="accessibleLabel"
    :aria-busy="busyState"
    :aria-disabled="disabledState"
    :tabindex="linkTabindex"
    @click="onClick"
  >
    <span v-if="$slots.iconLeft" class="cui-btn__icon"><slot name="iconLeft" /></span>
    <span v-else-if="iconLeft" class="cui-btn__icon">
      <span v-if="iconLeftMarkup" v-html="iconLeftMarkup" />
      <span v-else>{{ iconLeft }}</span>
    </span>
    <span v-if="!iconOnly"><slot>{{ label }}</slot></span>
    <span v-if="$slots.iconRight" class="cui-btn__icon"><slot name="iconRight" /></span>
    <span v-else-if="iconRight" class="cui-btn__icon">
      <span v-if="iconRightMarkup" v-html="iconRightMarkup" />
      <span v-else>{{ iconRight }}</span>
    </span>
  </a>
  <button
    v-else
    v-bind="$attrs"
    :type="type"
    :class="buttonClasses"
    :disabled="unavailable"
    :aria-label="accessibleLabel"
    :aria-busy="busyState"
    @click="onClick"
  >
    <span v-if="$slots.iconLeft" class="cui-btn__icon"><slot name="iconLeft" /></span>
    <span v-else-if="iconLeft" class="cui-btn__icon">
      <span v-if="iconLeftMarkup" v-html="iconLeftMarkup" />
      <span v-else>{{ iconLeft }}</span>
    </span>
    <span v-if="!iconOnly"><slot>{{ label }}</slot></span>
    <span v-if="$slots.iconRight" class="cui-btn__icon"><slot name="iconRight" /></span>
    <span v-else-if="iconRight" class="cui-btn__icon">
      <span v-if="iconRightMarkup" v-html="iconRightMarkup" />
      <span v-else>{{ iconRight }}</span>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ButtonVariant, ButtonShape, ButtonSize, ButtonType } from '../../components/Button/Button.types';
import { resolveIconMarkup } from '../../components/Icon/Icon.registry';

export default defineComponent({
  name: 'Button',
  inheritAttrs: false,
  emits: ['click'],
  props: {
    label: { type: String, default: '' },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
      validator: (value: string) => ['primary', 'danger', 'outline', 'ghost'].includes(value)
    },
    shape: {
      type: String as PropType<ButtonShape>,
      default: 'default',
      validator: (value: string) => ['default', 'rounded', 'pill'].includes(value)
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    href: { type: String, default: undefined },
    iconLeft: { type: String, default: '' },
    iconRight: { type: String, default: '' },
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
    unavailable(): boolean {
      return this.disabled || this.loading;
    },
    accessibleLabel(): string | undefined {
      const label = this.$attrs['aria-label'];
      return this.ariaLabel || (typeof label === 'string' ? label : undefined) || (this.iconOnly ? this.label : undefined);
    },
    busyState(): boolean | 'true' | 'false' | undefined {
      const value = this.$attrs['aria-busy'];
      return this.loading ? true : value === true || value === false || value === 'true' || value === 'false' ? value : undefined;
    },
    disabledState(): boolean | 'true' | 'false' | undefined {
      const value = this.$attrs['aria-disabled'];
      return this.unavailable ? true : value === true || value === false || value === 'true' || value === 'false' ? value : undefined;
    },
    linkTabindex(): string | number | undefined {
      const value = this.$attrs.tabindex ?? this.$attrs.tabIndex;
      return this.unavailable ? -1 : typeof value === 'string' || typeof value === 'number' ? value : undefined;
    },
    iconLeftMarkup(): string | undefined {
      return this.iconLeft ? resolveIconMarkup(this.iconLeft) : undefined;
    },
    iconRightMarkup(): string | undefined {
      return this.iconRight ? resolveIconMarkup(this.iconRight) : undefined;
    },
    buttonClasses() {
      return {
        'cui-btn': true,
        [`cui-btn--${this.variant}`]: true,
        [`cui-btn--${this.size}`]: true,
        'cui-btn--rounded': this.shape === 'rounded',
        'cui-btn--pill': this.shape === 'pill',
        'cui-btn--full-width': this.fullWidth,
        'cui-btn--icon-only': this.iconOnly,
        'cui-btn--icon-only-link': this.href !== undefined && this.iconOnly,
        'cui-btn--loading': this.loading,
        'cui-btn--disabled': this.href !== undefined && this.unavailable
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
