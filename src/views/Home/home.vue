<template>
  <div class="Home">
    <div class="image">
      <img src="https://static.50yc.com/info/2020/12/32476cc0-42ac-43c0-9d17-770947ce377a_org.jpg">
    </div>
    <div class="Home_nav">
      <div class="Home_nav_text">
        <p>产品与服务 <a style="color: rgb(177,169,169)">/ Proudct & Service</a></p>
      </div>
    </div>
    <div class="Home_mark">
      <div v-for="item in icon" :key="item.id" class="Home_mark_01">
        <div class="Home_mark_icon" v-html="item.icon_adress">
        </div>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import {Ref, ref} from "vue";
import axios from "axios";

interface icon {
  id: number,
  icon_adress: String,
  icon_name: string,
}

const icon: Ref<icon[]> = ref([])
axios.get('http://localhost:3000/api/icon').then(res => {
  if (res.data.code == 200) {
    for (let i = 0; res.data.data.length > i; i++) {
      icon.value.push(res.data.data[i])
    }
  }
})

</script>
<style>
.image {
  display: flex;
  justify-content: center;
}

.image > img {
  height: 300px;
}

.Home_nav {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
}

.Home_nav > .Home_nav_text > p {
  font-size: 20px;
  height: 40px;
  text-align: left;
  border-bottom: 1px solid rgb(177, 169, 169);
}

.Home_nav_text {
  width: 800px;
}

.Home_mark {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 300px;
}

.Home_mark_01 {
  border-radius: 50%;
  background: yellow;
  width: 150px;
  height: 150px;
  float: left;
  margin-left: 25px;
}

.Home_mark_icon {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
</style>
