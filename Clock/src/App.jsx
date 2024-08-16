
import './App.css'
import AuctionTimer from './AuctionTimer'
import CountdownTimer from './CountdownTimer'
import CurrentTime from './CurrentTime'
import Stopwatch from './Stopwatch'

function App() {

  return (
    <>
      <CurrentTime />
      <CountdownTimer initialSeconds={3000} />
      <Stopwatch />
      <AuctionTimer/>
    </>
  )
}

export default App
