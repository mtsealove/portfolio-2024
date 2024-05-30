import type {Meta, StoryObj} from "@storybook/react";
import AboutSection from "@/components/AboutSection";
import Education from "@/components/Education";

const meta = {
    title: 'Section/Education',
    component: Education,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Education>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}
