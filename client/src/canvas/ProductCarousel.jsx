import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

const ProductCarousel = () => {
    const carouselRef = useRef()
  
    useFrame(() => {
      carouselRef.current.rotation.y += 0.01
    })
  
    return (
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group ref={carouselRef}>
            <ProductModel url="/path/to/product1.glb" position={[0, 0, -10]} />
            <ProductModel url="/path/to/product2.glb" position={[10, 0, 0]} />
            <ProductModel url="/path/to/product3.glb" position={[0, 0, 10]} />        </group>
      </Canvas>
    )
  }
  
export default ProductCarousel