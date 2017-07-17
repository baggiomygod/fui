<template>
    <div id="d3-wrapper" class="d3-wrapper container-wrap">
        <div class="d3-menu-wrapper" ref="menuWrapper">
            <ul class="menu-list menu-margin-before">
                <li class="list-item" v-for="(d3menu,$index) in d3Menus" :key="d3menu" @click="selectMenu($index,$event)" :class="{'active':currentIndex===$index}">
                    <a>{{d3menu.name}}</a>
                </li>
            </ul>
        </div>
        <div class="d3-charts-wrapper" ref="chartWrapper">
            <ul class="chart-list menu-margin-before" ref="chartList">
                <li class="chart-item chart-item-hook">
                    <d-rect></d-rect>
                </li>
                <li class="chart-item  chart-item-hook">
                    <d-rect></d-rect>
                </li>
                <li class="chart-item  chart-item-hook">
                    <d-rect></d-rect>
                </li>
                <li class="chart-item  chart-item-hook">
                    <d-rect></d-rect>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll';
import rect from 'view/d3/componentOfD3/rect';

const ERR_OK = 0;
export default {
    data() {
        return {
            d3Menus: [],
            listHeight: [],
            scrollY: 0,
            rectData: [180, 200, 170, 20, 180, 50, 90]
        }
    },
    components: {
        'd-rect': rect
    },
    computed: {
        currentIndex() {
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
                this.d3Menus = response.data;
                // 当要操作DOM或计算和DOM 相关的东西时时，要保证DOM已经渲染
                this.$nextTick(() => {
                    this._initScroll();
                    this._calculateHeight();
                });
            }
        });
    },
    // keep-alive 组件激活时调用。
    activated() {
        this._initScroll();
        this._calculateHeight();
    },
    methods: {
        _initScroll() {
            this.meunScroll = new BScroll(this.$refs.menuWrapper, {
                click: true
            });
            this.chartScroll = new BScroll(this.$refs.chartWrapper, {
                click: true,
                probeType: 3
            });

            this.chartScroll.on('scroll', (pos) => {
                this.scrollY = Math.abs(Math.round(pos.y));
            })
        },
        //计算高度
        _calculateHeight() {
            let chartList = this.$refs.chartList.children;
            let height = 0;
            this.listHeight=[];
            this.listHeight.push(height);
            for (let i = 0; i < chartList.length; i++) {
                let item = chartList[i];
                height += item.clientHeight;
                this.listHeight.push(height);
            }
        },
        selectMenu(index,event) {
            if (!event._constructed) {
                return;
            }
            let chartsList=this.$refs.chartList.children;
            let targetList=chartsList[index]
            this.chartScroll.scrollToElement(targetList, 300);
        }
    }
}
</script>
<style lang="scss" type="stylesheet/scss">
.d3-wrapper {
    background-color: #cdf1f7;
    display: flex;
    display: -webkit-flex;
    bottom: 0;
    overflow: hidden;
    .d3-menu-wrapper {
        flex: 0 0 2rem;
        background-color: #fff;
        .menu-list {
            .list-item {
                box-sizing: border-box;
                font-size: 0.4rem;
                padding: 15px 0;
                &.active {
                    background-color: #cdf1f7;
                    font-weight: 700;
                }
            }
        }
    }
    .d3-charts-wrapper {
        flex: 1;
        .chart-list {
            background-color: #cdf1f7;
            .chart-item {
                height: 500px;
                padding: 10px;
                .chart-container {
                    svg {
                        background-color: #eee;
                        box-shadow: 10px 10px 5px rgba(103, 188, 214, 0.4);
                    }
                }
                .rect-axis path,
                .rect-axis line {
                    fill: none;
                    stroke: black;
                    shape-rendering: crispEdges;
                }
                .rect-axis text {
                    font-family: sans-serif;
                    font-size: 0.2rem;
                }
            }
        }
    }
}
</style>
