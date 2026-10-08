<template>
  <input
    :type="type"
    :class="['input', inputClassName].filter(Boolean).join(' ')"
    :aria-label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :value="value"
    @input="onInput"
    v-bind="$attrs"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { InputType } from '../../components/Input/Input.types';

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
    value: { type: String, default: '' },
    className: { type: String, default: '' }
  },
  methods: {
    onInput(event: Event) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    }
  },
  computed: {
    inputClassName() {
      return this.className;
    }
  }
});
</script>

<style src="../../components/Input/Input.css"></style>
