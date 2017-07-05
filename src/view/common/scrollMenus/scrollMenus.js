import tpl from './scrollMenus.html';
import './scrollMenus.scss';
export default {
  template: tpl,
  props:{
      config:{
          type:Array,
          default:[]
      }
  },
  data() {
    return {
      menusConfig: [{
          menu_name: 'flex',
          url: '/flex'
        },
        {
          menu_name: 'd3.js',
          url: '/d3js'
        },
        {
          menu_name: 'vue2',
          url: '/vue2'
        },
        {
          menu_name: 'animate',
          url: '/anmiation'
        },
        {
          menu_name: '3D',
          url: '/3D'
        },
      ],
    }
  },
  methods: {
    changeHeader(val) {
        this.$emit('change-title',val)
    }
  }
}
