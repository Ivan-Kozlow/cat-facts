import styles from './CatFactCard.module.scss'
import { PropsWithChildren } from 'react'

type TypeProps = {
	title?: string
	body: string
	className?: string
} & PropsWithChildren

export function CatFactCard({ title = 'Cat Fact', body, children }: TypeProps) {
	return (
		<article className={styles.card}>
			<h3>{title}</h3>
			<p>{body}</p>
			{children}
		</article>
	)
}
