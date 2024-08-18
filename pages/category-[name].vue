<script setup>
import http from '~/utilities/http';

const {name } = useRoute().params ; 
const {data:products} = await http(`products/category/${name}`)
</script>
<template>
  <div class="container-fluid category-page">
    <div class="padding-div-1"></div>
    <div class="padding-div-1"></div>
    <h3 class="text-25 text-bold "> {{ products?.length }} results of {{ name }}</h3>
    <div class="padding-div-1"></div>

    <div class="d-flex flex-wrap product-wrapper">
      <div   v-for="product in products" :key="product.id">
        <SharedCard  :product="product"></SharedCard>
      </div>

    </div>
    <div class="padding-div-1"></div>
    <div class="padding-div-1"></div>

  </div>
</template>