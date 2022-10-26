import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid'





function ZarOyunu() {
  const [randoms, setRandoms] = useState([]);
  const [randoms2, setRandoms2] = useState([]);



  function randomNumber() {
    let sayi1 = Math.floor(Math.random() * 6) + 1;
    let sayi2 = Math.floor(Math.random() * 6) + 1;
    if (sayi1 == 1) {
      setRandoms([...randoms, "bir"])
    } else if (sayi1 == 2) {
      setRandoms([...randoms, "iki"])
    } else if (sayi1 == 3) {
      setRandoms([...randoms, "uc"])
    } else if (sayi1 == 4) {
      setRandoms([...randoms, "dort"])
    } else if (sayi1 == 5) {
      setRandoms([...randoms, "bes"])
    } else if (sayi1 == 6) {
      setRandoms([...randoms, "alti"])
    }

    if (sayi2 == 1) {
      setRandoms2([...randoms2, "bir"])
    } else if (sayi2 == 2) {
      setRandoms2([...randoms2, "iki"])
    } else if (sayi2 == 3) {
      setRandoms2([...randoms2, "uc"])
    } else if (sayi2 == 4) {
      setRandoms2([...randoms2, "dort"])
    } else if (sayi2 == 5) {
      setRandoms2([...randoms2, "bes"])
    } else if (sayi2 == 6) {
      setRandoms2([...randoms2, "alti"])
    }

  }




  return (

    <div>
      < button onClick={randomNumber} > Zar at</button >

<Grid container >
      {
        randoms.map((data, index) => {
          return (
            <div>
             
                <Card key={index} style={{display: "inline"}} >

                  <CardMedia
                    component="img"
                    height="140"
                    src={require('../image/' + data + '.png')}
                    alt={data}
                    width="500"
                    
                  />
                </Card>
                
                <Card key={index + '2'}  style={{display: "inline"}} >

                  <CardMedia
                    component="img"
                    height="140"
                    src={require('../image/' + randoms2[index] + '.png')}
                    alt={data}
                    width="500"
                  />
                </Card>
              
            </div>
          )
        })
      }
</Grid>
      {
        randoms.map((randoms, index) => {
          return (
            <div key={index}>
              {randoms}
              {randoms2[index]}
            </div>
          )
        })
      }



    </div >
  )



}
export default ZarOyunu;