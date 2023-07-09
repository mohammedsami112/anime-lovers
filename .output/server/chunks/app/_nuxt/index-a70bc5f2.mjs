import { u as useRoute, e as useRuntimeConfig, a as __nuxt_component_0$2, _ as _export_sfc } from '../server.mjs';
import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { u as useAnimeStore } from './anime-aad7cc7a.mjs';
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
  props: ["anime"],
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const animeStore = useAnimeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "anime-header mb-5",
        style: { "direction": "rtl" }
      }, _attrs))} data-v-8a90b327>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="content d-flex align-center" data-v-8a90b327${_scopeId}><div class="thumbnail ml-5" data-v-8a90b327${_scopeId}><img class="w-100"${ssrRenderAttr("src", unref(config).public.backendURL + "/storage/thumbnails/" + unref(animeStore).current.data.thumbnail)} alt="" data-v-8a90b327${_scopeId}></div><div class="anime-meta mr-5 w-100" data-v-8a90b327${_scopeId}><h2 class="title" data-v-8a90b327${_scopeId}>${ssrInterpolate(unref(animeStore).current.data.title)}</h2><div class="categories mt-5" data-v-8a90b327${_scopeId}><!--[-->`);
            ssrRenderList(unref(animeStore).current.data.anime_categories, (category) => {
              _push2(ssrRenderComponent(_component_NuxtLink, {
                key: category.id,
                to: `/category/${category.category.id}-${category.category.title}`
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_v_btn, {
                      color: "primary",
                      variant: "tonal",
                      class: "ml-3"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-8a90b327${_scopeId3}>${ssrInterpolate(category.category.title)}</span>`);
                        } else {
                          return [
                            createVNode("span", null, toDisplayString(category.category.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        variant: "tonal",
                        class: "ml-3"
                      }, {
                        default: withCtx(() => [
                          createVNode("span", null, toDisplayString(category.category.title), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><p class="description mt-5" data-v-8a90b327${_scopeId}>${ssrInterpolate(unref(animeStore).current.data.description)}</p>`);
            _push2(ssrRenderComponent(_component_v_row, { class: "mt-5 anime-details" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul data-v-8a90b327${_scopeId3}><li data-v-8a90b327${_scopeId3}> \u0627\u0644\u0646\u0648\u0639 : `);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { path: "/anime", query: { type: unref(animeStore).current.data.anime_type.id } }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(animeStore).current.data.anime_type.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(animeStore).current.data.anime_type.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</li><li data-v-8a90b327${_scopeId3}> \u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u0646\u0645\u064A : `);
                        _push4(ssrRenderComponent(_component_NuxtLink, {
                          to: { path: "/anime", query: { status: unref(animeStore).current.data.anime_status.id } }
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(unref(animeStore).current.data.anime_status.title)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(animeStore).current.data.anime_status.title), 1)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</li></ul>`);
                      } else {
                        return [
                          createVNode("ul", null, [
                            createVNode("li", null, [
                              createTextVNode(" \u0627\u0644\u0646\u0648\u0639 : "),
                              createVNode(_component_NuxtLink, {
                                to: { path: "/anime", query: { type: unref(animeStore).current.data.anime_type.id } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(animeStore).current.data.anime_type.title), 1)
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("li", null, [
                              createTextVNode(" \u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u0646\u0645\u064A : "),
                              createVNode(_component_NuxtLink, {
                                to: { path: "/anime", query: { status: unref(animeStore).current.data.anime_status.id } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(animeStore).current.data.anime_status.title), 1)
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<ul data-v-8a90b327${_scopeId3}><li data-v-8a90b327${_scopeId3}> \u0627\u0644\u0645\u0635\u062F\u0631 : <span data-v-8a90b327${_scopeId3}>${ssrInterpolate(unref(animeStore).current.data.source)}</span></li><li data-v-8a90b327${_scopeId3}> \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0639\u0631\u0636 : <span data-v-8a90b327${_scopeId3}>${ssrInterpolate(unref(animeStore).current.data.start_from)}</span></li></ul>`);
                      } else {
                        return [
                          createVNode("ul", null, [
                            createVNode("li", null, [
                              createTextVNode(" \u0627\u0644\u0645\u0635\u062F\u0631 : "),
                              createVNode("span", null, toDisplayString(unref(animeStore).current.data.source), 1)
                            ]),
                            createVNode("li", null, [
                              createTextVNode(" \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0639\u0631\u0636 : "),
                              createVNode("span", null, toDisplayString(unref(animeStore).current.data.start_from), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("ul", null, [
                          createVNode("li", null, [
                            createTextVNode(" \u0627\u0644\u0646\u0648\u0639 : "),
                            createVNode(_component_NuxtLink, {
                              to: { path: "/anime", query: { type: unref(animeStore).current.data.anime_type.id } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(animeStore).current.data.anime_type.title), 1)
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ]),
                          createVNode("li", null, [
                            createTextVNode(" \u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u0646\u0645\u064A : "),
                            createVNode(_component_NuxtLink, {
                              to: { path: "/anime", query: { status: unref(animeStore).current.data.anime_status.id } }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(animeStore).current.data.anime_status.title), 1)
                              ]),
                              _: 1
                            }, 8, ["to"])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("ul", null, [
                          createVNode("li", null, [
                            createTextVNode(" \u0627\u0644\u0645\u0635\u062F\u0631 : "),
                            createVNode("span", null, toDisplayString(unref(animeStore).current.data.source), 1)
                          ]),
                          createVNode("li", null, [
                            createTextVNode(" \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0639\u0631\u0636 : "),
                            createVNode("span", null, toDisplayString(unref(animeStore).current.data.start_from), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="anime-links mt-5" data-v-8a90b327${_scopeId}><a${ssrRenderAttr("href", unref(animeStore).current.data.teaser)} target="_blank" data-v-8a90b327${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "primary",
              flat: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span style="${ssrRenderStyle({ "color": "#fff" })}" data-v-8a90b327${_scopeId2}>\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0634\u0648\u064A\u0642\u064A</span>`);
                } else {
                  return [
                    createVNode("span", { style: { "color": "#fff" } }, "\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0634\u0648\u064A\u0642\u064A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</a><a class="mr-3"${ssrRenderAttr("href", unref(animeStore).current.data.mal_site)} target="_blank" data-v-8a90b327${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_btn, {
              variant: "tonal",
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u0646\u0645\u064A \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 MAL`);
                } else {
                  return [
                    createTextVNode("\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u0646\u0645\u064A \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 MAL")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</a></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "content d-flex align-center" }, [
                createVNode("div", { class: "thumbnail ml-5" }, [
                  createVNode("img", {
                    class: "w-100",
                    src: unref(config).public.backendURL + "/storage/thumbnails/" + unref(animeStore).current.data.thumbnail,
                    alt: ""
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "anime-meta mr-5 w-100" }, [
                  createVNode("h2", { class: "title" }, toDisplayString(unref(animeStore).current.data.title), 1),
                  createVNode("div", { class: "categories mt-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(animeStore).current.data.anime_categories, (category) => {
                      return openBlock(), createBlock(_component_NuxtLink, {
                        key: category.id,
                        to: `/category/${category.category.id}-${category.category.title}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            color: "primary",
                            variant: "tonal",
                            class: "ml-3"
                          }, {
                            default: withCtx(() => [
                              createVNode("span", null, toDisplayString(category.category.title), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1032, ["to"]);
                    }), 128))
                  ]),
                  createVNode("p", { class: "description mt-5" }, toDisplayString(unref(animeStore).current.data.description), 1),
                  createVNode(_component_v_row, { class: "mt-5 anime-details" }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("ul", null, [
                            createVNode("li", null, [
                              createTextVNode(" \u0627\u0644\u0646\u0648\u0639 : "),
                              createVNode(_component_NuxtLink, {
                                to: { path: "/anime", query: { type: unref(animeStore).current.data.anime_type.id } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(animeStore).current.data.anime_type.title), 1)
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ]),
                            createVNode("li", null, [
                              createTextVNode(" \u062D\u0627\u0644\u0629 \u0627\u0644\u0627\u0646\u0645\u064A : "),
                              createVNode(_component_NuxtLink, {
                                to: { path: "/anime", query: { status: unref(animeStore).current.data.anime_status.id } }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(unref(animeStore).current.data.anime_status.title), 1)
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, {
                        cols: "12",
                        md: "6"
                      }, {
                        default: withCtx(() => [
                          createVNode("ul", null, [
                            createVNode("li", null, [
                              createTextVNode(" \u0627\u0644\u0645\u0635\u062F\u0631 : "),
                              createVNode("span", null, toDisplayString(unref(animeStore).current.data.source), 1)
                            ]),
                            createVNode("li", null, [
                              createTextVNode(" \u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0639\u0631\u0636 : "),
                              createVNode("span", null, toDisplayString(unref(animeStore).current.data.start_from), 1)
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "anime-links mt-5" }, [
                    createVNode("a", {
                      href: unref(animeStore).current.data.teaser,
                      target: "_blank"
                    }, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        flat: ""
                      }, {
                        default: withCtx(() => [
                          createVNode("span", { style: { "color": "#fff" } }, "\u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u062A\u0634\u0648\u064A\u0642\u064A")
                        ]),
                        _: 1
                      })
                    ], 8, ["href"]),
                    createVNode("a", {
                      class: "mr-3",
                      href: unref(animeStore).current.data.mal_site,
                      target: "_blank"
                    }, [
                      createVNode(_component_v_btn, {
                        variant: "tonal",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0635\u0641\u062D\u0629 \u0627\u0644\u0623\u0646\u0645\u064A \u0639\u0644\u0649 \u0645\u0648\u0642\u0639 MAL")
                        ]),
                        _: 1
                      })
                    ], 8, ["href"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/anime/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8a90b327"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const route = useRoute();
    const animeStore = useAnimeStore();
    animeStore.getOneAnime(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_animeHeader = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_SharedPagination = __nuxt_component_1;
      _push(`<!--[-->`);
      if (Object.keys(unref(animeStore).current.data).length > 0) {
        _push(ssrRenderComponent(_component_animeHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_container, { class: "mt-5" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column"${_scopeId}><h4 class="section-title w-sm-100"${_scopeId}>\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0627\u0646\u0645\u064A</h4></div>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(animeStore).current.episodes.data, (episode) => {
                    _push3(ssrRenderComponent(_component_v_col, {
                      class: "mt-3",
                      cols: "12",
                      lg: "3",
                      md: "4",
                      sm: "6",
                      key: episode.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_NuxtLink, {
                            to: "/anime/" + episode.anime.id + "-" + episode.anime.slug + "/" + episode.id + "-" + episode.slug
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_v_card, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_v_img, {
                                        src: unref(config).public.backendURL + "/storage/episodes/thumbnails/" + episode.thumbnail,
                                        cover: "",
                                        height: "200px"
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_v_card_title, { class: "text-center" }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(episode.title)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(episode.title), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_v_img, {
                                          src: unref(config).public.backendURL + "/storage/episodes/thumbnails/" + episode.thumbnail,
                                          cover: "",
                                          height: "200px"
                                        }, null, 8, ["src"]),
                                        createVNode(_component_v_card_title, { class: "text-center" }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(episode.title), 1)
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
                                        src: unref(config).public.backendURL + "/storage/episodes/thumbnails/" + episode.thumbnail,
                                        cover: "",
                                        height: "200px"
                                      }, null, 8, ["src"]),
                                      createVNode(_component_v_card_title, { class: "text-center" }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(episode.title), 1)
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
                              to: "/anime/" + episode.anime.id + "-" + episode.anime.slug + "/" + episode.id + "-" + episode.slug
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_card, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_img, {
                                      src: unref(config).public.backendURL + "/storage/episodes/thumbnails/" + episode.thumbnail,
                                      cover: "",
                                      height: "200px"
                                    }, null, 8, ["src"]),
                                    createVNode(_component_v_card_title, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(episode.title), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(animeStore).current.episodes.data, (episode) => {
                      return openBlock(), createBlock(_component_v_col, {
                        class: "mt-3",
                        cols: "12",
                        lg: "3",
                        md: "4",
                        sm: "6",
                        key: episode.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_NuxtLink, {
                            to: "/anime/" + episode.anime.id + "-" + episode.anime.slug + "/" + episode.id + "-" + episode.slug
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_img, {
                                    src: unref(config).public.backendURL + "/storage/episodes/thumbnails/" + episode.thumbnail,
                                    cover: "",
                                    height: "200px"
                                  }, null, 8, ["src"]),
                                  createVNode(_component_v_card_title, { class: "text-center" }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(episode.title), 1)
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
              createVNode("div", { class: "section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column" }, [
                createVNode("h4", { class: "section-title w-sm-100" }, "\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0627\u0646\u0645\u064A")
              ]),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(animeStore).current.episodes.data, (episode) => {
                    return openBlock(), createBlock(_component_v_col, {
                      class: "mt-3",
                      cols: "12",
                      lg: "3",
                      md: "4",
                      sm: "6",
                      key: episode.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_NuxtLink, {
                          to: "/anime/" + episode.anime.id + "-" + episode.anime.slug + "/" + episode.id + "-" + episode.slug
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, {
                                  src: unref(config).public.backendURL + "/storage/episodes/thumbnails/" + episode.thumbnail,
                                  cover: "",
                                  height: "200px"
                                }, null, 8, ["src"]),
                                createVNode(_component_v_card_title, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(episode.title), 1)
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
      _push(ssrRenderComponent(_component_SharedPagination, {
        onChange: ($event) => unref(animeStore).getOneAnime(unref(route).params.id, $event),
        totalPages: unref(animeStore).current.episodes.last_page
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/anime/[id]-[slug]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-a70bc5f2.mjs.map
