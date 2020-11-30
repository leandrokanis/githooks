import { useEffect, useState } from 'react'
import { get } from '../api/repos.api'

export function useFetchRepos (user) {
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    if (user.username) {
      get(user.username)
      .then(data => {
        setRepositories(data.map(repo => repo.name))
      })
      .catch(error => {
        console.error(error)
      })
    }
  }, [user])

  return repositories
}