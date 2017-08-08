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

	camera.position.z=60;
	camera.position.y=2;

	let planeGeometry=new THREE.PlaneGeometry(200,900);

	planeGeometry.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

	let groundMaterial=new THREE.MeshPhongMaterial({
		color: 0x222222
	});

	let plane=new THREE.Mesh(planeGeometry,groundMaterial);

	let mesh;
	let loader =new THREE.TextureLoader();

	loader.load('black.jpg',function(texture){
		let geometry=new THREE.SphereGeometry(20,100,100)

		let material=new THREE.MeshBasicMaterial({
			map: texture
		});

		mesh=new THREE.Mesh(geometry,material);

		mesh.position.y=25;
		scene.add(mesh);
	})

	//let geometry=new THREE.BoxGeometry(1,1,1);

	

	//let mesh=new THREE.Mesh(geometry,groundMaterial);

	let pointLight=new THREE.PointLight(0xdfebff);

	pointLight.position.y=20;

	//scene.background=new THREE.Color(0xeeeeee);
	//scene.add(mesh);
	//scene.add(new THREE.AmbientLight(0x404040))
	scene.add(plane);
	scene.add(pointLight);

	let controls =new THREE.OrbitControls(camera,renderer.domElement);

	function loop(){
		requestAnimationFrame(loop);
		mesh.rotation.y+=0.01;
		//mesh.rotation.z+=0.03;
		renderer.render(scene,camera);
	}

	loop();

})();