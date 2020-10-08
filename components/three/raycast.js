function Raycast(THREE) {

	this.raycaster = new THREE.Raycaster()
	this.mouse = new THREE.Vector2(1, 1)
	this.intersects = []
}

Raycast.prototype.mouseMove = function(event) {
	
	event.preventDefault()

	this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
	this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1
}

export default Raycast