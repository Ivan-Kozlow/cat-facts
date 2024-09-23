import styles from './page.module.scss'

import { CatFacts } from '@/widgets/CatFacts'

export default function Home() {
	return (
		<div>
			<main className={styles.main}>
				<h1 className={styles.title}>Cat Facts</h1>
				<CatFacts />
			</main>
		</div>
	)
}
