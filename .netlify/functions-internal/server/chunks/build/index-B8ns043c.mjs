import { _ as __nuxt_component_2 } from './client-only-BTgv9BoC.mjs';
import { u as useHead, b as __nuxt_component_2$1, d as __nuxt_component_2$1$1 } from './server.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { h as http } from './http-BoeQKQ-U.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'nitropack/dist/runtime/plugin';
import 'packrup';
import 'node:fs';
import 'node:path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BodyContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { data: offers } = http(`products?limit=10`, { lazy: true, deep: false });
    const { data: newArrival } = http(`products/category/women's clothing?limit=10`, { lazy: true, deep: false });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_2$1;
      _push(`<!--[--><section class="offers container-fluid"><h3 class="text-uppercase text-30 mb-3 text-bold">special offers</h3>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</section><div class="padding-div-1"></div><section class="all-page-image cover">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        loading: "lazy",
        src: "/assets/images/col.jpg",
        width: "1500",
        height: "620"
      }, null, _parent));
      _push(`</section><section class="offers container-fluid"><h3 class="text-uppercase text-30 mb-3 text-bold">new Arrival</h3>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</section><section class="be-a-member d-flex justify-content-center"><h2 class="text-30 text-uppercase mb-0">become a member &amp; get 15% off </h2><button class="btn btn-primary text-uppercase text-bold text-18"><span>sign up for free</span><svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#fff" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path></svg></button></section><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BodyContent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "BodyContent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const images = ["/assets/images/Header.webp", "/assets/images/Header.webp", "/assets/images/Header.webp"];
    useHead({
      link: images.map((src) => ({
        rel: "preload",
        as: "image",
        href: src
      }))
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_2;
      const _component_NuxtImg = __nuxt_component_2$1;
      const _component_DelayHydration = __nuxt_component_2$1$1;
      const _component_BodyContent = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home-page wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        placeholder: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_NuxtImg, {
              class: "image-place-holder",
              src: images[0],
              width: "100vw",
              height: "684"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="padding-div-1"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode(_component_NuxtImg, {
                  class: "image-place-holder",
                  src: images[0],
                  width: "100vw",
                  height: "684"
                }, null, 8, ["src"])
              ]),
              createVNode("div", { class: "padding-div-1" })
            ];
          }
        })
      }, _parent));
      _push(`<div class="all-page-image cover">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/assets/images/Jewelry.webp",
        width: "1500",
        height: "620",
        loading: "lazy"
      }, null, _parent));
      _push(`<div class="button-all-page-image"><button class="btn btn-light d-flex align-items-center gap-3"><span class="text-18 text-uppercase text-medium"> see more</span><svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="var(--dark)" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path></svg></button></div></div>`);
      _push(ssrRenderComponent(_component_DelayHydration, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BodyContent, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BodyContent)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B8ns043c.mjs.map
