import type { Metadata } from 'next'
import '@/shared/styles/visually-hidden.scss'
import '@/shared/styles/nullstyle.scss'

export const metadata: Metadata = {
	title: 'Cat Facts',
	description: 'Generated cat facts',
}

type TypeProps = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: TypeProps) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
