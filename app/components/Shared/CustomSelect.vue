<script setup>
const props = defineProps({
  itemToSelect: { default: () => [] },
  haveSearch: { default: false },
  maxHeight: { default: 200 },
  borderRadius: { default: .5 },
  HaveShadow: { default: true },
  ItemToShow: { default: '' },
  IconColor: { default: '#000' },
  emitName: { default: null},
  mainKey: { default: 'name' },
  translateX : {default :0} , 
  keyToShow  : {default : 'name'} , 
})
const emit = defineEmits([`item-is-select`])
const keyOption = ref(props.mainKey)
const keyToShow = ref(props.keyToShow)
const searchInput = ref(props.ItemToShow)
const showOption = ref(false);
const resultOfSelect = ref(props.ItemToShow)
const originalOptions = toRef(()=>props.itemToSelect)
const options = ref(originalOptions.value);
const showSelectOption = () => {
  showOption.value = !showOption.value;
}
watch(originalOptions , (newProps , oldProps)=>{
 options.value = originalOptions.value;

})
const focusOnInput = () => {
  searchInput.value = '';
}
const selectTheOption = (item) => {
  // searchInput.value = item[keyOption.value];
  searchInput.value = ``;
  // resultOfSelect.value = item[keyOption.value];
  if(typeof item === 'object'){

    resultOfSelect.value = item[keyToShow.value];
  }else{
    resultOfSelect.value = item;
  }
  showOption.value = false;
  if(props.emitName== null){
    const dataToSend = {selected :typeof item === 'object'? item[keyToShow.value]:item,itemsToSelect:  originalOptions.value ,originObj : item}
    emit(`item-is-select` , dataToSend)
  }
  options.value = originalOptions.value;
}
const search = () => {

  if (searchInput.value.trim() == '') {
    options.value = originalOptions.value;
  }
  options.value = []
  if (Array.isArray(originalOptions.value)) {
    // It's an array
    for (const option of originalOptions.value) {

      if (searchString(option[keyOption.value]) === true) {
        options.value.push(option)
      }
    }
  } else if (typeof originalOptions.value === 'object') {
    // It's an object
    for (const key in originalOptions.value) {
      if (originalOptions.value.hasOwnProperty(key)) {

        searchString(originalOptions.value[key][keyOption.value]);
      }
    }
  }

}

function searchString(mainString) {

  const lowercasedMainString = mainString.toLowerCase();
  const lowercasedSubString = searchInput.value.toLowerCase();
  if (lowercasedMainString.includes(lowercasedSubString)) return true

}

</script>
<template>
  <div class="custom---select-items-wrapper">
    <div class="result-to-show" @click="showSelectOption">
      <p class="text">
        {{ resultOfSelect }}
      </p>
      <div class="icon-down-up">
        <span class="up" v-if="showOption">
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.88321 2.88375L4.29321 0.29375C3.90321 -0.0962501 3.27321 -0.0962501 2.88321 0.29375L0.29321 2.88375C-0.33679 3.51375 0.11321 4.59375 1.00321 4.59375L6.18321 4.59375C7.07321 4.59375 7.51321 3.51375 6.88321 2.88375Z"
              fill="#333" />
          </svg>

        </span>
        <span class="down" v-else>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.296477 1.71L2.88648 4.3C3.27648 4.69 3.90648 4.69 4.29648 4.3L6.88648 1.71C7.51648 1.08 7.06648 0 6.17648 0H0.996477C0.106477 0 -0.333523 1.08 0.296477 1.71Z"
              fill="#333" />
          </svg>


        </span>

      </div>
    </div>
    <div v-if="showOption" class="option-holder" :class="{ 'box-shadow': props.HaveShadow }"
      :style="{ '--max-h': props.maxHeight, '--border': props.borderRadius  ,'--translate-x' :props.translateX}">
      <div class="search-section" v-if="props.haveSearch">
        <input @focus="focusOnInput" @input="search" class="search-input" type="text" v-model="searchInput">
        <span class="search-icon"><svg width="25" height="25" viewBox="0 0 25 25" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M22.6607 21.4638L19.0801 17.9631L18.9962 17.8355C18.8401 17.6801 18.6268 17.5926 18.4041 17.5926C18.1814 17.5926 17.968 17.6801 17.812 17.8355C14.769 20.6272 10.0801 20.7789 6.85495 18.1901C3.6298 15.6012 2.86919 11.0751 5.07754 7.61346C7.28589 4.15179 11.7779 2.82875 15.5746 4.52176C19.3712 6.21477 21.2943 10.3985 20.0685 14.2983C19.9802 14.58 20.0524 14.8864 20.2578 15.102C20.4632 15.3176 20.7707 15.4097 21.0644 15.3436C21.3581 15.2775 21.5934 15.0632 21.6817 14.7814C23.147 10.1535 20.9338 5.17323 16.4738 3.0623C12.0138 0.951366 6.6454 2.34331 3.84146 6.33767C1.03752 10.332 1.63951 15.7301 5.258 19.0398C8.87649 22.3496 14.4256 22.5777 18.3155 19.5767L21.4858 22.6763C21.8133 22.995 22.3426 22.995 22.6701 22.6763C22.9971 22.3531 22.9971 21.8326 22.6701 21.5094L22.6607 21.4638Z"
              fill="#333" />
          </svg>
        </span>
      </div>
      <div class="options ">
      
        <span class="option" v-for="( item, index) in  options" :key="index">
          <span v-if="typeof item === 'object'" @click="selectTheOption(item)"> {{ item[keyOption] }}</span>
          <span v-else @click="selectTheOption(item)"> {{ item }}</span>
        </span>
      </div>
    </div>
    <Teleport to="body">
      <div @click=" showOption = false" v-if="showOption" class="closed-div-custom-select">

      </div>
    </Teleport>

  </div>
</template>
