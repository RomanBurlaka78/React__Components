import './App.css';
import Review from  './Review';

function App() {
  return (
    <main>
        <section className="review__container">
          <div className='title'>
            <h2>Our reviews</h2>
            <div className='underline'></div>
          </div>
          <Review/>
        </section>
    </main>
  );
}

export default App;
