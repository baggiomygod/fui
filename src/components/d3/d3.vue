<template>
    <div id="d3-wrapper" class="d3-wrapper">
        <div class="d3-menu-wrapper" ref="menuWrapper">
            <ul class="menu-list menu-margin-before">
                <li class="list-item" v-for="(d3menu,index) in d3Menus" :class="{'current':currentIndex===index}">
                    <a>{{d3menu.name}}</a></li>
            </ul>
        </div>
        <div class="d3-charts-wrapper" ref="chartWrapper">
            <ul class="chart-list menu-margin-before">
                <li v-for="(chart,index) in d3Menus" class="chart-item" ref="chartList" >{{chart.name}}---{{index}}
                    <d3charts :index="chart.id"></d3charts>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import * as d3 from 'd3'; // 引入d3方法1：模块整体加载
// let d3 = require('d3'); // 引入d3方法2    ps.使用import d3 from d3会报错，为何？
import d3charts from 'components/d3/componentOfD3/d3charts';
import BScroll from 'better-scroll';
const ERR_OK = 0;
export default {
    data() {
            return {
                d3Menus: [],
                listHeight: [],
                scrollY: 0,
                rectData:[180,200,170,20,180,50,90],
                chartIndex:0
            }
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
                    console.log("获取的数据:");console.log(response);
                    this.d3Menus = response.data;
                    // 当要操作DOM或计算和DOM 相关的东西时时，要保证DOM已经渲染
                    this.$nextTick(() => {
                        this._initScroll();
                        this._calculateHeight();
                        // this._initD3Chart();
                    });
                }
            });
        },
        // keep-alive 组件激活时调用。
        // activated() {
        //     this._initScroll();
        // },
        methods: {
            _initD3Chart() {
                console.log(d3);
                let width = '7rem';
                let height = 450;
                let linear = d3.scaleLinear()
                                    .domain([0,d3.max(this.rectData)])
                                    .range([0,200]);
                                    // .range([0,'6rem']); // 使用rem单位时坐标轴会乱码
                let svg=d3.select(this.$refs.chartsContainer[0])
                            .append('svg')
                            .attr('width',width)
                            .attr('height',height)
                            .style('background-Color','#fff');
                let rectHeight = 45;

                svg.selectAll('rect')
                    .data(this.rectData)
                    .enter()
                    .append('rect')
                    .attr('x',20) // 相对svg x轴偏移20
                    .attr('y',(data,i) => { // 相对svg Y轴（顶部）
                        return 70+i * rectHeight;
                    })
                    .attr('width',(data) => {
                        return linear(data);
                    })
                    .attr('height',rectHeight-5)
                    .attr('fill','steelblue');//填充色

                    // 坐标轴
                    let xAxis = d3.axisBottom(linear)
                                    .tickSize(2) // 标注样式
                                    .ticks(5);// 坐标标注数
                    svg.append('g')
                        .attr('class','rect-axis')
                        .attr('transform','translate(20,400)')// x y 位置
                        .call(xAxis);
            },
            _initScroll() {
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
        },
        components:{
            d3charts
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
                    border-bottom:1px solid rgba(7,17,27,0.1); 
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
                        height: 500px;
                        border-bottom: 1px solid #666;
                        padding:5px;
                        .rect-axis path,
                        .rect-axis line{
                                fill:none;
                                stroke:black;
                                shape-rendering:crispEdges;
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
