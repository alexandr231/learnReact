import React from 'react'
import preloader from '../../../assets/images/zxc-cat.gif'
import classes from './Preloader.module.css'

function Preloader() {
  return (
    <img src={preloader} className={classes.gif}></img>
  )
}

export default Preloader