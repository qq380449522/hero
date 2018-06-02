<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" v-model="formData.name" class="form-control" id="name" placeholder="英雄名称">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input type="text" v-model="formData.gender" class="form-control" id="gender" placeholder="英雄性别">
      </div>
      <button type="submit" @click.prevent="handleEdit" class="btn btn-success" >Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    }
  },
  created() {
    this.id = this.$route.params.id
    this.loadData()
  },
  methods: {
    loadData() {
      axios.get(`http://localhost:3000/heroes/${this.id}`)
        .then(res => {
          if (res.status === 200) {
            this.formData = res.data
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleEdit() {
      axios.patch(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then(res => {
          if (res.status === 200) {
            this.$router.push({
              name: 'heroes'
            })
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
