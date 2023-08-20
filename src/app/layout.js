import './globals.css'


export const metadata = {
  title: 'Instagram',
  description: 'A frontend of Instagram, built using React and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
