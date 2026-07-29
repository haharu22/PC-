<template>
  <div class="support-area">
    <h2>サポート</h2>

    <div class="notice">
      <h3>AIサポートチャット</h3>

      <div class="chat-window">
        <div class="message" v-for="(msg, index) in messages" :key="index">
          {{ msg }}
        </div>
      </div>

      <input v-model="question" placeholder="質問を入力してください" />

      <button @click="sendQuestion">送信</button>
    </div>

    <div class="notice">
      <h3>目安箱</h3>

      <textarea
        v-model="opinion"
        placeholder="ご意見・ご要望をご入力ください"
      ></textarea>

      <button @click="sendOpinion">送信</button>
    </div>

    <button class="back" @click="goBack">お知らせへ戻る</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const question = ref("");
const opinion = ref("");

const messages = ref(["こんにちは。何かお困りですか？"]);

const sendQuestion = () => {
  if (question.value === "") return;

  messages.value.push("あなた : " + question.value);

  let answer = "申し訳ありません。その質問にはまだ対応していません。";

  if (question.value.includes("動画")) {
    answer = "トップページから確認できます。";
  } else if (question.value.includes("パスワード")) {
    answer = "設定画面からパスワードを押して指示に従ってください。";
  } else if (question.value.includes("検索")) {
    answer = "検索蘭から知りたいワードを打ち込んでください";
  }

  messages.value.push("サポート : " + answer);

  question.value = "";
};

const sendOpinion = () => {
  if (opinion.value === "") return;

  alert("ご意見ありがとうございました。");

  opinion.value = "";
};

const goBack = () => {
  router.push("/notice");
};
</script>

<style scoped>
.support-area {
  width: 420px;

  margin: 40px auto;
}

.notice {
  border: 1px solid #1d9de8;

  border-radius: 12px;

  background: white;

  padding: 20px;

  margin-bottom: 20px;
}

.chat-window {
  height: 180px;

  overflow-y: auto;

  background: #f8f8f8;

  padding: 10px;

  margin-bottom: 10px;
}

.message {
  margin-bottom: 8px;
}

input,
textarea {
  width: 100%;

  box-sizing: border-box;

  margin-top: 10px;

  padding: 10px;
}

textarea {
  height: 120px;

  resize: none;
}

button {
  margin-top: 15px;

  width: 100%;

  height: 40px;

  border: none;

  border-radius: 10px;

  background: #1d9de8;

  cursor: pointer;
}

.back {
  background: #b8f0d7;

  color: white;
}
</style>
