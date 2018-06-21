<template>
  <div id="wrapper">
    <Title :text="$t('message.newword')"></Title>
    <div id="content">
    
    </div>
  </div>
</template>

<script>
  import Title from '@/components/Common/Title'

  export default {
    name: 'new-word',
    components: { Title },
    methods: {}
  }
</script>

<style scoped>
  #wrapper {
    background: #FFEFBA;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #FFEFBA, #FFFFFF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #FFEFBA, #FFFFFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 100vh;
    width: 100vw;
    padding: 30px 60px;
  }
</style>
