<template>
	<div class="chart-container" ref="chartContainer"></div>
</template>
<script type="text/javascript">
import * as d3 from 'd3'; // 引入d3方法1：模块整体加载
// let d3 = require('d3'); // 引入d3方法2    ps.使用import d3 from d3会报错，为何？

	export default{
		name : 'd3charts',
        props: {
            index: {
                type : Number,
                default: 0
            }
        },
		data() {
			return {
                rectData:[180,200,170,20,180,50,90],
                barData:[100,120,110,60]
		      }
        },
        created() {

            this.$nextTick(() => {
                switch(this.index){
                    case 0:
                        this._initRect();
                    break;
                    case 1:
                        this._initBar();
                    break;
                    default:
                        this._initRect();
                    break;
                }
                        
                    });
        },
		methods:{
			_initRect() {
				console.log('d3charts....'+this.index);
                let width = '7rem';
                let height = 450;
                let linear = d3.scaleLinear()
                                    .domain([0,d3.max(this.rectData)])
                                    .range([0,200]);
                                    // .range([0,'5rem']); // 使用rem单位时坐标轴会乱码
                let svg=d3.select(this.$refs.chartContainer)
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
            _initBar() {
                console.log('d3charts Bar....'+this.index);
                let width = '7rem';
                let height = 450;
                let linear = d3.scaleLinear()
                                    .domain([0,d3.max(this.barData)])
                                    .range([0,200]);
                                    // .range([0,'5rem']); // 使用rem单位时坐标轴会乱码
                let svg=d3.select(this.$refs.chartContainer)
                            .append('svg')
                            .attr('width',width)
                            .attr('height',height)
                            .style('background-Color','#fff');
                let rectHeight = 45;

                svg.selectAll('rect')
                    .data(this.barData)
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
            }
		}
	}
</script>
<style lang="scss" type="stylesheet/scss">
.chart-container{
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
</style>