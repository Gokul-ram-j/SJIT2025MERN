import React, { useRef } from 'react'

function Signup() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focuses the input field
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type something..." />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

export default Signup