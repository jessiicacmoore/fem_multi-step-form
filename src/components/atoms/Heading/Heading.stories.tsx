import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './index';

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      description: 'Semantic HTML element to render',
    },
    size: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      description: 'Visual style variant to apply',
    },
    children: {
      control: 'text',
      description: 'Content of the heading',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
  args: {
    children: 'Heading Text',
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SemanticH2: Story = {
  name: 'Semantic H2',
  args: { as: 'h2', children: 'Semantically H2, visually H2' },
};

export const VisuallyH3: Story = {
  name: 'Visually H3',
  args: { as: 'h2', size: 'h3', children: 'Semantically H2, visually H3' },
};

export const AllSizes: Story = {
  name: 'All Semantic & Visual Variants',
  parameters: { controls: { disable: true } },
  render: () => (
    <>
      <Heading as="h1" size="h1">
        H1 Heading
      </Heading>
      <Heading as="h2" size="h2">
        H2 Heading
      </Heading>
      <Heading as="h3" size="h3">
        H3 Heading
      </Heading>
      <Heading as="h4" size="h4">
        H4 Heading
      </Heading>
      <Heading as="h5" size="h5">
        H5 Heading
      </Heading>
      <Heading as="h6" size="h6">
        H6 Heading
      </Heading>
    </>
  ),
};
