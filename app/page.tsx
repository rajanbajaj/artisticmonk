"use client"
import { NextPage } from "next";
import React from "react";
import * as THREE from "three";
import PageLayout from "./layouts/PageLayout";

const Home: NextPage = () => {
  React.useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.getElementsByClassName("3d-image")[0].appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load("/assets/lighthouse.jpg");
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      plane.rotation.x += 0.01;
      plane.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <PageLayout title="Artistic Monk">
      <div className="3d-image w-70"></div>
    </PageLayout>
  );
};

export default Home;