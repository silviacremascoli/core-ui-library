<template>
  <div v-if="hasWrapper" :class="wrapperClasses">
    <span v-if="$slots.iconLeft || iconLeft" class="cui-input--icon-left">
      <slot name="iconLeft"><Icon v-if="iconLeft" :icon="iconLeft" :aria-hidden="true" /></slot>
    </span>
    <input
      :type="type"
      :class="inputClasses"
      :aria-label="label"
      :aria-invalid="variant === 'error' ? true : undefined"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readOnly"
      :required="required"
      :value="value"
      @input="onInput"
      v-bind="$attrs"
    />
    <button
      v-if="clearable"
      type="button"
      class="cui-input__clear-btn"
      aria-label="Clear search input"
      @click="onClear"
    >
      &#x2715;
    </button>
    <span v-else-if="$slots.iconRight || iconRight" class="cui-input--icon-right">
      <slot name="iconRight"><Icon v-if="iconRight" :icon="iconRight" :aria-hidden="true" /></slot>
    </span>
  </div>
  <input
    v-else
    :type="type"
    :class="inputClasses"
    :aria-label="label"
    :aria-invalid="variant === 'error' ? true : undefined"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readOnly"
    :required="required"
    :value="value"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Icon from '../Icon/Icon.vue';
import { InputType, InputVariant, InputShape, InputSize } from '../../components/Input/Input.types';
import type { FontAwesomeIconName } from '../../components/Icon/Icon.types';

export default defineComponent({
  name: 'Input',
  props: {
    label: { type: String, default: '' },
    type: {
      type: String as PropType<InputType>,
      default: 'text',
      validator: (value: string) => ['text', 'date', 'time', 'search', 'email', 'password', 'number', 'tel', 'url'].includes(value)
    },
    placeholder: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    readOnly: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    value: { type: String, default: '' },
    variant: {
      type: String as PropType<InputVariant>,
      default: 'default',
      validator: (value: string) => ['default', 'error', 'success'].includes(value)
    },
    shape: {
      type: String as PropType<InputShape>,
      default: 'default',
      validator: (value: string) => ['default', 'rounded', 'pill'].includes(value)
    },
    size: {
      type: String as PropType<InputSize>,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    fullWidth: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    iconLeft: { type: String as PropType<FontAwesomeIconName>, default: '' },
    iconRight: { type: String as PropType<FontAwesomeIconName>, default: '' },
    className: { type: String, default: '' }
  },
  computed: {
    hasWrapper(): boolean {
      return Boolean(this.iconLeft || this.iconRight || this.$slots.iconLeft || this.$slots.iconRight || this.clearable || this.fullWidth);
    },
    inputClasses(): Record<string, boolean> {
      return {
        'cui-input': true,
        [`cui-input--${this.variant}`]: this.variant !== 'default',
        [`cui-input--${this.size}`]: this.size !== 'medium',
        'cui-input--rounded': this.shape === 'rounded',
        'cui-input--pill': this.shape === 'pill',
        'cui-input--full-width': this.fullWidth && !this.hasWrapper,
        'cui-input--has-icon-left': Boolean(this.iconLeft || this.$slots.iconLeft),
        'cui-input--has-icon-right': Boolean(this.iconRight || this.$slots.iconRight || this.clearable),
        [this.className]: !this.hasWrapper && Boolean(this.className)
      };
    },
    wrapperClasses(): Record<string, boolean> {
      return {
        'cui-input-wrapper': true,
        'cui-input-wrapper--full-width': this.fullWidth,
        [this.className]: Boolean(this.className)
      };
    }
  },
  methods: {
    onInput(event: Event) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    },
    onClear() {
      this.$emit('clear');
      this.$emit('input', '');
    }
  }
});
</script>

<style src="../../components/Input/Input.css"></style>
