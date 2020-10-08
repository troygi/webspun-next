function Scene(THREE, canvas) {
	
	this.scene = new THREE.Scene();
	//this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 1, 1000 );
	this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, .1, 1000 );		
	this.canvas = document.getElementById(canvas);
	//this.canvasBox = document.getElementById(canvas + "-box");
	this.renderer = new THREE.WebGLRenderer({canvas: this.canvas, antialias: true});
	this.renderer.setSize( window.innerWidth, window.innerHeight );
	this.renderer.setClearColor (0xE1F9FD, 1);
	
	window.addEventListener('resize', this.onWindowResize.bind(this), false);
	this.onWindowResize();
}


Scene.prototype.lights = function(THREE) {

	var light = new THREE.AmbientLight(0Xffffff, 0.5);
	this.scene.add(light);

	var light1 = new THREE.PointLight(0Xffffff, 0.5);
	light1.position.x = 20;
	light1.position.y = 20;
	light1.position.z = 10;

	this.scene.add(light1);

	var light2 = new THREE.PointLight(0Xffffff, 0.3);
	light2.position.x = -20;
	light2.position.y = 20;
	light2.position.z = 20;

	this.scene.add(light2);
};

Scene.prototype.onWindowResize = function() {

	//var width = this.canvasBox.offsetWidth;
			
	this.camera.aspect = window.innerWidth / window.innerHeight;
	this.camera.updateProjectionMatrix();
	this.renderer.setSize( window.innerWidth, window.innerHeight );
};


Scene.prototype.setColor = function(model, material) {
	
	model.traverse( function ( node ) {

		if ( node.isMesh ) node.material = material;
	} );
};

export default Scene