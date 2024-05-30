import Icon from "@/components/Icon";
import type {Meta, StoryObj} from "@storybook/react";
import {SkillItem} from "@/components/SkillSection";

const meta = {
    title: 'Item/SkillItem',
    component: SkillItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // decorators: [withAppRouterContext],
    args: {
        // name: 'home'
    },
    decorators:[
        (Story ) => (
            <div className='bg-yellow-400 p-4'>
                <div className='max-w-52'>
                    <Story/>
                </div>
            </div>
        )
    ]
} satisfies Meta<typeof SkillItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TypeScript: Story = {
    args: {
        skill: {
            name: 'TypeScript',
            icon: 'typescript'
        }
    }
}

export const JavaScript: Story = {
    args: {
        skill: {
            name: 'JavaScript',
            icon: 'javascript'
        }
    }
}
/**
 * png 아이콘 사용 시
 */
export const Emotion: Story = {
    args: {
        skill: {
            name: 'Emotion',
            icon: 'emotion',
            exp: 'png'
        }
    }
}
