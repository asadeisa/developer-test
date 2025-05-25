import { defineComponent, ref, withAsyncContext, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { h as http } from './http-BoeQKQ-U.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'nitropack/dist/runtime/plugin';
import 'packrup';
import 'node:fs';
import 'node:path';
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cart",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const cartItems = ref();
    const { data: cartData } = ([__temp, __restore] = withAsyncContext(async () => http("carts/1", {
      server: true,
      transform: async (data) => {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        return data.products.map((cartItem) => {
          const product = products.find((p) => p.id === cartItem.productId);
          return {
            id: product.id,
            title: product.title,
            price: product.price,
            quantity: cartItem.quantity
          };
        });
      }
    })), __temp = await __temp, __restore(), __temp);
    cartItems.value = cartData.value;
    const cartTotal = computed(() => {
      var _a;
      return (_a = cartItems.value) == null ? undefined : _a.reduce((total, item) => total + item.price * item.quantity, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-5 cart-page" }, _attrs))}><h1 class="text-30">Shopping Cart</h1><div class="padding-div-1"></div><table class="table table-bordered"><thead><tr class="text-18"><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(unref(cartItems), (item) => {
        _push(`<tr class="text-17"><td>${ssrInterpolate(item.title)}</td><td>$${ssrInterpolate(item.price.toFixed(2))}</td><td><input type="number"${ssrRenderAttr("value", item.quantity)} class="form-control text-17" min="1"></td><td>$${ssrInterpolate((item.price * item.quantity).toFixed(2))}</td><td><button class="btn btn-danger text-17">Delete</button></td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      if (unref(cartItems) && ((_a = unref(cartItems)) == null ? undefined : _a.length) > 0) {
        _push(`<div class="mt-3"><h3 class="text-30">Total: \\$${ssrInterpolate((_b = unref(cartTotal)) == null ? undefined : _b.toFixed(2))}</h3></div>`);
      } else {
        _push(`<div class="mt-3"><p>Your cart is empty.</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-vzxbNNOs.mjs.map
