import { u as useRoute, _ as _export_sfc, a as __nuxt_component_0$2 } from '../server.mjs';
import { resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, useSSRContext, mergeProps, createTextVNode, ref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import moment from 'moment';
import { u as useAnimeStore } from './anime-aad7cc7a.mjs';
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

const _sfc_main$2 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const animeStore = useAnimeStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "episode-header d-flex align-center justify-center mb-5" }, _attrs))} data-v-618755ac><div class="content d-flex flex-column align-center justify-center" data-v-618755ac><h2 data-v-618755ac>${ssrInterpolate(unref(animeStore).current.episode.anime.title)} - ${ssrInterpolate(unref(animeStore).current.episode.title)}</h2><div class="episode-meta d-flex align-center justify-space-between w-100 mt-4" data-v-618755ac><span class="report" data-v-618755ac>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact-us" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u0627\u0628\u0644\u0627\u063A \u0639\u0646 \u0645\u0634\u0643\u0644\u0629`);
          } else {
            return [
              createTextVNode("\u0627\u0628\u0644\u0627\u063A \u0639\u0646 \u0645\u0634\u0643\u0644\u0629")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` `);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        class: "ml-2",
        icon: "fa-solid fa-bug"
      }, null, _parent));
      _push(`</span><span class="date" data-v-618755ac>${ssrInterpolate(unref(moment)(unref(animeStore).current.episode.created_at).format("YYYY-MM-DD"))} `);
      _push(ssrRenderComponent(_component_font_awesome_icon, {
        class: "ml-2",
        icon: "fa-solid fa-clock"
      }, null, _parent));
      _push(`</span></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/episodes/header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-618755ac"]]);
const _sfc_main$1 = {
  __name: "player",
  __ssrInlineRender: true,
  setup(__props) {
    const animeStore = useAnimeStore();
    const servers = JSON.parse(animeStore.current.episode.servers);
    const selectedServer = ref();
    const handelSelectedServer = (server) => {
      selectedServer.value = server;
    };
    handelSelectedServer(servers[0]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex" }, _attrs))} data-v-f7df570e><div class="servers" data-v-f7df570e><h5 data-v-f7df570e>\u0627\u062E\u062A\u0631 \u0633\u064A\u0631\u0641\u0631 \u0627\u0644\u0645\u0634\u0627\u0647\u062F\u0629</h5><ul data-v-f7df570e><!--[-->`);
      ssrRenderList(unref(servers), (server, index) => {
        _push(`<li class="${ssrRenderClass({ active: server == unref(selectedServer) })}" data-v-f7df570e>${ssrInterpolate(server.title)}</li>`);
      });
      _push(`<!--]--></ul></div><div class="player" data-v-f7df570e><iframe${ssrRenderAttr("src", unref(selectedServer).embed_url)} allowfullscreen frameborder="0" data-v-f7df570e></iframe></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/episodes/player.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f7df570e"]]);
const _sfc_main = {
  __name: "[id]-[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const animeStore = useAnimeStore();
    console.log(route);
    animeStore.getOneEpisode(route.params.id);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_episodesHeader = __nuxt_component_0;
      const _component_v_container = resolveComponent("v-container");
      const _component_episodesPlayer = __nuxt_component_1;
      _push(`<!--[-->`);
      if (Object.keys(unref(animeStore).current.episode).length > 0) {
        _push(ssrRenderComponent(_component_episodesHeader, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_v_container, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="episode-player w-100 d-flex justify-center align-center"${_scopeId}>`);
            if (Object.keys(unref(animeStore).current.episode).length > 0) {
              _push2(ssrRenderComponent(_component_episodesPlayer, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "episode-player w-100 d-flex justify-center align-center" }, [
                Object.keys(unref(animeStore).current.episode).length > 0 ? (openBlock(), createBlock(_component_episodesPlayer, { key: 0 })) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/anime/[id]-[slug]/[id]-[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-_slug_-876111f3.mjs.map
