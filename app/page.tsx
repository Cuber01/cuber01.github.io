import { StarsBackground, Universe } from 'app/components/space'
import './components/space.css'
import './global.css'

export default function Page() {
  return (
      <div>
        <StarsBackground />
        <Universe />
        <div>
        <div id="welcome"  >Jan Englert</div>
        </div>
      </div>
  )
}
