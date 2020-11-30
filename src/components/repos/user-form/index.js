import React, { useState } from 'react'

export default function ReposForm({ onValid }) {
  const username = useFormInput('')

  const user = {
    username: username.value
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, onValid, user)}>
      <h2>Repos</h2>

      <div>
        <label>username: </label>
        <input {...username} />
      </div>

      <button type="submit">
        Buscar
      </button>
    </form>
  )
}

function handleSubmit (e, onValid, user) {
  e.preventDefault()
  onValid(user)
}
  
function useFormInput (initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleValueChange (e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleValueChange
  }
}
