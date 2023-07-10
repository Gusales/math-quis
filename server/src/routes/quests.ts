import { FastifyInstance } from 'fastify'
import data from '../database/quests'

export async function questsRoutes(app: FastifyInstance) {
  app.get('/quests', () => {
    return data
  })
}
