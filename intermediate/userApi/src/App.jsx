import { useState, useEffect, useRef } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Header />
      <Cards cards={cards} loading={loading}/>
      <Footer cards={cards} setCards={setCards} setLoading={setLoading}/>
    </>
  )
}

function Header(){

  return (
    <div>Random Users</div>
  )
}


function Cards({cards, loading}){
  
  return(
    <>
      {!loading && cards.map( card => <Card key={card.login.uuid} card={card}/>)}
    </>
  )
}

function Card({card}){

  return (
    <div>
      <img src={card.picture.thumbnail} />
      <div>{card.name.first}</div>
    </div>
  )
}

function Footer( {cards, setCards, setLoading}){
  console.log("inside footer");

  async function addCard(){
    try{
      setLoading( true );
      const response = await axios.get("https://randomuser.me/api?page=2");

      //Its an asynchronious call
      setCards([...cards, ...response.data.results]);
      setLoading(false);
    }catch(e){
      console.log(e);
    }
  }

  //print cards when it's updated
  useEffect(function (){
    console.log(cards);
  }, [cards])


  return(
    <button onClick={addCard}>Load more users</button>
  )
}




export default App
