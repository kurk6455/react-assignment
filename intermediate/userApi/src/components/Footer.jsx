import { useContext, useEffect } from "react";
import { CardsContext } from "./authSystem";
import '../App.css'


export function Footer() {
  const { cards, setCards, setLoading } = useContext(CardsContext);
  console.log("inside footer");

  async function addCard() {
    try {
      setLoading(true);
      const response = await axios.get("https://randomuser.me/api?page=2");

      //Its an asynchronious call
      setCards([...cards, ...response.data.results]);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  //print cards when it's updated
  useEffect(
    function () {
      console.log(cards);
    },
    [cards]
  );

  return <div className="flex justify-center"> 
    <button onClick={addCard} className="h-10 w-40 bg-green-300 text-md rounded-md">Load more users</button>
    </div>
}