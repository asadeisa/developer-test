<script setup lang="ts">
import type { CartItem } from "~/types"
import http from "~/utilities/http"
const cartItems = ref<CartItem[]>()

const { data: cartData } = await http<CartItem[]>("carts/1", {
  server: true,
  transform: async (data: any) => {
    const response = await fetch("https://fakestoreapi.com/products")
    const products = await response.json()

    return data.products.map((cartItem) => {
      const product = products.find((p) => p.id === cartItem.productId)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity
      }
    })
  }
})

cartItems.value = cartData.value

const updateQuantity = (id: string | number, quantity: number) => {
  const item = cartItems.value?.find((item) => item.id === id)
  if (item) {
    item.quantity = quantity > 0 ? quantity : 1
  }
}

const removeItem = (id: string | number) => {
  cartItems.value = cartItems.value?.filter((item) => item.id !== id)
}

const cartTotal = computed(() => {
  return cartItems.value?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )
})
</script>
<template>
  <div class="container mt-5 cart-page">
    <h1 class="text-30">Shopping Cart</h1>
    <div class="padding-div-1"></div>
    <table class="table table-bordered">
      <thead>
        <tr class="text-18">
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="text-17" v-for="item in cartItems" :key="item.id">
          <td>{{ item.title }}</td>
          <td>${{ item.price.toFixed(2) }}</td>
          <td>
            <input
              type="number"
              @change="updateQuantity(Number(item.id), Number(item.quantity))"
              v-model.number="item.quantity"
              class="form-control text-17"
              min="1"
            />
          </td>
          <td>${{ (item.price * item.quantity).toFixed(2) }}</td>
          <td>
            <button @click="removeItem(item.id)" class="btn btn-danger text-17">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="cartItems && cartItems?.length > 0" class="mt-3">
      <h3 class="text-30">Total: \${{ cartTotal?.toFixed(2) }}</h3>
    </div>
    <div v-else class="mt-3">
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>
