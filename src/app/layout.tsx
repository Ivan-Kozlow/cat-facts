import type { Metadata } from 'next'
import './globals.css'
import '@/shared/styles/visually-hidden.scss'

export const metadata: Metadata = {
	title: 'Cat Facts',
	description: 'Generated cat facts',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
