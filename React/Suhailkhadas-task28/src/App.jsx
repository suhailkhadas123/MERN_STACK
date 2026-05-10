import Card from './components/cards'
// import './App.css'

function App() {

  return (
    <>
      <div className='px-30 pt-13 justify-items-center bg-black'>
        <h1 className='text-amber-100'>All Cards are Here</h1>
        <div className="grid grid-cols-3 grid-rows-4 gap-7">
            <div ><Card name="Card 1" des= "Description of card 1"/></div>
            <div ><Card name="Card 2" des= "Description of card 2"/></div>
            <div ><Card name="Card 3" des= "Description of card 3"/></div>
            <div className="row-start-2"><Card name="Card 3" des= "Description of card 3"/></div>
            <div className="row-start-2"><Card name="Card 4" des= "Description of card 4" /></div>
            <div className="row-start-2"><Card name="Card 5" des= "Description of card 5" /></div>
            <div className="row-start-3"><Card name="Card 6" des= "Description of card 6" /></div>
            <div className="row-start-3"><Card name="Card 7" des= "Description of card 7" /></div>
            <div className="row-start-3"><Card name="Card 8" des= "Description of card 8" /></div>
            <div className="row-start-4"><Card name="Card 9" des= "Description of card 9" /></div>
            <div className="row-start-4"><Card name="Card 10" des= "Description of card 10" /></div>
            <div className="row-start-4"><Card name="Card 11" des= "Description of card 11" /></div>
        </div>
      </div>
    
    </>
  )
}

export default App
