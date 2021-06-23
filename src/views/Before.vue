<template>
  <div>
    <HeaderAuth/>
    <div class="card">
      <div class="form">
        <p>会員登録ありがとうございます</p>
        <button @click="$router.push('/')">ログインする</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth"
export default {
  components:{
    HeaderAuth
  }
}
</script>

<style scoped>
.card{
  width: 30%;
  background-color: rgb(255, 255, 255);
  margin: 100px auto;
}

.form{
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
}

p{
  font-size: 24px;
}

button{
  border-radius: 10px;
  background-color: #339900;
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 10px 8px ;
  margin-top: 15px;
}

button:hover{
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  color: #fff;
  transition: 0.2s;
   padding: 10px 8px;
}
</style>
