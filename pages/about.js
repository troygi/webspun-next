import Head from 'next/head'
import Layout from '../components/layout';

export default function Home() {
	return (
  
  	<React.Fragment>
  	
  	<Layout page="About">
  	
		<h1>About</h1>
	
		<p>
		Webspun Creative, LLC is the studio of Dennis "Troy" Gilliland. I’m an user experience professional with 20+ years experience in UI design and development. 
		I started my career in Madrid, Spain designing CD covers and promotion material for record producers, Juan Tarodo and Jorge Alvarez (Mecano &amp; Olé Olé).
		In 1998 I moved to Chicago where I landed at Classified Ventures (Cars.com &amp; Apartments.com). While in Chicago, I worked at DiamondCluster and HSBC before becoming a designer/developer for the social news app, Flipboard.  
		</p>
		
		{/* 
		<p>
		<a href="tel:630-440-9549">630-440-9549</a> <span class="vr">|</span>
		<a href="mailto:troy@webspun.org">troy@webspun.org</a> 
		</p>
		*/}

  	</Layout>
  	
  	<style>{`
	
    `}</style>
    
    </React.Fragment>
	)
}
