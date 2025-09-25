
export function Card({ card }) {
  return (
    <div>
      <img src={card.picture.thumbnail} />
      <div>{card.name.first}</div>
    </div>
  );
}