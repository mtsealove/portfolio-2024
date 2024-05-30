import type { Preview } from "@storybook/react";
import "@/styles/globals.scss";
import withAppRouterContext from "./withAppRouterContext";
import {INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

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
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export default preview;
