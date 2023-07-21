import React, { useEffect } from 'react';
import { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const About = () => {
  const a =useContext(noteContext)
  useEffect(()=>{
    a.update();
    //eslint-disable-next-line
  },[])
  
  return (
    <div>
      This is our about us page {a.state.name} and he is class {a.state.class}
    </div>
  )
}

export default About
