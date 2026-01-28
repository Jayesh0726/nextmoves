import React, { useId } from 'react'

/**
 * @typedef {Object} SpotLightProps
 * @property {string} [bgcolor]
 * @property {string} [height]
 * @property {string} [width]
 * @property {string} [blur]
 * @property {string} [left]
 * @property {string} [top]
 * @property {string} [translateX]
 * @property {string} [translateY]
 * @property {string} [rotateX]
 */

/**
 * @param {SpotLightProps & React.HTMLAttributes<HTMLDivElement>} props
 * @param {React.Ref<HTMLDivElement>} ref
 */
const SpotLight = React.forwardRef(function spotLight({
  bgcolor = "",
  height = "",
  width = "",
  blur = "",
  left = "",
  top = "",
  translateX = "",
  translateY = "",
  rotateX = "",
  ...props
}, ref) {
  const id = useId();
  return (
    <div 
      id={id} 
      className={`overflow-x-hidden rounded-full absolute ${rotateX} ${bgcolor} ${height} ${width} ${blur} ${left} ${top} ${translateX} ${translateY}`} 
      {...props}
      ref={ref}
    />
  )
})

SpotLight.displayName = "SpotLight";
export default SpotLight;
