import React, { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader'
import { PMREMGenerator } from 'three'
import * as THREE from 'three';

const Environment = () => {
  const { gl, scene } = useThree()

  useEffect(() => {
    const loader = new EXRLoader()
    loader.setDataType(THREE.UnsignedByteType)
    loader.load('/potsdamer.exr', (texture) => {
      const pmremGenerator = new PMREMGenerator(gl)
      const envMap = pmremGenerator.fromEquirectangular(texture).texture
      pmremGenerator.dispose()
      scene.environment = envMap
    })
  }, [gl, scene])

  return null
}

export default Environment
