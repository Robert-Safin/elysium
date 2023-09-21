import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-black'>
      <body className='max-w-[1440px] mx-auto px-4 md:px6 lg:px-10'>{children}</body>
    </html>
  )
}
