import Header from './Header'
//Layout component to control the layout of the website
function Layout({ children }) {
    return (
        <div>
            <div><h1>HAWKINS PORTFOLIO</h1></div>
            <Header />
            <main>
                { children }
            </main>
            <footer>

            </footer>

            <style jsx>{`
                
                div {
                    display: flex;
                    flex-direction: column;
                    margin: 3rem auto ;
                    max-width: 75rem;
                }
                main {
                    background-color: white;
                    padding: 1em;
                    border-radius: 0 0 10px 10px;
                    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
                    margin-bottom: 2em;
                }
                footer {
                    padding: 1em;
                    color: #666;
                    text-align: center;
                }
                
            `}</style>

            <style jsx global>{`
                
                body {
                    font-family: Arial, sans-serif;
                    background: #f4f4f4;
                    color: #333;
                    padding: 0;
                    margin: 0;
                }
                a {
                    color: #0070f3;
                    text-decoration: none;
                }
                a:hover {
                    text-decoration: underline;
                }
                
            `}</style>
        </div>
    )
}    

export default Layout
