<template>
	<div class="add-child-confirm">
		<h1>إضافة ابني</h1>
		<p>يرجى الانتظار حتى يقوم ابنك بالموافقة لتفعيل تتبع تقدمه التعليمي</p>
		<div class="add-child-btns">
			<button class="_close-child-btn" id="close-child-confirm-modal-btn" @click="onClose">إغلاق</button>
		</div>
	</div>
</template>

<script setup lang="ts">
	defineProps<{
		onClose: () => void;
	}>();
</script>

<style scoped lang="scss">
	.add-child-confirm {
		width: 571px;
		height: 250px;
		padding: 0 32px;
		h1 {
			font-family: Noto Naskh Arabic;
			font-size: 26px;
			font-weight: 500;
			line-height: 44.28px;
			text-align: right;
		}
		p {
			font-family: Noto Naskh Arabic;
			font-size: 20px;
			font-weight: 500;
			line-height: 34.06px;
			text-align: right;
			margin: 16px 0 6px;
			color: #e44b4b;
		}
		.add-child-btns {
			margin-top: 32px;
			._close-child-btn {
				// width: Hug (118px)px;
				height: 44px;
				padding: 10px 40px 10px 40px;
				border-radius: 15px;
				background: #ef8114;
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				color: white;
				margin-left: 16px;
			}
		}
	}
</style>
