<template>
  <div id="wrapper">
    <div id="content">
      <h1 id="welcome">Japanese Go</h1>
      <button class="is-trans is-large" @click="sthnew">
        {{ $t('message.sthnew') }}
      </button><br><button class="is-trans is-large" @click="review">
        {{ $t('message.review') }}
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'landing-page',
    components: { },
    methods: {
      sthnew() {
        this.$router.push('newword')
      },
      review() {
        console.log('start')
      }
    }
  }
</script>

<style scoped>
  #wrapper {
    background: #007991;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #78ffd6, #007991);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #78ffd6, #007991); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    height: 100vh;
    width: 100vw;
  }

  #content {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    height: 240px;
    margin-top: -120px; 
  }

  #welcome {
    color: #fff;
    font-size: 35px;
  }

  .is-large {
    display: inline-block;
    margin-top: 15px;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-bottom: calc(0.375em - 1px);
    padding-left: 0.75em;
    padding-right: 0.75em;
    padding-top: calc(0.375em - 1px);
    text-align: center;
    white-space: nowrap;
    border-radius: 4px;
  }
</style>
