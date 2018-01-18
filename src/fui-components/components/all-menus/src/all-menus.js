import tpl from './all-menus.html';
import navTitle from './components/nav-title';
import navList from './components/nav-list';
import './all-menus.scss';
export default {
  template: tpl,
  props: {
    config: {
      type: Array,
      default: []
    },
    menusStatus:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {}
  },
  components:{
    navTitle,
    navList
  },
  methods: {
    changeHeader (val) {
      this.$emit('change-title', val)
    },
    changeNav () {
      this.$emit('show-all-menus', false);
    }
  }
}
