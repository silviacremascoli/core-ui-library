<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
    @click="onClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ButtonVariant, ButtonSize, ButtonType } from '../../components/Button/Button.types';

export default defineComponent({
  name: 'Button',
  props: {
    label: { type: String, default: '' },
    variant: {
      type: String as PropType<ButtonVariant>,
      default: 'primary',
      validator: (value: string) => ['primary', 'secondary', 'danger'].includes(value)
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
      validator: (value: string) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: { type: Boolean, default: false },
    type: {
      type: String as PropType<ButtonType>,
      default: 'button',
      validator: (value: string) => ['button', 'submit', 'reset'].includes(value)
    }
  },
  computed: {
    buttonClasses() {
      return {
        btn: true,
        [`btn--${this.variant}`]: true,
        [`btn--${this.size}`]: true
      };
    }
  },
  methods: {
    onClick(event: Event) {
      if (!this.disabled) {
        this.$emit('click', event);
      }
    }
  }
});
</script>

<style src="../../components/Button/Button.css"></style>
