import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

// export default class VideoCard extends React.Component {
//     render(){
//         return(
            

    const CardExampleGroups = () => (
        <div className="video-card">
        <Card.Group>
          <Card>
            <Card.Content>
              <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
              <Card.Header>Steve Sanders</Card.Header>
              <Card.Meta>Friends of Elliot</Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='ui two buttons'>
                <Button basic color='green'>
                  Approve
                </Button>
                <Button basic color='red'>
                  Decline
                </Button>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
        </div>
      )
      
      export default CardExampleGroups

            // <div className="video-card">
            //     <div className="video-card-details">
            //         <video>
            //             <source src="#" type="#"/>
            //         </video>
            //         <h4>Video Title</h4>
            //         <p>Youtube Name</p>
            //         <p>Views</p>
            //         <p>Date</p>
            //     </div>
            // </div>
//         )
//     }
// }