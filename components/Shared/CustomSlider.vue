<script setup>
import { Carousel, Navigation, Slide ,Pagination} from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const props = defineProps({
  breakpoints: {
    default: () => {
      return {
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      }
    }
  } , 
  products : {default : ()=>[]} , 
  showPagination  : {default : true},
  showNavigation  : {default : true},
  wrapAround  : {default : false},
  autoplay  : {default : 0},
})
// Define the settings and breakpoints using `ref` since they are reactive
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
})


</script>
<template>
  <Carousel :autoplay="props.autoplay" v-bind="settings" :breakpoints="props.breakpoints" :wrap-around="props.wrapAround">
    <Slide v-for="slide in products" :key="slide.id||Math.random()">
      <div class="carousel__item">
        <slot v-bind:slide="slide"></slot>

      </div>
    </Slide>
   
    <template #addons>
      <Pagination />

    <navigation v-if="props.showNavigation">
      <template #next>
        <span class="arrow-slider"><svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="var(--dark)" clip-rule="evenodd" data-v-inspector="pages/index.vue:50:11"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" data-v-inspector="pages/index.vue:52:13"></path></svg> </span>
      </template>
      <template #prev>
        <span class="rotate-180 arrow-slider"><svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="var(--dark)" clip-rule="evenodd" data-v-inspector="pages/index.vue:50:11"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" data-v-inspector="pages/index.vue:52:13"></path></svg></span>
      </template>
    </navigation>
  </template>
  </Carousel>
</template>