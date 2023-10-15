import Layout from '../components/Layout';

//Projects page with a list of projects as links and jsx styling 
function Projects() {
    return (
        <Layout>
            <header />
            <h1>Projects</h1>

            <div className="project-card">
                <a href='https://github.com/Hawkin7/Hangman'>Todo project</a>

            </div>
            
            <div className="project-card">
                <a href='https://github.com/Hawkin7/iTunes-media-explorer'>iTunes media explorer</a>
                
            </div>
            
            <style jsx>{`
                h1 {
                    color: #0070f3;
                    text-align: center;
                }
                div {
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 1em;
                    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
                    margin-bottom: 1em;
                }
                a {
                    display: inline-block;
                    margin: 10px 0;
                    text-align: center;
                    font-size: medium;
                }
                .project-card {
                    text-align: center;
                    background-color: #EEE;
                    border-radius: 10px;
                    padding: 15px;
                    margin: 15px 0;
                }
                `}
            </style>
        </Layout>
    )
}

export default Projects;