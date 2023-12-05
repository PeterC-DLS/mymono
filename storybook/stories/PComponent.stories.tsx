import type { StoryObj } from '@storybook/react';
import { useState } from 'react';

import { PComponent, PComponentProps } from '@peter/components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: PComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // text: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Static: Story = {
  args: {
    text: "Hello world",
  },
};

const ComponentWithHooks = () => {
    const [count, setCount] = useState<number>(0);
    const props: PComponentProps = {
        text: `Count is ${count}`,
        handleClick: () => setCount((c: number) => c+1)
    }
    return <PComponent {...props} />;
};


export const Dynamic: StoryObj<typeof ComponentWithHooks> = {
    render: () => <ComponentWithHooks />,
};
