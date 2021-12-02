export default function Display({ phrases }) {
  return (
    <div>
      {phrases.map((phrase) => (
        <p key={phrase}>{phrase}</p>
      ))}
    </div>
  );
}
