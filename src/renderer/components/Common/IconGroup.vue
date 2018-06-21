<template>
  <div id="wrapper-btn">
    <icon :name="icon" class="action-icon inline-el"></icon>
    <p class="inline-el">{{ text }}</p>
    <div class="ct-cb"></div>
  </div>
</template>

<script>
  import 'vue-awesome/icons'
  import Icon from 'vue-awesome/components/Icon'

  export default {
    name: 'icon-group',
    data() {
      return {}
    },
    props: {
      text: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: 'home'
      },
    },
    components: { Icon }
  }
</script>

<style scoped>
  #wrapper-btn {
    padding: 20px 0;
  }

  #wrapper-btn > .inline-el {
    display: block;
    float: left;
    margin-right: 15px;
    color: #666;
    line-height: 30px;
  }
  .action-icon {
    width: 30px;
    height: 30px;
    font-size: 20px;
    border: 1px solid #666;
    border-radius: 50%;
    padding: 5px;
  }
</style>
