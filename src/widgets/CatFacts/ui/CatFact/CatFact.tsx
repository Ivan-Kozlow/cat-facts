import styles from './CatFact.module.scss'
import { PropsWithChildren } from 'react'

type TypeProps = {
	title?: string
	body: string
} & PropsWithChildren

export function CatFact({ title = 'cat fact', body, children }: TypeProps) {
	return (
		<article className={styles.catFact}>
			<h3>{title}</h3>
			<p>{body}</p>
			<div>{children}</div>
		</article>
	)
}
