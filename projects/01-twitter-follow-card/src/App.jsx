import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'iLestar',
    name: 'Juan Gomez',
    isFollowing: true 
  },
  {
    userName: 'STBenji',
    name: 'Stiven Benjumea',
    isFollowing: false
  },
  {
    userName: 'ConanGH-S',
    name: 'Stiven Blandón',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Durán',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
