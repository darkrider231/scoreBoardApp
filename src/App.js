// import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <div class="scoreboard1">
        <form>
          <label>
            <div class="txtScore">ScoreBoard</div>
            <div class="homeScore">
              <text class="score1" editable="false">0</text>
              
              <button class="homeAddButton">+</button>
            </div>
            <div class="home1">Home</div>
            <div class="vs">VS</div>
            <div class="awayScore">
              <text class="score2">0</text>
            
              <button class="awayAddButton">+</button>
            </div> 
            <div class="away1">Away</div>
            <div class="timeLeft">Time Left:</div>
            <div class="time">12:00</div>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
