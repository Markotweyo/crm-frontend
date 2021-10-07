import React from 'react'
import { Footer } from '../partials/Footer.com'
import { Header } from '../partials/Header.com'

export const DefaultLayout = ({children}) => {
    return (
        
        <div>
            <div className="default_layout">
                <header className="header mb-2">
                    <Header/>
                </header>
                <main className="main">
                    {children}
                </main>
                <footer className="footer">
                    <Footer/>
                </footer>
                   
            </div>
        
            
        </div>
    )
}
