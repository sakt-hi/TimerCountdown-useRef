import { useRef, useState } from 'react';
import Player from './components/Player.jsx';
import TimerChallenges from './components/TimerChallenges.jsx';

function App() {
  const playerName = useRef();
  const [player, setPlayer] = useState(null)
  function handlePlayerName(){
    setPlayer(playerName.current.value);
    playerName.current.value='';
  }

  

  return (
    <>
      <Player ref={playerName} player={player} onChangeName={handlePlayerName} />
      <div id="challenges">
        <TimerChallenges title={'Easy'} targetTime={1} />
        <TimerChallenges title={'Medium'} targetTime={5} />
        <TimerChallenges title={'Hard'} targetTime={10} />
        <TimerChallenges title={'Pros only'} targetTime={15} />
      </div>
    </>
  );
}

export default App;
