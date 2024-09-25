import { IFactsResponse } from '@/shared/services/catFacts/types'
import { CatService } from '@/shared/services/catFacts/catFacts.service'
import { QUERY_KEYS } from '@/shared/constants/queryKeys'

import useSWR from 'swr'
import { SWROptions } from '@/shared/types/swrOptions'

type TypeProps = {
	page?: number
	limit?: number
} & SWROptions<IFactsResponse>

export const useAllFacts = ({ page = 1, limit = 10, ...props }: TypeProps) => {
	const response = useSWR<IFactsResponse>(
		[QUERY_KEYS.LIST_FACTS, page],
		() => CatService.getAllFacts(page, limit),
		{
			errorRetryCount: 2,
			...props,
		}
	)
	return { ...response }
}
