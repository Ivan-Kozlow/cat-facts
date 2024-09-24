import axios from 'axios'

class CatFactsService {
	private BASE_URL = 'https://catfact.ninja'

	async getRandomFact() {
		const data = (await axios.get(`${this.BASE_URL}/fact`)).data
		return data
	}

	async getAllFacts({ page = 1 }) {
		const data = (await axios.get(`${this.BASE_URL}/facts?limit=10&page=${page}`)).data
		return data
	}
}

export const CatService = new CatFactsService()
