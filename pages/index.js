import Layout from '../components/Layout'

//About component for my data and a picture, just used placeholders to save time, can change later
function About() {
    return (
        <Layout>
            <h1>About</h1>
            <div className='imgbox'>
                <img className='image' src='../static/mypfp.png' alt="placeholder" />
            
            <p>
                Maecenas urna arcu, facilisis et ligula id, vehicula mattis nibh. Curabitur nec dolor sed libero gravida efficitur nec ornare lacus. 
                Suspendisse potenti. Aenean id ante in ligula congue semper. Proin tempor placerat sodales. Proin sit amet nisi eu lorem imperdiet rhoncus et in massa. 
                Nam a eleifend diam. Ut tempor, sem sed vehicula iaculis, purus nisi rhoncus erat, ut imperdiet nisi ligula nec dolor. 
                Etiam imperdiet elit velit, non molestie nibh tempus eu. Morbi egestas placerat aliquam. Ut bibendum risus massa. Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Fusce nec sapien sapien.
            </p>
            </div>
            <style jsx>{`
                h1 {
                    color: #0070f3;
                    text-align: center;
                }
                .imgbox {
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                }
                .image {
                    
                    display: flex;
                    border: 1px solid #black;
                    border-radius: 50%;
                
                    margin: auto 0 ;
                    max-width: 20rem;
                }
                p {
                    display: flex;
                    text-align: center;
                    max-width: 30rem;
                    line-height: 1.6;
                }
                `}
            </style>
        </Layout>
    )
}

export default About