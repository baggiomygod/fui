import Bind from './bind';
import Update from './update';
import Unbind from './unbind';

// module.exports = (Vue) => {
//   Vue.directive('tip', {
//     bind: Bind,
//     update: Update,
//     unbind: Unbind
//   });
// };
export default (Vue) => {
  Vue.directive('tip', {
    bind: Bind,
    update: Update,
    unbind: Unbind
  });
};
