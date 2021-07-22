import * as React from 'react'
import '../box-styles.css'

function Box({size = '', style, ...otherProps}) {
  return (
    <div
      className={`box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box style={{backgroundColor: 'yellow'}}>sizeless box</Box>
    </>
  )
}

export default App
