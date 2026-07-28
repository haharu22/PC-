<template>
  <div class="contact-page">
    <div class="container">
      <!-- 入力フォームエリア（送信前だけ表示） -->
      <div v-if="!isSubmitted" id="formArea">
        <h1>お問い合わせ・不具合報告</h1>
        <p class="description">
          ご意見・不具合のご報告・その他のお問い合わせはこちらからお願いいたします。
        </p>

        <form @submit.prevent="handleSubmit">
          <!--種別選択-->
          <div class="form-group">
            <label for="category"
              >お問い合わせ種別<span class="badge-required">必須</span></label
            >
            <select id="category" name="category" required>
              <option value="" disabled selected>選択してください</option>
              <option value="bug">不具合・バグのご報告</option>
              <option value="inquiry">サービスに関するお問い合わせ</option>
              <option value="feature">ご要望・改善案</option>
              <option value="other">その他</option>
            </select>
          </div>

          <!--名前-->
          <div class="form-group">
            <label for="name"
              >お名前<span class="badge-required">必須</span></label
            >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="武庫川 花子"
              required
            />
          </div>

          <!--メアド-->
          <div class="form-group">
            <label for="email"
              >メールアドレス<span class="badge-required">必須</span></label
            >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
            />
          </div>

          <!--不具合時の利用環境 -->
          <div class="form-group">
            <label for="environment"
              >ご利用環境<span class="badge-optional">任意</span></label
            >
            <input
              type="text"
              id="environment"
              name="environment"
              placeholder="例：iPhone 17 (Safari) / Windows 11 (Chrome)"
            />
            <p class="help-text">
              ※不具合報告の場合は、使用デバイスやブラウザをご記入いただくとスムーズです。
            </p>
          </div>

          <!--詳細内容-->
          <div class="form-group">
            <label for="message"
              >お問い合わせ・ご報告内容<span class="badge-required"
                >必須</span
              ></label
            >
            <textarea
              id="message"
              name="message"
              placeholder="不具合の場合は「いつ」「どのような操作をした時に」「どうなったか」を詳しくご記入いただけますと幸いです。"
              required
            ></textarea>
          </div>

          <!--送信ボタン-->
          <button type="submit" class="submit-btn">送信する</button>
        </form>
      </div>

      <!-- 送信完了エリア-->
      <div v-else id="thanksArea">
        <h2>お問い合わせありがとうございます</h2>
        <p>
          送信が正常に完了いたしました。<br />内容を確認のうえ、必要に応じてご連絡いたします。
        </p>

        <!--トップページに戻るボタン-->
        <a href="top_page.vue" class="top-btn">トップページに戻る</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSubmitted = ref(false);

const handleSubmit = () => {
  isSubmitted.value = true;
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.contact-page {
  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans",
    Meiryo, sans-serif;
  background: linear-gradient(135deg, #e6f7f9 0%, #f4fafb 100%);
  min-height: 100vh;
  color: #333;
  line-height: 1.6;
  padding: 20px;
}

.container {
  max-width: 640px;
  margin: 40px auto;
  background: #ffffff;
  padding: 36px 32px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(128, 216, 225, 0.15);
  border: 3px solid #c2e5e8;
}

h1,
h2 {
  text-align: center;
  color: #1a5158;
}
h1 {
  font-size: 1.6rem;
  margin-bottom: 8px;
}
h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.description {
  text-align: center;
  font-size: 0.9rem;
  color: #5a777a;
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 20px;
}
label {
  display: block;
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 6px;
  color: #2c4447;
}
.badge-required {
  background-color: #ff6b6b;
  color: #fff;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 6px;
}
.badge-optional {
  background-color: #a8cfd3;
  color: #fff;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 6px;
}
input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #c2e5e8;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 0.2s;
  background-color: #fafdfd;
}
input:focus,
select:focus,
textarea:focus {
  outline: none;
  background-color: #ffffff;
  border-color: #52c2cd;
  box-shadow: 0 0 0 3px rgba(128, 216, 225, 0.35);
}
textarea {
  resize: vertical;
  min-height: 140px;
}
.help-text {
  font-size: 0.8rem;
  color: #719296;
  margin-top: 4px;
}

.submit-btn,
.top-btn {
  display: block;
  width: 100%;
  text-align: center;
  text-decoration: none;
  background-color: #80d8e1;
  color: #1a5158;
  border: none;
  padding: 14px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition:
    background-color 0.2s,
    transform 0.1s;
  margin-top: 10px;
  box-sizing: border-box;
}
.submit-btn:hover,
.top-btn:hover {
  background-color: #61cbd6;
}
.submit-btn:active,
.top-btn:active {
  transform: scale(0.99);
}

#thanksArea {
  text-align: center;
  padding: 20px 0;
}
#thanksArea p {
  color: #436366;
  margin-bottom: 30px;
}

@media (max-width: 480px) {
  .container {
    padding: 24px 16px;
  }
}
</style>
