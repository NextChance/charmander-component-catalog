import ChButton from "./ChButton.vue";

export default {
  title: "Example/ChButton",
  component: ChButton,
};

const Template = (args) => ({
  components: { ChButton },
  setup() {
    return { args };
  },
  template: '<ch-button v-bind="args"> ch-button </ch-button>',
});

export const Primary = Template.bind({});
Primary.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "tertiary",
};
