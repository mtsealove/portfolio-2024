import type {Meta, StoryObj} from "@storybook/react";
import Landing from "@/components/Landing";

const meta = {
    title: 'Section/Landing',
    component: Landing,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}
