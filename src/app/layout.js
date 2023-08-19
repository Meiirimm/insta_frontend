import './globals.css'


export const metadata = {
  title: 'First HW',
  description: 'Learn next JS and react with DECODE',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
