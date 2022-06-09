import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";
import { VApp } from "vuetify/components";
import { app } from "@storybook/vue3";

const vuetifyOptionsForStoryBook = {
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  components: {
    VApp: VApp,
  },
};

const vuetify = createVuetify(vuetifyOptionsForStoryBook);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

app.use(vuetify);
