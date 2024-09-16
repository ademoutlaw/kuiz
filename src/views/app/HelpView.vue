<template>
	<div class="help-container">
		<h1>مساعدة</h1>
		<p>إذا كنت تواجه أي مشكلة أو لديك أي استفسار حول كيفية استخدام منصة Kuiz، يمكنك إرسال سؤالك</p>
		<div class="help-text-area k-form-item">
			<el-input v-model="message" :rows="3" type="textarea" placeholder="اكتب سؤالك..." />
			<button class="help-send-btn">
				<Icon icon="ion:send" :h-flip="true" />
			</button>
		</div>
	</div>
</template>
<script setup lang="ts">
	import { ref } from 'vue';

	const message = ref('');
</script>
<style lang="scss">
	.help-text-area {
		.el-textarea__inner {
			padding: 10px;
			resize: none;
		}
	}
</style>
<style scoped lang="scss">
	.help-container {
		h1 {
			font-family: Noto Naskh Arabic;
			font-size: 26px;
			font-weight: 400;
			line-height: 44.28px;
			color: #4d4d4d;
		}
		p {
			font-family: Noto Naskh Arabic;
			font-size: 16px;
			font-weight: 400;
			line-height: 27.25px;
			color: black;
			margin: 16px 0;
		}
		.help-text-area {
			display: flex;
			align-items: center;
			gap: 16px;
			max-width: 606px;
			.help-send-btn {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				border: 1px solid #eee5e5;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24px;
				color: #ef8114;
				flex-shrink: 0;
			}
		}
	}
</style>
