import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <h2>About the e-commerce:</h2>
        <p>I found this project on the FrontendMentor website, and I'm developing it using React and Firebase on the back-end.</p>
        <Link to='/'>
          My resume.
        </Link>
    </div>
  )
}

export default About