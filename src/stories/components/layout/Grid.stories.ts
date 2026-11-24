import type { Meta, StoryObj } from '@storybook/html';
import { rowTemplate, colTemplate } from '../../../twig/Grid';
import { containerTemplate } from '../../../twig/Container';
import type { GridColSize, GridAlignItems, GridJustifyContent } from '../../../components/Grid/Grid.types';
import '../../../components/Grid/Grid.css';
import '../../../components/Container/Container.css';

export interface GridStoryArgs {
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
  colSpan?: GridColSize;
  colLg?: GridColSize;
  container?: boolean;
  alignItems?: GridAlignItems;
  justifyContent?: GridJustifyContent;
}

const demoCol = (label: string, args: GridStoryArgs) =>
  colTemplate({
    content: `<div style="background:var(--cui-color-secondary);padding:var(--cui-spacing-lg);border-radius:var(--cui-border-radius-md)">${label}</div>`,
    span: args.colSpan,
    lg: args.colLg,
  });

const meta: Meta<GridStoryArgs> = {
  title: 'Components/Grid',
  tags: ['autodocs'],
  render: (args) => {
    const row = rowTemplate({
      cols: args.cols,
      alignItems: args.alignItems,
      justifyContent: args.justifyContent,
      content: [1, 2, 3, 4, 5, 6].slice(0, args.cols ?? 3).map((i) => demoCol(`Column ${i}`, args)).join(''),
    });
    return args.container ? containerTemplate({ content: row }) : row;
  },
  argTypes: {
    cols: {
      control: 'select',
      options: [1, 2, 3, 4, 5, 6],
      description: 'Row modifier `.cui-row--cols-N` (1-6): forces N equal-width columns per row regardless of how many children the row has. Omit for auto columns.',
    },
    colSpan: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'],
      description: 'Column span at the base (mobile-first) breakpoint: `.cui-col-N` (1-12 of the 12-column grid) or `auto` for content-based width. Omit for an equal-width `.cui-col`.',
    },
    colLg: {
      control: 'select',
      options: [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'auto'],
      description: 'Column span from the lg breakpoint up (992px+): `.cui-col-lg-N`. Also available for sm/md/xl/xxl, plus `.cui-col--offset-*` and `.cui-col--order-*` variants (see the OffsetOrderAndGutters story).',
    },
    container: {
      control: 'boolean',
      description: 'Wrap the row in a `.cui-container` to preview gutter alignment: the container\'s half-gutter padding lines row content up with the container edge.',
    },
    alignItems: {
      control: 'select',
      options: [undefined, 'start', 'center', 'end', 'stretch', 'baseline'],
      description: 'Cross-axis alignment of the row items: `.cui-row--align-items-*` (align-items).',
    },
    justifyContent: {
      control: 'select',
      options: [undefined, 'start', 'center', 'end', 'between', 'around', 'evenly'],
      description: 'Main-axis distribution of the row items: `.cui-row--justify-content-*` (justify-content).',
    },
  },
  args: {
    cols: 3,
    colSpan: undefined,
    colLg: undefined,
    container: false,
  },
};

export default meta;

type Story = StoryObj<GridStoryArgs>;

export const EqualColumns: Story = {
  args: { cols: 3 },
  parameters: { docs: { description: { story: 'Three equal-width columns (`.cui-col`) inside a `.cui-row`. Columns stack full-width on small screens, matching Bootstrap mobile-first behavior.' } } },
};

export const SizedColumns: Story = {
  args: { cols: 3, colSpan: 4, colLg: 6 },
  parameters: { docs: { description: { story: 'Columns with explicit spans: `.cui-col-4` on mobile, `.cui-col-lg-6` from the lg breakpoint (992px) up.' } } },
};

export const RowCols: Story = {
  args: { cols: 2 },
  parameters: { docs: { description: { story: '`.cui-row--cols-2` forces two equal-width columns per row regardless of how many children the row has.' } } },
};

export const InsideContainer: Story = {
  args: { cols: 3, container: true },
  parameters: { docs: { description: { story: 'A `.cui-row` inside a `.cui-container`: the container\'s half-gutter padding aligns the row content with the container edges, same as Bootstrap.' } } },
};

export const OffsetOrderAndGutters: Story = {
  args: { cols: 0 as never },
  render: () =>
    rowTemplate({
      g: 4,
      gxLg: 2,
      content:
        colTemplate({ content: '<div style="background:var(--cui-color-secondary);padding:var(--cui-spacing-lg);border-radius:var(--cui-border-radius-md)">First in DOM, offset</div>', span: 4, offset: 2, order: 2 }) +
        colTemplate({ content: '<div style="background:var(--cui-color-secondary);padding:var(--cui-spacing-lg);border-radius:var(--cui-border-radius-md)">Second in DOM</div>', span: 4, order: 'first' }) +
        colTemplate({ content: '<div style="background:var(--cui-color-secondary);padding:var(--cui-spacing-lg);border-radius:var(--cui-border-radius-md)">Third in DOM</div>', span: 4, offsetLg: 4 }),
    }),
  parameters: { docs: { description: { story: '`.cui-col--offset-*` margins, `.cui-col--order-*` (incl. `first`/`last`) reordering, and `.cui-row--g-*`/`--gx-*` gutter levels (0-5, Bootstrap scale) — each also available per breakpoint, e.g. `.cui-col--offset-lg-4`, `.cui-row--gx-lg-2`.' } } },
};
