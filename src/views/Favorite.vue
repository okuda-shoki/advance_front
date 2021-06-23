<template>
  <div>
    <LogoHeader/>
    <div class="title">
      <p class="title_text">お気に入り店舗</p>
      <div class="shop_inf grid">
        <div class="item" v-for="shop in shops" :key="shop.id">
          <img class="shop_back" :src="shop.img" alt="店の画像">
          <div class="shop_content">
            <h3>{{shop.name}}</h3>
            <div class="shop_length">
              <p>#{{shop.area}}</p>
              <p class="shop_genre">#{{shop.genre}}</p>
            </div>
            <div class="shop_length2">
              <button>詳しくみる</button>
              <img src="../img/white_heart 2.png" v-if="show" @click="change" alt="白ハート">
              <img src="../img/red_heart 1.png" v-else @click="change" alt="赤ハート">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from '../components/LogoHeader.vue'
export default {
  components:{
    LogoHeader
  },
  data(){
    return{
      shops:[
        {
          id:1,
          img:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
          name:"仙人",
          area:"東京都",
          genre:"寿司"
        },
        {
          id:2,
          img:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
          name:"仙人",
          area:"東京都",
          genre:"寿司"
        },
        {
          id:3,
          img:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
          name:"仙人",
          area:"東京都",
          genre:"寿司"
        },
        {
          id:4,
          img:"https://coachtech-matter.s3-ap-northeast-1.amazonaws.com/image/sushi.jpg",
          name:"仙人",
          area:"東京都",
          genre:"寿司"
        },
      ],
      show:true
    }
  },
 methods:{
      change(){
        this.show=!this.show
      }
    }
}
</script>

<style scoped>
.title_text{
  text-align: center;
  font-size: 32px;
  margin-top: 30px;
  font-family: 'Playfair Display', serif,bold;
  }

.back{
  background: #fff;
  padding: 10px;
}

.header{
  display: flex;
  align-items: center;
  width: 90%;
  margin: 0px auto;
}


.logo{
  width: 60px;
  cursor: pointer;
}

.header p{
  color: #339900;
  font-family: 'Playfair Display', serif,bold;
  font-size:32px;
  margin-left: 15px;
}


.grid{
  display: grid;
  gap: 18px;
  grid-template-columns: 1fr 1fr 1fr;
  width: 70%;
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
