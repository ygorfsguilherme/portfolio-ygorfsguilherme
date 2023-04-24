import React from 'react'
import styled from 'styled-components'

function EfectVariants(
  Props: {
    time: number, 
    id: number,
    children: React.ReactNode
  }) {
    const Variants = styled.div `
    animation: zoom ${Props.time}s ease-in-out;

    @keyframes zoom {
      0% {
          opacity: 0;
          transform: scale(0);
      }
      100% {
          opacity: 1;
          transform: scale(1);
      }
    }
    `
  return (
    <Variants key={Props.id}>
        {Props.children}
    </Variants>
  )
}

export default EfectVariants