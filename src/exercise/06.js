import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  function handleSubmit(event) {
    event.preventDefault()
    let usernameInput = event.target.elements.username.value
    onSubmitUsername(usernameInput)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
