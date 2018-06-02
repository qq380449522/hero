<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
      <router-link class="btn btn-success" :to="{name: 'heroadd'}">Add</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id" >
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <router-link :to="'/heroes/edit/'+item.id">edit</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:void(0)" @click="handleDel(item.id)">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    }
  },
  mounted() {
    this.loadList()
  },
  methods: {
    loadList() {
      this.$http.get('/heroes')
        .then(res => {
          if (res.status === 200) {
            this.list = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleDel(id) {
      if (!confirm('确定删除吗？')) {
        return
      }
      this.$http.delete(`/heroes/${id}`)
        .then(res => {
          if (res.status === 200) {
            this.loadList()
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>
</style>
