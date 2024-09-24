import styles from './Loader.module.scss'
import Image from 'next/image'

export function Loader() {
	return (
		<div className={styles.loader}>
			<Image src='/icons/loader.svg' alt='Loader...' width={60} height={60} />
		</div>
	)
}
