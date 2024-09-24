import styles from './CatFactsList.module.scss'

import { CatFactCard } from '@/entities/CatFactCard'

export function CatFactsList() {
	return (
		<section className={styles.list}>
			<CatFactCard body={'Привет 2 das dsa cx z cxzv cxv fs f ver avre ver ver'} />
			<CatFactCard body={'Привет 3'} />
			<CatFactCard body={'Привет 4'} />
			<CatFactCard body={'Привет 5'} />
		</section>
	)
}
