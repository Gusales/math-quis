import 'dotenv/config'
import app from './app'

const port = process.env.PORT ? Number(process.env.PORT) : 3333

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`🚀 server running on http://localhost:${port}/`)
  })
