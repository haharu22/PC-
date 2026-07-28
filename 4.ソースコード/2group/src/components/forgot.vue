<template>
  <div class="forgot-page">
    <div class="container">
      <h1>パスワード再設定</h1>

      <p>登録したメールアドレスを入力してください。</p>

      <input type="email" v-model="email" placeholder="メールアドレス" />

      <button @click="resetPassword">送信</button>

      <br /><br />

      <router-link to="/">ログイン画面へ戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    resetPassword() {
      if (this.email === "") {
        alert("メールアドレスを入力してください。");
        return;
      }

      alert("パスワード再設定用のメールを送信しました。（デモ）");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.forgot-page {
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
