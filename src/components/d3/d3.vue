<template>
    <div id="d3-wrapper" class="d3-wrapper">
        <div class="d3-menu-wrapper" ref="menuWrapper">
            <ul class="menu-list menu-margin-before">
                <li class="list-item" v-for="(d3menu,index) in d3Menus" :class="{'current':currentMenuIndex===index}">
                    <a>{{d3menu.name}}</a></li>
            </ul>
        </div>
        <div class="d3-charts-wrapper" ref="chartWrapper">
            <ul class="chart-list menu-margin-before">
                <li v-for="chart in d3Menus" class="chart-item" ref="chartList" >{{chart.name}}
                    <div class="chart-container"></div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import D3 from 'd3';
import VueD3 from 'vue-d3';
import BScroll from 'better-scroll';
const ERR_OK = 0;
export default {
    data() {
            return {
                d3Menus: [],
                listHeight: [],
                scrollY: 0
            }
        },
        computed: {
            currentMenuIndex() {
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            }
        },
        created() {
            this.$http.get('/api/d3').then((response) => {
                response = response.body;
                if (response.errno == ERR_OK) {
                    console.log(response);
                    this.d3Menus = response.data;
                    // 当要操作DOM或计算和DOM 相关的东西时时，要保证DOM已经渲染
                    //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
                    this.$nextTick(() => {
                        this._initScroll();
                        this._initD3Chart();
                        this._calculateHeight();
                    });
                }
            });
        },
        methods: {
            _initD3Chart() {
                console.log('d3...');
                // this.$d3.select(".chart-container");
            },
            _initScroll(){
                this.meunScroll = new BScroll(this.$refs.menuWrapper,{
                    click: true
                });
                this.chartScroll = new BScroll(this.$refs.chartWrapper,{
                    click: true,
                    probeType: 3
                });

                this.chartScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y));
                })
            },
            //计算高度
            _calculateHeight() {
                let chartList = this.$refs.chartList;
                let height = 0;
                this.listHeight.push(height);
                for (let i = 0; i < chartList.length; i++) {
                    let item = chartList[i];
                    height += item.clientHeight;
                    this.listHeight.push(height);
                }
            }
        }
}
</script>
<style lang="scss" type="stylesheet/scss">
    .d3-wrapper { 
        display: flex; 
        position: absolute;
        top: 2.7rem;
        bottom: 0;
        width: 100%; 
        overflow: hidden; 
        .d3-menu-wrapper{ 
            flex:0 0 2rem; 
            width: 2rem; 
            background-color: #f3f5f7; 
            .menu-list{ 
                .list-item{ 
                    box-sizing:border-box; 
                    font-size: 0.4rem; 
                    padding:15px 0; 
                    margin:0 15px; 
                    border-bottom:1px solid #c29d9d; 
                    &.current{ 
                        background-color: #fff; 
                        font-weight: 700; 
                        } 
                        } 
                    } 
                } 
        .d3-charts-wrapper{ 
            flex:1;
            .chart-list{ 
                    background-color:#e2e2e2; 
                    .chart-item{ 
                        height: 300px;
                        border-bottom: 1px solid #666;
                        padding:5px;
                    } 
                } 
            
            } 
        }
</style>
