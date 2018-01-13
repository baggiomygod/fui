import flex from 'view/flex/flexDice';
import animate from 'view/animate/animation';
import css3d from 'view/3d/css3d';
import d3 from 'view/d3/d3';
import vue2Test from 'view/vue2';
import pwa from 'view/pwa';
import search from 'view/search';
import fui from 'view/fui';
import zoom from 'view/fui/example/zoom/zoom';
import icons from 'view/fui/example/icon_font/icon_font';
import tip from 'view/fui/example/tip/tip';
import demoList from 'view/fui/demo-list/demo-list';
// const flex = () => require('view/flex/flexDice');
// const animate = () => require('view/animate/animation');
// const css3d = () => require('view/3d/css3d');
// const d3 = () => require('view/d3/d3');
// const vue2 = () => require('view/vue2/vue2');
// const pwa = () => require('view/pwa/pwa');
// const search = () => require('view/search/search');

let routes = [
  { path: '/flex', component: flex },
  { path: '/d3js', component: d3 },
  { path: '/anmiation', component: animate },
  { path: '/3D', component: css3d },
  { path: '/vue2', component: vue2Test },
  { path: '/pwa', component: pwa },
  { path: '/search', component: search },
  {
    path: '/fui', component: fui, children: [
      { path: 'demo-list', component: demoList, children:[
        { path: 'zoom', component: zoom },
        { path: 'tip', component: tip },
        { path: 'icons', component: icons }
        ]
      },
      // { path: 'zoom', component: zoom },
      // { path: 'tip', component: tip },
      // { path: 'icons', component: icons }
    ]
  },
  { path: '/zoom', component: zoom },
  { path: '/tip', component: tip },
  { path: '/icons', component: icons }
  // { path: '404', component:loadCmp('404/404') },
  // { path: '*', redirect: { path:'/404' } }
];

export default routes;
