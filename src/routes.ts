import { request, Router } from 'express'

const routes = Router()

routes.post('users', (request, response) => {
  return response.status(201).send()
})

export { routes }