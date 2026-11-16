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
    <Icon
      v-if="iconLeft && !$slots.iconLeft"
      :icon="iconLeft"
      :size="iconSize"
      ariaHidden
      class="cui-btn--icon"
    />
    <span v-if="$slots.iconLeft" class="cui-btn--icon"><slot name="iconLeft" /></span>
    <span v-if="!iconOnly"><slot>{{ label }}</slot></span>
    <Icon
      v-if="iconRight && !$slots.iconRight"
      :icon="iconRight"
      :size="iconSize"
      ariaHidden
      class="cui-btn--icon"
    />
    <span v-if="$slots.iconRight" class="cui-btn--icon"><slot name="iconRight" /></span>
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
    <Icon
      v-if="iconLeft && !$slots.iconLeft"
      :icon="iconLeft"
      :size="iconSize"
      ariaHidden
      class="cui-btn--icon"
    />
    <span v-if="$slots.iconLeft" class="cui-btn--icon"><slot name="iconLeft" /></span>
    <span v-if="!iconOnly"><slot>{{ label }}</slot></span>
    <Icon
      v-if="iconRight && !$slots.iconRight"
      :icon="iconRight"
      :size="iconSize"
      ariaHidden
      class="cui-btn--icon"
    />
    <span v-if="$slots.iconRight" class="cui-btn--icon"><slot name="iconRight" /></span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ButtonVariant, ButtonShape, ButtonSize, ButtonType } from '../../components/Button/Button.types';
import Icon from '../Icon/Icon.vue';
import type { IconSize, FontAwesomeIconName } from '../../components/Icon/Icon.types';

// Map Button sizes to Icon sizes
const buttonSizeToIconSize: Record<ButtonSize, IconSize> = {
  small: 'xs',
  medium: 'sm',
  large: 'md',
};

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
    iconSize: {
      type: String as PropType<IconSize>,
      default: undefined,
      validator: (value: string) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
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
      const label = this.$attrs['aria-label'] as string | undefined;
      return this.ariaLabel || label || (this.iconOnly ? this.label : undefined);
    },
    busyState(): boolean | 'true' | 'false' | undefined {
      const value = this.$attrs['aria-busy'] as boolean | string | undefined;
      return this.loading ? true : value === true || value === false || value === 'true' || value === 'false' ? value : undefined;
    },
    disabledState(): boolean | 'true' | 'false' | undefined {
      const value = this.$attrs['aria-disabled'] as boolean | string | undefined;
      return this.unavailable ? true : value === true || value === false || value === 'true' || value === 'false' ? value : undefined;
    },
    linkTabindex(): string | number | undefined {
      const value = (this.$attrs.tabindex ?? this.$attrs.tabIndex) as string | number | undefined;
      return this.unavailable ? -1 : typeof value === 'string' || typeof value === 'number' ? value : undefined;
    },
    iconSize(): IconSize {
      return this.iconSize || buttonSizeToIconSize[this.size] || 'md';
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
