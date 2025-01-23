<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'Index'
})

const router = useRouter()

const menus = ref([
  { name: 'Cargo Data', icon: 'thermometer', path: 'cargo' },
  { name: 'Tank Cleaning', icon: 'water', path: 'tank' },
  { name: 'Knowledge Base', icon: 'book', path: 'knowledge' },
  { name: 'e-Learning', icon: 'student', path: 'learning' }
])

const pageJump = (value) => {
  router.push({ path: value })
}
</script>

<template>
  <div class="h-full w-full index-bg overflow-hidden">
    <div class="flex w-full h-full justify-center overflow-auto mb-20px overflow-custom">
      <div class="w-[550px] h-[300px] mt-20px grid grid-cols-2 gap-3">
        <div
          v-for="item in menus"
          :key="item.name"
          class="w-[257px] h-[300px] bg-[#65889f] flex flex-col items-center justify-center card-item"
          @click="pageJump(item.path)"
        >
          <img :src="`/imgs/${item.icon}.png`" class="w-[125px]" />
          <div class="text-25px text-#ffffff mt-20px select-none">{{ item.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.index-bg {
  z-index: -1;
  background-image: url('@/assets/imgs/bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.card-item {
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(0.95);

    & > div {
      text-decoration: underline #5bbed7;
    }
  }
}

::-webkit-scrollbar {
  width: 8px; /* 滚动条宽度 */
  height: 15px; /* 滚动条高度 */
}

::-webkit-scrollbar-track {
  background: rgb(0 0 0 / 20%); /* 轨道颜色 */
}

::-webkit-scrollbar-thumb {
  background: #65889f; /* 滑块颜色 */
  border-radius: 10px; /* 滑块圆角 */
}
</style>
