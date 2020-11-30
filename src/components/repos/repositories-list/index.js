import React from 'react'

export default function RepositoriesList ({ repositories }) {
  return (
    <ul>
      {
        repositories.map((repo, key) => (
          <li key={key}>{repo}</li>
        ))
      }
    </ul>
  )
}