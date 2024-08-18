<script setup>
const props = defineProps({
  product: { default: () => { } },
  showOldPrice: { default: true }
})
function clipTitle(text) {
  let arrayTitle = text.split('')
  let result = text
  if (arrayTitle.length > 30) {
    arrayTitle = arrayTitle.slice(0, 30);
    arrayTitle.push(...[".", ".", "."]);
    result = arrayTitle.join('');
  }
  return result
}
</script>
<template>
  <div class="card">
    <div class="cover card-image">
      <NuxtLink  :to="`product-${props.product.id}`">
        <NuxtImg width="335" loading="lazy" :src="props.product.image" />

      </NuxtLink>

    </div>
    <div  :class="props.showOldPrice ?'':'px-3'">
      <p class="text-center text-regular text-16 ">
        {{ clipTitle(props.product.title) }}
      </p>
      <p class="text-center text-medium text-16 d-flex  gap-2 "
        :class="props.showOldPrice ? 'justify-content-center' : 'justify-content-start'">
        <span class="text-medium">ADE</span>
        <span v-if="props.showOldPrice" class="old-price text-medium">1000</span>
        <span class="price text-medium">{{ props.product.price }}</span>
      </p>
    </div>
  </div>
</template>