import * as React from 'react'
import '../box-styles.css'

function Box({className = '', children, ...otherProps}) {
  return (
    <div
      className={`box ${className}`}
      style={{fontStyle: 'italic'}}
      {...otherProps}
    >
      {children}
    </div>
  )
}

// const smallBox = (
//   <div
//     className="box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

function App() {
  return (
    <>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </>
  )
}

export default App
