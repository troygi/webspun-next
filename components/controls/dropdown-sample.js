const dropdown = props => (
<React.Fragment>
<style jsx>{`	
#dropdown-sample {
	position:absolute;
	top:10px;
	right:10px;
	z-index:10
}
.dropdown-menu {
	background-color:rgba(255,255,255,0.5);
	width:200px;
	margin:0
}		
`}</style>
<div id="dropdown-sample" className="dropdown">
  <button className="btn btn-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	{props.menuTitle}
  </button>
  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2">
	<form className="px-4 py-3">
	{props.children}
	</form>
  </div>
</div>
</React.Fragment>
)
export default dropdown
