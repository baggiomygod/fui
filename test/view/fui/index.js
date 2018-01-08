import tpl from './index.html'
import zoom from './example/zoom/zoom';
import icon from './example/icon_font/icon_font';
import tooltip from './example/tip/tip';

import './index.scss';
export default{
  template: tpl,
  data(){
    return {
      showZoom: false,
      showTip: false,
      showIcon: false,
    }
  },
  components:{
    'f-zoom': zoom,
    'f-icon': icon,
    'f-tip': tooltip
  },
  methods: {
    showExam(type) {
      switch(type) {
        case 'zoom':
          this.showZoom = true;
        break;
        case 'icon':
        this.showIcon = true;
        break;
        case 'tip':
        this.showTip = true;
        break;
        default:
        break;
      }
    }
  }
}
