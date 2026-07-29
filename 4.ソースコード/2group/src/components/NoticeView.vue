<template>
  <div class="notice-area">
    <div class="notice" v-for="item in notices" :key="item.id">
      <span class="tag" :class="item.type">
        {{ item.type }}
      </span>

      <span class="text">
        {{ item.text }}
      </span>
    </div>
    <div class="button-area">
      <button @click="goChat">トップページに戻る</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const notices = ref([
  {
    id: 1,
    type: "新機能",
    text: "○○の動画が追加されました",
  },
  {
    id: 2,
    type: "不具合",
    text: "",
  },
  {
    id: 3,
    type: "アップデート",
    text: "",
  },
  {
    id: 4,
    type: "",
    text: "",
  },
]);

const router = useRouter();

const goChat = () => {
  router.push("/top");
};
</script>

<style scoped>
.notice-area {
  width: 420px;
  margin: 40px auto;
}

.notice {
  display: flex;
  align-items: center;

  height: 42px;

  border: 1px solid #9de7d6;

  border-radius: 12px;

  margin-bottom: 18px;

  background: white;

  overflow: hidden;
}

.tag {
  width: 80px;

  height: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size: 14px;

  font-weight: bold;

  border-radius: 10px;

  margin-right: 15px;
}

.新機能 {
  background: #d7f6ef;

  color: #333;
}

.不具合 {
  background: #ffb8c7;

  color: #000;
}

.アップデート {
  background: #b8f0d7;

  color: #333;

  font-size: 11px;
}

.text {
  font-size: 14px;
}

.button-area {
  text-align: center;
  margin-top: 30px;
}

button {
  width: 160px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: #3cb8ff;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background: #1d9de8;
}
</style>
