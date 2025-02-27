import React, { useRef, useState } from "react";
import styles from "../styles/signup.module.css";

function Signup() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const handleSubmit=async(e)=>{
    console.log('entered')
    e.preventDefault()
    const response=await fetch('http://localhost:3000/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify( {
        email,password
      })
    })
    console.log(response)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign Up</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input required onChange={(e)=>setEmail(e.target.value)} value={email} type="email"  className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input required onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className={styles.input} />
        </div>
        <button type="submit" className={styles.submitBtn}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
