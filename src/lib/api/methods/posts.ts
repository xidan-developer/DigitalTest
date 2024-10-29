/**
 * Dependence
 */
import { catchrequest, checkokstatus } from '$lib/api/utils/requests';
import { api } from '$lib/api/api';
import { ErrorUtils } from '$lib/utils/error';

/**
 * Types
 */
import type { AxiosError } from 'axios';
import type { IPostsResponse } from '$lib/api/types/response/weather';
import type { ISuccessResponse, ServerResponse } from '$lib/api/types/response/utils';

/**
 * Get Posts
 * @description Запрос для получения событий солнца (Sunset, sunrise)
 * @returns {ServerResponse<IPostsResponse>}
 */
export function getPosts(): ServerResponse<IPostsResponse> {
	return catchrequest(
		api
			.get('/posts')
			.then(checkokstatus)
			.then((r) => {
				return {
					success: true,
					data: r.data
				} as ISuccessResponse<IPostsResponse>;
			}),
		(error: unknown | AxiosError) => {
			ErrorUtils.log(error, "API: error from 'getSolarEvents' user");
			return ErrorUtils.getErrorReason(error);
		}
	);
}
