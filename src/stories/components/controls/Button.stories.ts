import type { Meta, StoryObj } from "@storybook/html";
import ButtonTwig, { buttonTemplate } from "../../../twig/Button";
import { Button as ButtonReact } from "../../../react/Button";
import ButtonVue from "../../../vue/Button";
import "../../../components/Button/Button.css";

// 1. Define the TypeScript Interface for your Twig template variables
export interface ButtonArgs {
  label: string;
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

// 2. Define the Metadata with strict Meta typing
const meta: Meta<ButtonArgs> = {
  title: "Components/Button",
  tags: ["autodocs"],

  render: (args) => buttonTemplate(args),

  argTypes: {
    label: {
      control: "text",
      description: "Accessible label for the button (used as aria-label)",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
      description: "Defines the visual style variant",
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
  },

  // Default values shared across all stories
  args: {
    label: "Click Me",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};

export default meta;

// 3. Define typed Story Objects
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

export const Danger: Story = {
  args: {
    label: "Delete Item",
    variant: "danger",
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    disabled: true,
  },
};

export const Accessibility: Story = {
  args: { label: 'Submit' },
  parameters: {
    docs: {
      description: {
        story: 'Keyboard navigation: press Tab to focus the button — a visible focus ring appears (WCAG 2.4.7 Focus Visible). Buttons use native `<button>` semantics, so Enter and Space activate them without extra JavaScript (WCAG 4.1.2 Name, Role, Value).',
      },
    },
  },
};