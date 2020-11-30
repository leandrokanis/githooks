import React, { useState } from 'react'
import ReposForm from '../../components/repos/user-form'
import RepositoriesList from '../../components/repos/repositories-list'
import { useFetchRepos } from '../../services/repos.service'

export default function ReposPage() {
  const [user, setUser] = useState({
    username: ''
  })

  const repositories = useFetchRepos(user)

  return (
    <div>
      <ReposForm onValid={setUser} />
      <RepositoriesList repositories={repositories} />
    </div>
  )
}
