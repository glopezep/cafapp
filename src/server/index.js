import express from 'express'

const app = express()
const port = process.env.PORT || 3000

let articles = [
  {
    id: 1,
    idNuevo: 'sfASDASDQWDDSDFSFdxzczx11111111',
    name: 'Articulo 1',
    price: 100,
    image: 'http://www.indianfootballonline.com/img/sport/sport_318_test-201.gif'
  },
  {
    id: 2,
    idNuevo: 'sfASDASDQWDDSDFSFdxzczx22222222',
    name: 'Articulo 2',
    price: 175,
    image: 'http://www.indianfootballonline.com/img/sport/sport_318_test-201.gif'
  },
  {
    id: 3,
    idNuevo: 'sfASDASDQWDDSDFSFdxzczx33333333',
    name: 'Articulo 3',
    price: 320,
    image: 'http://www.indianfootballonline.com/img/sport/sport_318_test-201.gif'
  }
]
app.use(express.static(`${__dirname}/public`))

app.get('/api/articles', (req, res) => res.json(articles))

app.listen(port, () => console.log(`Server litening on port ${port}`))
