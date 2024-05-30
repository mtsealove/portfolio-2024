import type {Meta, StoryObj} from "@storybook/react";
import ProjectItem from "@/components/ProjectItem";

const meta = {
    title: 'Item/ProjectItem',
    component: ProjectItem,
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
            <div className='bg-gray-50 grid grid-cols-3'>
                <Story/>
            </div>
        )
    ],
    args: {},
} satisfies Meta<typeof ProjectItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        project: {
            id: 1,
            thumbnail: 'https://storage.googleapis.com/download/storage/v1/b/hash-portfolio-image/o/1703317783400-%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%8F%C3%A1%C2%85%C2%B3%C3%A1%C2%84%C2%85%C3%A1%C2%85%C2%B5%C3%A1%C2%86%C2%AB%C3%A1%C2%84%C2%89%C3%A1%C2%85%C2%A3%C3%A1%C2%86%C2%BA%202023-12-23%20%C3%A1%C2%84%C2%8B%C3%A1%C2%85%C2%A9%C3%A1%C2%84%C2%92%C3%A1%C2%85%C2%AE%204.49.34.png?generation=1703317784241007&alt=media',
            title: '긱블 공식 홈페이지',
            summary: '긱블 공식 홈페이지',
            startAt: new Date(),
            endAt: new Date(),
            description: '',
            images: [],
        }
    }
}
