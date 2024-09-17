<template>
	<div>
		<div class="child-list">
			<div class="child-item-card" v-for="child of userStore.notifs" :key="child.id">
				<div class="child-avatar">
					<img :src="child.avatar" alt="avatr" v-if="child.avatar" />
				</div>
				<div class="child-name">{{ child.parent }}</div>
				<div>
					<button class="accept-btn" @click="userStore.requestDecision(child.parent, true)">قبول</button>
					<button class="decline-btn" @click="userStore.requestDecision(child.parent, false)">رفض</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useUserStore } from '@/stores/user';

	const userStore = useUserStore();
	
</script>

<style scoped lang="scss">
	.child-list {
		display: flex;
		gap: 16px;
		margin-top: 16px;
		.child-item-card {
			width: 236px;
			height: 270px;
			border-radius: 10px;
			border: 1px solid #d9d9d9;
			display: flex;
			flex-direction: column;
			align-items: center;
			padding-top: 32px;
			.child-avatar {
				width: 95px;
				height: 95px;
				overflow: hidden;
				border-radius: 50%;
				background-image: url(@/assets/default-avatar.png);
				background-size: cover;
			}
			.child-name {
				font-family: Noto Naskh Arabic;
				font-size: 20px;
				font-weight: 700;
				line-height: 34.06px;
				text-align: center;
				color: black;
			}
			.child-level {
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 500;
				line-height: 27.25px;
				text-align: center;
				color: #666666;
			}
			.child-approve-pending {
				font-family: Noto Naskh Arabic;
				font-size: 16px;
				font-weight: 400;
				line-height: 27.25px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #e44b4b;
				margin-top: 12px;
				gap: 8px;
				svg {
					font-size: 24px;
				}
			}
			.accept-btn,
			.decline-btn {
				width: 72px;
				height: 37px;
				padding: 5px 20px 5px 20px;
				border-radius: 15px;
				background: #800080;
				color: white;
				margin: 5px;
			}
			.decline-btn {
				background: #e44b4b;
			}
		}
	}
</style>
