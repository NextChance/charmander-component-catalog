import ChBadge from "./ChBadge.vue";

export default {
  title: "Example/ChBadge",
  component: ChBadge,
};

const Template = (args) => ({
  components: { ChBadge },
  setup() {
    return { args };
  },
  template: '<ch-badge v-bind="args"></ch-badge>',
});

export const Default = Template.bind({});
Default.args = {
  value: 5,
};
