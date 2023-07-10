import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import { questsRoutes } from './routes/quests'

const app = fastify()

app.register(cors, {
  origin: ['*'],
})

app.register(questsRoutes)

export default app
