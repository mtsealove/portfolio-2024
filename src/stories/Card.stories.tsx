import type {Meta, StoryObj} from "@storybook/react";
import Card from "@/components/Card";
import CardBody from "@/components/Card/CardBody";
import Title from "@/components/Title";

const meta = {
    title: 'Component/Card',
    component: Card,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) =>(
            <div className='p-4 bg-gray-50'>
                <Story/>
            </div>
        )
    ]
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (<CardBody>
            <Title>카드</Title>
        </CardBody>)
    }
}
