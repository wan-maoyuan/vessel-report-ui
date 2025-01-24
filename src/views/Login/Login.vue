<script setup lang="ts">
import { LoginForm, RegisterForm } from './components'
import { underlineToHump } from '@/utils'
import { useAppStore } from '@/store/modules/app'
import { useDesign } from '@/hooks/web/useDesign'
import { ref } from 'vue'

const { getPrefixCls } = useDesign()

const prefixCls = getPrefixCls('login')

const appStore = useAppStore()

const isLogin = ref(true)

const toRegister = () => {
  isLogin.value = false
}

const toLogin = () => {
  isLogin.value = true
}
</script>

<template>
  <div
    :class="prefixCls"
    class="h-[100%] relative lt-xl:bg-[var(--login-bg-color)] lt-sm:px-10px lt-xl:px-10px lt-md:px-10px"
  >
    <div class="v-login__left relative flex mx-auto h-100vh">
      <div class="flex-1 p-10px lt-sm:p-10px dark:bg-[var(--login-bg-color)] relative">
        <div
          class="flex justify-between items-center text-white at-2xl:justify-end at-xl:justify-end"
        >
          <div class="flex items-center at-2xl:hidden at-xl:hidden">
            <img src="@/assets/imgs/logo.png" alt="" class="w-48px h-48px mr-10px" />
            <span class="text-20px font-bold">{{ underlineToHump(appStore.getTitle) }}</span>
          </div>

          <div class="flex justify-end items-center space-x-10px">
            <!--<ThemeSwitch @change="themeChange" />
            <LocaleDropdown class="lt-xl:text-white dark:text-white" />-->
          </div>
        </div>
        <Transition appear enter-active-class="animate__animated animate__bounceInRight">
          <div
            class="h-full flex items-center m-auto w-[100%] at-2xl:max-w-430px at-xl:max-w-500px at-md:max-w-500px at-lg:max-w-500px"
          >
            <LoginForm
              v-if="isLogin"
              class="p-10px h-auto m-auto bg-[#65889f] border-rd-1 lt-xl:rounded-3xl lt-xl:light:bg-white"
              @to-register="toRegister"
            />
            <RegisterForm
              v-else
              class="p-10px h-auto m-auto bg-[#65889f] border-rd-1 lt-xl:rounded-3xl lt-xl:light:bg-white"
              @to-login="toLogin"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@prefix-cls: ~'@{namespace}-login';

.@{prefix-cls} {
  overflow: hidden;

  &__left {
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background-image: url('@/assets/imgs/bg.jpg');
      background-position: center;
      background-repeat: no-repeat;
      content: '';
    }
  }
}
</style>
