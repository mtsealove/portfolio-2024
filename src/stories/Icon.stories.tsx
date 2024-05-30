import type { Meta, StoryObj } from '@storybook/react';
import Icon from "@/components/Icon";

const meta = {
    title: 'Component/Icon',
    component: Icon,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // decorators: [withAppRouterContext],
    args: {
        name: 'home'
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;


/**
 * 기본적으로 svg 아이콘 사용
 */
export const Svg: Story =  {
    args: {
        name: 'menu'
    }
}

/**
 * 사이즈 변경 가능(기본값 24)
 */
export const SizeCustom: Story =  {
    args: {
        name: 'react',
        size: 32
    }
}

/**
 * 특정 아이콘은 png 형태로 사용
 */

export const Png: Story = {
    args: {
        name: 'emotion',
        exp: 'png'
    }
};
