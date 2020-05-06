import Head from "next/head"
import NavMain from "../components/navs/nav-main"
import NavSecondary from "../components/navs/nav-secondary"
import Logo from "../components/logo"
import FooterScripts from "../components/footer-scripts"
import React, { useState } from 'react';

function RenderMain(props) {
	
	var nav="";
	
	if (props.page == "Home") {nav="Home"}
	if (props.page == "Flipboard") {nav="Portfolio"}
	if (props.page == "Bank Internet") {nav="Portfolio"}
	if (props.page == "Bank Intranet") {nav="Portfolio"}
	if (props.page == "Mcdonalds") {nav="Portfolio"}
	if (props.page == "Lego") {nav="Portfolio"}			
	if (props.page == "Services") {nav="Services"}
	if (props.page == "About") {nav="About"}
	
	return (<NavMain mainAct={nav} />);
}


function RenderSecondary(props) {
	
	var nav;
	
	if (props.page == "Flipboard") {nav="Flipboard"}
	if (props.page == "Bank Internet") {nav="Bank Internet"}
	if (props.page == "Bank Intranet") {nav="Bank Intranet"}
	if (props.page == "Snap2Play") {nav="Snap2Play"}
	if (props.page == "Mcdonalds") {nav="Mcdonalds"}
	if (props.page == "Lego") {nav="Lego"}

	
	if (nav) {
	return (<NavSecondary active={nav} />);
	
	} else {
		return (<div></div>);
	}
}


const Layout = props => (
<React.Fragment>
	<Head>
	  <title>Webspun</title>
	  <link rel="icon" href="/favicon.ico" />
	  <link rel="stylesheet" href="https://use.typekit.net/oeb1sbe.css" />
	</Head>
	
	<header id="navbar-top" className="navbar flex-column justify-content-center align-items-center  navbar-expand-sm navbar-light">
		<Logo {...props} />
		<RenderSecondary {...props} />
	</header>
	
	<main className={"container-fluid " + props.page}>
		{props.children}
	</main>
	
	<RenderMain {...props} />
	
	<FooterScripts />
	
	<style>{`
	main.container-fluid {
		margin-top:30px;
	}
    `}</style>
    
    <style jsx global>{`
    html {height:100%;}
    `}</style>
    
</React.Fragment>
)

export default Layout
