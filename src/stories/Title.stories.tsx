import type {Meta, StoryObj} from "@storybook/react";
import Title from "@/components/Title";

const meta = {
    title: 'Component/Title',
    component: Title,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '타이틀'
    }
}

/**
 * 기본 heading 컴포넌트의 모든 속성을 가짐
 */
export const Custom: Story = {
    args: {
        children: '색상',
        className: 'text-blue-500'
    }
}
