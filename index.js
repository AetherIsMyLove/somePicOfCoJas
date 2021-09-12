const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()
const port = 8080

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api/CoJas', (req, res) => {
  res.json([
      
      { 
          
          image:"https://bit.ly/3nqC8YW"
      },
      
      {
        image:"https://bit.ly/3C2ZO9B"
      },
      {
          image:"https://bit.ly/3z5rSYa"
      },
      {
          image:"https://bit.ly/3lgdDuA"
      }

  ])
})
app.get('/api/CoJas/random',async (req,res) => {
    
const imgSrc = await axios.get('http://localhost:8080/api/CoJas')
const num = imgSrc.data.length
const rd = parseInt(Math.random()*num)
console.log(rd)

res.json(imgSrc.data[rd])
 
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})