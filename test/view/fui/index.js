import tpl from './index.html';
import './index.scss';

export default {
  template: tpl,
  data () {
    return {
      showZoom: false,
      showTip: false,
      showIcon: false,
      logoUrl: '/static/images/logo/fui.png',
      gitLogoUrl: '/static/images/logo/github.png'
    };
  },
  components: {},
  methods: {
    showExam (type) {
      switch (type) {
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
};
