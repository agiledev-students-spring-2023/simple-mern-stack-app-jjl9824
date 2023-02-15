import { Link } from 'react-router-dom'
import pfp from './pfp.jpg'
import './AboutMe.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
  return (
    <>
      <h1>Jeffrey Li</h1>
      <img src={pfp} height="10%" width="10%"></img>
      <p>
        Hey! I'm Jeffrey Li and I'm a Computer Science major at NYU on my third year. 
      </p>
      <p>
        I like playing tennis, video games, and listening to a variety of music.
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutMe
