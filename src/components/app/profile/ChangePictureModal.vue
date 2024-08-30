<template>
	<el-dialog v-model="show" show-close class="change-picture-modal rounded-xl">
		<div class="change-picture-modal-container">
			<label class="picture-uploader" id="picture-uploader-label" for="picture-uploader-input">
				<div v-if="imgSrc">
					<img class="_img" :src="imgSrc" alt="profile" />
				</div>
				<img class="_add" src="@/assets/add-photo.svg" alt="add" />
			</label>
			<input type="file" class="absolute w-0 opacity-0" id="picture-uploader-input" @change="selectPicture" />
			<div class="form-row">
				<div class="form-footer">
						<button class="form-btn" @click="save">حفظ</button>
						<button class="form-back-btn" @click="show=false" type="button">رجوع</button>
					</div>
			</div>
		</div>
	</el-dialog>
</template>

<script setup lang="ts">
	import { ref } from 'vue';
	import { ElMessage } from 'element-plus';

	const show = defineModel();
	const imgSrc = ref<string | null>(null);
	let file: File|null = null;
	const selectPicture = (evt: any) => {
		file = evt.target.files[0] as File;
		if (!file) return;
		const fileReader = new FileReader();
		fileReader.onload = () => {
			imgSrc.value = fileReader.result as string;
		};
		fileReader.readAsDataURL(file);
	};
	const save = ()=>{
		if(!file){
			ElMessage.error('Oops, this is a error message.');
			return;
		}
		
		show.value = false;
		file = null;
		imgSrc.value = null;
		ElMessage.success('Yeaayy, nice Picture .');
	}
</script>

<style lang="scss">
	.change-picture-modal {
		width: 350px;
		.change-picture-modal-container {
			display: flex;
			align-items: center;
			flex-direction: column;
			.picture-uploader {
				width: 200px;
				height: 230px;
				background-image: url(@/assets/student-profile.svg);
				background-position: center;
				background-repeat: no-repeat;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px solid #d9d9d9;
				border-radius: 20px;
				position: relative;
				overflow: hidden;
				> div {
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: white;
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
				._add {
					position: relative;
					opacity: 0;
					transition: opacity 0.2s;
					&:hover {
						opacity: 1;
					}
				}
			}
			.form-row {
				margin: 20px 0;
				
				.form-footer{
					margin:0 20px;
					
		button{
			font-family: Noto Naskh Arabic;
			font-size: 20px;
			font-weight: 400;
			line-height: 34.06px;
			text-align: center;
		}
		.form-back-btn{
			margin-right:20px;
		font-family: Noto Naskh Arabic;
		font-size: 24px;
		font-weight: 500;
		line-height: 40.87px;
		text-align: center;
		color: #808080;
		}
	}
			}
		}
	}
</style>
