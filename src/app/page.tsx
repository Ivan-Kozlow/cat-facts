import styles from './page.module.scss'

import { CurrentCatFact } from '@/widgets/CurrentCatFact'
import { CatFactsList } from '@/widgets/CatFactsList'

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<h1 className={styles.title}>Cat Facts</h1>
				<section className={styles.section}>
					<h2 className='visually-hidden'>Current Fact</h2>
					<div className={styles.current_card}>
						<CurrentCatFact />
					</div>
					<div>
						<CatFactsList />
					</div>
				</section>
			</main>
		</div>
	)
}
