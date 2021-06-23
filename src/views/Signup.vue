<template>
<div>
  <HeaderAuth/>
  <div class="card">
    <p>Registration</p>
    <div class="form">
      <div class="form_content">
      <img src="../img/hito.png" alt="人型">
      <input type="text" placeholder="Username" v-model="name">
      </div>
       <div class="form_content">
      <img src="../img/mail.png" alt="メール">
      <input type="email" placeholder="Email" v-model="email">
      </div>
       <div class="form_content">
      <img src="../img/kagi.png" alt="ロック">
      <input type="password" placeholder="Password" v-model="password">
      </div>
      <div class="button_t">
      <button @click="auth">登録</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue";
import axios from "axios";
export default {
  data(){
    return{
      name:"",
      email:"",
      password:"",
    }
  },
    components:{
      HeaderAuth
    },
    methods:{
    auth(){
      axios
      .post("http://127.0.0.1:8000/api/register",{
        name:this.name,
        email:this.email,
        password:this.password
      })
      .then(response=>{
        console.log(response);
        this.$router.replace("/");
      })
      .catch(error=>{
        alert(error)
      });
    }
  }
};
</script>

<style scoped>
.card{
 width: 30%;
  background-color: rgb(255, 255, 255);
  margin: 100px auto;
  padding: 15px 0 15px;
}

input{
  border: none;
  background: transparent;
  outline: none;
  border-bottom: 1px solid #000;
  margin-left:10px;
  width: 100%;
}

img{
  vertical-align: bottom;
}

.card p{
  background-color: #fff;
  font: bold;
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
}

.form{
  padding-top:15px;
}

.form_content{
  display: flex;
  margin: 15px auto;
  width: 80%;
}

.button_t{
  width: 80%;
  margin: 10px auto;
  text-align: right;
}

button{
  border-radius: 10px;
  background-color: #339900;
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 10px 20px ;
}

button:hover{
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  color: #fff;
  transition: 0.2s;
  opacity: 0.9;
}
</style>
