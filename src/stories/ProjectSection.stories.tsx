import type {Meta, StoryObj} from "@storybook/react";
import ProjectSection from "@/components/ProjectSection";

const meta = {
    title: 'Section/Project',
    component: ProjectSection,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof ProjectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 서버 컴포넌트로 API 호출
 */
export const Default: Story = {

}
