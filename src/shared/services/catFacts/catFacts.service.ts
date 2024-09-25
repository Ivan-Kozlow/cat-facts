import axios from 'axios'

import { IFactsResponse, IRandomFactResponse } from './types'

class CatFactsService {
	private BASE_URL = 'https://catfact.ninja'

	async getRandomFact() {
		const data = (await axios.get<IRandomFactResponse>(`${this.BASE_URL}/fact`)).data
		return data
	}

	async getAllFacts(page = 1, limit = 10) {
		const data = (await axios.get<IFactsResponse>(`${this.BASE_URL}/facts?page=${page}&limit=${limit}`))
			.data
		return data
	}
}

export const CatService = new CatFactsService()
