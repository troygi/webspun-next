import Head from 'next/head'
import Layout from '../../components/layout';
import Link from "next/link"


export default function Home() {
	return (
  	
  	<React.Fragment>
  	<Layout page="Playground">
  	
	<div className="container">
		<div className="row">
			<div className="col-sm">
		
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Character</h5>
					<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
					
					
					
					<form>
						<div className="form-group row">
							<label for="staticEmail" className="col-sm-5 col-form-label">Strength</label>
							<div className="col-sm-5">
							  <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="+0" />
							</div>
						</div>
						<div className="form-group row">
							<label for="inputPassword" className="col-sm-5 col-form-label">Dexterity</label>
							<div className="col-sm-5">
							  <input type="password" className="form-control" id="inputPassword" />
							</div>
						</div>
					</form>
  	
					
					
					
					
					<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the card's content.
					</p>
					<Link href="#">
						<a className="card-link">Cube</a>
					</Link>
				</div>
				</div>

		
			</div>
			<div className="col-sm">
			One of three columns
			</div>
			<div className="col-sm">
			One of three columns
			</div>
		</div>
	</div>
  	
	<form>
		<div className="form-group row">
			<label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
			<div className="col-sm-10">
			  <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com" />
			</div>
		</div>
		<div className="form-group row">
			<label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
			<div className="col-sm-10">
			  <input type="password" className="form-control" id="inputPassword" />
			</div>
		</div>
	</form>
  	
  	</Layout>

  	</React.Fragment>
		
	)
}
