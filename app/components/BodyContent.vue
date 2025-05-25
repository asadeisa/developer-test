<script setup lang="ts">
import type { BreakpointsType } from '~/types/slider'
import http from '~/utilities/http'

const { data: offers } = http<any>(`products?limit=10`, { lazy: true, deep: false })
const { data: newArrival } = http<any>(`products/category/women's clothing?limit=10`, { lazy: true, deep: false })

const ArrivalBreakPoints:BreakpointsType = {
  350: {
    itemsToShow: 1.8,
    snapAlign: 'center'
  },
  450: {
    itemsToShow: 2.2,
    snapAlign: 'center'
  },
  550: {
    itemsToShow: 2.7,
    snapAlign: 'center'
  },
  750: {
    itemsToShow: 3.2,
    snapAlign: 'start'
  },
  1000: {
    itemsToShow: 3.6,
    snapAlign: 'start'
  },
  1440: {
    itemsToShow: 4,
    snapAlign: 'start'
  },
  1500: {
    itemsToShow: 4.3,
    snapAlign: 'start'
  }
}
const offersBreakPoints:BreakpointsType = {
  350: {
    itemsToShow: 1.8,
    snapAlign: 'center'
  },
  420: {
    itemsToShow: 2.1,
    snapAlign: 'center'
  },
  550: {
    itemsToShow: 2.6,
    snapAlign: 'center'
  },
  600: {
    itemsToShow: 3.1,
    snapAlign: 'center'
  },
  850: {
    itemsToShow: 3.3,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 3.5,
    snapAlign: 'start'
  },
  1300: {
    itemsToShow: 4,
    snapAlign: 'start'
  },
  1440: {
    itemsToShow: 5.5,
    snapAlign: 'start'
  },
  1500: {
    itemsToShow: 5,
    snapAlign: 'start'
  }
}
</script>
<template>
  <section class="offers container-fluid">
        <h3 class="text-uppercase text-30 mb-3 text-bold">special offers</h3>
        <ClientOnly>
          <SharedCustomSlider :products="offers" :breakpoints="offersBreakPoints" :show-pagination="false" :autoplay="0" :show-navigation="false" :wrap-around="false">
            <template #default="{ slide }">
              <SharedCard :product="slide" :show-old-price="true" />

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
          <SharedCustomSlider :products="newArrival" :breakpoints="ArrivalBreakPoints" :show-navigation="false" :show-pagination="false" :wrap-around="false" :autoplay="0">
            <template #default="{ slide }">
  
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
</template>