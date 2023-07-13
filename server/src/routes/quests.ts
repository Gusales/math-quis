import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import data from '../database/quests'

export async function questsRoutes(app: FastifyInstance) {
  app.get('/quests', () => {
    return data
  })

  app.get('/quests/:difficulty', (request, replay) => {
    const paramsSchema = z.object({ difficulty: z.string() })

    const { difficulty } = paramsSchema.parse(request.params)
    const { easy, medium, hard } = data

    if (difficulty === '1') {
      return replay.code(200).send(easy)
    } else if (difficulty === '2') {
      return replay.code(200).send(medium)
    } else if (difficulty === '3') {
      return replay.code(200).send(hard)
    } else {
      return replay.code(404).send({ mensage: 'Difficulty is not found' })
    }
  })
}
