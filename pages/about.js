import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {

	return (
  
  	<React.Fragment>
  	
  	<Layout page="About">
  	
		<h1>About</h1>
	
		<p>
		Webspun Creative, LLC is the studio of designer and software engineer, Dennis "Troy" Gilliland. 
		</p>
		

		{/* 
		
		<p>
		Webspun Creative, LLC is the studio of Dennis "Troy" Gilliland. I’m an user experience professional with 20+ years experience in UI design and development. 
		</p>
		<p>
		Webspun Creative, LLC is the studio of Dennis "Troy" Gilliland. I’m an user experience professional with 20+ years experience in UI design and development. 
		I started my career in Madrid, Spain designing CD covers and promotion material for record producers, Juan Tarodo and Jorge Alvarez (Mecano &amp; Olé Olé).
		In 1998 I moved to Chicago where I landed at Classified Ventures (Cars.com &amp; Apartments.com). While in Chicago, 
		I worked at DiamondCluster and HSBC before becoming a designer/developer for the social news app, Flipboard.  
		</p>
		
		
		<p>I provide user experience design and development services. Web pages, applications and components are:</p>

		<ul className="list">
			<li>Usability, accessibility, responsive and searchable</li>
	
			<li>Built on application platforms such as React, Nodejs, Wordpress or PHP</li>
	
			<li>Built with W3C and WCAG compliant HTML, CSS, and JavaScript</li>
	
			<li>Built on UI Frameworks such as Bootstrap, JQuery, SASS, LESS Prototype</li>	
		</ul>
		*/}
		
		
		<p>
		<a href="mailto:troy@webspun.org">troy@webspun.org</a> 
		</p>
		

  	</Layout>
  	
  	<style>{`
	
    `}</style>
    
    </React.Fragment>
	)
}
