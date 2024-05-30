import type {Meta, StoryObj} from "@storybook/react";
import CareerSection from "@/components/CareerSection";

const meta = {
    title: 'Section/Career',
    component: CareerSection,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof CareerSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

}
