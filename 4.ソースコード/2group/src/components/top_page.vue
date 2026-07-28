<template>
  <!-- 1. 画面一番上の検索バー -->
  <header class="header">
    <div class="search-container">
      <!-- v-modelで入力された文字を「searchQuery」と連動させます -->
      <input 
        type="text" 
        class="search-input" 
        placeholder="動画を検索..." 
        v-model="searchQuery"
      >
      <button class="search-button">検索</button>
    </div>
  </header>

  <!-- 2. 動画風カードが並ぶエリア -->
  <main class="container">
    <div class="video-grid">

      <!-- v-forを使って、絞り込まれた動画データを自動ループ出力します -->
      <div 
        class="video-card" 
        v-for="video in filteredVideos" 
        :key="video.id"
      >
        <div class="thumbnail">
        <img src="/images/play-button.png" alt="再生" class="play-image">
        </div>
        <div class="video-info">
          <h3 class="video-title">{{ video.title }}</h3>
          <p class="video-author">{{ video.author }}</p>
        </div>
      </div>

      <!-- 検索結果がゼロ件だった場合のメッセージ -->
      <p v-if="filteredVideos.length === 0" class="no-result">
        見つかりませんでした。
      </p>

    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

// 検索窓の文字を管理する状態（データ）
const searchQuery = ref('')

// 動画のデータを1つのリスト（配列）にまとめました
const videos = ref([
  { id: 1, title: 'PCの基本的な使い方 1', author: 'チャンネル名 A' },
  { id: 2, title: 'Zoomの使い方', author: 'チャンネル名 B' },
  { id: 3, title: 'ショートカットキー講座', author: 'チャンネル名 C' },
  { id: 4, title: 'ファイルの操作', author: 'チャンネル名 D' }
])

// 検索文字に合わせて、動画を自動で絞り込む仕組み（算出プロパティ）
const filteredVideos = computed(() => {
  return videos.value.filter(video => {
    return video.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  })
})
</script>

<style scoped>
/* style.css の中身をそのまま移植しました */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.header {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 16px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}

.search-container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 8px;
}

.search-input {
  flex: 1;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #38bdf8;
  border-radius: 24px;
  outline: none;
}

.search-button {
  padding: 12px 24px;
  font-size: 15px;
  background-color: #0284c7;
  color: white;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-weight: bold;
}

.container {
  max-width: 1000px;
  margin: 30px auto;
  padding: 0 20px;
}

.video-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.video-card {
  width: 180px;         
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.thumbnail {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #7dd3fc, #38bdf8);
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-image {
  width: 30px;
  height: auto;
}

.video-info {
  padding: 8px;
}

.video-title {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 4px;
  color: #333; /* 元のCSSから文字色を補正 */
}

.video-author {
  font-size: 10px;
  color: #666;
}

/* 検索結果がゼロの時のテキスト装飾（追加分） */
.no-result {
  color: #666;
  font-size: 14px;
  margin-top: 20px;
}
</style>
