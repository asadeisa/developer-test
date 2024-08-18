<script setup>
const categories = [{ id: 1, name: `electronics` }, { id: 2, name: `jewelery` }, { id: 3, name: `men's clothing` }, { id: 4, name: `women's clothing` }]

const selectCat = (item) => {
  console.log(item.selected);
  navigateTo(`/category-${item.selected}`)
}
const showSmSearch = ref(false); 
</script>
<template>
  <div>
    <header class="container-fluid d-flex flex-column ">

      <TopHeader></TopHeader>
      <div class="d-flex   align-items-center justify-content-between">
        <nav class="navbar pt-0  navbar-light w-100 align-items-end justify-content-between">
          <div class="logo cover">
            <NuxtLink  to="/">
              <NuxtImg width="150" height="140" src="/assets/icons/logo-black.png" preload alt="logo" />

            </NuxtLink>
          </div>
          <div class="other-logo">

            <div class="collapse d-flex align-items-center  navbar-collapse justify-content-between show">
              <SharedCustomSelect class="select-cat-sm" :itemToSelect="categories" ItemToShow="categories"
                :haveSearch="false" @item-is-select="selectCat" mainKey="name" />
              <ul class="navbar-nav d-flex flex-row list-nav-header mb-2 mb-lg-0 text-20 h-sm-screen">
                <li v-for="cat in categories" :key="cat.id" class="nav-item">
                  <NuxtLink class="nav-link text-uppercase text-medium" active-class="active" aria-current="page"
                    :to="`/category-${cat.name}`">{{ cat.name }}</NuxtLink>
                </li>
              </ul>
              <div class="d-flex align-items-center">
                <form class="d-flex">
                  <div @click.stop="showSmSearch = true" class="search d-flex  align-items-center"
                    :class="showSmSearch == true ? 'sm-search' : ''">
                    <input class=" me-2 form-control search-input" type="search" placeholder="Search"
                      aria-label="Search">
                    <span class="search-icon d-inline-block cover">
                      <NuxtImg width="17" height="17" preload src="/assets/icons/search.png" />

                    </span>
                    <span @click.stop="showSmSearch = false" class="close-sm">X</span>
                  </div>

                </form>
                <section class="icons-p-u d-flex ">
                  <div class="profile cover">
                    <NuxtImg width="20" height="20" preload src="/assets/icons/login.png" />
                  </div>
                  <div class="favorite  cover">
                    <NuxtImg width="20" height="20" preload src="/assets/icons/heart.png" />
                  </div>
                  <div class="cart cover" >
                    <NuxtLink to="/cart">
                      <NuxtImg  width="20" height="20" preload src="/assets/icons/cart.png" />

                    </NuxtLink>
                  </div>
                </section>
              </div>


            </div>
          </div>
        </nav>

      </div>

    </header>

    <slot></slot>
  </div>
</template>