<template>
	<div id="dices-wrapper" class="dices-main">
		<ul class="dices-table">
		<li v-for="(faceStyle,index) in faceStyles" class="dices-li" v-on:click="selectedFace($event,index),currentFace=index" v-bind:id="[faceStyle.id]">
			<div class="face" v-bind:class="[{active:currentFace==index},faceStyle.numFace]">
				<div class="face-content" v-bind:class="[faceStyle.styleContent.justify,faceStyle.styleContent.alignItems]">
					<span class="pip" v-for="pip in faceStyle.pips" v-bind:class="pip.flexName"></span>
				</div>
			</div>
		</li>
		</ul>
		<div class="dices-control">
			<div class="controller" v-for="(desc,tableIndex) in descriptions">
				<strong>{{desc.name}}:</strong><span class="text">{{desc.feature}}</span>
				<ul class="controller-checkboxs clearfix" >
					<li v-on:click="currentIndex=index,currentTable=tableIndex" class="controller-checkbox-item" v-bind:class="{active:index===currentIndex&&tableIndex==currentTable}" v-for="(ctrlValue,index) in desc.args">	
						<a v-on:click="changeFlex(tableIndex,index,$event)">{{ctrlValue}}</a>
					</li>
				</ul>
			</div>
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
				currentFace:0,
				faceId:"firstface",
				faceStyles:[
					{
						"id":"firstface",
						"numFace":"first-face",
						"styleContent":{"justify":"j-center","alignItems":"i-center"},
						"pips":[{"flexName":""}]
					},
					{
						"id":"secondface",
						"numFace":"second-face",
						"styleContent":{"justify":"j-space-between","alignItems":""},
						"pips":[{"flexName":""},{"flexName":"s-flex-end"}]
					},
					{
						"id":"thirdface",
						"numFace":"third-face",
						"styleContent":{"justify":"j-space-between","alignItems":""},
						"pips":[{"flexName":""},{"flexName":"s-center"},{"flexName":"s-flex-end"}]
					}
				]
				
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
				switch(this.faceId){
					case 'firstface':
						if(tableIndex==0){
							console.log(tableIndex+"-"+index+"-"+selectedText);
							this.faceStyles[0].styleContent.justify="j-"+selectedText;
						}else{
							console.log(tableIndex+":i-"+selectedText);
							this.faceStyles[0].styleContent.alignItems="i-"+selectedText;
						}
					break;
					case 'secondface':
						if(tableIndex==0){
							console.log(tableIndex+"-"+index+"-"+selectedText);
							this.faceStyles[1].styleContent.justify="j-"+selectedText;
						}else{
							console.log(tableIndex+":s-"+selectedText);
							this.faceStyles[1].pips[1].flexName="s-"+selectedText;
						}
					break;
					case 'thirdface':
						if(tableIndex==0){
							console.log(tableIndex+"-"+index+"-"+selectedText);
							this.faceStyles[2].styleContent.justify="j-"+selectedText;
						}else if(tableIndex==1){
							console.log(tableIndex+":s-"+selectedText);
							this.faceStyles[2].pips[1].flexName="s-"+selectedText;
						}else{
							console.log(tableIndex+":s-"+selectedText);
							this.faceStyles[2].pips[2].flexName="s-"+selectedText;
						}
					break;

				}
				
				
			},
			selectedFace(e,index,currentIndex) {
				let currentFace=e.currentTarget;
				let currentFaceId=currentFace.getAttribute('id');
				this.faceId=currentFaceId;
				this.$http.get('/api/description').then((response)=>{
					response=response.body;
					if(response.errno==ERR_OK){
						this.descriptions=response.data[this.faceId];
					}
				});

				console.log(index);
				console.log(currentIndex);
			}
		}
	}
</script>
<style lang="scss" type="stylesheet/scss">
// @import "../../commons/mixin.scss";
.dices-main{
	display: flex;
	width: 100%;
	.dices-table{
		flex:0 0 90px;
		box-sizing:border-box;
		list-style: none;
		border-right: 1px solid #d7d7d7;
		-webkit-margin-before: 0;
	    -webkit-margin-after: 0;
	    -webkit-padding-start: 0;
		.dices-li{
			border-bottom: 1px solid #d7d7d7;
			[class$="face"]{
						margin: 12px;
						padding: 4px;
						background-color: #e7e7e7;
						width: 52px;
						height: 52px;
						// object-fit:contain;
						// -webkit-object-fit:contain;
						box-shadow: inset 0 2px white,inset 0 -2px #bbb,inset 2px 0 #d7d7d7,inset -2px 0 #d7d7d7;
						border-radius: 10%;
						.face-content{
							width: inherit;
							height: inherit;
						}
						
					}
					.pip{
						display: block;
						width: 12px;
						height: 12px;
						border-radius: 50%;
						margin: 4px;
						background-color: #333;
						box-shadow: inset 0 3px #111,inset 0 -3px #555;
					}
					.active{
					    	background-color: #d3c8c8;
					    }
					.first-face{
						.face-content{
							display: flex;
							// justify-content
							&.j-center{
								justify-content:center;
							}
							&.j-flex-start{
								justify-content:flex-start;
							}
							&.j-flex-end{
								justify-content:flex-end;
							}
							&.j-space-around{
								justify-content:space-around;
							}
							&.j-space-between{
								justify-content:space-between;
							}
							// align-items
							&.i-center{
								align-items:center;
							}
							&.i-flex-start{
								align-items:flex-start;
							}
							&.i-flex-end{
								align-items:flex-end;
							}
							&.i-baseline{
								align-items:baseline;
							}
							&.i-stretch{
								align-items:stretch;
							}
						}
						
					}
					.second-face,.third-face{
						.face-content{
							display: flex;
								&.j-center{
									justify-content:center;
								}
								&.j-flex-start{
									justify-content:flex-start;
								}
								&.j-flex-end{
									justify-content:flex-end;
								}
								&.j-space-around{
									justify-content:space-around;
								}
								&.j-space-between{
									justify-content:space-between;
								}
								.pip{
									&.s-center{
										align-self:center;
									}
									&.s-flex-start{
										align-self:flex-start;
									}
									&.s-flex-end{
										align-self:flex-end;
									}
									&.s-baseline{
										align-self:baseline;
									}
									&.s-stretch{
										align-self:stretch;
									}
								}
						}
					}
				}
		}
		.dices-control{
			flex:1;
			font-size: 13px;
			padding: 3px;
			.text{
				text-align: left;
			}
			.controller-checkboxs{
				list-style: none;
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
	}

</style>