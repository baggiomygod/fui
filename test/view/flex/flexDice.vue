<template>
	<div id="dices-wrapper" class="dices-main container-wrap">
		<div class="dices-table" ref="menuWrapper">
			<ul class="menu-margin-before">
				<li v-for="(faceStyle,index) in faceStyles" :key="faceStyle.numFace" class="dices-li" :class="{active:currentFace==index}" @click.stop="selectedFace($event,index),currentFace=index" :id="[faceStyle.id]">
					<div class="face" :class="faceStyle.numFace">
						<div class="face-content" :class="[faceStyle.styleContent.justify,faceStyle.styleContent.alignItems]">
							<span class="pip" v-for="pip in faceStyle.pips" :class="pip.flexName" :key="pip.flexName"></span>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="dices-control" ref="controlWrap">
			<ul class="controller">
				<li v-for="(desc,tableIndex) in descriptions" :key="desc.name">
					<strong>{{desc.name}}:</strong>
					<a class="text">{{desc.feature}}</a>
					<ul class="controller-checkboxs clearfix">
						<li @click="currentIndex=index,currentTable=tableIndex" class="controller-checkbox-item" :class="{active:index===currentIndex&&tableIndex==currentTable}" v-for="(ctrlValue,index) in desc.args" :key="index">
							<p @click="changeFlex(tableIndex,index,$event)">{{ctrlValue}}</p>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BScroll from 'better-scroll';
