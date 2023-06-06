import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'GunzBank',
    description: 'GunzBank create by Rafael Ferreira',
    icons: {
        icon: '/icon/favicon.svg',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <link rel="icon" href="/icon/favicon.svg" />
            <body className={inter.className}>{children}</body>
        </html>
    )
}
