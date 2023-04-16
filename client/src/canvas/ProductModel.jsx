const ProductModel = ({ url, ...props }) => {
    const gltf = useLoader(THREE.GLTFLoader, url)
  
    return (
      <group {...props}>
        <mesh geometry={gltf.scene.children[0].geometry} material={gltf.scene.children[0].material} />
      </group>
    )
  }

  export default ProductModel