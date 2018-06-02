<template>
  <div>
    <h2 class="sub-header">装备列表</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,013</td>
                <td>torquent</td>
                <td>per</td>
                <td>conubia</td>
                <td>nostra</td>
                <td>
                  <a href="edit.html">edit</a>
                  &nbsp;&nbsp;
                  <a href="javascript:window.confirm('Are you sure?')">delete</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
</template>

<script>
export default {
  name: 'zblist'
}
</script>

<style>
</style>
