/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: deecube1 (https://sketchfab.com/deecube1)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-orbit-665a96f13ee24657b236a49cb9900061
Title: Earth Orbit
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

import earthScene from '../assets/3d/earth_orbit.glb'

const EarthOrtbit = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(earthScene)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="59ce9605db9a4faf8edac176bed5439cfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Globe_Wire"
                  position={[0.742, 0, -1.336]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={1.025}>
                  <mesh
                    name="Globe_Wire_M_GlobeWire_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe_Wire_M_GlobeWire_0.geometry}
                    material={materials.M_GlobeWire}
                  />
                </group>
                <group
                  name="Globe_Solid"
                  position={[0.742, 0, -1.336]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Globe_Solid_M_GlobeSolid_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Globe_Solid_M_GlobeSolid_0.geometry}
                    material={materials.M_GlobeSolid}
                  />
                </group>
                <group
                  name="Sat_Org"
                  position={[0, 0, -0.003]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.119}>
                  <group name="Object_9" position={[634.291, 210.332, 0]}>
                    <mesh
                      name="Sat_Org_M_Sat_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Sat_Org_M_Sat_0.geometry}
                      material={materials.M_Sat}
                    />
                    <mesh
                      name="Sat_Org_M_Ray_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Sat_Org_M_Ray_0.geometry}
                      material={materials.M_Ray}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default EarthOrtbit