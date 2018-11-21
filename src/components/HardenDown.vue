<template>  
  <div class="hello">
    <img src="../assets/harden.a2c3119.jpg">
    <h1>{{ msg }}</h1>

<el-row>
  <el-col :span="12"><div class="grid-content bg-purple">eeessssss</div></el-col>
  <el-col :span="12"><div class="grid-content bg-purple-light">aaaqqqq</div></el-col>
</el-row>
  </div>
</template>

<script>
export default {
  name: 'HardenDown',
  data () {
    return {
      msg: '這是連結二，所以 Harden 躺著'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello img {
    transform: perspective(600px) rotateX(80deg);
  }

</style>