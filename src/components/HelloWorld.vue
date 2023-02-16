<template>
  <div class="header_top">
    <div class="header_top_img">
      <img src="../assets/logo.png">
    </div>
    <div class="header_top_help">
        <a v-for ="item in nav_Top_text">{{ item.nav_name || '图标加载失败'}}</a>
    </div>
  </div>
  <div class="header_top_nav">
      <router-link v-for="item in nav" :to="item.nav_adress" > {{item.nav_name || '加载失败'}}</router-link>
    </div>
</template>
<script lang="ts" setup>
import {Ref, ref} from "vue";
import axios from "axios";

interface header_nav {
  nav_adress:String,
  nav_name:String
}
const nav:Ref<header_nav[]> = ref([])
const nav_Top_text:Ref<header_nav[]> = ref([])

axios.get('http://localhost:3000/api/nav').then((res)=>{
  if (res.data.code == 200) {
    for (let i = 0;res.data.data.nav.length > i; i++) {
      nav.value.push(res.data.data.nav[i])
    }
    for (let i = 0 ; res.data.data.nav_top_text.length>i ; i++){
      nav_Top_text.value.push(res.data.data.nav_top_text[i])
    }
  }
})
</script>
<style lang="css">
.header_top{
  display: flex;
  justify-content: center;
  width:100%;
  height: 150px;
}
.header_top_img{
  height: 100%;
  width: 400px;
}
.header_top_img img{
  max-height: 70%;
}
.header_top_help{
text-align: center;
  width: 500px;
  height: 150px;
}
.header_top_help > a{
  margin-left:30px;
  line-height: 150px;
}
.header_top_help_right{
  margin-top: 40px;
  float: right;
}
.header_top_help_right >div> a{
  margin-left: 10px;
}
.header_top_nav{
  display: flex;
  justify-content: center;
  background:black;
  height: 60px;
  color: white;
  line-height: 60px;
}
.header_top_nav > a {
  margin-left: 30px;
  text-decoration: none;
  font-weight: bold;
  color: white;
  width: 100px;
  text-align: center;
}
.header_top_nav > a.router-link-exact-active {
  color: #42b983;
  background: rgb(38, 17, 16);
}

</style>
