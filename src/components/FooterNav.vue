<template>
  <ul class="footer-nav clearfix">
    <li v-for="(item, index) in navList" :key="index + ''"
      class="footer-nav-item  fl"
      @click="changeNav(item)">
      <router-link :to="`/${item.value}`" replace>
        <img :src="checkedNav === item.value ? item.imgUrl2 : item.imgUrl1" alt="nav">
        <span :class="{ 'checked': checkedNav === item.value }">{{ item.name }}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>

const additionBlack = require('@/assets/images/addition_black.png');
const additionBlue = require('@/assets/images/addition_blue.png');
const createtaskBlack = require('@/assets/images/createtask_black.png');
const createtaskBlue = require('@/assets/images/createtask_blue.png');
const peopleBlack = require('@/assets/images/people_black.png');
const peopleBlue = require('@/assets/images/people_blue.png');

export default {
  name: 'FooterNav',
  data() {
    return {
      checkedNav: 'add',
      navList: [
        {
          name: '新增',
          value: 'add',
          imgUrl1: additionBlack,
          imgUrl2: additionBlue,
        },
        {
          name: '列表',
          value: 'list',
          imgUrl1: createtaskBlack,
          imgUrl2: createtaskBlue,
        },
        {
          name: '我的',
          value: 'my',
          imgUrl1: peopleBlack,
          imgUrl2: peopleBlue,
        },
      ],
    };
  },
  methods: {
    changeNav(item) { // 切换菜单`
      this.checkedNav = item.value;
    },
  },
};
</script>

<style lang="less" scoped>
.footer-nav {
  height: 3rem;
  border-top: 1px #CCCCCC solid;
  overflow: hidden;
  background-color: #FAFAFA;
  .checked {
    color: #1296DB;
  }
  &-item {
    padding-top: .2rem;
    width: calc(100% / 3);
    font-size: .6rem;
    text-align: center;
    img {
      display: block;
      width: 1.5rem;
      margin: 0 auto;
    }
  }
}
</style>
