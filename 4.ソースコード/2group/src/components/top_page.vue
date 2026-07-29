<template>
  <div class="page-bg">
    <!-- トップページタイトル（デザイン案のヘッダー上ラベル） -->
    <div class="design-label">トップページ画面</div>

    <!-- 1. ヘッダーエリア -->
    <header class="header-bar">
      <!-- 左：ハンバーガーメニュー -->
      <button class="icon-btn menu-btn" aria-label="メニュー">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <!-- 中央：検索入力バー -->
      <div class="search-box">
        <div class="search-icon-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          type="text"
          class="search-input"
          placeholder="入力してください"
          v-model="searchQuery"
        />
      </div>

      <!-- 右：アクションエリア（お問い合わせ ＋ 通知ベル） -->
      <div class="header-actions">
        <!-- 追加: お問い合わせボタン -->
        <button
          class="contact-btn"
          @click="goToContact"
          aria-label="お問い合わせ"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
            ></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          <span class="contact-text">お問い合わせ</span>
        </button>

        <!-- 通知ベルアイコン -->
        <button class="icon-btn bell-btn" aria-label="通知">
          <!--newsできたら@click="goToNews"追加-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
        </button>
      </div>
    </header>

    <!-- 2. メインコンテンツエリア -->
    <main class="content-container">
      <h2 class="section-title">配信済み</h2>

      <!-- 動画カード一覧 -->
      <div class="card-grid">
        <div
          v-for="item in filteredContents"
          :key="item.id"
          class="content-card"
          :style="{ backgroundColor: item.color }"
          @click="goToMain(item)"
        >
          <span class="card-text">{{ item.title }}</span>
        </div>
      </div>

      <!-- 検索結果がヒットしなかった場合 -->
      <p v-if="filteredContents.length === 0" class="no-result">
        該当するコンテンツが見つかりませんでした。
      </p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 検索入力の状態
const searchQuery = ref("");

// 画像のデザインに合わせたデータ定義（タイトル ＋ 背景カラー）
const contents = ref([
  {
    id: 1,
    title: "PCの基本的な使い方",
    color: "#6fd3db", // 水色
  },
  {
    id: 2,
    title: "ZOOMの使い方",
    color: "#76dca9", // エメラルドグリーン
  },
  {
    id: 3,
    title: "ショートカットキー講座",
    color: "#9fa3f8", // ラベンダーブルー
  },
  {
    id: 4,
    title: "ファイルの操作",
    color: "#f5fa93", // パステルイエロー
  },
]);

// 検索キーワードでリアルタイムにフィルタリング
const filteredContents = computed(() => {
  if (!searchQuery.value.trim()) {
    return contents.value;
  }
  return contents.value.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase()),
  );
});

// お問い合わせ画面へ遷移する関数
const goToContact = () => {
  router.push("/inquiry");
};

const goToMain = (item) => {
  router.push("/main");
};

/*Newsできたらこれ追加
const goToNews = () => {
  router.push("/news");
};
*/
</script>

<style scoped>
/* 全体のスタイル・リセット */
.page-bg {
  min-height: 100vh;
  background-color: #f7f8f9;
  font-family:
    "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans",
    Meiryo, sans-serif;
  padding: 20px;
  box-sizing: border-box;
}

/* 画面左上のラベル */
.design-label {
  font-size: 14px;
  color: #a0a0a0;
  margin-bottom: 10px;
  font-weight: bold;
}

/* 1. ヘッダーバー */
.header-bar {
  background-color: #61cddb;
  border-radius: 16px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.icon-btn {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  transition: opacity 0.2s;
}

.icon-btn:hover {
  opacity: 0.7;
}

/* 検索バー */
.search-box {
  flex: 1;
  max-width: 650px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon-circle {
  position: absolute;
  left: 6px;
  width: 34px;
  height: 34px;
  background-color: #a0d8df;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
}

.search-input {
  width: 100%;
  height: 42px;
  border-radius: 21px;
  border: none;
  padding: 0 20px 0 48px;
  font-size: 15px;
  text-align: center;
  outline: none;
  color: #333;
}

.search-input::placeholder {
  color: #999;
}

/* 右側アクションエリア */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* お問い合わせボタン */
.contact-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: #ffffff;
  color: #333333;
  border: none;
  border-radius: 20px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.contact-btn:hover {
  background-color: #f0f0f0;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
}

/* 2. メインコンテンツエリア */
.content-container {
  max-width: 900px;
  margin: 40px auto 0;
  padding: 0 10px;
}

.section-title {
  font-size: 18px;
  font-weight: bold;
  color: #111;
  margin-bottom: 24px;
}

/* 2x2 のカードグリッド */
.card-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

/* カード共通スタイル */
.content-card {
  height: 160px;
  border-radius: 16px;
  border: 2.5px solid #5d5d5d;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.content-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.card-text {
  font-size: 18px;
  font-weight: 800;
  color: #000;
  text-align: center;
  line-height: 1.4;
}

.no-result {
  text-align: center;
  color: #666;
  margin-top: 40px;
  font-size: 15px;
}

/* スマホ表示対応 */
@media (max-width: 600px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .content-card {
    height: 130px;
  }

  /* スマホ等で画面が狭いときは文字を隠して丸型アイコンボタンに */
  .contact-text {
    display: none;
  }
  .contact-btn {
    padding: 8px;
    border-radius: 50%;
  }
}
</style>
