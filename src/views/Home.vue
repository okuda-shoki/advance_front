<template>
<div>
<div class="all">
 <div class="header flex">
    <div class="left flex">
      <img src="../img/logo.svg" class="logo" alt="ロゴ">
      <p class="logo_text">Rese</p>
    </div>
    <div class="right flex_length">
      <div class="right_padding flex_length">
      <div class="area_search">
      <select name="area">
        <option v-for="area in areas" :key="area.id">{{area.name}}</option>
      </select>
      </div>
      <div class="genre_search">
        <select name="genre">
          <option v-for="genre in genres" :key="genre.id">{{genre.name}}</option>
        </select>
      </div>
      <div class="shop_search">
        <img src="../img/glasses.png" class="search" alt="検索アイコン">
        <input type="text" placeholder="Search...">
      </div>
      </div>
    <div class="user_link">
      <div class="link_text flex_length">
    <p class="iine" @click="$router.push('/favorite')"><span class="iine_span">いいね</span></p>
    <p class="yoyaku" @click="$router.push('/reservation')">予約確認</p>
      </div>
    </div>
      <div class="logout" @click="$store.dispatch('logout')">
        <p>ログアウト</p>
      </div>
    </div>
  </div>
</div>
<ContentAuth/>
</div>
</template>

<script>
import ContentAuth from "../components/ContentAuth.vue";
export default {
  components:{
    ContentAuth
  },
  data(){
    return{
       areas:[
        {name:"All area",
        id:1},
        {name:"東京都",
        id:2},
        {name:"大阪府",
        id:3},
        {name:"福岡県",
        id:4}
      ],
      genres:[
        {name:"All genres",
        id:1},
        {name:"寿司",
        id:2},
        {name:"焼肉",
        id:3},
        {name:"居酒屋",
        id:4},
        {name:"イタリアン",
        id:5},
        {name:"ラーメン",
        id:6},
      ],
    }
  }
}
</script>

<style scoped>
.all{
  background-color: #fff;
  padding: 10px;
}

.flex{
  display: flex;
  justify-content: space-between;
}

.flex_length{
  display: flex;
}

.header{
  align-items: center;
  width: 90%;
  margin: 0px auto;
}

img{
  width: 36px;
}

input{
  border: none;
  outline: none;
  background-color: rgb(255, 255, 255);
}

.logo{
  width: 60px;
  cursor: pointer;
}


.left{
  align-items: center;
}

.logo_text{
  color: #339900;
  font-family: 'Playfair Display', serif,bold;
  font-size:32px;
  margin-left: 15px;
}

.right{
  width: 80%;
  align-items: center;
}

.right_padding{
  box-shadow:2px 2px 4px rgb(0, 0, 0,.3);
  width: 80%;
  padding:5px;
}


.area_search,.genre_search,.shop_search{
  display: flex;
}


select{
  border: none;
  outline: none;
  width: 150px;
  padding:10px;
  border-right:1px solid rgb(136, 136, 136);
  background-color: rgb(255, 255, 255);
}

.shop_search{
  align-items: center;
  margin-left: 10px;
}

.search{
  width: 18px;
  height: 18px;
}

.user_link{
  background:#339900;
  padding: 15px;
  border-radius:5px;
  margin-left: 15px;
  width: 20%;
}

.link_text{
  font-family: 'Playfair Display', serif,bold;
  font-size: 18px;
}


.iine{
  border-right: 1px solid; 
  padding-right: 5px;
}

.yoyaku{
  margin-left: 5px;
}

.iine_span:hover,.yoyaku:hover{
  opacity:0.5;
  color: #fff;
}

.logout{
  width: 15%;
  font-size: 18px;
  background:#339900;
  font-family: 'Playfair Display', serif,bold;
  text-align: center;
  border-radius:5px;
  padding: 15px;
  margin-left: 15px;
}

.logout p:hover{
  opacity:0.5;
  color: #fff;
}

</style>
