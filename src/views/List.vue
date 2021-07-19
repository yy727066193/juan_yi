<template>
  <div class="list">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        :offset="0"
        @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import {
  List,
  Cell,
  PullRefresh,
} from 'vant';

export default {
  name: 'List',
  components: {
    [List.name]: List,
    [Cell.name]: Cell,
    [PullRefresh.name]: PullRefresh,
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
        for (let i = 0; i < 20; i++) {
          this.list.push(i);
        }
        this.loading = false;
        // this.finished = true;
      }, 500);
    },
    onRefresh() {
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>
