import React, { useRef, useState } from "react";
import styles from "../styles/signup.module.css";

function Signup() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign Up</h2>
      <form onSubmit={()=>{console.log({email,password})}} className={styles.form}>
        <div className={styles.inputGroup}>
          <label>Email:</label>
          <input required onChange={(e)=>setEmail(e.target.value)} value={email} type="email"  className={styles.input} />
        </div>
        <div className={styles.inputGroup}>
          <label>Password:</label>
          <input required onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className={styles.input} />
        </div>
        <button type="button"  className={styles.focusBtn}>
          Focus on Email
        </button>
        <button type="submit" className={styles.submitBtn}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
