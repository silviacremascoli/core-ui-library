import type { Meta, StoryObj } from '@storybook/html';
import { containerTemplate } from '../../../twig/Container';
import '../../../components/Container/Container.css';

export interface ContainerArgs {
  content?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  align?: 'left' | 'center' | 'right';
  noPadding?: boolean;
  fluid?: boolean;
  className?: string;
}

const meta: Meta<ContainerArgs> = {
  title: 'Components/Container',
  tags: ['autodocs'],
  render: (args) => containerTemplate(args),
  argTypes: {
    content: {
      control: 'text',
      description: 'HTML content rendered inside the container (passed through raw). In framework adapters use the default slot/children instead.',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'full'],
      description: 'Max-width preset, mobile-first like Bootstrap .container-sm/md/lg/xl: fixed-width from its breakpoint up (540/720/960/1140/1320px, from the --cui-container-* tokens) and fluid below it; full runs the whole ladder. Set --cui-container-max-width on the element for a custom width.',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Horizontal alignment of the container block via auto margins (default: center).',
    },
    noPadding: {
      control: 'boolean',
      description: 'Removes the horizontal half-gutter padding (.cui-container--no-padding), so content touches the container edge.',
    },
    fluid: {
      control: 'boolean',
      description: 'Fluid container (.cui-container--fluid): always 100% width with no horizontal padding.',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class(es) appended to the container element.',
    },
  },
  args: {
    content: 'Container content goes here',
    size: 'large',
    align: 'center',
    noPadding: false,
    fluid: false,
    className: 'bg-background-secondary p-md rounded-md',
  },
};

export default meta;

type Story = StoryObj<ContainerArgs>;

export const Default: Story = { args: { content: 'This is a default container with large size and centered alignment.' } };
export const Small: Story = { args: { size: 'small', content: 'Small container' } };
export const Medium: Story = { args: { size: 'medium', content: 'Medium container' } };
export const Full: Story = { args: { size: 'full', content: 'Full width container' } };
export const LeftAligned: Story = { args: { align: 'left', content: 'Left aligned container' } };
export const RightAligned: Story = { args: { align: 'right', content: 'Right aligned container' } };
export const NoPadding: Story = { args: { noPadding: true, content: 'Container without padding' } };
export const Fluid: Story = { args: { fluid: true, content: 'Fluid container (full width)' } };