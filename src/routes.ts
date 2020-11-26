import { request, Router } from 'express'
import { createUserController } from './useCases/CreateUser'

const routes = Router()

// routes.get('/users', (request, response) => {
//   return response.send('Hello World!')
// })

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})

export { routes }