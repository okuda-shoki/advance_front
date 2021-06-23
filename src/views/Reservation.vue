<template>
  <div>
   <LogoHeader/>
    <div class="right">
      <p class="title">予約状況</p>
      <div class="right_content" v-for="data in datas" :key="data.id">
        <div class="reservation flex">
          <div class="reservation_small flex">
            <img src="../img/tokei8.png" class="tokei" alt="tokei">
            <p>予約{{data.figure}}</p>
          </div>
          <img src="../img/batu.png" class="batu" alt="取り消し">
        </div>
        <div class="reservation_content">
          <p>Shop:<span>{{data.name}}</span></p>
          <p>Date:<span>{{data.date}}</span></p>
          <p>Time:<span>{{data.time}}</span></p>
          <p>Number:<span>{{data.number}}</span></p>
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
      datas:[
        {
          figure:1,
          name:"仙人",
          date:"2011-11-15",
          time:"15:00",
          number:1
        },
         {
          figure:2,
          name:"仙人",
          date:"2011-11-15",
          time:"15:00",
          number:1
        }
      ]
    }
  }
}
</script>


<style scoped>
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

.right{
  width:40%;
  margin: 0 auto;
}

.flex{
  display: flex;
}

.title{
  font-size: 32px;
  margin: 30px 0px 15px 0px;
  text-align: center;
  font-family: 'Playfair Display', serif,bold;
}
.right_content{
  border:1px solid#000;
  background: #99cc65;
  border-radius:5px;
  margin-bottom: 15px;
}


.reservation{
  font-size:18px;
  border-radius:3px 3px 0px 0px;
  justify-content: space-between;
  margin:15px 15px 0px 15px;
}

.reservation_content{
  margin: 0 auto;
  padding: 5px 0px 20px 0px;
}


.reservation_small{
  align-items: center;
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

.reservation_small img{
  margin-right: 10px;
}

span{
  margin-left: 60px;
}

.tokei,.batu{
  width: 32px;
  height: 32px;
}
</style>