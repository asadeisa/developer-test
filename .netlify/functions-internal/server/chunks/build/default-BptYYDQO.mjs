import { a as __nuxt_component_0$1, b as __nuxt_component_2, _ as _export_sfc, n as navigateTo } from './server.mjs';
import { ref, withCtx, createVNode, createTextVNode, toDisplayString, unref, toRef, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrRenderStyle, ssrRenderAttr, ssrRenderTeleport } from 'vue/server-renderer';
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

const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex justify-content-end top-header" }, _attrs))}><ul class="navbar-nav d-flex flex-row mb-lg-0 text-light text-18"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Media Center`);
      } else {
        return [
          createTextVNode("Media Center")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact Us`);
      } else {
        return [
          createTextVNode("Contact Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li><span class="text-bold">AR</span></li></ul></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined;
};
const __nuxt_component_0 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "TopHeader" });
const _sfc_main$1 = {
  __name: "SharedCustomSelect",
  __ssrInlineRender: true,
  props: {
    itemToSelect: { default: () => [] },
    haveSearch: { default: false },
    maxHeight: { default: 200 },
    borderRadius: { default: 0.5 },
    HaveShadow: { default: true },
    ItemToShow: { default: "" },
    IconColor: { default: "#000" },
    emitName: { default: null },
    mainKey: { default: "name" },
    translateX: { default: 0 },
    keyToShow: { default: "name" }
  },
  emits: [`item-is-select`],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const keyOption = ref(props.mainKey);
    ref(props.keyToShow);
    const searchInput = ref(props.ItemToShow);
    const showOption = ref(false);
    const resultOfSelect = ref(props.ItemToShow);
    const originalOptions = toRef(() => props.itemToSelect);
    const options = ref(originalOptions.value);
    watch(originalOptions, (newProps, oldProps) => {
      options.value = originalOptions.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "custom---select-items-wrapper" }, _attrs))}><div class="result-to-show"><p class="text">${ssrInterpolate(unref(resultOfSelect))}</p><div class="icon-down-up">`);
      if (unref(showOption)) {
        _push(`<span class="up"><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.88321 2.88375L4.29321 0.29375C3.90321 -0.0962501 3.27321 -0.0962501 2.88321 0.29375L0.29321 2.88375C-0.33679 3.51375 0.11321 4.59375 1.00321 4.59375L6.18321 4.59375C7.07321 4.59375 7.51321 3.51375 6.88321 2.88375Z" fill="#333"></path></svg></span>`);
      } else {
        _push(`<span class="down"><svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0H0.996477C0.106477 0 -0.333523 1.08 0.296477 1.71Z" fill="#333"></path></svg></span>`);
      }
      _push(`</div></div>`);
      if (unref(showOption)) {
        _push(`<div class="${ssrRenderClass([{ "box-shadow": props.HaveShadow }, "option-holder"])}" style="${ssrRenderStyle({ "--max-h": props.maxHeight, "--border": props.borderRadius, "--translate-x": props.translateX })}">`);
        if (props.haveSearch) {
          _push(`<div class="search-section"><input class="search-input" type="text"${ssrRenderAttr("value", unref(searchInput))}><span class="search-icon"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.6607 21.4638L19.0801 17.9631L18.9962 17.8355C18.8401 17.6801 18.6268 17.5926 18.4041 17.5926C18.1814 17.5926 17.968 17.6801 17.812 17.8355C14.769 20.6272 10.0801 20.7789 6.85495 18.1901C3.6298 15.6012 2.86919 11.0751 5.07754 7.61346C7.28589 4.15179 11.7779 2.82875 15.5746 4.52176C19.3712 6.21477 21.2943 10.3985 20.0685 14.2983C19.9802 14.58 20.0524 14.8864 20.2578 15.102C20.4632 15.3176 20.7707 15.4097 21.0644 15.3436C21.3581 15.2775 21.5934 15.0632 21.6817 14.7814C23.147 10.1535 20.9338 5.17323 16.4738 3.0623C12.0138 0.951366 6.6454 2.34331 3.84146 6.33767C1.03752 10.332 1.63951 15.7301 5.258 19.0398C8.87649 22.3496 14.4256 22.5777 18.3155 19.5767L21.4858 22.6763C21.8133 22.995 22.3426 22.995 22.6701 22.6763C22.9971 22.3531 22.9971 21.8326 22.6701 21.5094L22.6607 21.4638Z" fill="#333"></path></svg></span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="options"><!--[-->`);
        ssrRenderList(unref(options), (item, index) => {
          _push(`<span class="option">`);
          if (typeof item === "object") {
            _push(`<span>${ssrInterpolate(item[unref(keyOption)])}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(item)}</span>`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(showOption)) {
          _push2(`<div class="closed-div-custom-select"></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/CustomSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = [{ id: 1, name: `electronics` }, { id: 2, name: `jewelery` }, { id: 3, name: `men's clothing` }, { id: 4, name: `women's clothing` }];
    const selectCat = (item) => {
      navigateTo(`/category-${item.selected}`);
    };
    const showSmSearch = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TopHeader = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = __nuxt_component_2;
      const _component_SharedCustomSelect = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><header class="container-fluid d-flex flex-column">`);
      _push(ssrRenderComponent(_component_TopHeader, null, null, _parent));
      _push(`<div class="d-flex align-items-center justify-content-between"><nav class="navbar pt-0 navbar-light w-100 align-items-end justify-content-between"><div class="logo cover">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              width: "150",
              height: "140",
              src: "/assets/icons/logo-black.webp",
              preload: "",
              alt: "logo"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                width: "150",
                height: "140",
                src: "/assets/icons/logo-black.webp",
                preload: "",
                alt: "logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="other-logo"><div class="collapse d-flex align-items-center navbar-collapse justify-content-between show">`);
      _push(ssrRenderComponent(_component_SharedCustomSelect, {
        class: "select-cat-sm",
        itemToSelect: categories,
        ItemToShow: "categories",
        haveSearch: false,
        onItemIsSelect: selectCat,
        mainKey: "name"
      }, null, _parent));
      _push(`<ul class="navbar-nav d-flex flex-row list-nav-header mb-2 mb-lg-0 text-20 h-sm-screen"><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<li class="nav-item">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "nav-link text-uppercase text-medium",
          "active-class": "active",
          "aria-current": "page",
          to: `/category-${cat.name}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(cat.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(cat.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul><div class="d-flex align-items-center"><form class="d-flex"><div class="${ssrRenderClass([unref(showSmSearch) == true ? "sm-search" : "", "search d-flex align-items-center"])}"><input class="me-2 form-control search-input" type="search" placeholder="Search" aria-label="Search"><span class="search-icon d-inline-block cover">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "17",
        height: "17",
        preload: "",
        src: "/assets/icons/search.png"
      }, null, _parent));
      _push(`</span><span class="close-sm">X</span></div></form><section class="icons-p-u d-flex"><div class="profile cover">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "20",
        height: "20",
        preload: "",
        src: "/assets/icons/login.png"
      }, null, _parent));
      _push(`</div><div class="favorite cover">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        width: "20",
        height: "20",
        preload: "",
        src: "/assets/icons/heart.png"
      }, null, _parent));
      _push(`</div><div class="cart cover">`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              width: "20",
              height: "20",
              preload: "",
              src: "/assets/icons/cart.png"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                width: "20",
                height: "20",
                preload: "",
                src: "/assets/icons/cart.png"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div></div></div></nav></div></header>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BptYYDQO.mjs.map
