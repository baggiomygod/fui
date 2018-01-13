// 指令
import Draggable from './directives/directives/drag';
import Zoom from './directives/directives/zoom';
import VTip from './directives/directives/vtip';
import ToolTip from './directives/directives/tooltip';

// import directives from './directives'; // 如何批量引入指令
import fui from './fui-components';
console.log(fui);
const install = (Vue) => {
  // 指令
  Draggable(Vue);
  Zoom(Vue);
  VTip.tooltip(Vue);
  ToolTip.tooltip(Vue);

  // 组件
  Vue.component('f-scroll-menus', fui.scrollMenus);
  Vue.component('f-all-menus', fui.allMenus);
  Vue.component('f-close', fui.close);
};

/*
  统一引入fui时 main.js
  import Fui from '../src/fui';
  Vue.use(Fui);
*/
// module.exports = {
//   install
// };

export default {
  install
};
