import type { Meta, StoryObj } from "@storybook/html";
import { testButtonAdapters } from "./Button.adapters.interactions";
import { testButtonKeyboard, testButtonLink, testButtonShapes, testIconOnlyButton, testUnavailableButton } from "./Button.interactions";
import { buttonTemplate } from "../../../twig/Button";
import type { ButtonArgs } from "../../../components/Button/Button.types";
import { fontAwesomeIconNames } from "../../../components/Icon/Icon.registry";
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
      control: "select",
      options: fontAwesomeIconNames,
      description: "Registered Font Awesome icon name",
    },
    iconRight: {
      control: "select",
      options: fontAwesomeIconNames,
      description: "Registered Font Awesome icon name",
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
    iconSize: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Size of the icon, independent of button size",
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
    iconSize: undefined,
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
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons are used for the main call-to-action on a page. They use the theme primary color with high contrast text for maximum visibility.',
      },
    },
  },
};

export const Outline: Story = {
  args: {
    label: "View details",
    variant: "outline",
  },
  parameters: {
    docs: {
      description: {
        story: 'Outline buttons have a transparent background with a border. They are ideal for secondary actions that need to be visible but less prominent than primary buttons.',
      },
    },
  },
};

export const Link: Story = {
  args: {
    label: "View documentation",
    href: "/docs",
    variant: "outline",
  },
  play: ({ canvasElement }) => testButtonLink(canvasElement),
  parameters: {
    docs: {
      description: {
        story: 'Renders as an anchor tag for navigation. Use when the button should link to another page or external URL. Maintains button styling while providing semantic link behavior.',
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    label: "More options",
    variant: "ghost",
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost buttons have no background or border, showing only the text. Perfect for toolbar actions, context menus, or when a minimal appearance is desired.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    label: "Delete item",
    variant: "danger",
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger buttons use the theme danger color for destructive actions like delete, remove, or cancel. Use sparingly to maintain their visual impact.',
      },
    },
  },
};

export const Pill: Story = {
  args: {
    label: "Learn more",
    variant: "primary",
    shape: "pill",
  },
  parameters: {
    docs: {
      description: {
        story: 'Pill-shaped buttons have fully rounded ends (50px radius). Great for tags, chips, or creating a friendly, modern appearance.',
      },
    },
  },
};

export const Rounded: Story = {
  args: {
    label: "View more",
    variant: "primary",
    shape: "rounded",
  },
  parameters: {
    docs: {
      description: {
        story: 'Rounded buttons have slightly rounded corners (10px radius). A good middle ground between sharp and pill shapes for a balanced, modern look.',
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    label: "Add item",
    variant: "primary",
    shape: "pill",
    iconLeft: "plus",
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can include icons on either side of the label. Use icons to reinforce the action or when space is limited. The icon size automatically matches the button size.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons render as perfect squares or circles (with pill shape). Essential for compact toolbars, mobile interfaces, or when the action is universally understood from the icon alone. Always include an ariaLabel for accessibility.',
      },
    },
  },
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
  parameters: {
    docs: {
      description: {
        story: 'Icon-only links combine the compact icon button style with link semantics. Perfect for social media links, external navigation, or any icon that should navigate when clicked.',
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "Unavailable",
    disabled: true,
  },
  play: ({ canvasElement }) => testUnavailableButton(canvasElement, false),
  parameters: {
    docs: {
      description: {
        story: 'Disabled buttons cannot be clicked and have reduced opacity. Use to indicate actions that are not currently available. The cursor changes to not-allowed and the button is removed from the tab order.',
      },
    },
  },
};

export const Loading: Story = {
  args: {
    label: "Submitting...",
    loading: true,
  },
  play: ({ canvasElement }) => testUnavailableButton(canvasElement, true),
  parameters: {
    docs: {
      description: {
        story: 'Loading state disables the button and reduces opacity to indicate an operation is in progress. Prevents multiple submissions while providing user feedback.',
      },
    },
  },
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

export const CustomIconSize: Story = {
  args: {
    label: "Add Item",
    iconLeft: "plus",
    iconSize: "xs",
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates custom icon size (xs) on a medium button",
      },
    },
  },
};