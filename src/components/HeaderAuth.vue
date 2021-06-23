<template>
<div class="all">
  <div class="header flex">
    <div class="left flex">
      <img src="../img/logo.svg" class="logo" alt="ロゴ">
      <p class="logo_text">Rese</p>
    </div>
    <div class="right flex">
      <p class="right_logo" @click="$router.push('/signup')">新規登録</p>
      <p class="right_login" @click="$router.push('/')">ログイン</p>
    </div>
  </div>
</div>
</template>

<style scoped>
.all{
  background-color: rgb(255, 255, 255);
  padding: 10px;
}

.flex{
  display: flex;
  justify-content: space-between;
}

.header{
  align-items: center;
  width: 90%;
  margin: 0 auto;
}

img{
  width: 30px;
}

.logo{
  width: 60px;
  cursor: pointer;
  
}

.left{
  align-items: center;
}

.logo_text{
  color:#339900;
  font-family: 'Playfair Display', serif,bold;
  font-size:32px;
  margin-left: 15px;
}

.right{
  margin: 20px;
}

.right_logo{
  margin-right: 15px;
  border-right:1px solid #339900 ;
  padding-right: 20px;
  color: #339900;
  font-size: 18px;
  font: bold;
}

.right_login{
  color:#339900;
  font-size: 18px;
  font: bold;
}
</style>