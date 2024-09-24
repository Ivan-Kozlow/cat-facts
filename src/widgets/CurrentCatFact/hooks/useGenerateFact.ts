import { IRandomFactResponse } from '@/shared/services/catFacts/types'
import { CatService } from '@/shared/services/catFacts/catFacts.service'
import { QUERY_KEYS } from '@/shared/constants/queryKeys'

import useSWR from 'swr'
import { SWROptions } from '@/shared/types/swrOptions'

export const useGenerateFact = (props?: SWROptions<IRandomFactResponse>) => {
	return useSWR<IRandomFactResponse>(QUERY_KEYS.RANDOM_FACT, () => CatService.getRandomFact(), {
		errorRetryCount: 2,
		...props,
	})
}
