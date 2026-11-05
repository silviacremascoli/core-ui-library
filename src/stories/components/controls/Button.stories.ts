import type { Meta, StoryObj } from "@storybook/html";
import { buttonTemplate } from "../../../twig/Button";
import type { ButtonArgs } from "../../../components/Button/Button.types";
import "../../../components/Button/Button.css";

// Metadata with strict Meta typing
const meta: Meta<ButtonArgs> = {
  title: "Components/Button",
  tags: ["autodocs"],

  render: (args) => buttonTemplate(args),

  argTypes: {
    label: {
      control: "text",
      description: "Accessible label for the button",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger", "outline", "ghost"],
      description: "Defines the visual style variant",
    },
    shape: {
      control: "radio",
      options: ["default", "pill"],
      description: "Button shape (pill radius matches Portfolio & Finance designs)",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "Controls padding and font-size",
    },
    disabled: {
      control: "boolean",
      description: "Disables button interactions",
    },
    fullWidth: {
      control: "boolean",
      description: "Expands button to fill parent container width",
    },
    loading: {
      control: "boolean",
      description: "Places button in an accessible loading state",
    },
    iconOnly: {
      control: "boolean",
      description: "Renders an icon-only square/circle button",
    },
  },

  // Default values shared across all stories
  args: {
    label: "Click Me",
    variant: "primary",
    shape: "default",
    size: "medium",
    disabled: false,
    fullWidth: false,
    loading: false,
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Primary: Story = {
  args: {
    label: "Primary Action",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Action",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    label: "Outline Action",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    label: "Ghost Action",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete Item",
    variant: "danger",
  },
};

export const Pill: Story = {
  args: {
    label: "Pill Button",
    variant: "primary",
    shape: "pill",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Add Task",
    variant: "primary",
    shape: "pill",
    iconLeft: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z"/></svg>`,
  },
};

export const IconOnly: Story = {
  args: {
    label: "Delete",
    iconOnly: true,
    variant: "ghost",
    ariaLabel: "Delete item",
    iconLeft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Submitting...",
    loading: true,
  },
};

export const SageTheme: Story = {
  render: (args) => `
    <div class="cui-theme--sage" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Explore Portfolio", shape: "pill", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "Contact Me", shape: "pill", variant: "outline" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Sage tonal theme (derived from Portfolio): soft sage primary (`#b6cdbd`), dark purple text (`#272142`), 24px pill radius, and 3px offset focus outline.",
      },
    },
  },
};

export const AmberTheme: Story = {
  render: (args) => `
    <div class="cui-theme--amber" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Add Transaction", shape: "pill", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "Cancel", shape: "pill", variant: "secondary" })}
      ${buttonTemplate({ ...args, label: "Delete", shape: "pill", variant: "danger" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Amber tonal theme (derived from Finance Tracker): warm amber (`#DB9558`), coral hover (`#F2765E`), 20px pill radius, and teal glow focus ring.",
      },
    },
  },
};

export const OceanTheme: Story = {
  render: (args) => `
    <div class="cui-theme--ocean" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Search City", shape: "pill", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "My Location", shape: "pill", variant: "outline" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Ocean tonal theme (derived from Weather App): slate blue (`#56899d`), terracotta interaction accents, and dual focus ring.",
      },
    },
  },
};

export const MidnightTheme: Story = {
  render: (args) => `
    <div class="cui-theme--midnight" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Get In Touch", shape: "pill", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "View Projects", shape: "pill", variant: "secondary" })}
      ${buttonTemplate({ ...args, label: "Resume", shape: "pill", variant: "outline" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Midnight tonal theme (derived from Prototype Portfolio): midnight navy (`#24263b`), deep slate (`#1f2235`), electric coral primary action (`#ff4a57`), and glowing coral focus ring.",
      },
    },
  },
};

export const Accessibility: Story = {
  args: { label: "Submit Form" },
  parameters: {
    docs: {
      description: {
        story: "Keyboard navigation: press Tab to focus the button — a visible focus ring appears respecting the active theme offset and width (WCAG 2.4.7 Focus Visible). Buttons use native `<button>` semantics with Enter and Space activation (WCAG 4.1.2 Name, Role, Value).",
      },
    },
  },
};