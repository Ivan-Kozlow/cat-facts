'use client'
import './pagination.scss'
import styles from './CatFactsList.module.scss'
import { useState } from 'react'

import { useAllFacts } from '../../hooks/useAllFacts'

import { CatFactCard } from '@/entities/CatFactCard'
import { Loader } from '@/shared/ui/Loader'
import Pagination from 'rc-pagination'

export function CatFactsList() {
	const [pageNumber, setPageNumber] = useState(1)
	const { data, isLoading, error } = useAllFacts({
		page: pageNumber,
	})

	const handleChangePage = (page: number) => {
		setPageNumber(page)
	}

	if (isLoading) return <Loader />
	if (error) return <p>Error on load facts</p>
	if (!data?.data.length) return <p>No facts</p>

	return (
		<section className={styles.section}>
			<div className={styles.list}>
				{data?.data.map((fact) => (
					<CatFactCard body={fact.fact} key={fact.fact} />
				))}
			</div>
			<div>
				<Pagination
					current={pageNumber}
					className={styles.pagination}
					total={data?.total}
					pageSize={data?.per_page}
					onChange={handleChangePage}
				/>
			</div>
		</section>
	)
}
