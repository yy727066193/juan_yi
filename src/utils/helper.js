import { Notify } from 'vant';

const S = (msg = '成功') => Notify({ type: 'success', msg });
const W = (msg = '警告') => Notify({ type: 'warning', msg });
const E = (msg = '异常') => Notify({ type: 'danger', msg });

export default {
  S,
  W,
  E,
};
