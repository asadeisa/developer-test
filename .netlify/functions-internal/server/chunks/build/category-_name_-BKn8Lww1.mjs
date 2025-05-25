import { c as useRoute, a as __nuxt_component_0$1, b as __nuxt_component_2 } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
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
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    product: {},
    showOldPrice: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    function clipTitle(text) {
      let arrayTitle = text.split("");
      let result = text;
      if (arrayTitle.length > 30) {
        arrayTitle = arrayTitle.slice(0, 30);
        arrayTitle.push(...[".", ".", "."]);
        result = arrayTitle.join("");
      }
      return result;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "card" }, _attrs))}><div class="cover card-image">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: `product-${props.product.id}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              width: "335",
              loading: "lazy",
              src: props.product.image
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                width: "335",
                loading: "lazy",
                src: props.product.image
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass(props.showOldPrice ? "" : "px-3")}"><p class="text-center text-regular text-16">${ssrInterpolate(clipTitle(props.product.title))}</p><p class="${ssrRenderClass([props.showOldPrice ? "justify-content-center" : "justify-content-start", "text-center text-medium text-16 d-flex gap-2"])}"><span class="text-medium">ADE</span>`);
      if (props.showOldPrice) {
        _push(`<span class="old-price text-medium">1000</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="price text-medium">${ssrInterpolate(props.product.price)}</span></p></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/Card.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const __nuxt_component_0 = Object.assign(_sfc_main$1, { __name: "SharedCard" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "category-[name]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { name } = useRoute().params;
    const { data: products } = ([__temp, __restore] = withAsyncContext(() => http(`products/category/${name}`)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SharedCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid category-page" }, _attrs))}><div class="padding-div-1"></div><div class="padding-div-1"></div><h3 class="text-25 text-bold">${ssrInterpolate((_a = unref(products)) == null ? undefined : _a.length)} results of ${ssrInterpolate(unref(name))}</h3><div class="padding-div-1"></div><div class="d-flex flex-wrap product-wrapper"><!--[-->`);
      ssrRenderList(unref(products), (product) => {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_SharedCard, {
          product,
          "show-old-price": true
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="padding-div-1"></div><div class="padding-div-1"></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/category-[name].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=category-_name_-BKn8Lww1.mjs.map
