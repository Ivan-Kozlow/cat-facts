'use client'

import styles from './CurrentCatFact.module.scss'
import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { useGenerateFact } from '../../hooks/useGenerateFact'

import { CatFactCard } from '@/entities/CatFactCard/ui/CatFactCard/CatFactCard'
import { Loader } from '@/shared/ui/Loader'

export function CurrentCatFact() {
	const [fact, setFact] = useState('')
	const { data, isLoading, mutate, getPreviewFact } = useGenerateFact({
		onSuccess: (fact) => setFact(fact.fact),
	})

	const handleRegenerate = () => mutate?.()
	const handlePrevFact = () => {
		const previewFact = getPreviewFact()
		console.log(previewFact)
		previewFact && setFact(previewFact)
	}
	const handleNextFact = () => {
		handleRegenerate()
	}

	if (isLoading) return <Loader />
	if (!data) return null

	return (
		<section className={styles.section}>
			<h2 className='visually-hidden'>Current Fact</h2>
			<button className={clsx(styles.button, styles.arrow)} onClick={handlePrevFact} disabled={isLoading}>
				{'<'}
			</button>
			<div className={styles.card}>
				<CatFactCard body={fact} className={styles.card}>
					<button
						className={clsx(styles.button, styles.regenerate_button)}
						onClick={handleRegenerate}
						disabled={isLoading}
					>
						Regenerate
					</button>
				</CatFactCard>
				<Image src='/background/cat_random_fact.jpg' alt='Cat' width={300} height={230} />
			</div>
			<button className={clsx(styles.button, styles.arrow)} onClick={handleNextFact} disabled={isLoading}>
				{'>'}
			</button>
		</section>
	)
}
