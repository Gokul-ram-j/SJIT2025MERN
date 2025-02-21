import React from "react";

function Gallery() {
  const ExpensiveCalculation = ({ num }) => {
    const squaredValue = useMemo(() => {
      console.log("Calculating square...");
      return num * num;
    }, [num]); // Recalculates only when `num` changes

    return <p>Squared Value: {squaredValue}</p>;
  };
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(2);

  return (
    <div>
      <h2>useMemo Example</h2>
      <ExpensiveCalculation num={number} />

      <button onClick={() => setCount(count + 1)}>
        Increment Count ({count})
      </button>
      <button onClick={() => setNumber(number + 1)}>
        Change Number ({number})
      </button>
    </div>
  );
}

export default Gallery;
