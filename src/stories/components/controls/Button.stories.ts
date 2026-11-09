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
    href: {
      control: "text",
      description: "When provided, renders a link instead of an action button",
    },
    variant: {
      control: "select",
      options: ["primary", "danger", "outline", "ghost"],
      description: "Defines the visual style variant",
    },
    shape: {
      control: "radio",
      options: ["default", "rounded", "pill"],
      description: "Button shape; default follows the active theme",
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
    label: "Save changes",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    label: "View details",
    variant: "outline",
  },
};

export const Link: Story = {
  args: {
    label: "View documentation",
    href: "/docs",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    label: "More options",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    label: "Delete item",
    variant: "danger",
  },
};

export const Pill: Story = {
  args: {
    label: "Learn more",
    variant: "primary",
    shape: "pill",
  },
};

export const Rounded: Story = {
  args: {
    label: "View more",
    variant: "primary",
    shape: "rounded",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Add item",
    variant: "primary",
    shape: "pill",
    iconLeft: `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 2a.75.75 0 0 1 .75.75v4.5h4.5a.75.75 0 0 1 0 1.5h-4.5v4.5a.75.75 0 0 1-1.5 0v-4.5h-4.5a.75.75 0 0 1 0-1.5h4.5v-4.5A.75.75 0 0 1 8 2z"/></svg>`,
  },
};

export const IconOnly: Story = {
  args: {
    label: "Add item",
    iconOnly: true,
    variant: "primary",
    ariaLabel: "Add transaction item",
    iconLeft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>`,
  },
};

export const IconOnlyLink: Story = {
  args: {
    label: "Visit profile",
    href: "https://example.com/profile",
    iconOnly: true,
    variant: "outline",
    ariaLabel: "Visit social profile",
    iconLeft: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3h7v7M10 14 21 3"></path><path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"></path></svg>`,
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
      ${buttonTemplate({ ...args, label: "Continue", shape: "pill", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "Learn more", shape: "pill", variant: "outline" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Sage theme: Poppins buttons use 15px by 30px padding, a 24px radius, a sage wipe-fill hover, and a 3px plum focus outline.",
      },
    },
  },
};

export const AmberTheme: Story = {
  render: (args) => `
    <div class="cui-theme--amber" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Save changes", shape: "pill", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "Cancel", shape: "pill", variant: "outline" })}
      ${buttonTemplate({ ...args, label: "Delete item", shape: "pill", variant: "danger" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Amber theme: warm orange (`#DB9558`), coral hover (`#F2765E`), 20px pill radius, and teal glow focus ring.",
      },
    },
  },
};

export const OceanTheme: Story = {
  render: (args) => `
    <div class="cui-theme--ocean" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Primary action", shape: "default", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "Cancel", shape: "default", variant: "outline" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Ocean theme: compact light buttons use a 6px radius, warm hover surface, and dual terracotta focus ring.",
      },
    },
  },
};

export const MidnightTheme: Story = {
  render: (args) => `
    <div class="cui-theme--midnight" style="padding: 24px; background: var(--cui-color-background); border-radius: 12px; display: inline-flex; gap: 12px; align-items: center;">
      ${buttonTemplate({ ...args, label: "Save changes", shape: "default", variant: "primary" })}
      ${buttonTemplate({ ...args, label: "Cancel", shape: "default", variant: "outline" })}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: "Midnight theme: navy (`#24263b`), deep slate (`#1f2235`), electric coral primary (`#ff4a57`), and glowing coral focus ring.",
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