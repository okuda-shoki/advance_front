<template>
<div>
  <HeaderAuth />
  <div class="card">
    <p>login</p>
    <div class="card_header">
      <div class="card_email">
        <img src="../img/mail.png" alt="メール" class="img_mail">
        <input type="email" placeholder="Email" v-model="email">
      </div>
      <div class="card_password">
        <img src="../img/kagi.png" alt="ロック" class="img_password">
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <div class="button_a">
        <button @click="login">ログイン</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue";
export default{
  data(){
    return{
      email:"",
      password:""
    }
  },
  methods:{
    login(){
      this.$store.dispatch("login",{
        email:this.email,
        password:this.password
      });
    }
  },
  components:{
    HeaderAuth
  },
};
</script>


<style scoped>
input{
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid #000;
  width: 100%;
  margin-left:10px;
}

.card{
  width: 30%;
  background-color: rgb(255, 255, 255);
  margin: 100px auto;
  padding: 15px 0 15px;
}

.card p{
  background-color: rgb(255, 255, 255);
  font-size: 32px;
  text-align: center;
  margin-top: 20px;
}

.card_header{
  text-align: center;
  padding-top:20px;
}

.card_email,.card_password{
  width: 80%;
  display: flex;
  margin: 15px auto;
}

.img_mail,.img_password{
  font-size: 38px;
}

.button_a{
  width: 80%;
  text-align:right;
  margin: 20px auto;
}

button{
  border-radius: 10px;
  background-color: #339900;
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  padding: 10px 8px ;
}

button:hover{
  border: 2px solid #000;
  font-family: 'Noto Sans JP', sans-serif;
  color: #fff;
  transition: 0.2s;
  opacity: 0.9;
}

</style>