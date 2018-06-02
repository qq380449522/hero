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
      <button type="submit" class="btn btn-success" @click.prevent="handleAdd">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    }
  },
  methods: {
    handleAdd() {
      this.$http.post('/heroes', this.formData)
        .then(res => {
          if (res.status === 201) {
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
