import Link from 'next/link'; 

//Header component to control the navigation and routing
function Header() {
    return (
        
        <nav>            
            <Link legacyBehavior href="/projects"><a>Projects</a></Link>
            <Link legacyBehavior href="/"><a>About</a></Link>
            <Link legacyBehavior href="/contact"><a>Contact</a></Link>

            <style jsx>{`
                
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #8BC6EC;
                    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
                    padding: 1em;
                    border-radius: 10px 10px 0 0;
                    color: black;
                    font-weight: 600;
                }
                a {
                    margin-right: 15px;
                    color: black;
                }
                a:hover {
                    color: #ddd;
                }
                
            `}</style>
        </nav>       
    )
}

export default Header;
