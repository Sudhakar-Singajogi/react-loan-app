import Card from "react-bootstrap/Card"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

function LoginIndex() {
  return (
    <Card.Body>
            <Card.Title>Logins</Card.Title>
            <Card.Subtitle className="mt-2 mb-2 pd-5 resource-link">
              <Link to="/new-applicant">
                <FontAwesomeIcon icon={faUser} /> Applicant               
              </Link>
            </Card.Subtitle>

            <Card.Subtitle className="mb-2 mt-2  pd-5 resource-link">
            <Link to="/employee-login">
              <FontAwesomeIcon icon={faUsers} /> Employee
              </Link>
            </Card.Subtitle>
            
          </Card.Body>
  )
}

export default LoginIndex