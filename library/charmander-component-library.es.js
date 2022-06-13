import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, toDisplayString, unref } from "vue";
var ChBadge_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".ch-badge{width:1.25rem;height:1.25rem;padding:var(--ch-badge-spacing, .5rem);border-radius:50%;color:var(--color-content-inverse, white);background-color:var(--color-primary-high, #f97070);display:flex;align-items:center;justify-content:center}\n")();
const _hoisted_1$1 = { class: "ch-badge" };
const _hoisted_2$1 = { class: "value" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ChBadge",
  props: {
    value: null
  },
  setup(__props) {
    const props = __props;
    const formattedValue = computed(() => {
      if (props.value < 10) {
        return `0${props.value}`;
      } else {
        return props.value;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("span", _hoisted_2$1, toDisplayString(unref(formattedValue)), 1)
      ]);
    };
  }
});
var ChDummy_vue_vue_type_style_index_0_lang = /* @__PURE__ */ (() => ".ch-dummy{color:red}\n")();
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const _hoisted_1 = { class: "ch-dummy" };
const _hoisted_2 = /* @__PURE__ */ createElementVNode("span", { class: "value" }, "5", -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3);
}
var ChDummy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { _sfc_main$1 as ChBadge, ChDummy };
