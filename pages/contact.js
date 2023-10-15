import Layout from '../components/Layout'

//Contact page with contact details and jsx styling 
function Contact() {
    return (
        <Layout>
            <div className='contacts'>

            
                <h1>Contact</h1>
                
                <h2>Email</h2>
                <p>Hawkinspingies@gmail.com</p>

                <h2>Phone</h2>
                <p>083 1212 12122</p>

                <h2><a href='https://github.com/Hawkin7'>Github</a></h2>
                
                
            </div>

            <style jsx>{`
                
                h1 {
                    color: #0070f3;
                    text-align: center;
                }
                .contacts {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                h2 {
                    color: #0070f3;
                }
                a {
                    color: purple;
                }
                `}
            </style>
        </Layout>
    )
}

export default Contact;
