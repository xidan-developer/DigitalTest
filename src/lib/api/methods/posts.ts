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
import type { IPostsResponse } from '$lib/api/types/response/posts';
import type { ISuccessResponse, ServerResponse } from '$lib/api/types/response/utils';

/**
 * Get All
 * @description Запрос для получения данных по постам
 * @returns {ServerResponse<IPostsResponse>}
 */
function getAll(): ServerResponse<IPostsResponse> {
	return catchrequest(
		api
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(checkokstatus)
			.then((r) => {
				return {
					success: true,
					data: r.data
				} as ISuccessResponse<IPostsResponse>;
			}),
		(error: unknown | AxiosError) => {
			ErrorUtils.log(error, "API: error from 'getAll'");
			return ErrorUtils.getErrorReason(error);
		}
	);
}

export default {
	getAll
};
