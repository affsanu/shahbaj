
import './globals.css'
import Header from './components/Header'
import Provider from './Provider'

export const metadata = {
  title: 'Md Shahbaj',
  description: 'Md Shahbaj Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
