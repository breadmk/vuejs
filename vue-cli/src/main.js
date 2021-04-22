import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// 기존에 배웠던 내용과 다른 부분을 배웠던 대로 수정한 코드 ↓

// var App = {
//   template : '<div>app</div>'
// }

new Vue({
  render: h => h(App),
  // components: {
  //   'app' : App
  // }
}).$mount('#app')

// new Vue({
//   render: h => h(App), //vue 내부에서 사용 되는 함수 / template 정의했을때 render가 실행이 된다.
// })
