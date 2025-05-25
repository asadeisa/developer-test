import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderTeleport, ssrRenderClass } from 'vue/server-renderer';
import { defineComponent, ref, withAsyncContext, unref, mergeProps, toRef, watch, useSSRContext } from 'vue';
import { e as useCookie, c as useRoute, b as __nuxt_component_2 } from './server.mjs';
import { _ as __nuxt_component_2$1 } from './client-only-BTgv9BoC.mjs';
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

const _sfc_main$1 = {
  __name: "SharedToaster",
  __ssrInlineRender: true,
  props: {
    config: {
      default: () => {
        return {
          message: "toaster message",
          theme: "info-theme",
          //warning-theme danger
          show: true,
          status: "info"
          //success , error ,warning
        };
      }
    }
  },
  emits: ["close-toaster"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const show = toRef(() => props.config.show);
    watch(show, (newShow, oldShow) => {
      if (show.value == true) {
        emit("close-toaster");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div class="${ssrRenderClass([props.config.show ? "shared-show-toaster" : "", "shared-toaster d-flex items-center justify-content-center"])}"><div class="${ssrRenderClass([props.config.theme, "message-wrapper px-3 py-2 rounded-1 d-flex gap-2 items-center"])}">`);
        if (props.config.status === "error") {
          _push2(`<span class="icon-message error-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.33913 5.33913C5.56522 5.11304 5.84783 5 6.15869 5C6.46956 5 6.75217 5.11304 6.97826 5.33913L11.5 9.86087L16.0217 5.33913C16.2478 5.11304 16.5304 5 16.8413 5C17.1522 5 17.4348 5.11304 17.6609 5.33913C18.113 5.7913 18.113 6.52609 17.6609 6.97826L13.1391 11.5L17.6609 16.0217C18.113 16.4739 18.113 17.2087 17.6609 17.6609C17.2087 18.113 16.4739 18.113 16.0217 17.6609L11.5 13.1391L6.97826 17.6609C6.52609 18.113 5.7913 18.113 5.33913 17.6609C4.88696 17.2087 4.88696 16.4739 5.33913 16.0217L9.86087 11.5L5.33913 6.97826C4.88696 6.52609 4.88696 5.7913 5.33913 5.33913Z" fill="#555555"></path></svg></span>`);
        } else {
          _push2(`<!---->`);
        }
        if (props.config.status === "warning") {
          _push2(`<span class="icon-message"><svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Warning / Warning"><path id="Vector" d="M12 6V14M12.0498 18V18.1L11.9502 18.1002V18H12.0498Z" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g></g></svg></span>`);
        } else {
          _push2(`<!---->`);
        }
        if (props.config.status === "success") {
          _push2(`<span class="icon-message"><svg fill="var(--bs-success)" width="30px" height="30px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg" class="cf-icon-svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z"></path></g></svg></span>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span class="${ssrRenderClass([props.config.status === "success" ? "text-green" : "", "text-18"])}">${ssrInterpolate(props.config.message)}</span></div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/Toaster.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "product-[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const user = useCookie(`userInfo`);
    const quantity = ref(1);
    const { id } = useRoute().params;
    const responseError = ref(null);
    ref(false);
    const { data: product } = ([__temp, __restore] = withAsyncContext(() => http(`products/${id}`, { server: true })), __temp = await __temp, __restore(), __temp);
    const { execute } = ([__temp, __restore] = withAsyncContext(() => http("carts", {
      method: "POST",
      server: false,
      immediate: false,
      dedupe: "defer",
      body: JSON.stringify(
        {
          userId: user.value.id,
          date: (/* @__PURE__ */ new Date()).toISOString(),
          products: [{ productId: Number(id), quantity: quantity.value }]
        }
      ),
      headers: {
        "Content-Type": "application/json"
      },
      onResponseError({ response }) {
        responseError.value = response._data;
      }
    })), __temp = await __temp, __restore(), __temp);
    const Toaster = ref({
      config: {
        show: false,
        theme: "info-theme",
        status: "info",
        message: "message"
      }
    });
    const closeToaster = () => {
      setTimeout(() => {
        Toaster.value.config.show = false;
      }, 3900);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedToaster = _sfc_main$1;
      const _component_NuxtImg = __nuxt_component_2;
      const _component_ClientOnly = __nuxt_component_2$1;
      if (unref(product)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "container-fluid product-page-section" }, _attrs))}>`);
        _push(ssrRenderComponent(_component_SharedToaster, {
          config: unref(Toaster).config,
          onCloseToaster: closeToaster
        }, null, _parent));
        _push(`<div class="padding-div-1"></div><div class="padding-div-1"></div><div class="product-details d-flex"><div class="cover product-image">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          width: "500",
          hight: "600",
          src: unref(product).image
        }, null, _parent));
        _push(`</div><section class="right-side"><div class="padding-div-1"></div><div class="padding-div-1"></div><h3 class="text-25">${ssrInterpolate(unref(product).title)}</h3><div class="d-flex items-center star-and-b"><p class="mb-0"><span class="budget">${ssrInterpolate(unref(product).category)}</span></p><div class="px-2 d-flex gap-2 items-center">`);
        _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
        _push(`<span class="text-18 d-none-sm">${ssrInterpolate(unref(product).rating.count)} people who rate this</span></div></div><div class="description"><div class="padding-div-1"></div><article class="text-18">${ssrInterpolate(unref(product).description)}</article><div class="padding-div-1"></div><div class="add-to-card"><button class="btn btn-primary d-flex items-center gap-2 text-22"><span style="${ssrRenderStyle({ "color": "inherit" })}">Add to cart</span>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          style: { "filter": "invert(100%)" },
          width: "25",
          height: "25",
          preload: "",
          src: "/assets/icons/cart.png"
        }, null, _parent));
        _push(`</button></div></div></section></div><div class="padding-div-1"></div><div class="padding-div-1"></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product-[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=product-_id_-C7IneKum.mjs.map
