import Draggable from './directives/drag';
import Zoom from './directives/zoom';
// import VTip from './directives/vtip';
import ToolTip from './directives/tooltip';

const install = (Vue) => {
  Draggable(Vue);
  Zoom(Vue);
  VTip.tooltip(Vue);
  ToolTip.tooltip(Vue);
};

/*
 单独引入 directives时 main.js
 import directives from '../src/directives';
 Vue.use(directives);
*/
export default {
  install
};
