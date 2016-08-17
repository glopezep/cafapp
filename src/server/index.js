import express from 'express'
import article from './api/article'
import menu from './api/menu'
import order from './api/order'

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(`${__dirname}/public`))
app.use('/api', api, menu, order)

app.listen(port, () => console.log(`Server litening on port ${port}`))
