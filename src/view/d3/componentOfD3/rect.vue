<template>
	<div class="chart-container" ref="rectContainer"></div>
</template>
<script type="text/javascript">
import * as d3 from 'd3'; // 引入d3方法1：模块整体加载
// let d3 = require('d3'); // 引入d3方法2    ps.使用import d3 from d3会报错，为何？

	export default{
		name : 'rect',
		props: {

		},
		data() {
		    return{
          rectData:[180,200,170,20,180,50,90]
      }
		},
    created() {
          // 当要操作DOM或计算和DOM 相关的东西时时，要保证DOM已经渲染
          this.$nextTick(() => {
            this._initChart();
          });
    },
		methods:{
			_initChart() {
                let width = 450;
                let height = 450;
                let linear = d3.scaleLinear()
                                    .domain([0,d3.max(this.rectData)]) // domian 比例尺的坐标值区间
                                    .range([0,200]); // range 值的区间
//                                     .range([0,'5rem']); // 使用rem单位时坐标轴会乱码
                let svg=d3.select(this.$refs.rectContainer) // 选择一个容器
                            .append('svg') // 创建svg
                            .attr('width','7rem') // 设置宽度
                            .attr('height',height) // 设置高度
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
                                    .ticks(5);// 坐标标注数量
                    // 插入<g>元素  g用于把相关元素进行组合的容器元素 由g元素编组在一起的可以设置相同的颜色，可以进行坐标变换
                    svg.append('g')
                        .attr('class','rect-axis')  // 坐标轴样式
                        .attr('transform','translate(20,400)')// 坐标轴位置：x y 位置
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
