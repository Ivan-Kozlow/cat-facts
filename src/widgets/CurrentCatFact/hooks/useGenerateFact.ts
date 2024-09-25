import { IRandomFactResponse } from '@/shared/services/catFacts/types'
import { CatService } from '@/shared/services/catFacts/catFacts.service'
import { QUERY_KEYS } from '@/shared/constants/queryKeys'

import useSWR, { SWRResponse } from 'swr'
import { SWROptions } from '@/shared/types/swrOptions'

type TypeProps = {} & SWROptions<IRandomFactResponse>

type TypeReturn = {
	getPreviewFact: () => IRandomFactResponse['fact'] | null
} & Partial<SWRResponse<IRandomFactResponse>>

const requestsIdSet = new Set<IRandomFactResponse['fact']>()
const previewFact = requestsIdSet.size - 2

export const useGenerateFact = (props?: TypeProps): TypeReturn => {
	const getPreviewFact = () => {
		const facts = Array.from(requestsIdSet)
		facts.length > 1 && requestsIdSet.delete(facts.at(-1)!)
		return facts.at(previewFact) || null
	}

	const response = useSWR(QUERY_KEYS.RANDOM_FACT, () => CatService.getRandomFact(), {
		errorRetryCount: 2,
		...props,
		onSuccess(data, key, config) {
			requestsIdSet.add(data.fact)
			props?.onSuccess?.(data, key, config)
		},
	})

	return { ...response, getPreviewFact }
}
