<script setup lang="ts">
import type { Product } from "~/types"

const props = defineProps<{
  product: Product
  showOldPrice: boolean
}>()

</script>
<template>
  <div class="card">
    <div class="cover card-image">
      <NuxtLink :to="`product-${props.product.id}`">
        <NuxtImg width="335" loading="lazy" :src="props.product.image" />
      </NuxtLink>
    </div>
    <div :class="props.showOldPrice ? 'px-3' : 'px-3'">
      <p class="text-start text-regular text-16 clip-title ">
        {{ props.product.title }} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus ab, voluptates laborum nihil, laudantium dolores aspernatur rerum reprehenderit consequuntur, dignissimos tempora officia minus voluptatibus? Vitae et possimus quos sed adipisci.
      </p>
      <p
        class="text-center text-medium text-16 d-flex gap-2"
        :class="
          props.showOldPrice
            ? 'justify-content-center'
            : 'justify-content-start'
        "
      >
        <span class="text-medium">ADE</span>
        <span v-if="props.showOldPrice" class="old-price text-medium"
          >1000</span
        >
        <span class="price text-medium">{{ props.product.price }}</span>
      </p>
    </div>
  </div>
</template>
