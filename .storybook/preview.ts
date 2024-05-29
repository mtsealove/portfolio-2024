import type { Preview } from "@storybook/react";
import "@/styles/globals.scss";
import withAppRouterContext from "./withAppRouterContext";

const preview: Preview = {
  decorators: [withAppRouterContext],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
