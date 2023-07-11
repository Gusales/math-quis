import 'dotenv/config'
import app from './app'

const port = process.env.PORT ? Number(process.env.PORT) : 3333

app
  .listen({
    port,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log(`🚀 server running on http://localhost:${port}/`)
  })
