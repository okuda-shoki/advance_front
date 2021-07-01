<template>
  <div>
    <LogoHeader/>
    <div class="reservation_all">
      <div class="flex">
        <div class="left" >
          <div class="left_name flex">
            <div class="back_img">
              <img src="../img/back.png"  @click="$router.push('/home')">
            </div>
            <h3 class="shop_name">{{shop_d.shopname}}</h3>
          </div>
          <div class="shop_content">
            <img :src="shop_d.img" class="shop_img">
            <div class="shop_length flex">
              <p>#{{shop_d.area.area}}</p>
              <p class="shop_genre">#{{shop_d.genre.genre}}</p>
            </div>
            <p class="shop_description">{{shop_d.description}}</p>
          </div>
        </div>
        <div class="right">
          <div class="reservation">
            <p>予約</p>
          </div>
          <div class="shop_reservation">
            <div class="total">
              <label for="plan">
                <img src="../img/yotei.png" alt="カレンダー">
              </label>
              <input type="date" id="plan" v-model="date">
            </div>
            <div class="total">
              <label for="zikan">
                <img src="../img/tokei8.png" alt="時計" class="tokei_img">
              </label>
              <select name="time" id="zikan" v-model="time">
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
             </select>
           </div>
           <div class="total">
             <label for="kazu">
               <img src="../img/hito.png" alt="人型">
             </label>
             <select name="number" id="kazu" v-model="number">
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
            </select>
           </div>
          </div>
          <div class="reservation_content">
            <p>Shop:<span>{{shop_d.shopname}}</span></p>
            <p>Date:<span>{{date}}</span></p>
            <p>Time:<span>{{time}}</span></p>
            <p>Number:<span>{{number}}</span></p>
         </div>
         <div class="reservation_com">
           <button>予約する</button>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoHeader from '../components/LogoHeader.vue'
import axios from "axios";
export default {
  props:["id"],
  components:{
    LogoHeader,
  },
  data(){
    return{
      shop_d:[],
      name:"",
      date:"",
      time:"",
      number:""
    }
  },
  methods:{
    detail(){
      axios
      .get("http://127.0.0.1:8000/api/shop/"+this.id)
      .then((response)=>{
        this.shop_d=response.data.item
      });
    },
  },
    created(){
      this.detail();
    }
}
</script>


<style scoped>
.flex{
  display: flex;
}

.reservation_all{
  width: 80%;
  margin: 20px auto;
}


.left{
  width: 80%;
  margin-right: 25px;
}

.flex{
  display: flex;
}

.left_name{
  align-items: center;
}

.back_img{
  width: 25px;
  height: 25px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 6px rgb(0, 0, 0);
  text-align: center;
  line-height: 32px;
}

.shop_name{
  margin-left: 15px;
  font-size: 32px;
}

.shop_img{
  width: 100%;
  margin-top: 15px;
}

.shop_length{
  margin-top: 15px;
}

.shop_genre{
  margin-left: 10px;
}

.shop_description{
  margin-top: 15px;
}

.right{
  border:1px solid#000;
  background: #fff;
  border-radius:5px;
  width:80%;
  height: 30%;
  margin-top:47px;
}

.reservation{
  text-align: center;
  font-size: 32px;
  border-radius:3px 3px 0px 0px;
  background: #99cc65;
  padding: 10px 0px 10px 0px;
}


.shop_reservation{
  margin: 20px auto;
}

input{
  margin-left: 15px;
}

select{
  width: 80%;
  margin-left: 15px;
}

input,select{
  vertical-align:8px;
}

.total{
  margin-left: 15px;
  margin-top: 10px;
}

.reservation_content{
  background: #99cc65;
  width: 60%;
  margin: 0 auto;
  padding: 5px 0px 20px 0px;
}

.logo_text{
  color: #99cc65;
  font-family: 'Playfair Display', serif,bold;
  font-size:32px;
  margin-left: 15px;
}

.tokei_img{
  width: 32px;
  height: 32px;
}

.reservation_content p{
  margin-left: 15px;
  margin-top: 15px;
}

span{
  margin-left: 60px;
}

button{
  margin-top: 35px;
  width: 100%;
  border: none;
  background-color: #99cc65;
  font-family: 'Noto Sans JP', sans-serif;
  border-radius: 0px 0px 4px 4px;
  padding: 15px 0px 15px 0px;
  font-size: 15px;
}

button:hover{
  transition: 0.2s;
  opacity: 0.9;
}
</style>