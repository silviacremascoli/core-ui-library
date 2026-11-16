import type { Meta, StoryObj } from "@storybook/html";
import { inputTemplate } from "../../../twig/Input";
import type { InputArgs } from "../../../components/Input/Input.types";
import { fontAwesomeIconNames } from "../../../components/Icon/Icon.registry";
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
    iconLeft: {
      control: "select",
      options: fontAwesomeIconNames,
      description: "Registered Font Awesome icon name displayed on the left",
    },
    iconRight: {
      control: "select",
      options: fontAwesomeIconNames,
      description: "Registered Font Awesome icon name displayed on the right",
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
  parameters: {
    docs: {
      description: {
        story: 'Standard text input for single-line text entry. The most common input type for names, titles, and general text.',
      },
    },
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
        story: 'Pill-shaped input with fully rounded ends (20px radius). Creates a modern, friendly appearance suitable for search fields and form inputs.',
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
  parameters: {
    docs: {
      description: {
        story: 'Rounded input with slightly rounded corners (10px radius). A balanced, modern alternative to sharp corners.',
      },
    },
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
    iconLeft: "magnifying-glass",
  },
  parameters: {
    docs: {
      description: {
        story: 'Search input with a left magnifying glass icon and an embedded clear (X) button. The clear button appears when there is text to remove and provides one-click clearing.',
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
        story: 'Validation error state (`variant: "error"`), applying danger border and focus glow with `aria-invalid="true"`. Use to indicate invalid user input that needs correction.',
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
  parameters: {
    docs: {
      description: {
        story: 'Success validation state (`variant: "success"`), applying success border and focus glow. Use to confirm valid input or successful validation.',
      },
    },
  },
};

export const Date: Story = {
  args: {
    label: "Date input",
    type: "date",
    placeholder: "Select a date",
  },
  parameters: {
    docs: {
      description: {
        story: 'Date picker input that opens a native browser date picker. Displays in a localized date format and validates input automatically.',
      },
    },
  },
};

export const Time: Story = {
  args: {
    label: "Time input",
    type: "time",
    placeholder: "Select a time",
  },
  parameters: {
    docs: {
      description: {
        story: 'Time picker input that opens a native browser time picker. Allows users to select hours and minutes in a localized format.',
      },
    },
  },
};

export const OceanTheme: Story = {
  globals: { theme: "ocean" },
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
