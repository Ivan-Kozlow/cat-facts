import type { Metadata } from 'next'
import './globals.css'

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
