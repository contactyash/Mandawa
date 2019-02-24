import { render } from 'react-dom'
import React, { useState, useCallback, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import '../css/styles.css'
import Image from 'gatsby-image'
import useInterval from './useInterval';
import styled from 'styled-components'

export const BgImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever

  // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill
  & > img {
    object-fit:cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
    font-family: 'object-fit: cover !important; object-position: 0% 0% !important;' // needed for IE9+ polyfill
  }
`

export default function ImageSlider({ imagesArr, index, direction, fadeOn }) {

  const forwardTransitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    config: (item, state) =>
      state === 'leave' ? { duration: 0 } : config.default,
  })
  const backwordTransitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(-100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(50%,0,0)' },
    config: (item, state) =>
      state === 'leave' ? { duration: 0 } : config.default,
  })
  const fadeInTransition = useTransition(index, item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: (item, state) =>
      state === 'leave' ? { duration: 0 } : config.default,
  })
  const renderImages = () => {
    if (direction) {
      return forwardTransitions.map(({ item, props, key }) => {
        const Image = imagesArr[item]
        return <Image key={key} style={props} />
      })
    } else {
      return backwordTransitions.map(({ item, props, key }) => {
        const Image = imagesArr[item]
        return <Image key={key} style={props} />
      })
    }

  }
  return (
    <div className="simple-trans-main" >
      {

        renderImages()
      }
    </div>
  )
}