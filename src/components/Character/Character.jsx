export default function Character({ head, middle }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column' }}>
      <article
        className="head"
        style={{
          backgroundImage: `url(./${head}-head.png)`,
          height: 100,
          width: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>

      <article
        className="head"
        style={{
          backgroundImage: `url(./${middle}-middle.png)`,
          height: 100,
          width: 150,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></article>
    </section>
  );
}
