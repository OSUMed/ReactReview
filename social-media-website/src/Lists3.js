export default function Lists3() {
  const cities = ["London", "Paris", "Frisco", "Los Angeles", "Prague"];

  const travelers = [
    { name: "Pedro", age: 21 },
    { name: "Sri", age: 34 },
    { name: "Brit", age: 23 },
  ];

  return (
    <>
      <h2>
        <h1>No Function</h1>
        <h5>{cities[0]}</h5>
        <h5>{cities[1]}</h5>
        <h5>{cities[2]}</h5>
      </h2>
      <h3>
        <h1>forEach</h1>
      </h3>
      <h3>
        <h1>List Mapping</h1>
        {cities.map((city, key) => {
          return (
            <h3 key={key}>
              {city} at index {key}
            </h3>
          );
        })}
      </h3>
      <h3>
        <h1>Object Mapping</h1>
        {travelers.map((traveler, key) => {
          return (
            <h3 key={key}>
              Traveler {traveler.name}'s age is {traveler.age}
            </h3>
          );
        })}
      </h3>
      <h3>
        <h1>Object Mapping with Obj Deconstruction</h1>
        {travelers.map(({ name, age }, key) => {
          return (
            <h3 key={key}>
              Traveler {name}'s age is {age}
            </h3>
          );
        })}
      </h3>
      <h1>
        Object Mapping with Obj Deconstruction AND with Component External
      </h1>
      {travelers.map(({ name, age }) => {
        return (
          <h3>
            <TravelerExternal name={name} age={age} />
          </h3>
        );
      })}
    </>
  );
}

const TravelerExternal = ({ name, age }) => {
  return (
    <div>
      {" "}
      {name} ,{age}
    </div>
  );
};
