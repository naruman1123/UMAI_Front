import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserStateProvider } from './store/UserStateContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LunchLink',
  description: 'LunchLink',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="ja">
      <body className={inter.className}>
        <UserStateProvider>
          {children}
        </UserStateProvider>
      </body>
    </html>
  )
}
