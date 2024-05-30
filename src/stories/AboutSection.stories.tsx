import type {Meta, StoryObj} from "@storybook/react";
import AboutSection from "@/components/AboutSection";

const meta = {
    title: 'Section/About',
    component: AboutSection,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}
