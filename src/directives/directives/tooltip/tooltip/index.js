import Tooltip from './tooltip';

export default (Vue) => {
  Vue.directive('simple-tip', {
    bind: Tooltip
  });
};
