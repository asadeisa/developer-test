<script setup lang="ts">
import http from '~/utilities/http'
import StarRating from 'vue-star-rating'
import type { Product, User } from '~/types'
const user = useCookie<User>(`userInfo`)
const quantity = ref<number>(1)
const { id } = useRoute().params
const responseError = ref(null)
const isInCart = ref<boolean>(false)  
const { data: product } = await http<Product>(`products/${id}`, { server: true })
const {  execute } = await http('carts', {
  method: "POST",
  server: false,
  immediate: false,
  dedupe: "defer",
  body: JSON.stringify(
    {
      userId: user.value.id,
      date: new Date().toISOString(),
      products: [{ productId: Number(id), quantity : quantity.value }]
    }
  ),
  headers: {
    'Content-Type': 'application/json'
  },
  onResponseError({  response }) {
    responseError.value = response._data
  }
})
const Toaster = ref({
  config: {
    show: false,
    theme: 'info-theme',
    status: "info",
    message: 'message'
  }
})

const closeToaster = () => {
  setTimeout(() => {
    Toaster.value.config.show = false

  }, 3900)
}
const addItemToCart = async () => {
  await execute()
  if(responseError.value){
    Toaster.value.config.show = true
    Toaster.value.config.status = 'error'
    Toaster.value.config.theme = 'alert-danger'
    Toaster.value.config.message = responseError.value
  }else{
    isInCart.value = true 
    Toaster.value.config.show = true
    Toaster.value.config.status = 'success'
    Toaster.value.config.theme = 'alert-success'
    Toaster.value.config.message = `product add successfully` 
  }
}
</script>
<template>
  <div v-if="product" class="container-fluid product-page-section" >
    <SharedToaster :config="Toaster.config" @close-toaster="closeToaster"  />
    <div class="padding-div-1"></div>
    <div class="padding-div-1"></div>
    <div class="product-details d-flex ">
      <div class="cover product-image">
        <NuxtImg width="500" hight="600" :src="product.image" />
      </div>
      <section class="right-side">
        <div class="padding-div-1"></div>
        <div class="padding-div-1"></div>

        <h3 class="text-25">{{ product.title }}</h3>
        <div class="d-flex items-center star-and-b">
          <p class="mb-0">
            <span class="budget">{{ product.category }}</span>
          </p>
          <div class="px-2 d-flex gap-2 items-center ">
            <ClientOnly>
              <star-rating 
              :read-only="true" :rating="product.rating.rate" :show-rating="false" :star-size="20"
               :increment="0.5" :max-rating="5" inactive-color="#999999" active-color="var(--primary-700)"
                :border-width="2" border-color="var(--main-color)" :rounded-corners="true"/>
            
            </ClientOnly>
            <span class="text-18 d-none-sm">{{ product.rating.count }} people who rate this</span>
          </div>
        </div>
        <div class="description">
          <div class="padding-div-1"></div>

          <article class="text-18">
            {{ product.description }}
          </article>
          <div class="padding-div-1"></div>
          <div class="add-to-card">
            <button class="btn btn-primary d-flex items-center gap-2 text-22" @click="addItemToCart" >
              <span style="color:inherit;">Add to cart</span>
              <NuxtImg style="filter: invert(100%);" width="25" height="25" preload src="/assets/icons/cart.png" />
            </button>
          </div>
        </div>
      </section>
    </div>

    <div class="padding-div-1"></div>
    <div class="padding-div-1"></div>


  </div>
</template>