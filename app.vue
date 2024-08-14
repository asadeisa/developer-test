<script setup>

useHead({
  title: 'test app',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],

  htmlAttrs: {
    lang: `en`,
    // class: 'dark1'
  },

  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
      integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
      crossorigin: 'anonymous'
    }

  ],
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
