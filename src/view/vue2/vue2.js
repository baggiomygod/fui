import tpl from "./vue2.html";
import vSlot from "./components/slot/slot";
import './vue2.scss';
export default {
    template: tpl,
    name:'vue2',
    components:{
        'v-slot':vSlot
    }
}