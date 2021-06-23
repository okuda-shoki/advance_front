<template>
  <div>
    <div class="shop_inf grid">
    <div class="item" v-for="shop in shops" :key="shop.id">
      <img class="shop_back" :src="shop.img" alt="店の画像">
      <div class="shop_content">
      <h3>{{shop.shopname}}</h3>
      <div class="shop_length">
      <p>#{{shop.area}}</p>
      <p class="shop_genre">#{{shop.genre}}</p>
      </div>
      <div class="shop_length2">
      <button @click="$router.push({
        path:'/detail/'+shops.items.id,
        params:{id:shops.items.id},
      })">詳しくみる</button>
        <img src="../img/white_heart 2.png" v-if="show" @click="change" alt="白ハート">
        <img src="../img/red_heart 1.png" v-else @click="change" alt="赤ハート">
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:["id"],
  data(){
    return{
      shops:[],
      path:true
    }
  },
    methods:{
      async getshops(){
      await axios.get("http://127.0.0.1:8000/api/shop")
      .then((response)=>{
        this.shops=response.data.data
      })
      },
    },
    created(){
      this.getshops();
    }
}
</script>

<style scoped>
.grid{
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 90%;
}

.shop_inf{
  margin: 30px auto;

}

img{
  width: 36px;
}

.item{
  background-color: #fff;
  border-radius: 10px;
}

.shop_back{
  width: 100%;
  height:150px;
  background-size:cover;
  border-radius: 10px 10px 0px 0px
}

.shop_content{
  margin: 20px;
}

.shop_length{
  display: flex;
}

.shop_length2{
  display: flex;
  justify-content: space-between;
  padding-top:15px;
  padding-bottom: 20px;
}

h3{
  font-size: 20px;
}

.shop_length p{
  font-size: 13px;
  margin-top: 10px;
}

.shop_genre{
  margin-left: 5px;
}

button{
  border-radius: 10px;
  background-color:#339900;
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 8px 5px ;
}

button:hover{
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  color: #fff;
  transition: 0.2s;
  opacity: 0.9;
}
</style>
