
import './App.css'
import { BoxSkor } from './Box-skor' 
import { DeskripsiSkor } from './Deskripsi-skor'
import { BoxReaction } from './Box-reaction'
import { BoxMemory } from './Box-memory' 
import { BoxVerbal } from './Box-verbal' 
import { BoxVisual } from './Box-visual'
import { Button } from './Button' 

function App() {

  return (
    <>
      <div className='container'>
        <div className="card-1">
          <h1>Your Result</h1>
          <BoxSkor />
          <h2 className="tingkatan">Great</h2>
          <DeskripsiSkor/>
        </div>

        <div className="card-2">
          <h1>Summary</h1>
          <BoxReaction/>
          <BoxMemory/>
          <BoxVerbal/>
          <BoxVisual/>

          <Button/>
        </div>
      </div>
    </>
  )
}

export default App
