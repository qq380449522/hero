<template>
  <div>
    <myheader></myheader>
    <div class="container-fluid">
    <div class="row">
      <mynav></mynav>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <router-view></router-view>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
import myheader from '@/components/myHeader.vue'
import mynav from '@/components/myNav.vue'
export default {
  name: 'App',
  components: {
    myheader,
    mynav
  }
}
</script>

<style>
</style>
