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

  // Render function passes typed args to the Twig template
  render: (args) => buttonTemplate(args),

  // Controls in the Storybook UI panel
  argTypes: {
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

// Additional stories to showcase all framework implementations
export const AllFrameworks: Story = {
  render: (args) => {
    return `
      <div style="display: flex; gap: 16px; align-items: center;">
        <div>
          <h4>Twig</h4>
          ${buttonTemplate(args)}
        </div>
        <div>
          <h4>React</h4>
          <div id="react-button"></div>
        </div>
        <div>
          <h4>Vue</h4>
          <div id="vue-button"></div>
        </div>
      </div>
    `;
  },
  args: {
    label: "Click Me",
    variant: "primary",
    size: "medium",
    disabled: false,
  },
};
