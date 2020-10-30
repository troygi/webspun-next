const Card = (props) => (
	<React.Fragment>
	<style jsx>{`
	.card {min-height:450px;}
	.card-title {font-size:1.5rem;color:#219cd7;}
	a, a:hover {color:#7a7a7a; text-decoration:none;display:block;}
	img {display:block;border-bottom:1px solid rgba(0, 0, 0, 0.125);}
    `}</style>
    
    <a className="mb-4" href={props.link}>
    <div className="card">
	  <img src={props.src} className="card-img-top" alt="..." />
	  <div className="card-body">
		<h5 className="card-title">{props.heading}</h5>
		
		{props.children}
		
		{/* <a href={props.link} className="btn btn-primary">More...</a> */}
	  </div>
	</div>
	</a>
	 </React.Fragment>
)
export default Card