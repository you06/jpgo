<template>
  <div id="wrapper-title">
    <router-link to="/" class="action-link">
      <IconGroup class="ct-back" :text="$t('message.back2home')"></IconGroup>
    </router-link>
    <!-- <p class="jg-title">{{ text }}</p> -->
    <div class="ct-cb" />
  </div>
</template>

<script>
  import IconGroup from '@/components/Common/IconGroup'

  export default {
    name: 'back-btn',
    data() {
      return {}
    },
    props: {
      text: {
        type: String,
        default: ''
      }
    },
    components: { IconGroup }
  }
</script>

<style scoped>
  #wrapper-title {
    width: 100vw;
  }
  
  #action-icon {
    color: #666;
  }

  .jg-title {
    float: left;
  }
</style>
