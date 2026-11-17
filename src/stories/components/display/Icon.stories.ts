import type { Meta, StoryObj } from '@storybook/html';
import { iconTemplate } from '../../../twig/Icon';
import type { IconArgs } from '../../../components/Icon/Icon.types';
import { fontAwesomeIconNames } from '../../../components/Icon/Icon.registry';
import '../../../components/Icon/Icon.css';

const meta: Meta<IconArgs> = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  render: (args) => iconTemplate(args),
  argTypes: {
    icon: { 
      control: 'select',
      options: fontAwesomeIconNames,
      description: 'Registered Font Awesome icon name'
    },
    size: { 
      control: 'select', 
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      description: 'Icon size'
    },
    color: { 
      control: 'select', 
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'text', 'text-light', 'inverse', 'current'],
      description: 'Icon color theme'
    },
    asLink: { 
      control: 'boolean',
      description: 'Render icon as a link element'
    },
    href: { 
      control: 'text',
      description: 'Link URL (when asLink is true)'
    },
    target: { 
      control: 'select', 
      options: ['_blank', '_self', '_parent', '_top'],
      description: 'Link target (when asLink is true)'
    },
    rel: { 
      control: 'text',
      description: 'Link rel attribute (when asLink is true)'
    },
    ariaLabel: { 
      control: 'text',
      description: 'Accessibility label for screen readers'
    },
    ariaHidden: { 
      control: 'boolean',
      description: 'Whether the icon is purely decorative (no semantic meaning)'
    },
    className: { 
      control: 'text',
      description: 'Additional CSS class names'
    },
  },
  args: {
    icon: 'plus',
    size: 'md',
    color: 'primary',
    asLink: false,
    href: '#',
    target: '_blank',
    rel: 'noopener noreferrer',
    ariaLabel: 'Icon',
    ariaHidden: false,
    className: '',
  },
};

export default meta;

type Story = StoryObj<IconArgs>;

// Basic Icons
export const Default: Story = { 
  args: { 
    icon: 'plus' 
  },
  parameters: {
    docs: {
      description: {
        story: 'The default icon rendering with medium size and primary color. Use this as the base style for most icon implementations.',
      },
    },
  },
};

// Size Variants
export const ExtraSmall: Story = { 
  args: { 
    icon: 'magnifying-glass',
    size: 'xs' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra small icon size (12px). Ideal for compact UI elements, table cells, or dense layouts where space is limited.',
      },
    },
  },
};

export const Small: Story = { 
  args: { 
    icon: 'check', 
    size: 'sm' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Small icon size (16px). Suitable for secondary actions, inline text, or contexts where a subtle visual presence is needed.',
      },
    },
  },
};

export const Large: Story = { 
  args: { 
    icon: 'xmark', 
    size: 'xl' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Large icon size (32px). Use for primary actions, important buttons, or when icons need to be easily clickable on touch devices.',
      },
    },
  },
};

export const ExtraLarge: Story = { 
  args: { 
    icon: 'heart', 
    size: '2xl' 
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large icon size (48px). Best for prominent display, hero sections, empty states, or as standalone focal points.',
      },
    },
  },
};

export const ThreeXl: Story = {
  args: {
    icon: 'star',
    size: '3xl'
  },
  parameters: {
    docs: {
      description: {
        story: '3XL icon size (64px). Best for hero sections, featured actions, or when maximum visual impact is needed.',
      },
    },
  },
};

// Link Variants
export const AsLink: Story = { 
  args: { 
    icon: 'globe',
    asLink: true, 
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon rendered as a clickable link. Useful for external links, navigation icons, or any icon that should navigate when clicked. Includes proper accessibility attributes.',
      },
    },
  },
};

export const LinkNoAriaLabel: Story = { 
  args: { 
    icon: 'link', 
    asLink: true, 
    href: 'https://example.com',
    ariaHidden: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon link without an accessibility label. Use when the link destination is clear from context or when the icon is purely decorative in a link. Sets aria-hidden to true.',
      },
    },
  },
};

// Accessibility
export const DecorativeIcon: Story = { 
  args: { 
    icon: 'bolt', 
    ariaHidden: true,
    className: 'cui-m-md'
  },
  parameters: {
    docs: {
      description: {
        story: 'A purely decorative icon that conveys no semantic meaning. Sets aria-hidden to true and should not be focused by screen readers. Often used for visual embellishment.',
      },
    },
  },
};

// Icon Style Variants
export const RegularIcon: Story = {
  args: {
    icon: 'envelope-regular',
    size: 'md',
    ariaLabel: 'Outline icon'
  },
  argTypes: {
    icon: {
      control: 'select',
      options: fontAwesomeIconNames.filter(name => name.endsWith('-regular')),
      description: 'Regular (outline) Font Awesome icon names',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Regular (outline) icons use the `-regular` suffix. These are perfect for secondary actions, unselected states, or outline styling. Try other regular icons like `user-regular`, `heart-regular`, or `star-regular`.',
      },
    },
  },
};
