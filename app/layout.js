import Footer from './Footer'
import Headers from './Headers'
import './globals.css'
import { Inter } from 'next/font/google'
import { Authprovider } from '@/app/context/Authcontext'
import { AppcontextProvider } from '@/app/context/Appcontext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome To PhilanthroWave',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Authprovider>
    <AppcontextProvider>
      <body className={inter.className}>
      <Headers/>
      <div className='container mx-auto min-h-screen mt-5'>
        {children}
      </div>
      <Footer/>
      </body>
      </AppcontextProvider>
      </Authprovider>
    </html>
  )
}
