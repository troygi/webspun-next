import Head from "next/head"
import NavMain from "../components/navs/nav-main"
import NavSecondary from "../components/navs/nav-secondary"
import Logo from "../components/logo"
import FooterScripts from "../components/footer-scripts"
import React, { useState } from 'react';

function RenderMain(props) {
	
	var nav="";
	
	if (props.page == "Home") {nav="Home"}
	if (props.page == "Playground") {nav="Playground"}
	if (props.page == "3D Cube") {nav="Playground"}
	if (props.page == "Flipboard") {nav="Portfolio"}
	if (props.page == "Bank Internet") {nav="Portfolio"}
	if (props.page == "Snap2Play") {nav="Portfolio"}
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
<>
	<Head>
	  <title>Webspun</title>
	  <link rel="icon" href="/favicon.ico" />
	  <link rel="stylesheet" href="https://use.typekit.net/oeb1sbe.css" />
	</Head>
	
	<main className={"container-fluid-off " + props.page}>
		{props.children}
	</main>
	
	<RenderMain {...props} />
	
	<FooterScripts />
	
	<style>{`
	
	
	
    `}</style>
    
    <style jsx global>{`
    html {height:100%;}
    `}</style>
    
</>
)

export default Layout
