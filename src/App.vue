<template>
  <div>
    <myheader></myheader>
    <div class="container-fluid">
    <div class="row">
      <mynav></mynav>
      <myList></myList>
    </div>
    </div>
  </div>
</template>
<script>
import myheader from '@/components/myHeader.vue'
import mynav from '@/components/myNav.vue'
import myList from '@/components/myList.vue'
export default {
  name: 'App',
  components: {
    myheader,
    mynav,
    myList
  }
}
</script>

<style>
</style>
