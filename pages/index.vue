<script setup>
import http from '~/utilities/http';
const {data:offers} = http(`products?limit=10` ,{lazy:true , deep: false})
const {data:newArrival} = http(`products/category/women's clothing?limit=10` ,{lazy:true , deep: false})

const images = ["/assets/images/Header.jpg", "/assets/images/Header.jpg", "/assets/images/Header.jpg"]
const offersBreakPoints =   {
  350: {
    itemsToShow: 1.8,
    snapAlign: 'center',
  },
  420: {
    itemsToShow: 2.1,
    snapAlign: 'center',
  },
  550: {
    itemsToShow: 2.6,
    snapAlign: 'center',
  },
  600: {
    itemsToShow: 3.1,
    snapAlign: 'center',
  },
  850: {
    itemsToShow: 3.3,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3.5,
    snapAlign: 'start',
  },
  1300: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
  1440: {
    itemsToShow: 5.5,
    snapAlign: 'start',
  },
  1500: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
}
const ArrivalBreakPoints =   {
  350: {
    itemsToShow: 1.8,
    snapAlign: 'center',
  },
  450: {
    itemsToShow: 2.2,
    snapAlign: 'center',
  },
  550: {
    itemsToShow: 2.7,
    snapAlign: 'center',
  },
  750: {
    itemsToShow: 3.2,
    snapAlign: 'start',
  },
  1000: {
    itemsToShow: 3.6,
    snapAlign: 'start',
  },
  1440: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
  1500: {
    itemsToShow: 4.3,
    snapAlign: 'start',
  },
}
 const HomeBreakPoints = {
  1900: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
 }
</script>
<template>
  <div class="home-page wrapper">
    <ClientOnly>
        <SharedCustomSlider class="slider-from-home" :products="images" :breakpoints="HomeBreakPoints" :showNavigation="false" :wrap-around="true" :autoplay="2000">
          <template v-slot="{ slide }">
            <NuxtImg :src="slide" class="d-block w-100" alt="..." />
          <div class="carousel-caption move-caption-left d-none-sm">
            <h2 class="text-uppercase text-31">SALE</h2>
            <p class="text-uppercase text-22 text-medium ">access a limited selection with up to 70% off</p>
            <div>
              <button class="btn-primary btn text-20 text-uppercase shop-now-button d-flex align-items-center gap-3"> 
                <span>shop now </span> 
                <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#fff" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
              </button>
            </div>
          </div>
          </template>
         
        </SharedCustomSlider>
      </ClientOnly>
    <!-- <SharedFullPageSlider :images carouselId="home-page-carousel" /> -->
    <div class="all-page-image cover">
      <NuxtImg src="/assets/images/Jewelry.jpg" width="1500" height="620" />
      <div class="button-all-page-image ">
        <button class="btn btn-light d-flex  align-items-center gap-3 ">
          <span class="text-18 text-uppercase  text-medium"> see more</span>
          <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="var(--dark)"
            clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </button>
      </div>
    </div>
    <section class="offers container-fluid">
      <h3 class="text-uppercase text-30 mb-3 text-bold">special offers</h3>
      <ClientOnly>
        <SharedCustomSlider :products="offers" :breakpoints="offersBreakPoints">
          <template v-slot="{ slide }">
            <SharedCard :product="slide" />
           
          </template>
         
        </SharedCustomSlider>
      </ClientOnly>
    </section>
    <div class="padding-div-1"></div>
    <section class="all-page-image cover">
      <NuxtImg loading="lazy" src="/assets/images/col.jpg" width="1500" height="620" />
      </section>
      <section class="offers container-fluid">
      <h3 class="text-uppercase text-30 mb-3 text-bold">new Arrival</h3>
      <ClientOnly>
        <SharedCustomSlider :products="newArrival" :breakpoints="ArrivalBreakPoints" :showNavigation="false">
          <template v-slot="{ slide }">
           
            <SharedCard :product="slide" :show-old-price="false" />
          </template>
         
        </SharedCustomSlider>
      </ClientOnly>
    </section>
    <section class="be-a-member d-flex justify-content-center">
      <h2 class="text-30 text-uppercase mb-0">become a member & get 15% off 
       
      </h2>
      <button class="btn btn-primary text-uppercase text-bold text-18">
       <span>sign up for free</span> 
          <svg width="27" height="27" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="#fff"
            clip-rule="evenodd">
            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
          </svg>
        </button>
    </section>
  </div>
</template>