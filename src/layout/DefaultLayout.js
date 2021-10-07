import React from 'react'
import { Footer } from '../partials/Footer.com'
import { Header } from '../partials/Header.com'

export const DefaultLayout = () => {
    return (
        
        <div>
            <div className="default_layout">
                <header className="header">
                    <Header/>
                </header>
                <main className="main">
                    Main content
                </main>
                <footer className="footer">
                    <Footer/>
                </footer>
                   
            </div>
        
            
        </div>
    )
}
