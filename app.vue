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
  script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
          integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
          crossorigin: 'anonymous',
          defer: true, // This adds the defer attribute
        },
      ],
})

const user = useCookie(
  'userInfo',
  {
    default: () => ({ id: 5 }),
    sameSite : `strict`
  }
)

</script>
<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <FooterApp/>
    
  </div>
</template>
