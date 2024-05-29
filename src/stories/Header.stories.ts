import type { Meta, StoryObj } from '@storybook/react';
import Header from "@/components/Header";
// import {} from 'storybook-add-on-next-router'
// import { Header } from './Header';

const meta = {
  title: 'Example/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    // layout: 'fullscreen',
    nextRouter: {
      pathname: "/profile/[id]",
      asPath: "/profile/lifeiscontent",
      query: {
        id: "lifeiscontent",
      },
    },
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {

};

export const LoggedOut: Story = {};
