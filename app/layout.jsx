
import '@styles/global.css'
import '@components/Nav'
import '@components/Provider'
import Nav from '@components/Nav'

export const metadata = {
    title: 'Test Application',
    description: 'Generated by create next app',
} 

const RootLayout = ({children}) => {
  return (
    <html lang='en'> 
        <body>
            <div className='main'>
                <div className='gradient'></div>
            </div>

            <main className='app'>
                <Nav /> 
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout