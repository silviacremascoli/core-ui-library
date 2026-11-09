import type { Meta, StoryObj } from "@storybook/html";
import { inputTemplate } from "../../../twig/Input";
import type { InputArgs } from "../../../components/Input/Input.types";
import "../../../components/Input/Input.css";

const meta: Meta<InputArgs> = {
  title: "Components/Input",
  tags: ["autodocs"],
  render: (args) => inputTemplate(args),
  argTypes: {
    label: {
      description: "Accessible label for the input (used as aria-label)",
      control: "text",
    },
    type: {
      description: "Input type: text, date, time, search, email, password, number, tel, or url",
      control: { type: "select" },
      options: ["text", "date", "time", "search", "email", "password", "number", "tel", "url"],
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    variant: {
      description: "Validation state variant",
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    shape: {
      description: "Input shape; default follows the active theme",
      control: { type: "radio" },
      options: ["default", "rounded", "pill"],
    },
    size: {
      description: "Input size",
      control: { type: "radio" },
      options: ["small", "medium", "large"],
    },
    fullWidth: {
      description: "Expands input to fill parent container width",
      control: "boolean",
    },
    clearable: {
      description: "Shows an embedded button for clearing the current value",
      control: "boolean",
    },
    disabled: {
      description: "Disables input interactions",
      control: "boolean",
    },
  },

  args: {
    label: "Input label",
    type: "text",
    placeholder: "Enter text...",
    variant: "default",
    shape: "default",
    size: "medium",
    disabled: false,
    fullWidth: false,
    clearable: false,
  },
};

export default meta;

type Story = StoryObj<InputArgs>;

export const Text: Story = {
  args: {
    label: "Text input",
    type: "text",
    placeholder: "Enter text...",
  },
};

export const Pill: Story = {
  args: {
    label: "Name",
    type: "text",
    placeholder: "Enter a value...",
    shape: "pill",
  },
  parameters: {
    docs: {
      description: {
        story: "Pill shape input (20px radius)",
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    label: "Rounded input",
    type: "text",
    placeholder: "Enter text...",
    shape: "rounded",
  },
};

export const SearchWithClear: Story = {
  args: {
    label: "Search term",
    type: "search",
    placeholder: "Search...",
    shape: "pill",
    clearable: true,
    value: "London",
    iconLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  },
  parameters: {
    docs: {
      description: {
        story: "Search input with a left icon and an embedded clear button.",
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email address",
    type: "email",
    placeholder: "user@example.com",
    variant: "error",
    value: "invalid-email",
  },
  parameters: {
    docs: {
      description: {
        story: "Validation error state (`variant: 'error'`), applying danger border and focus glow with `aria-invalid='true'`.",
      },
    },
  },
};

export const SuccessState: Story = {
  args: {
    label: "Username",
    type: "text",
    placeholder: "Choose username",
    variant: "success",
    value: "sample_user",
  },
};

export const Date: Story = {
  args: {
    label: "Date input",
    type: "date",
    placeholder: "Select a date",
  },
};

export const Time: Story = {
  args: {
    label: "Time input",
    type: "time",
    placeholder: "Select a time",
  },
};

export const SageTheme: Story = {
  render: (args) => `
    <div class="cui-theme--sage" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <label style="font-family: var(--cui-font-family); font-size: 0.875rem; color: var(--cui-color-text); font-weight: 500;">Your Message</label>
      ${inputTemplate({ ...args, label: "Subject", placeholder: "Enter a subject...", shape: "pill", fullWidth: true })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Sage theme: inputs inherit dark purple text (`#272142`), muted green borders (`#5c715e`), and a 24px pill radius.",
      },
    },
  },
};

export const AmberTheme: Story = {
  render: (args) => `
    <div class="cui-theme--amber" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <label style="font-family: var(--cui-font-family); font-size: 0.875rem; color: var(--cui-color-text); font-weight: 500;">Add Amount (€)</label>
      ${inputTemplate({ ...args, label: "Amount", placeholder: "0.00", shape: "pill", fullWidth: true })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Amber theme: inputs feature a 20px pill radius and teal focus ring (`#2A6B5C`) with a subtle glow.",
      },
    },
  },
};

export const OceanTheme: Story = {
  render: (args) => `
    <div style="display: flex; flex-wrap: wrap; gap: 16px;">
      <div class="cui-theme--ocean" data-cui-mode="light" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: flex; flex-direction: column; gap: 12px; flex: 1 1 260px;">
        <label style="font-family: var(--cui-font-family); font-size: 0.875rem; color: var(--cui-color-text); font-weight: 500;">Light · Terracotta focus</label>
        ${inputTemplate({ ...args, label: "Light mode", placeholder: "Type something...", shape: "default", clearable: true, fullWidth: true })}
      </div>
      <div class="cui-theme--ocean" data-cui-mode="dark" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: flex; flex-direction: column; gap: 12px; flex: 1 1 260px;">
        <label style="font-family: var(--cui-font-family); font-size: 0.875rem; color: var(--cui-color-text); font-weight: 500;">Dark · Ocean-blue focus</label>
        ${inputTemplate({ ...args, label: "Dark mode", placeholder: "Type something...", shape: "default", clearable: true, fullWidth: true })}
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Ocean theme supports light and dark appearance modes. Tab between the fields to see the terracotta light ring and ocean-blue dark ring.",
      },
    },
  },
};

export const MidnightTheme: Story = {
  render: (args) => `
    <div class="cui-theme--midnight" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <label style="font-family: var(--cui-font-family); font-size: 0.875rem; color: var(--cui-color-text); font-weight: 500;">Your Message</label>
      ${inputTemplate({
        ...args,
        label: "Your Message",
        placeholder: "Write a message...",
        shape: "pill",
        fullWidth: true,
      })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Midnight theme: inputs adapt to a navy background (`#24263b`), white text (`#fefefe`), and glowing electric coral focus ring (`#ff4a57`).",
      },
    },
  },
};

export const Accessibility: Story = {
  args: {
    label: "First name",
    type: "text",
    placeholder: "e.g. Maria",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The input is announced to screen readers through its accessible name (WCAG 4.1.2 Name, Role, Value). " +
          "Press Tab to move focus into the field — a visible focus ring appears respecting the active theme's focus color and offset (WCAG 2.4.7 Focus Visible). " +
          "Native `<input>` semantics ensure complete keyboard operability (WCAG 2.1.1 Keyboard).",
      },
    },
  },
};
