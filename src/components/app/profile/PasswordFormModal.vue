<template>
  <el-dialog v-model="show" show-close class="password-form-modal rounded-xl w-[650px] py-11 p-20" >
			<el-form>
				<div class="form-row">
					<KInput type="password" id="current-password-input" label="كلمة السر الحالية" required  />

				</div>
				<div class="form-row">
					<KInput type="password" id="new-password-input" label="كلمة السر الجديدة" required  />

				</div>
				<div class="form-row">
					<KInput type="password" id="new-rePassword-input" label="تأكيد كلمة السر" required  />
				</div>
				<div class="form-row">

					<div class="form-footer">
						<button class="form-btn" type="submit">تغيير كلمة السر</button>
						<button class="form-back-btn" @click="show=false" type="button">رجوع</button>
					</div>
				</div>
			</el-form>
		</el-dialog>
</template>

<script setup lang="ts">
const show = defineModel();
import KInput from '@/components/form/KInput.vue';
</script>

<style lang="scss">
.password-form-modal{
	width:650px;
	.form-row{
		margin-bottom: 48px;
	}
	.form-footer{
		
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
</style>
