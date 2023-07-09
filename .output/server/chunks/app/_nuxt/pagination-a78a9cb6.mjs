import { useSSRContext, ref, watch, resolveComponent, mergeProps, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';

const _sfc_main = {
  __name: "pagination",
  __ssrInlineRender: true,
  props: {
    totalPages: {
      default: 1
    }
  },
  emits: {
    change: (v) => {
      return v;
    }
  },
  setup(__props, { emit }) {
    const props = __props;
    const page = ref(1);
    watch(
      () => page.value,
      (value) => {
        emit("change", value);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_pagination = resolveComponent("v-pagination");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pagination mb-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_pagination, {
        "active-color": "primary",
        modelValue: unref(page),
        "onUpdate:modelValue": ($event) => isRef(page) ? page.value = $event : null,
        length: props.totalPages,
        "total-visible": 3
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=pagination-a78a9cb6.mjs.map
