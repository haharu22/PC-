<template>
  <div class="login-page">
    <div class="container">
      <h1>PCソフト解説ガイド</h1>

      <p>
        初心者でも安心！<br />
        動画で学べるPC基本操作解説ソフト
      </p>

      <!-- Vueでは @submit.prevent で送信処理を横取りします -->
      <form @submit.prevent="handleLogin">
        <input
          type="email"
          v-model="email"
          placeholder="メールアドレス"
          required
        />
        <input
          type="password"
          v-model="password"
          placeholder="パスワード"
          required
        />

        <button type="submit">ログイン</button>
      </form>

      <div class="links">
        <!-- htmlの <a> の代わりに router-link を使います -->
        <router-link to="/register">新規登録</router-link>
        <router-link to="/forgot">パスワードを忘れた方</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.email === "" || this.password === "") {
        alert("メールアドレスとパスワードを入力してください。");
      } else {
        this.$router.push("/top"); // ※ルーターで設定しているトップページのパスに変えてね
      }
    },
  },
};
</script>

<style scoped>
.login-page {
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
  color: #4a9da6;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.links {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
}
</style>
