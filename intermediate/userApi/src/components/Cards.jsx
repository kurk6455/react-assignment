import { useContext } from "react";
import { CardsContext } from "./authSystem";
import { Card } from "./Card";

export function Cards() {
  const { cards, loading } = useContext(CardsContext);

  return (
    <>
      {loading ? <div>Loading ..... </div> :
        cards.map((card) => <Card key={card.login.uuid} card={card} />)}
    </>
  );
}