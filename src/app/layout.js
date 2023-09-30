import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Provider } from '@/components/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Belajar Bersama Bu Ana',
  description: 'Website untuk menunjang belajar siswa kelas 6 SD',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
