import Zoom from './zoom';

// module.exports = (Vue) => {
//   Vue.directive('zoom', {
//     bind: Zoom
//   });
// };

export default (Vue) => {
  Vue.directive('zoom', {
    bind: Zoom
  });
};
