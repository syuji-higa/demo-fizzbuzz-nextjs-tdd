import React, { useState } from 'react'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [num, setNum] = useState('')

  const convertFizzbuzz = (e) => {
    const num = Number(e.target.value)
    if(!(num % (3 * 5))) {
      setNum('fizzbuzz')
      return
    }
    if(!(num % 3)) {
      setNum('fizz')
      return
    }
    if(!(num % 5)) {
      setNum('buzz')
      return
    }
    setNum(e.target.value)
  }

  return (
    <div className={styles.container}>
      <p><input type="text" data-testid="input" onChange={convertFizzbuzz} /></p>
      <p data-testid="output">{num}</p>
    </div>
  )
}

export default Home
