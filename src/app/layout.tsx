import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      <body className='max-w-[1440px] mx-auto px-3 sm:px-9'>{children}</body>
    </html>
  )
}
