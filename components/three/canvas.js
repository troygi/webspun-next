const Canvas = (props) => (
	<>
	{props.children}
	<canvas id={props.id} className="canvas"></canvas>
	<style jsx>{`
	.canvas {
		display:block;
		width: 100%; 
		height: 100% 
		padding: 0;
		margin: 0;
		//border:1px rgb(200,200,200) solid
	}
	`}</style>
	</>
)
export default Canvas