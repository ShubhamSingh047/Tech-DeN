import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({ group, loading }) => {
  if (loading) {
    return <div>loading....</div>;
  }

  if (group === undefined) {
    return <div>Group not loaded yet</div>;
  }

  return (
    <div className="cardMain">
      {group.map((item, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Body>
            <Card.Title>{item.groupname}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">
              <Link to={item.link} className="link">
                Join Meeting
              </Link>
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;

// import React from "react";
// import { Card, Button } from "react-bootstrap";

// const Cards = ({ data }) => {
//   return (
//     <div>
//       <Card style={{ width: "18rem" }}>
//         <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the
//             bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default Cards;
