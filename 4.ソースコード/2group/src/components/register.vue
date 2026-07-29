<template>
  <div class="register-page">
    <div class="container">
      <h1>新規登録</h1>

      <input type="text" placeholder="氏名" />
      <input type="email" placeholder="メールアドレス" />
      <input type="password" placeholder="パスワード" />
      <input type="password" placeholder="パスワード（確認）" />

      <button @click="register">登録する</button>

      <br /><br />

      <router-link to="/">ログイン画面へ戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    register() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.register-page {
  text-align: center;
}

.container {
  width: 350px;
  margin: 80px auto;
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

input {
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 95%;
  padding: 10px;
  background: #80d8e1;
  color: #333;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #6bc7d0;
}

a {
  text-decoration: none;
  color: #4a9da6;
}

a:hover {
  text-decoration: underline;
}
</style>
