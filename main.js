(function(){

	//Definimos la escena
	let scene=new THREE.Scene();
	//Definimos la camara
	const aspectRatio=window.innerWidth/window.innerHeight;
	let camera =new THREE.PerspectiveCamera(75,aspectRatio,0.1,100);
	//Definimos el render
	let renderer=new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);

	camera.position.z=5;
	camera.position.y=2;

	let geometry=new THREE.BoxGeometry(1,1,1);

	let groundMaterial=new THREE.MeshPhongMaterial({
		color: 0xffffff
	})

	let mesh=new THREE.Mesh(geometry,groundMaterial);

	let pointLight=new THREE.PointLight(0xdfebff);

	pointLight.position.y=20;

	scene.add(mesh);
	scene.add(new THREE.AmbientLight(0x404040))
	scene.add(pointLight);

	function loop(){
		requestAnimationFrame(loop)
		renderer.render(scene,camera);
	}

	loop();

})();