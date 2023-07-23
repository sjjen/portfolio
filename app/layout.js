import './styles/globals.css'
import Menu from './components/menu'
import Footer from './components/footerNav'
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  )
}