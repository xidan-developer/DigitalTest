<script lang="ts">
	/**
	 * Dependence
	 */
	import PostsApi from '$lib/api/methods/posts';
	import { getReasonPhrase } from 'http-status-codes';

	/**
	 * Components
	 */
	import Feed from '$lib/components/feed/Feed.svelte';
	import Loader from '$lib/components/shared/Loader.svelte';
	import ErrorComponent from '$lib/components/shared/Error.svelte';
	import type {IPost} from "$lib/api/types/models/post";

	/**
	 * Load data
	 * @description Метод для получения постов
	 */


	let isFromCache: boolean = false;

	const loadData = async (): Promise<IPost[] | null> => {
		const cachedPosts = localStorage.getItem('posts');
		const isOnline = navigator.onLine;

		if (isOnline) {
			try {
				const response = await PostsApi.getAll();
				if (!response.success) {
					throw new Error(getReasonPhrase(response.data.code));
				}

				localStorage.setItem('posts', JSON.stringify(response.data));
				isFromCache = false;
				return response.data;
			} catch (error) {
				if (cachedPosts) {
					isFromCache = true;
					return JSON.parse(cachedPosts);
				}
				return null;
			}
		} else if (cachedPosts) {
			isFromCache = true;
			return JSON.parse(cachedPosts);
		}
		return null;
	};

</script>

{#await loadData()}
	<Loader />
{:then posts}
	{#if posts}
		<div>
			{#if isFromCache}
				<div class="cache-notification">
					Данные загружены из кеша
				</div>
			{/if}
			<Feed {posts} />
		</div>
	{:else}
		<ErrorComponent>
			Нет данных для отображения
		</ErrorComponent>
	{/if}
{:catch e}
	<ErrorComponent>
		{e.message}
	</ErrorComponent>
{/await}

<style>
	.cache-notification {
		padding: 8px;
		background-color: #fff3cd;
		color: #856404;
		margin-bottom: 16px;
	}
</style>
