<template> <!-- template 안에는 하나의 div (태그만 존재하고 그 안에 하위로 넣어야함)  -->
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function(){
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header' : AppHeader
  }
}
</script>

<style>

</style>