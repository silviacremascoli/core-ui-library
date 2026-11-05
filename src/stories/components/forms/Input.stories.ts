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
      description: "Input shape (pill radius matches Finance and Portfolio designs)",
      control: { type: "radio" },
      options: ["default", "pill"],
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
      description: "Shows an embedded clear button (Weather App design)",
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
    label: "Transaction name",
    type: "text",
    placeholder: "e.g. Groceries, Rent...",
    shape: "pill",
  },
  parameters: {
    docs: {
      description: {
        story: "Pill shape input (20px radius) as seen in the Personal Finance Tracker and To-Do list applications.",
      },
    },
  },
};

export const SearchWithClear: Story = {
  args: {
    label: "City search",
    type: "search",
    placeholder: "Search for a city...",
    shape: "pill",
    clearable: true,
    value: "London",
    iconLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  },
  parameters: {
    docs: {
      description: {
        story: "Search input featuring a left search icon and an embedded clear button (matching React Weather App design).",
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
    value: "silvia_c",
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
      ${inputTemplate({ ...args, label: "Subject", placeholder: "Portfolio inquiry...", shape: "pill", fullWidth: true })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Sage tonal theme (Portfolio): inputs inherit dark purple text (`#272142`), muted green borders (`#5c715e`), and 24px pill radius.",
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
        story: "Amber tonal theme (Finance Tracker): inputs feature 20px pill radius and active teal focus ring (`#2A6B5C`) with subtle glow.",
      },
    },
  },
};

export const OceanTheme: Story = {
  render: (args) => `
    <div class="cui-theme--ocean" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
      <label style="font-family: var(--cui-font-family); font-size: 0.875rem; color: var(--cui-color-text); font-weight: 500;">Search Location</label>
      ${inputTemplate({
        ...args,
        label: "Search Location",
        placeholder: "Type a city...",
        shape: "pill",
        clearable: true,
        fullWidth: true,
        iconLeft: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
      })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Ocean tonal theme (Weather App): inputs display slate-blue tone with terracotta interaction accents and embedded clear button.",
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
        story: "Midnight tonal theme (Prototype Portfolio): inputs adapt to dark navy background (`#24263b`), white text (`#fefefe`), and glowing electric coral focus ring (`#ff4a57`).",
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
