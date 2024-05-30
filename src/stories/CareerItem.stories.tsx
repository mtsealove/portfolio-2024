import type {Meta, StoryObj} from "@storybook/react";
import CareerItem from "@/components/CareerItem";
import careers from "@/constants/careers";

const meta = {
    title: 'Item/CareerItem',
    component: CareerItem,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        nextRouter: {
            pathname: '/',
            asPath: "/",
        },
    },
    decorators: [
        (Story) =>(
            <div className='bg-teal-400 p-4 grid grid-cols-2'>
                <Story/>
            </div>
        )
    ],
    args: {},
} satisfies Meta<typeof CareerItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        career: careers[1]
    }
}
