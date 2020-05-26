import React from 'react'
import Particles from 'react-particles-js'


const ParticleBackground = () => {
  return (
    <Particles
      canvasClassName="background"
      params={{
        particles: { 
          number: { 
            value: 200, 
            density: { 
              enable: true, 
              value_area: 1000, 
            } 
          }, 
          size: {
            value: 2,
            random: {
              enable: true,
              minimumValue: 0.5,
            }
          },
          color: {
            value: "999"
          },
          lineLinked: {
            color: {
              value: "999"
            },
            distance: 90,
          },
          move: {
            speed: 1,
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            }
          },
          modes: {
            grab: {
              distance: 120,
              lineLinked: {
                opacity: 1,
              }
            }
          }
        }
      }}
    />
  )
}

export default ParticleBackground;