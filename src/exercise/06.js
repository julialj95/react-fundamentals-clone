import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [error, setError] = React.useState('')
  const usernameInputRef = React.useRef()
  function handleSubmit(event) {
    event.preventDefault()
    let usernameInput = usernameInputRef.current.value
    onSubmitUsername(usernameInput)
  }

  function handleChange(event) {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lowercase.')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          ref={usernameInputRef}
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
        />
      </div>
      <div style={{color: 'red'}}>{error}</div>
      <button disabled={error} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
