<template>
  <div class="app-container">
    <!-- ヘッダー -->
    <header class="header">
      <i class="fa-solid fa-bars menu-icon"></i>
      <div class="search-bar-container">
        <div class="search-icon-btn">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <input type="text" class="search-input" placeholder="例: ショートカット、スクショなど" />
      </div>
      <i class="fa-regular fa-bell bell-icon"></i>
    </header>

    <!-- メインコンテンツ -->
    <main class="main-content">
      <!-- 左側：コース・STEPナビゲーション -->
      <aside class="sidebar">
        <div class="course-title-badge">PC基本スキル</div>

        <div class="steps-container">
          <!-- STEP 1 -->
          <div class="step-card" :class="{ active: currentStep === 1 }" @click="scrollToStep(1)">
            <div class="step-label">STEP1:</div>
            <div class="step-title">ショートカットキー</div>
          </div>

          <!-- STEP 2 -->
          <div class="step-card" :class="{ active: currentStep === 2 }" @click="scrollToStep(2)">
            <div class="step-label">STEP2:</div>
            <div class="step-title">ファイル＆画面管理</div>
          </div>

          <!-- STEP 3 -->
          <div class="step-card" :class="{ active: currentStep === 3 }" @click="scrollToStep(3)">
            <div class="step-label">STEP3:</div>
            <div class="step-title">トラブル＆効率化</div>
          </div>

          <!-- STEP 4 -->
          <div class="step-card" :class="{ active: currentStep === 4 }" @click="scrollToStep(4)">
            <div class="step-label">STEP4:</div>
            <div class="step-title">実戦！スクショ活用</div>
          </div>
        </div>

        <!-- 戻るボタン -->
        <div class="back-button-container">
          <button class="back-btn">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
      </aside>

      <!-- 右側：動画リスト（指定の動画までスクロール） -->
      <section class="video-area">
        <!-- STEP 1 用動画 -->
        <div class="video-card" ref="step1">
          <div class="video-thumbnail">
            <div class="play-icon"></div>
          </div>
          <div class="video-info">
            <div class="video-title">STEP1：ショートカットキー</div>
          </div>
        </div>

        <!-- STEP 2 用動画 -->
        <div class="video-card" ref="step2">
          <div class="video-thumbnail">
            <div class="play-icon"></div>
          </div>
          <div class="video-info">
            <div class="video-title">STEP2：ファイル管理 (Alt + Tab)</div>
          </div>
        </div>

        <!-- STEP 3 用動画 -->
        <div class="video-card" ref="step3">
          <div class="video-thumbnail">
            <div class="play-icon"></div>
          </div>
          <div class="video-info">
            <div class="video-title">STEP3：全選択と上書き保存 (Ctrl + A / S)</div>
          </div>
        </div>

        <!-- STEP 4 用動画 -->
        <div class="video-card" ref="step4">
          <div class="video-thumbnail">
            <div class="play-icon"></div>
          </div>
          <div class="video-info">
            <div class="video-title">STEP4：範囲選択と連続コピー</div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'MainView',
  data() {
    return {
      currentStep: 1, // 選択されているSTEPの番号
    };
  },
  methods: {
    // スクロール
    scrollToStep(stepNumber) {
      this.currentStep = stepNumber;
      const targetElement = this.$refs[`step${stepNumber}`];

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    },
  },
};
</script>

<style scoped>
/* 全体のリセット、フォント定義 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Hiragino Sans', 'Meiryo', sans-serif;
}

/* アプリ全体コンテナ */
.app-container {
  width: 900px;
  background-color: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  margin: 40px auto;
}

/* 上部ヘッダー */
.header {
  background-color: #80d8de;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.header .menu-icon {
  font-size: 24px;
  color: #1a4f54;
  cursor: pointer;
}

.search-bar-container {
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon-btn {
  position: absolute;
  left: 2px;
  width: 38px;
  height: 38px;
  background-color: #a8e6ea;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1a4f54;
  font-size: 18px;
  z-index: 1;
  cursor: pointer;
}

.search-input {
  width: 100%;
  height: 42px;
  padding-left: 48px;
  padding-right: 16px;
  border: none;
  border-radius: 21px;
  background-color: #ffffff;
  font-size: 14px;
  text-align: center;
  color: #333;
  outline: none;
}

.bell-icon {
  font-size: 24px;
  color: #1a4f54;
  cursor: pointer;
}

/* メインコンテンツエリア */
.main-content {
  display: flex;
  padding: 30px 24px;
  gap: 24px;
  position: relative;
  height: 520px;
}

/* 左側サイドバー（固定） */
.sidebar {
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
}

.course-title-badge {
  background-color: #80d8de;
  padding: 14px 16px;
  border-radius: 12px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #000;
}

.steps-container {
  background-color: #80d8de;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.step-card {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 12px 14px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.step-card:hover {
  background-color: #f0fdfa;
}

/* 選択中のSTEPカードの枠線と背景色 */
.step-card.active {
  border-color: #1a4f54;
  background-color: #e0f7f9;
}

.step-label {
  font-size: 10px;
  font-weight: bold;
  color: #000;
  margin-bottom: 2px;
}

.step-title {
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

.back-button-container {
  margin-top: 4px;
}

.back-btn {
  width: 50px;
  height: 50px;
  background-color: #80d8de;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
}

/* 右側：動画コンテンツエリア */
.video-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  padding-right: 12px;
  max-height: 100%;
}

/* スクロールバーデザイン */
.video-area::-webkit-scrollbar {
  width: 8px;
}

.video-area::-webkit-scrollbar-track {
  background-color: #e0e0e0;
  border-radius: 4px;
}

.video-area::-webkit-scrollbar-thumb {
  background-color: #a8a8a8;
  border-radius: 4px;
}

.video-area::-webkit-scrollbar-thumb:hover {
  background-color: #888888;
}

.video-card {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  overflow: hidden;
  background-color: #ffffff;
  flex-shrink: 0;
}

.video-thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #80d8de;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.play-icon {
  width: 0;
  height: 0;
  border-top: 18px solid transparent;
  border-bottom: 18px solid transparent;
  border-left: 32px solid #ffffff;
  margin-left: 5px;
}

.video-info {
  background-color: #dcdcdc;
  padding: 10px 16px;
  border-top: 1px solid #c0c0c0;
}

.video-title {
  font-size: 14px;
  font-weight: bold;
  color: #000000;
}
</style>
