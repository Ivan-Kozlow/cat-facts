import styles from './CatFacts.module.scss'

import { CurrentCatFact } from '../CurrentCatFact/CurrentCatFact'
import { CatFactsList } from '../CatFactsList/CatFactsList'

export function CatFacts() {
	return (
		<section className={styles.section}>
			<h2 className='visually-hidden'>Current Fact</h2>
			<div className={styles.current_card}>
				<CurrentCatFact />
			</div>
			<div>
				<CatFactsList />
			</div>
		</section>
	)
}
