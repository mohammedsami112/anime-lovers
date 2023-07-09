import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useRoute, f as useCategoriesStore, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_1 } from './pagination-a78a9cb6.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'ufo';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import 'ohash';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main$1 = {
  __name: "header",
  __ssrInlineRender: true,
  props: ["title"],
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-header d-flex align-center justify-center mb-5" }, _attrs))} data-v-0c307a11><h2 data-v-0c307a11>\u0642\u0633\u0645 : ${ssrInterpolate(props.title)}</h2></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/categories/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0c307a11"]]);
const _sfc_main = {
  __name: "category",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const categoriesStore = useCategoriesStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategoriesHeader = __nuxt_component_0;
      const _component_SharedPagination = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CategoriesHeader, {
        title: unref(route).params.title
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_SharedPagination, {
        onChange: ($event) => unref(categoriesStore).getOneCategory(unref(route).params.id, $event),
        totalPages: unref(categoriesStore).current.last_page
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/category.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=category-6a7070e8.mjs.map
