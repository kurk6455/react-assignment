import { useContext } from "react";
import { CardsContext } from "./authSystem";
import { Card } from "./Card";
import '../App.css';

export function Cards() {
  const { cards, loading } = useContext(CardsContext);

  return (
    <div className="grid grid-cols-1 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-8 m-20">
      {loading ? <div>Loading ..... </div> :
        cards.map((card) => <Card key={card.login.uuid} card={card} />)}
    </div>
  );
}