import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'


let clock;
let canvas;
let scene;
let sizes;
let camera;
let controls;
let renderer;
let elapsedTime;
let textureLoader;
let htmlTexture;
let cssTexture;
let jsTexture;
let angularTexture;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('webgl', { static: true }) webgl: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit(): void {

    // Canvas
    canvas = this.webgl.nativeElement;

    // Scene
    scene = new THREE.Scene()
    scene.background = new THREE.Color('#12232e');


    //Sizes
    sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    //Fonts;
    const fontLoader = new THREE.FontLoader();

    fontLoader.load(
      'assets/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
          'I am Dare Lawal,',
          {
            font: font,
            size: 0.4,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
          }
        )

        textGeometry.center();
        const material = new THREE.MeshNormalMaterial({ color: '#1A44B2' });
        // material.map = doorColorTexture;
        const text = new THREE.Mesh(textGeometry, material);
        text.position.y = 0.75
        scene.add(text);
      }
    )
    fontLoader.load(
      'assets/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
          'a frontend developer,',
          {
            font: font,
            size: 0.4,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
          }
        )

        textGeometry.center();
        const material = new THREE.MeshNormalMaterial({ color: '#1A44B2' });
        const text = new THREE.Mesh(textGeometry, material);
        // text.position.y = -0.75
        scene.add(text);

      }
    )
    fontLoader.load(
      'assets/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new THREE.TextBufferGeometry(
          'a wordpress developer',
          {
            font: font,
            size: 0.4,
            height: 0.2,
            curveSegments: 6,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
          }
        )
        textGeometry.center();
        const material = new THREE.MeshNormalMaterial({ color: '#1A44B2' });
        const text = new THREE.Mesh(textGeometry, material);
        text.position.y = -0.75;
        scene.add(text);
      }
    )

    //Textures;
    textureLoader = new THREE.TextureLoader();
    htmlTexture = textureLoader.load('/assets/textures/html.png')
    cssTexture = textureLoader.load('/assets/textures/css.png')
    jsTexture = textureLoader.load('/assets/textures/js.png')
    angularTexture = textureLoader.load('/assets/textures/angular.png')

    //HTML CUBES;
    const htmlGeometry = new THREE.BoxGeometry(1, 1, 1);
    const htmlMaterial = new THREE.MeshBasicMaterial();
    htmlMaterial.map = htmlTexture;

    for (let i = 0; i < 20; i++) {

      const donut = new THREE.Mesh(htmlGeometry, htmlMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.5;
      donut.scale.set(scale, scale, scale);

      scene.add(donut);

    }

    //CSS CUBES;

    const cssGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cssMaterial = new THREE.MeshBasicMaterial();
    cssMaterial.map = cssTexture;

    for (let i = 0; i < 20; i++) {

      const donut = new THREE.Mesh(cssGeometry, cssMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.5;
      donut.scale.set(scale, scale, scale);

      scene.add(donut);

    }

    //JS CUBES;

    const jsGeometry = new THREE.BoxGeometry(1, 1, 1);
    const jsMaterial = new THREE.MeshBasicMaterial();
    jsMaterial.map = jsTexture;

    for (let i = 0; i < 20; i++) {

      const donut = new THREE.Mesh(jsGeometry, jsMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.5;
      donut.scale.set(scale, scale, scale);

      scene.add(donut);

    }

    //Angular cubes;

    const angularGeometry = new THREE.BoxGeometry(1, 1, 1);
    const angularMaterial = new THREE.MeshBasicMaterial();
    angularMaterial.map = angularTexture;

    for (let i = 0; i < 20; i++) {

      const donut = new THREE.Mesh(angularGeometry, angularMaterial);

      donut.position.x = (Math.random() - 0.5) * 10;
      donut.position.y = (Math.random() - 0.5) * 10;
      donut.position.z = (Math.random() - 0.5) * 10;

      donut.rotation.x = Math.random() * Math.PI;
      donut.rotation.y = Math.random() * Math.PI;

      const scale = Math.random() * 0.5;
      donut.scale.set(scale, scale, scale);

      scene.add(donut);

    }



    //Clock
    clock = new THREE.Clock();


    //Camera
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
    // this.camera.position.x = 1
    // this.camera.position.y = 1
    camera.position.z = 5
    scene.add(camera)

    // Controls
    controls = new OrbitControls(camera, canvas)
    controls.enableDamping = true
    controls.autoRotate = true;
    // controls.autoRotateSpeed = 20;


    tick();

  }

}



const tick = () => {

  const elapsedTime = clock.getElapsedTime();

  camera.position.x = Math.sin(elapsedTime * 0.7);
  camera.position.y = Math.cos(elapsedTime * 0.7);

  renderer = new THREE.WebGLRenderer({
    canvas: canvas
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))



  // Update controls
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Call tick again on the next frame
  window.requestAnimationFrame(tick)
}

