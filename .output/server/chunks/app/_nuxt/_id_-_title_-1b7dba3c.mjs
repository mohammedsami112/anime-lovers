import { _ as _export_sfc, u as useRoute, f as useCategoriesStore, e as useRuntimeConfig, a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "not-found d-flex flex-column align-center justify-center" }, _attrs))} data-v-aa4302bf>`);
  _push(ssrRenderComponent(_component_font_awesome_icon, {
    icon: "fa-solid fa-triangle-exclamation",
    style: { "font-size": "103px", "margin-bottom": "20px" },
    class: "text-primary"
  }, null, _parent));
  _push(`<h4 data-v-aa4302bf>\u0644\u0627 \u064A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0639\u0631\u0636\u0647\u0627</h4></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/shared/notFound.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-aa4302bf"]]);
const _sfc_main = {
  __name: "[id]-[title]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const categoriesStore = useCategoriesStore();
    categoriesStore.getOneCategory(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_SharedNotFound = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "category-content" }, _attrs))} data-v-4a27b170>`);
      if (unref(categoriesStore).current.data && unref(categoriesStore).current.data.length > 0) {
        _push(ssrRenderComponent(_component_v_container, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_v_row, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(categoriesStore).current.data, (anime) => {
                      _push3(ssrRenderComponent(_component_v_col, {
                        class: "mt-3",
                        cols: "12",
                        lg: "3",
                        md: "4",
                        sm: "6",
                        key: anime.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_NuxtLink, {
                              to: "/anime/" + anime.id + "-" + anime.slug
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_v_card, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_v_img, {
                                          src: unref(config).public.backendURL + "/storage/thumbnails/" + anime.thumbnail,
                                          cover: "",
                                          height: "200px"
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_v_card_title, { class: "text-center" }, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`${ssrInterpolate(anime.title)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString(anime.title), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_v_img, {
                                            src: unref(config).public.backendURL + "/storage/thumbnails/" + anime.thumbnail,
                                            cover: "",
                                            height: "200px"
                                          }, null, 8, ["src"]),
                                          createVNode(_component_v_card_title, { class: "text-center" }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(anime.title), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_v_card, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_img, {
                                          src: unref(config).public.backendURL + "/storage/thumbnails/" + anime.thumbnail,
                                          cover: "",
                                          height: "200px"
                                        }, null, 8, ["src"]),
                                        createVNode(_component_v_card_title, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(anime.title), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_NuxtLink, {
                                to: "/anime/" + anime.id + "-" + anime.slug
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_card, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_img, {
                                        src: unref(config).public.backendURL + "/storage/thumbnails/" + anime.thumbnail,
                                        cover: "",
                                        height: "200px"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_card_title, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(anime.title), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesStore).current.data, (anime) => {
                        return openBlock(), createBlock(_component_v_col, {
                          class: "mt-3",
                          cols: "12",
                          lg: "3",
                          md: "4",
                          sm: "6",
                          key: anime.id
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_NuxtLink, {
                              to: "/anime/" + anime.id + "-" + anime.slug
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: unref(config).public.backendURL + "/storage/thumbnails/" + anime.thumbnail,
                                      cover: "",
                                      height: "200px"
                                    }, null, 8, ["src"]),
                                    createVNode(_component_v_card_title, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(anime.title), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_v_row, null, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(categoriesStore).current.data, (anime) => {
                      return openBlock(), createBlock(_component_v_col, {
                        class: "mt-3",
                        cols: "12",
                        lg: "3",
                        md: "4",
                        sm: "6",
                        key: anime.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/anime/" + anime.id + "-" + anime.slug
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: unref(config).public.backendURL + "/storage/thumbnails/" + anime.thumbnail,
                                    cover: "",
                                    height: "200px"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_v_card_title, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(anime.title), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_SharedNotFound, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category/[id]-[title].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id___title_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4a27b170"]]);

export { _id___title_ as default };
//# sourceMappingURL=_id_-_title_-1b7dba3c.mjs.map
