import type { Meta, StoryObj } from '@storybook/react';
import Header from "@/components/Header";
import withAppRouterContext from "../../.storybook/withAppRouterContext";

const meta = {
  title: 'Component/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    nextRouter: {
      pathname: '/',
      asPath: "/",
    },
  },
  decorators: [(Story) =>(
      <div className='min-h-dvh sm:min-h-0'>
        <Story/>
      </div>
  )],
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Home: Story = {
  decorators: [
    withAppRouterContext,
    (Story)=> (
        <div className='bg-black w-full min-h-8'>
          <Story/>
        </div>
    )
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      }
    }
  }
};

export const Other: Story = {

};

