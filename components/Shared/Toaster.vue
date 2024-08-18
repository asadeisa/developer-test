<script setup>
const emit = defineEmits(['close-toaster'])
const props = defineProps({
  config: {
    default: () => {
      return {
        message: 'toaster message',
        theme: 'info-theme', //warning-theme danger
        show: true,
        status: 'info' //success , error ,warning

      }
    }
  }
})
const show = toRef(()=>props.config.show)
watch(show, (newShow, oldShow) => {
  if (show.value == true) {
    emit('close-toaster');
  }
})
</script>

<template>
  <Teleport to="body">
    <div :class="props.config.show ? 'shared-show-toaster' : ''"
      class="shared-toaster d-flex items-center justify-content-center">
      <div class="message-wrapper px-3 py-2 rounded-1 d-flex gap-2 items-center" :class="props.config.theme">

        <span v-if="props.config.status === 'error'" class="icon-message error-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.33913 5.33913C5.56522 5.11304 5.84783 5 6.15869 5C6.46956 5 6.75217 5.11304 6.97826 5.33913L11.5 9.86087L16.0217 5.33913C16.2478 5.11304 16.5304 5 16.8413 5C17.1522 5 17.4348 5.11304 17.6609 5.33913C18.113 5.7913 18.113 6.52609 17.6609 6.97826L13.1391 11.5L17.6609 16.0217C18.113 16.4739 18.113 17.2087 17.6609 17.6609C17.2087 18.113 16.4739 18.113 16.0217 17.6609L11.5 13.1391L6.97826 17.6609C6.52609 18.113 5.7913 18.113 5.33913 17.6609C4.88696 17.2087 4.88696 16.4739 5.33913 16.0217L9.86087 11.5L5.33913 6.97826C4.88696 6.52609 4.88696 5.7913 5.33913 5.33913Z"
              fill="#555555" />
          </svg>
        </span>
        <span v-if="props.config.status === 'warning'" class="icon-message">
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Warning / Warning">
                <path id="Vector" d="M12 6V14M12.0498 18V18.1L11.9502 18.1002V18H12.0498Z" stroke="var(--primary)"
                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </g>
          </svg>
        </span>
        <span v-if="props.config.status === 'success'" class="icon-message">
          <svg fill="var(--bs-success)" width="30px" height="30px" viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"
        class="cf-icon-svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z">
          </path>
        </g>
      </svg>
        </span>
        <span class="text-18" :class="props.config.status === 'success' ? 'text-green' : ''">{{ props.config.message
          }}</span>
      </div>

    </div>

  </Teleport>
</template>