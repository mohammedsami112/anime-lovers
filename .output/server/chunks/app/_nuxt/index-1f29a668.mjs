import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { d as defineStore, _ as _export_sfc, g as useHead, b as useMyFetch, e as useRuntimeConfig, a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, resolveComponent, withCtx, createVNode, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, mergeProps, createTextVNode } from 'vue';
import { Autoplay, FreeMode, Navigation } from 'swiper';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/vue-fontawesome';
import '@fortawesome/free-solid-svg-icons';

const useHomeStore = defineStore("home", {
  state: () => ({
    slider: [],
    anime: [],
    top: [],
    episodes: []
  }),
  actions: {
    async getHomePage() {
      const { data: homePageData } = await useMyFetch("/home");
      this.slider = homePageData.value.data.slider;
      this.anime = homePageData.value.data.latest_anime;
      this.top = homePageData.value.data.top_anime;
      this.episodes = homePageData.value.data.latest_episodes;
    }
  }
});
const _sfc_main$5 = {
  __name: "slider",
  __ssrInlineRender: true,
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      _push(ssrRenderComponent(_component_v_container, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Swiper, {
              modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperFreeMode" in _ctx ? _ctx.SwiperFreeMode : unref(FreeMode), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
              "slides-per-view": 1,
              spaceBetween: 30,
              loop: true,
              navigation: "",
              effect: "creative",
              autoplay: {
                delay: 1e3,
                disableOnInteraction: true
              },
              "creative-effect": {
                prev: {
                  shadow: false,
                  translate: ["-20%", 0, -1]
                },
                next: {
                  translate: ["100%", 0, 0]
                }
              },
              breakpoints: {
                "640": {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                "768": {
                  slidesPerView: 3,
                  spaceBetween: 40
                },
                "1024": {
                  slidesPerView: 3,
                  spaceBetween: 50
                }
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(homeStore).slider, (slider) => {
                    _push3(ssrRenderComponent(_component_SwiperSlide, {
                      key: slider.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<img${ssrRenderAttr("src", unref(config).public.backendURL + "/storage/thumbnails/" + slider.thumbnail)} alt=""${_scopeId3}><div class="content"${_scopeId3}><div class="content-item"${_scopeId3}><h3${_scopeId3}>${ssrInterpolate(slider.title)}</h3></div></div>`);
                        } else {
                          return [
                            createVNode("img", {
                              src: unref(config).public.backendURL + "/storage/thumbnails/" + slider.thumbnail,
                              alt: ""
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "content" }, [
                              createVNode("div", { class: "content-item" }, [
                                createVNode("h3", null, toDisplayString(slider.title), 1)
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).slider, (slider) => {
                      return openBlock(), createBlock(_component_SwiperSlide, {
                        key: slider.id
                      }, {
                        default: withCtx(() => [
                          createVNode("img", {
                            src: unref(config).public.backendURL + "/storage/thumbnails/" + slider.thumbnail,
                            alt: ""
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "content" }, [
                            createVNode("div", { class: "content-item" }, [
                              createVNode("h3", null, toDisplayString(slider.title), 1)
                            ])
                          ])
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
              createVNode(_component_Swiper, {
                modules: ["SwiperAutoplay" in _ctx ? _ctx.SwiperAutoplay : unref(Autoplay), "SwiperFreeMode" in _ctx ? _ctx.SwiperFreeMode : unref(FreeMode), "SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
                "slides-per-view": 1,
                spaceBetween: 30,
                loop: true,
                navigation: "",
                effect: "creative",
                autoplay: {
                  delay: 1e3,
                  disableOnInteraction: true
                },
                "creative-effect": {
                  prev: {
                    shadow: false,
                    translate: ["-20%", 0, -1]
                  },
                  next: {
                    translate: ["100%", 0, 0]
                  }
                },
                breakpoints: {
                  "640": {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  "768": {
                    slidesPerView: 3,
                    spaceBetween: 40
                  },
                  "1024": {
                    slidesPerView: 3,
                    spaceBetween: 50
                  }
                }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).slider, (slider) => {
                    return openBlock(), createBlock(_component_SwiperSlide, {
                      key: slider.id
                    }, {
                      default: withCtx(() => [
                        createVNode("img", {
                          src: unref(config).public.backendURL + "/storage/thumbnails/" + slider.thumbnail,
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "content" }, [
                          createVNode("div", { class: "content-item" }, [
                            createVNode("h3", null, toDisplayString(slider.title), 1)
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modules"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/slider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$5;
const _imports_0 = "" + buildAssetsURL("test.657728a3.jpg");
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_col, mergeProps({
    class: "mt-3 ad",
    cols: "12",
    lg: "4",
    md: "4",
    sm: "6"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="" data-v-d9ac993c${_scopeId}>`);
      } else {
        return [
          createVNode("img", {
            src: _imports_0,
            alt: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/ad.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d9ac993c"]]);
const _sfc_main$3 = {
  __name: "anime",
  __ssrInlineRender: true,
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "latest-anime" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column"${_scopeId}><h4 class="section-title w-sm-100"${_scopeId}>\u0622\u062E\u0631 \u0627\u0644\u0623\u0646\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u0636\u0627\u0641\u0629</h4>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/anime" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "tonal",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u0646\u0645\u064A\u0627\u062A `);
                      } else {
                        return [
                          createTextVNode(" \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u0646\u0645\u064A\u0627\u062A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      variant: "tonal",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u0646\u0645\u064A\u0627\u062A ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(homeStore).anime, (anime) => {
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).anime, (anime) => {
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
              createVNode("div", { class: "section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column" }, [
                createVNode("h4", { class: "section-title w-sm-100" }, "\u0622\u062E\u0631 \u0627\u0644\u0623\u0646\u0645\u064A\u0627\u062A \u0627\u0644\u0645\u0636\u0627\u0641\u0629"),
                createVNode(_component_NuxtLink, { to: "/anime" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      variant: "tonal",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u062C\u0645\u064A\u0639 \u0627\u0644\u0627\u0646\u0645\u064A\u0627\u062A ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).anime, (anime) => {
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/anime.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "episodes",
  __ssrInlineRender: true,
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "latest-episodes" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column"${_scopeId}><h4 class="section-title w-sm-100"${_scopeId}>\u0622\u062E\u0631 \u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0645\u0636\u0627\u0641\u0629</h4>`);
            _push2(ssrRenderComponent(_component_NuxtLink, { to: "/anime" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "tonal",
                    color: "primary"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0627\u062A `);
                      } else {
                        return [
                          createTextVNode(" \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0627\u062A ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      variant: "tonal",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0627\u062A ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(homeStore).episodes, (episode) => {
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).episodes, (episode) => {
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
                createVNode("h4", { class: "section-title w-sm-100" }, "\u0622\u062E\u0631 \u0627\u0644\u062D\u0644\u0642\u0627\u062A \u0627\u0644\u0645\u0636\u0627\u0641\u0629"),
                createVNode(_component_NuxtLink, { to: "/anime" }, {
                  default: withCtx(() => [
                    createVNode(_component_v_btn, {
                      variant: "tonal",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" \u0627\u0644\u0645\u0632\u064A\u062F \u0645\u0646 \u0627\u0644\u062D\u0644\u0642\u0627\u062A ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).episodes, (episode) => {
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/episodes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "topAnime",
  __ssrInlineRender: true,
  setup(__props) {
    const config = /* @__PURE__ */ useRuntimeConfig();
    const homeStore = useHomeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_v_card = resolveComponent("v-card");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_card_title = resolveComponent("v-card-title");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "top-anime" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column"${_scopeId}><h4 class="section-title w-sm-100"${_scopeId}>\u0627\u0644\u0627\u0639\u0644\u0649 \u0645\u0634\u0627\u0647\u062F\u0629</h4></div>`);
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(homeStore).top, (anime) => {
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
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).top, (anime) => {
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
              createVNode("div", { class: "section-header mb-4 d-flex justify-space-between align-center flex-sm-row flex-column" }, [
                createVNode("h4", { class: "section-title w-sm-100" }, "\u0627\u0644\u0627\u0639\u0644\u0649 \u0645\u0634\u0627\u0647\u062F\u0629")
              ]),
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(homeStore).top, (anime) => {
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
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/home/topAnime.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home"
    });
    const homeStore = useHomeStore();
    homeStore.getHomePage();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_homeSlider = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_v_row = resolveComponent("v-row");
      const _component_homeAd = __nuxt_component_1;
      const _component_homeAnime = __nuxt_component_2;
      const _component_HomeEpisodes = __nuxt_component_3;
      const _component_HomeTopAnime = __nuxt_component_4;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_homeSlider, null, null, _parent));
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, { class: "mb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_homeAd, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_homeAd, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_homeAd, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_homeAd),
                    createVNode(_component_homeAd),
                    createVNode(_component_homeAd)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, { class: "mb-4" }, {
                default: withCtx(() => [
                  createVNode(_component_homeAd),
                  createVNode(_component_homeAd),
                  createVNode(_component_homeAd)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_homeAnime, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeEpisodes, null, null, _parent));
      _push(ssrRenderComponent(_component_HomeTopAnime, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f7319ccb"]]);

export { index as default };
//# sourceMappingURL=index-1f29a668.mjs.map
