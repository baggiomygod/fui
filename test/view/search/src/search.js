import tpl from './search.html';
import './search.scss';
export default {
  template: tpl,
  data () {
    return {
      searchForm: {
        searchData: ''
      },
      showClose: false
    };
  },
  methods: {
    fs () {
      this.showClose = true;
    },
    bl () {
      if (this.searchForm.searchData === '') {
        this.showClose = false;
      }
    },
    back () { // 返回
      this.$router.go(-1);
    }
  }
};
