import '../App.css';

export function Card({ card }) {
  return (
    <div className='flex flex-col justify-around h-30 w-30 items-center border-1 rounded-md border-slate-300'>
      <img src={card.picture.thumbnail} className='h-15 rounded-full '/>
      <div className='text-lg font-medium'>{card.name.first}</div>
    </div>
  );
}