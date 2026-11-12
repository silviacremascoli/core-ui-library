import type { Meta, StoryObj } from "@storybook/html";
import { testButtonAdapters } from "./Button.adapters.interactions";
import { testButtonKeyboard, testButtonLink, testButtonShapes, testIconOnlyButton, testUnavailableButton } from "./Button.interactions";
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
    iconLeft: {
      control: "text",
      description: "Registered Font Awesome name, such as plus or github",
    },
    iconRight: {
      control: "text",
      description: "Registered Font Awesome name, such as arrow-up-right-from-square",
    },
    variant: {
      control: "select",
      options: ["primary", "danger", "outline", "ghost"],
      description: "Defines the visual style variant",
    },
    shape: {
      control: "radio",
      options: ["default", "rounded", "pill"],
      description: "Button shape, consistent across themes",
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
  play: async ({ step }) => {
    await step("Button shapes", testButtonShapes);
    await step("React and Vue adapters", testButtonAdapters);
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
  play: ({ canvasElement }) => testButtonLink(canvasElement),
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
    iconLeft: "plus",
  },
};

export const IconOnly: Story = {
  args: {
    label: "Add item",
    iconOnly: true,
    variant: "primary",
    ariaLabel: "Add transaction item",
    iconLeft: "plus",
  },
  play: ({ canvasElement }) => testIconOnlyButton(canvasElement),
};

export const IconOnlyLink: Story = {
  args: {
    label: "Visit GitHub profile",
    href: "https://github.com/profile",
    iconOnly: true,
    variant: "outline",
    shape: "pill",
    ariaLabel: "Visit GitHub profile",
    iconLeft: "github",
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    disabled: true,
  },
  play: ({ canvasElement }) => testUnavailableButton(canvasElement, false),
};

export const Loading: Story = {
  args: {
    label: "Submitting...",
    loading: true,
  },
  play: ({ canvasElement }) => testUnavailableButton(canvasElement, true),
};

export const Accessibility: Story = {
  args: { label: "Submit Form" },
  play: ({ canvasElement }) => testButtonKeyboard(canvasElement),
  parameters: {
    docs: {
      description: {
        story: "Keyboard navigation: press Tab to focus the button — a visible 2px outline appears with a 3px offset and a color matching the active theme and variant (WCAG 2.4.7 Focus Visible). Buttons use native `<button>` semantics with Enter and Space activation (WCAG 4.1.2 Name, Role, Value).",
      },
    },
  },
};