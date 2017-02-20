<template>
    <div id="d3-wrapper" class="d3-charts">
        <div class="d3-menu">
            <ul>
                <li v-for="d3menu in d3Menus">{{d3menu.name}}</li>
            </ul>
        </div>
        <div class="d3-chart1" ref="d3Chart1">
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
</template>
<script>
import D3 from 'd3';
const ERR_OK = 0
export default {
    data() {
            return {
                d3Menus: []
            }
        },
        created() {
            this.$http.get('/api/d3').then((response) => {
                response = response.body;
                if (response.errno == ERR_OK) {
                	console.log(response);
                    this.d3Menus = response.data;
                }
            })
            this._initD3Chart();
        },
        methods: {
            _initD3Chart() {
            	console.log('d3...');
            }
        }
}
</script>
<style lang="scss" type="stylesheet/scss">
.d3-charts {
	display: flex;
	width: 100%;
	.d3-menu{
		flex:0 0 90px;
	}
}
</style>
