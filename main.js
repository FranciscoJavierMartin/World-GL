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

	renderer.render(scene,camera);
})();