const ERR_OK = 0;
export default {
	data() {
		return {
			descriptions: {},
			active: false,
			currentIndex: 0,
			currentTable: 0,
			currentFace: 0,
			faceId: "firstface",
			faceStyles: [
				{
					"type": "saizi",
					"id": "firstface",
					"numFace": "first-face",
					"styleContent": { "justify": "j-center", "alignItems": "i-center" },
					"pips": [{ "flexName": "" }]
				},
				{
					"type": "saizi",
					"id": "secondface",
					"numFace": "second-face",
					"styleContent": { "justify": "j-space-between", "alignItems": "" },
					"pips": [{ "flexName": "" }, { "flexName": "s-flex-end" }]
				},
				{
					"type": "saizi",
					"id": "thirdface",
					"numFace": "third-face",
					"styleContent": { "justify": "j-space-between", "alignItems": "" },
					"pips": [{ "flexName": "" }, { "flexName": "s-center" }, { "flexName": "s-flex-end" }]
				}
			]

		}
	},
	created() {
		this.$http.get('/api/description').then((response) => {
			response = response.body;
			if (response.errno == ERR_OK) {
				this.descriptions = response.data[this.faceId];
				this.$nextTick(() => {
					this._initScroll();
				});
			}
		});
	},
	activated() {
		this._initScroll();
	},
	methods: {
		changeFlex(tableIndex, index, e) {
			let selectedText = e.target.innerText;
			switch (this.faceId) {
				case 'firstface':
					if (tableIndex == 0) {
						this.faceStyles[0].styleContent.justify = "j-" + selectedText;
					} else {
						this.faceStyles[0].styleContent.alignItems = "i-" + selectedText;
					}
					break;
				case 'secondface':
					if (tableIndex == 0) {
						this.faceStyles[1].styleContent.justify = "j-" + selectedText;
					} else {
						this.faceStyles[1].pips[1].flexName = "s-" + selectedText;
					}
					break;
				case 'thirdface':
					if (tableIndex == 0) {
						this.faceStyles[2].styleContent.justify = "j-" + selectedText;
					} else if (tableIndex == 1) {
						this.faceStyles[2].pips[1].flexName = "s-" + selectedText;
					} else {
						this.faceStyles[2].pips[2].flexName = "s-" + selectedText;
					}
					break;

			}


		},
		selectedFace(e, index) {
			if (!e._constructed) {
				return;
			}
			console.log(e._constructed);
			let currentFace = e.currentTarget;
			let currentFaceId = currentFace.getAttribute('id');
			this.faceId = currentFaceId;
			this.$http.get('/api/description').then((response) => {
				response = response.body;
				if (response.errno == ERR_OK) {
					this.descriptions = response.data[this.faceId];
				}
			});
		},
		_initScroll() {
			this.meunScroll = new BScroll(this.$refs.menuWrapper, {
				click: true
			});
			this.controlScroll = new BScroll(this.$refs.controlWrap, {
				click: true
			});
			// this.controlScroll.on('scroll', (pos) => {
			//     this.scrollY = Math.abs(Math.round(pos.y));
			// })
		},
	}
}
</script>
<style lang="scss" type="stylesheet/scss">
@import "../../commons/style/mixin.scss";
.dices-main {
	display: flex;
	display: -webkit-flex;
	bottom: 0; // height: 100%;
	overflow: hidden;
	.dices-table {
		flex: 0 0 2rem; // box-sizing: border-box;
		.dices-li {
			border-bottom: 1px solid #d7d7d7;
			height: 2rem;
			padding: 5px; // box-shadow: 0 2px 1px rgba(103, 188, 214, 1);
			&.active {
				background-color: #cdf1f7;
			}
			[class$="face"] {
				margin: 12px;
				padding: 4px;
				background-color: #e7e7e7;
				width: 1.4rem;
				height: 1.4rem; // object-fit:contain;
				// -webkit-object-fit:contain;
				box-shadow: inset 0 2px white, inset 0 -2px #bbb, inset 2px 0 #d7d7d7, inset -2px 0 #d7d7d7;
				border-radius: 10%;
				.face-content {
					width: inherit;
					height: inherit;
				}
			}
			.pip {
				display: block;
				width: 0.3rem;
				height: 0.3rem;
				border-radius: 50%;
				margin: 4px;
				background-color: #333;
				box-shadow: inset 0 0.2rem #111, inset 0 -0.2rem #555;
			}
			.first-face {
				.face-content {
					display: flex; // justify-content
					display: -webkit-flex;
					&.j-center {
						justify-content: center;
					}
					&.j-flex-start {
						justify-content: flex-start;
					}
					&.j-flex-end {
						justify-content: flex-end;
					}
					&.j-space-around {
						justify-content: space-around;
					}
					&.j-space-between {
						justify-content: space-between;
					} // align-items
					&.i-center {
						align-items: center;
					}
					&.i-flex-start {
						align-items: flex-start;
					}
					&.i-flex-end {
						align-items: flex-end;
					}
					&.i-baseline {
						align-items: baseline;
					}
					&.i-stretch {
						align-items: stretch;
					}
				}
			}
			.second-face,
			.third-face,
			.four-face {
				.face-content {
					display: flex;
					display: -webkit-flex;
					&.j-center {
						justify-content: center;
					}
					&.j-flex-start {
						justify-content: flex-start;
					}
					&.j-flex-end {
						justify-content: flex-end;
					}
					&.j-space-around {
						justify-content: space-around;
					}
					&.j-space-between {
						justify-content: space-between;
					}
					.pip {
						&.s-center {
							align-self: center;
						}
						&.s-flex-start {
							align-self: flex-start;
						}
						&.s-flex-end {
							align-self: flex-end;
						}
						&.s-baseline {
							align-self: baseline;
						}
						&.s-stretch {
							align-self: stretch;
						}
					}
				}
			}
			.five-face {
				.face-content {
				display: flex;
				display: -webkit-flex;
				&.flex-justify-flow {
					justify-content: space-between;
					flex-flow: row wrap; // 横向 换行
				}
				&.flex-justify-flow-nowrap{
					justify-content: space-between;
					flex-flow: row nowrap; // 横向 换行
				}
				}
			}

			.property-name {
				margin: 12px;
				padding: 4px;
			}
		}
	}
	.dices-control {
		flex: 1;
		padding: 15px;
		background-color: #cdf1f7;
		.text {
			text-align: left;
			@include font-dpr(12px);
		}
		.controller-checkboxs {
			padding-bottom: 1rem;
			list-style: none;
			.controller-checkbox-item {
				display: inline-block;
				border: 1px solid #e7e7e7;
				background-color: #eee;
				padding: 3px;
				margin: 3px;
				&.active {
					background-color: #d7d7d7;
					text-decoration: none
				}
			}
		}
	}
}
</style>
