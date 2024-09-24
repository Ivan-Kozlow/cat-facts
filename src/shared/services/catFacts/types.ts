type TypeLinks = {
	url: string | null
	label: string
	active: boolean
}

export interface IRandomFactResponse {
	fact: string
	length: number
}

export interface IFactsResponse {
	currentPage: number
	data: IRandomFactResponse[]

	first_page_url: string
	from: number
	last_page: number
	last_page_url: string
	links: TypeLinks[]

	next_page_url: string
	path: string
	per_page: number
	prev_page_url: string | null
	to: number
	total: number
}
