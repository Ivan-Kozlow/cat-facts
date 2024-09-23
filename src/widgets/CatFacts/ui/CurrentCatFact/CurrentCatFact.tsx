import styles from './CurrentCatFact.module.scss'
import Image from 'next/image'

import { CatFactCard } from '../CatFactCard/CatFactCard'

export function CurrentCatFact() {
	return (
		<section>
			<h2 className='visually-hidden'>Current Fact</h2>
			<div className={styles.card}>
				<CatFactCard body={'Привет'} className={styles.card}>
					<button className={styles.button}>Regenerate</button>
				</CatFactCard>
				<Image src='/cat_random_fact.png' alt='cat' width={300} height={230} />
			</div>
		</section>
	)
}
