import type { Meta, StoryObj } from '@storybook/html';
import { typographyTemplate } from '../../../twig/Typography';
import type { TypographyArgs } from '../../../components/Typography/Typography.types';
import '../../../components/Typography/Typography.css';

type TypographyStoryArgs = TypographyArgs & { customFontFamily?: string };

const meta: Meta<TypographyStoryArgs> = {
  title: 'Components/Typography',
  tags: ['autodocs'],
  render: ({ customFontFamily, fontFamily, ...args }) => typographyTemplate({
    ...args,
    fontFamily: fontFamily === 'custom' ? customFontFamily : fontFamily,
  }),
  argTypes: {
    content: {
      description: 'Plain text to display. Twig escapes HTML in this value.',
      control: 'text',
    },
    tag: {
      description: 'Semantic HTML element, independent of the visual variant. By default, heading variants use matching headings, body and subtitle variants use p, and caption and overline use span.',
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'blockquote', 'small', 'strong', 'em'],
    },
    variant: { 
      description: 'Visual text style, including size, default weight, line height, and heading spacing. Defaults to body1.',
      control: 'select', 
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'overline'] 
    },
    align: {
      description: 'Aligns text within its element. When omitted, alignment is inherited.',
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    weight: {
      description: 'Overrides the variant\'s font weight using the shared normal, medium, bold, or strong token.',
      control: 'select',
      options: ['normal', 'medium', 'bold', 'strong'],
    },
    fontFamily: {
      description: 'Choose a font available in the active theme or select Custom to enter a CSS font-family stack.',
      control: {
        type: 'select',
        labels: {
          text: 'Poppins (text)',
          heading: 'Poppins (heading)',
          custom: 'Custom',
        },
      },
      options: ['text', 'heading', 'custom'],
    },
    customFontFamily: {
      description: 'Custom CSS font-family value, such as Georgia, serif.',
      control: 'text',
      if: { arg: 'fontFamily', eq: 'custom' },
    },
    color: { 
      description: 'Applies a theme text color. When omitted, color is inherited; check contrast against the background.',
      control: 'select', 
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'info', 'text', 'text-light', 'inverse'] 
    },
    truncate: {
      description: 'Displays overflowing text on one line with an ellipsis. Requires a constrained width and keeps the full text in the DOM.',
      control: 'boolean',
    },
    noWrap: {
      description: 'Keeps text on one line without adding an ellipsis or hiding overflow.',
      control: 'boolean',
    },
    className: {
      description: 'Additional CSS classes applied to the element.',
      control: 'text',
    },
    id: {
      description: 'Unique HTML id for the element, useful for linking or referencing it.',
      control: 'text',
    },
    lang: {
      description: 'Language of the text as a BCP 47 language tag, such as en or fr.',
      control: 'text',
    },
    dir: {
      description: 'Text direction: left-to-right, right-to-left, or automatically determined from the content.',
      control: 'select',
      options: ['ltr', 'rtl', 'auto'],
    },
    ariaLabel: {
      description: 'Sets aria-label to provide an accessible name when the chosen element supports naming.',
      control: 'text',
    },
    ariaDescribedby: {
      description: 'Sets aria-describedby to the space-separated ids of elements that describe this element.',
      control: 'text',
    },
  },
  args: {
    content: 'Hello, World!',
    variant: 'body1',
    align: 'left',
    color: 'text',
    customFontFamily: '',
    truncate: false,
    noWrap: false,
  },
};

export default meta;

type Story = StoryObj<TypographyStoryArgs>;

export const Heading1: Story = { args: { content: 'Heading 1', variant: 'h1' } };
export const Heading2: Story = { args: { content: 'Heading 2', variant: 'h2' } };
export const Heading3: Story = { args: { content: 'Heading 3', variant: 'h3' } };
export const SemanticHeading: Story = { args: { content: 'A second-level heading styled as a first-level heading', variant: 'h1', tag: 'h2' } };
export const BodyText: Story = { args: { content: 'This is a paragraph of body text using the body1 variant.', variant: 'body1' } };
export const Subtitle: Story = { args: { content: 'This is a subtitle', variant: 'subtitle1' } };
export const Caption: Story = { args: { content: 'This is a caption', variant: 'caption' } };
export const PrimaryColor: Story = { args: { content: 'Primary colored text', color: 'primary' } };
export const Centered: Story = { args: { content: 'Centered text', align: 'center' } };
export const BoldText: Story = { args: { content: 'Bold text', weight: 'bold' } };
export const HeadingFont: Story = { args: { content: 'Text using the theme heading font', fontFamily: 'heading' } };
export const CustomFont: Story = { args: { content: 'Text using a custom font stack', fontFamily: 'custom', customFontFamily: 'Georgia, serif' } };
export const SageTheme: Story = {
  args: { content: 'Sage theme heading font', variant: 'h2', fontFamily: 'heading' },
  argTypes: {
    fontFamily: {
      control: { type: 'select', labels: { text: 'Poppins', heading: 'Playfair Display', custom: 'Custom' } },
      options: ['text', 'heading', 'custom'],
    },
  },
  decorators: [(story) => `<div class="cui-theme--sage" style="padding: 24px; background: var(--cui-color-background);">${story()}</div>`],
};
export const AmberTheme: Story = {
  args: { content: 'Amber theme heading font', variant: 'h2', fontFamily: 'heading' },
  argTypes: {
    fontFamily: {
      control: { type: 'select', labels: { text: 'Poppins', heading: 'Poppins', custom: 'Custom' } },
      options: ['text', 'heading', 'custom'],
    },
  },
  decorators: [(story) => `<div class="cui-theme--amber" style="padding: 24px; background: var(--cui-color-background);">${story()}</div>`],
};
export const OceanTheme: Story = {
  args: { content: 'Ocean theme heading font', variant: 'h2', fontFamily: 'heading' },
  argTypes: {
    fontFamily: {
      control: { type: 'select', labels: { text: 'Poppins', heading: 'Poppins', custom: 'Custom' } },
      options: ['text', 'heading', 'custom'],
    },
  },
  decorators: [(story) => `<div class="cui-theme--ocean" style="padding: 24px; background: var(--cui-color-background);">${story()}</div>`],
};
export const MidnightTheme: Story = {
  args: { content: 'Midnight theme heading font', variant: 'h2', fontFamily: 'heading' },
  argTypes: {
    fontFamily: {
      control: { type: 'select', labels: { text: 'Poppins', heading: 'Tektur', custom: 'Custom' } },
      options: ['text', 'heading', 'custom'],
    },
  },
  decorators: [(story) => `<div class="cui-theme--midnight" style="padding: 24px; background: var(--cui-color-background);">${story()}</div>`],
};
export const Truncated: Story = { 
  args: { 
    content: 'This is a very long text that should be truncated with ellipsis when it overflows its container.', 
    truncate: true,
  },
  decorators: [(story) => `<div style="max-width: 16rem">${story()}</div>`],
};