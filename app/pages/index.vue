<script setup lang="ts">
import type { BreakpointsType } from "~/types/slider"

const images = [
  "/assets/images/Header.webp",
  "/assets/images/Header.webp",
  "/assets/images/Header.webp"
]

useHead({
  link: images.map((src) => ({
    rel: "preload",
    as: "image",
    href: src
  }))
})
const HomeBreakPoints: BreakpointsType = {
  1900: {
    itemsToShow: 1,
    snapAlign: "start"
  }
}
</script>
<template>
  <div class="home-page wrapper">
    <ClientOnly>
      <SharedCustomSlider
        class="slider-from-home"
        :products="images"
        :breakpoints="HomeBreakPoints"
        :show-navigation="false"
        :wrap-around="true"
        :autoplay="2000"
        :show-pagination="false"
      >
        <template #default="{ slide }">
          <NuxtImg :src="slide" class="d-block w-100" alt="..." />
          <div class="carousel-caption move-caption-left d-none-sm">
            <h2 class="text-uppercase text-31">SALE</h2>
            <p class="text-uppercase text-22 text-medium">
              access a limited selection with up to 70% off
            </p>
            <div>
              <button
                class="btn-primary btn text-20 text-uppercase shop-now-button d-flex align-items-center gap-3"
              >
                <span>shop now </span>
                <svg
                  width="27"
                  height="27"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  fill="#fff"
                  clip-rule="evenodd"
                >
                  <path
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </template>
      </SharedCustomSlider>

      <div class="padding-div-1"></div>
      <template #placeholder>
        <div>
          <NuxtImg
            class="image-place-holder"
            :src="images[0]"
            width="100vw"
            height="684"
          />
        </div>
        <div class="padding-div-1"></div>
      </template>
    </ClientOnly>
    <div class="all-page-image cover">
      <NuxtImg
        src="/assets/images/Jewelry.webp"
        width="1500"
        height="620"
        loading="lazy"
      />
      <div class="button-all-page-image">
        <button class="btn btn-light d-flex align-items-center gap-3">
          <span class="text-18 text-uppercase text-medium"> see more</span>
          <svg
            width="27"
            height="27"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            fill="var(--dark)"
            clip-rule="evenodd"
          >
            <path
              d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- <LazyBodyContent  /> -->
    <LazyBodyContent hydrate-on-visible />
  </div>
</template>
