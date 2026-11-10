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

export const Default: Story = { args: { content: 'Default Label' } };
export const Small: Story = { args: { content: 'Small Label', size: 'small' } };
export const Large: Story = { args: { content: 'Large Label', size: 'large' } };
export const Required: Story = { args: { content: 'Required Field', required: true } };
export const PrimaryColor: Story = { args: { content: 'Primary Color', color: 'primary' } };
export const DangerColor: Story = { args: { content: 'Error Label', color: 'danger' } };
export const Bold: Story = { args: { content: 'Bold Label', weight: 'bold' } };
export const Disabled: Story = { args: { content: 'Disabled Label', disabled: true } };
export const VisuallyHidden: Story = { args: { content: 'Screen-reader only', visuallyHidden: true } };