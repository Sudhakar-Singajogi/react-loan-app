import Card from "react-bootstrap/Card";
import { useState,} from "react";


function RecentFeeder(props) {
  const [showSubTitle, setShowSubTitle] = useState(
    props?.subtitle ? props?.subtitle : true
  );
  
  return (
    <Card.Body>
      <Card.Title>Recent Feeder</Card.Title>
      {showSubTitle && (
        <Card.Subtitle className="mb-2 text-muted">
          {" "}
          Loan applications{" "}
        </Card.Subtitle>
      )}
    </Card.Body>
  );
}

export default RecentFeeder;
