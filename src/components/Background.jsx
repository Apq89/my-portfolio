import React, { useEffect } from 'react';
import * as THREE from 'three';

const Background = () => {
  useEffect(() => {
    // Definir a cena, câmera e renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    // Ajustar o tamanho do renderizador para ocupar toda a janela
    renderer.setSize(window.innerWidth, window.innerHeight);
    // Definir o canvas no div correto
    const canvasContainer = document.getElementById('background');
    canvasContainer.appendChild(renderer.domElement);

    // Criar partículas (estrelas) - reduzimos o número para 7.000
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 7000; // Reduzido em 30%

    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.5,
      transparent: true,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Configurar a câmera inicial
    camera.position.z = 100;

    // Função de animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Animar as partículas (estrelas)
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    // Função para movimentar as estrelas com o mouse
    const onMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Ajuste da posição da câmera para criar o efeito de afastamento das estrelas
      camera.position.x = mouseX * 100;
      camera.position.y = mouseY * 100;

      // Foca a câmera para o centro da cena
      camera.lookAt(scene.position);
    };

    // Adicionar evento de movimento do mouse
    window.addEventListener('mousemove', onMouseMove);

    // Ajustar a renderização ao redimensionar a janela
    window.addEventListener('resize', () => {
      // Atualiza a proporção da câmera e o tamanho do renderizador ao redimensionar a janela
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Iniciar animação
    animate();

    // Limpeza de eventos ao desmontar o componente
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div 
      id="background" 
      style={{ 
        minHeight: '100%',
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100vw',  
        height: '100vh',  
        zIndex: -1, 
      }} 
    />
  );
};

export default Background;
