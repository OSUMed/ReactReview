export default function Lab() {
  return (
    <div>
      <Pokemon name="Squirle" level={10} type="Water" />
      <Pokemon name="Charmandar" level={11} type="Fire" />
      <Pokemon name="Bulbasaur" level={8} type="Grass" />
    </div>
  );
}

const Pokemon = (props) => {
  const { name, level, type } = props;
  return (
    <>
      <h3>You chose {name}</h3>
      <h5>Type is {type}</h5>
      <h5>Level: {level}</h5>
    </>
  );
};
