import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
	return (
  
  	<React.Fragment>
  	
  	<Layout page="Services">
  	
  	<h1>Services</h1>

	<p>I provide user experience design and development services. Web pages, applications and components are:</p>

	<ul className="list">
		<li>Usability, accessibility, responsive and searchable</li>
	
		<li>Built on application platforms such as Angular React, Nodejs, Wordpress or PHP</li>
	
		<li>Built with W3C and WCAG compliant HTML, CSS, and JavaScript</li>
	
		<li>Built on UI Frameworks such as Bootstrap, JQuery, SASS, LESS Prototype</li>	
	</ul>

  	</Layout>
  	
  	<style>{`
	
    `}</style>
    

    </React.Fragment>
	)
}
