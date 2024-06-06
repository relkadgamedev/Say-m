
import { CountdownTimer } from '@/components/CountdownTimer/CountdownTimer';
import '../styles/main.scss'

const today = new Date();
// let target = new Date(today)
let target = new Date("2024-06-26T016:00:00"); // This is standardized and will work reliably
target.setDate(target.getDate())

const timerLabels = ['days', 'hours', 'minutes', 'seconds']

export default function Home() { 

  return (
    <main className="container">
      <section>
          
          <CountdownTimer targetDate={target.toISOString()} labels={timerLabels}/>
      </section>
    </main>
  );
}