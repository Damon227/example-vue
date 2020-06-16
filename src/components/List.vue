<template>
  <div>
    <el-table :data="messages" :row-class-name="tableRowClassName">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="telephoneNo" label="电话号码"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else {
        return 'success-row'
      }
    },
  },
  data() {
    return {
      messages: [
        {
          name: 'jack',
          age: 21,
          telephoneNo: '021-235252',
        },
        {
          name: 'rose',
          age: 29,
          telephoneNo: '021-945354',
        },
        {
          name: 'yahu',
          age: 19,
          telephoneNo: '021-123643',
        },
        {
          name: 'mark',
          age: 20,
          telephoneNo: '021-830235',
        },
      ],
    }
  },
})
</script>

<style>
.el-table .warning-row {
  background-color: oldlace;
}

.el-table .success-row {
  background-color: #f0f9eb;
}
</style>
