import React from 'react';
import { Card } from 'react-bootstrap'; // Added Button import
import swimming from './images/swimming.jpg';
import hopping from './images/hopping.jpg';
import Statelessbutton from './Statelessbutton';

const Cardmap = () => {
  const data = [
    {
      id: 1,
      icon: swimming,
      title: "Swimming Activity",
      description: "Swimming, in recreation and sports, is the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons."
    },
    {
      id: 2,
      icon: hopping,
      title: "Island Hopping",
      description: "Island Hopping, in recreation and sports, is the propulsion of the body..."
    },
    {
      id: 3,
      icon: swimming,
      title: "Swimming Activity",
      description: "Swimming, in recreation and sports, is the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons."
    }
  ];
  
  return (
    <>
      {data.map((activity, index) => {
        return (
        <Card style={{width: '288px', display:'flex', flexDirection:'column'}}> 
          <Card.Img style={{height:'180px', width:'285px'}} variant="top" src={activity.icon}/>
          <Card.Body>
            <Card.Title>{activity.title}</Card.Title> 
            <Card.Text>{activity.description}</Card.Text>
            <Statelessbutton color="primary" label={activity.title} display="inline-block" margin={10}/>
          </Card.Body>
        </Card>
        );
})}
    </>
  );
};
export default Cardmap;
