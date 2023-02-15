import { useState, useEffect } from 'react'
import axios from 'axios'
import pfp from './pfp.jpg'
import './AboutMe.css'

/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutMe = props => {
  const [aboutMe, setMessages] = useState([])
  const [error, setError] = useState('')
  const fetchMessages = () => {
        // setMessages([])
        // setLoaded(false)
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about-me`)
          .then(response => {
            // axios bundles up all response data in response.data property
            const aboutMe = response.data.aboutMe
            console.log(aboutMe)
            setMessages(aboutMe)
          })
          .catch(err => {
            setError(err)
          })
      }
    
      // set up loading data from server when the component first loads
      useEffect(() => {
        // fetch messages this once
        fetchMessages()
    
      }, [])
      return (
        <>
          <img src={pfp} height="10%" width="10%" />
          <p>{aboutMe}</p>
        </>
      )
}

// make this component available to be imported into any other file
export default AboutMe
