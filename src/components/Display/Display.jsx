export default function Display({ phrases }) {
  return (
    <div>
      {phrases.map((phrase) => (
        <p>{phrase}</p>
      ))}
    </div>
  );
}
