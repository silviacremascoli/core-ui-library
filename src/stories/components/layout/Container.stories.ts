import type { Meta, StoryObj } from '@storybook/html';
import { containerTemplate } from '../../../twig/Container';
import '../../../components/Container/Container.css';

export interface ContainerArgs {
  content?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
  align?: 'left' | 'center' | 'right';
  noPadding?: boolean;
  fluid?: boolean;
  queryable?: boolean;
  as?: string;
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
      description: 'Max-width cap, fluid below it (width: min(100%, cap)) — no breakpoint steps. Caps come from the --cui-container-small/medium/large/full tokens (36/48/62/80rem). Set --cui-container-max-width on the element for a custom width.',
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
      description: 'Fluid container (.cui-container--fluid): no max-width cap, always full available width.',
    },
    queryable: {
      control: 'boolean',
      description: 'Container queries (.cui-container--queryable): makes this a query container named "cui" so descendant grid classes also respond to the container\'s own width via @container rules.',
    },
    as: {
      control: 'text',
      description: 'HTML tag to render instead of div (e.g. section, main).',
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
    queryable: false,
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
export const Queryable: Story = { args: { queryable: true, content: 'Queryable container: grid children respond to this container\'s width via @container rules.' } };