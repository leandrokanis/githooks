import { http } from '../http'

export function get(username) {
  return http.get(`https://api.github.com/users/${username}/repos`)
}
