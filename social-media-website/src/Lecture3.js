export default function Operators() {
  const age = 22;
  return (
    <>
      {age >= 18 ? <h2>OVER AGE</h2> : <h2>UNDER AGE</h2>}
      {age >= 18 && <h1>AND operator overage</h1>}
    </>
  );
}
