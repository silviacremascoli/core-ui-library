import type { Meta, StoryObj } from '@storybook/html';
import { labelTemplate } from '../../../twig/Label';
import '../../../components/Label/Label.css';

export interface LabelArgs {
  content?: string;
  htmlFor?: string;
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'medium' | 'bold' | 'strong';
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'text' | 'text-light' | 'inverse';
  required?: boolean;
  disabled?: boolean;
  visuallyHidden?: boolean;
  className?: string;
}

const meta: Meta<LabelArgs> = {
  title: 'Components/Label',
  tags: ['autodocs'],
  render: (args) => labelTemplate(args),
  argTypes: {
    content: { control: 'text', description: 'Text displayed by the label' },
    htmlFor: { control: 'text', description: 'HTML id of the associated form element' },
    size: { control: 'select', options: ['small', 'medium', 'large'], description: 'Label text size' },
    weight: { control: 'select', options: ['normal', 'medium', 'bold', 'strong'], description: 'Label text weight' },
    color: { 
      control: 'select', 
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'text', 'text-light', 'inverse'],
      description: 'Label text color',
    },
    required: { control: 'boolean', description: 'Shows a required-field asterisk' },
    disabled: { control: 'boolean', description: 'Styles the label as disabled' },
    visuallyHidden: { control: 'boolean', description: 'Hides label visually (screen-reader only)' },
    className: { control: 'text', description: 'Additional CSS classes for the label' },
  },
  args: {
    content: 'Label',
    htmlFor: 'form-input',
    size: 'medium',
    weight: 'normal',
    color: 'text',
    required: false,
    disabled: false,
    visuallyHidden: false,
    className: 'm-md block',
  },
};

export default meta;

type Story = StoryObj<LabelArgs>;

export const Default: Story = {
  args: { content: 'Default Label' },
  parameters: {
    docs: {
      description: {
        story: 'Default label with medium size, normal weight, and text color. The standard label for most form fields.',
      },
    },
  },
};

export const Small: Story = {
  args: { content: 'Small Label', size: 'small' },
  parameters: {
    docs: {
      description: {
        story: 'Small label for compact forms or secondary information. Use when space is limited or for less important field labels.',
      },
    },
  },
};

export const Large: Story = {
  args: { content: 'Large Label', size: 'large' },
  parameters: {
    docs: {
      description: {
        story: 'Large label for prominent form sections or important fields that need more visual weight.',
      },
    },
  },
};

export const Required: Story = {
  args: { content: 'Required Field', required: true },
  parameters: {
    docs: {
      description: {
        story: 'Label with a required field indicator (asterisk). Automatically sets aria-required="true" on the associated input and visually indicates the field is mandatory.',
      },
    },
  },
};

export const PrimaryColor: Story = {
  args: { content: 'Primary Color', color: 'primary' },
  parameters: {
    docs: {
      description: {
        story: 'Label with primary theme color. Use for important fields, section headers, or to draw attention to specific form elements.',
      },
    },
  },
};

export const DangerColor: Story = {
  args: { content: 'Error Label', color: 'danger' },
  parameters: {
    docs: {
      description: {
        story: 'Label with danger color for error states or critical fields. Often used alongside error validation messages.',
      },
    },
  },
};

export const Bold: Story = {
  args: { content: 'Bold Label', weight: 'bold' },
  parameters: {
    docs: {
      description: {
        story: 'Label with bold weight for emphasis. Use for section headers, important field names, or when the label needs to stand out.',
      },
    },
  },
};

export const Disabled: Story = {
  args: { content: 'Disabled Label', disabled: true },
  parameters: {
    docs: {
      description: {
        story: 'Disabled label with reduced opacity. Use alongside disabled inputs to indicate the associated field is not currently editable.',
      },
    },
  },
};

export const VisuallyHidden: Story = {
  args: { content: 'Screen-reader only', visuallyHidden: true },
  parameters: {
    docs: {
      description: {
        story: 'Visually hidden label that remains accessible to screen readers. Use for form fields that need an accessible label but where visual display would be redundant or clutter the UI.',
      },
    },
  },
};