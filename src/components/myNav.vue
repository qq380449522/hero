<template>
<div class="col-sm-3 col-md-2 sidebar">
<ul class="nav nav-sidebar">
  <router-link tag="li" active-class='active' to="/heroes"><a>英雄管理</a></router-link>
  <router-link tag="li" active-class='active' to="/wuqi"><a>武器管理</a></router-link>
  <router-link tag="li" active-class='active' to="/zhuangbei"><a>装备管理</a></router-link>
</ul>
</div>
</template>
<script>
export default {
  name: 'myNav'
}
</script>
<style>
</style>
