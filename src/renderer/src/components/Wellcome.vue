<script setup lang="ts">
const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <img alt="logo" class="logo" src="../assets/electron.svg" />
  <div class="creator">Powered by electron-vite</div>
  <div class="text">
    Build an Electron app with
    <span class="vue">Vue</span>
    and
    <span class="ts">TypeScript</span>
  </div>
  <p class="tip">Please try pressing <code>F12</code> to open the devTool</p>
  <div class="actions">
    <div class="action">
      <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">Documentation</a>
    </div>
    <div class="action">
      <a target="_blank" rel="noreferrer" @click="ipcHandle">Send IPC</a>
    </div>
  </div>
</template>

<style scoped lang="less">
.logo {
  margin-bottom: 20px;
  -webkit-user-drag: none;
  height: 128px;
  width: 128px;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 1.2em #6988e6aa);
  }
}

.creator {
  font-size: 14px;
  line-height: 16px;
  color: var(--ev-c-text-2);
  font-weight: 600;
  margin-bottom: 10px;
}

.text {
  font-size: 28px;
  color: var(--ev-c-text-1);
  font-weight: 700;
  line-height: 32px;
  text-align: center;
  margin: 0 10px;
  padding: 16px 0;
}

.tip {
  font-size: 16px;
  line-height: 24px;
  color: var(--ev-c-text-2);
  font-weight: 600;
}

.vue {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.ts {
  background: -webkit-linear-gradient(315deg, #3178c6 45%, #f0dc4e);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

.actions {
  display: flex;
  padding-top: 32px;
  margin: -6px;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.action {
  flex-shrink: 0;
  padding: 6px;

  a {
    cursor: pointer;
    text-decoration: none;
    display: inline-block;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 600;
    white-space: nowrap;
    border-radius: 20px;
    padding: 0 20px;
    line-height: 38px;
    font-size: 14px;
    border-color: var(--ev-button-alt-border);
    color: var(--ev-button-alt-text);
    background-color: var(--ev-button-alt-bg);

    &:hover {
      border-color: var(--ev-button-alt-hover-border);
      color: var(--ev-button-alt-hover-text);
      background-color: var(--ev-button-alt-hover-bg);
    }
  }
}
</style>
