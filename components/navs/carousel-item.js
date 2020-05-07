const Carousel = props => (
<div className={"carousel-item "+props.activeState}>
	<div className="d-flex carousel-item-box justify-content-center align-items-center" style={props.style}>
		{props.children}
	</div>
</div>
)
export default Carousel










