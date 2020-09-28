const Canvas = (props) => (
<div id={props.id + "-box"} className="canvas-box">
	{props.children}
	<canvas id={props.id} className="canvas"></canvas>
	<style jsx>{`
	.canvas-box {
		width: 100%; 
		position:relative; 
	}
	.canvas {
		display:block;
		width: 100%; 
		height: 100% 
		padding: 0;
		margin: 0;
		border:1px rgb(200,200,200) solid
	}
	`}</style>
</div> 
)
export default Canvas