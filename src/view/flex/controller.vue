<template>
		<div class="controller">
			<div v-for="(desc,tableIndex) in descriptions" :key="desc">
				<strong class="text">{{desc.name}}:</strong>
				<span class="text">{{desc.feature}}</span>
				<ul class="controller-checkboxs clearfix" >
					<li @click="currentIndex=index,currentTable=tableIndex" 
						class="controller-checkbox-item" 
						:class="{active:index===currentIndex&&tableIndex==currentTable}" 
						v-for="(ctrlValue,index) in desc.args"
						:key="ctrlValue">
						<p class="text" @click="changeFlex(tableIndex,index,$event)">{{ctrlValue}}</p>
					</li>
				</ul>
			</div>
		</div>
</template>
<script>
	const ERR_OK=0;
	export default{
		data() {
			return {
				descriptions:{},
				active:false,
				currentIndex:0,
				currentTable:0,
				faceId:"firstface"
				
			}
		},
		created() {
			 this.$http.get('/api/description').then((response) => {
			      response=response.body;
			      if(response.errno == ERR_OK) {
			        this.descriptions=response.data[this.faceId];
			      }
			    });
		},
		methods:{
			changeFlex(tableIndex,index,e){
				let selectedText=e.target.innerText;
				if(tableIndex==0){
					console.log(tableIndex+"-"+index+"-"+selectedText);
					this.firstFace.justify="j-"+selectedText;
				}else{
					console.log(tableIndex+":i-"+selectedText);
					this.firstFace.alignItems="i-"+selectedText;
				}
				
			}

		}
	}
</script>
<style lang="scss" type="stylesheet/scss">
		@import "../../commons/style/mixin.scss";
		.controller{
			.text{
				text-align: left;
				@include font-dpr(12px);
			}
			.controller-checkboxs{
				.controller-checkbox-item{
					display: inline-block;
					border: 1px solid #e7e7e7;
					background-color: #eee;
					padding: 3px;
					margin: 3px;
					float: left;
					&.active{
						background-color: #d7d7d7;
						text-decoration: none
					}
				}
			}
		}
	
</style>