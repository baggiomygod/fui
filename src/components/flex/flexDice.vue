<template>
	<div id="dices-wrapper" class="dices-main">
		<ul class="dices-table">
			<li class="dices-li">
				<div class="first-face">
					<span class="pip"></span>
				</div>
			</li>
		</ul>
		<div class="dices-control">
			<span v-for="desc in descriptions">
				desc[0].
			</span>
		</div>
	</div>
</template>
<script>
	const ERR_OK=0;
	export default{
		data() {
			return {
				descriptions:{}
			}
		},
		created() {
			 this.$http.get('/api/description').then((response) => {
			      response=response.body;
			      if(response.errno == ERR_OK) {
			        this.descriptions=response.data;
			        console.log(this.descriptions);
			      }
			    });
		}
	}
</script>
<style lang="scss" type="stylesheet/scss">
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
					.first-face{
						display: flex;
						justify-content:center;
						align-items:center;
					}
				}
		}
		.dices-control{
			flex:1;
		}
	}

</style>