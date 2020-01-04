import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button, Container } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid'
class ToDoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            things: [
                { id: uuid(), name: 'paly cards' },
                { id: uuid(), name: 'watch documentry' },
                { id: uuid(), name: 'take a nap' },
                { id: uuid(), name: 'take a secound' }
            ]
        }
    }
    
    // componentDidMount() {
    //     axios.get(`/api/todos`)
    //       .then(res => {
    //         const do = res.data;
    //         this.setState({ things: do });
    //       })
    //   }

    render() {
        const { things } = this.state;
        return (
            <Container>
                <Button
                
                    color="secondary"
                    style={{ marginBottom: '2erm' }}
                    onClick={() => {
                        const name = prompt('Enter a thing');
                        if (name) {
                            this.setState(state => ({
                                things: [...state.things, { id: uuid(), name }]
                            })

                            )
                        }
                    }}> Add Things</Button>
                <ListGroup>
                    <TransitionGroup className="Daily–Things">
                        {things.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNmae="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        outline color="danger"
                                        size="sm"
                                        onClick={() => {
                                            this.setState(state => ({
                                                things: state.things.filter(thing => thing.id !== id)
                                            }));
                                        }}
                                    >&times;</Button>
                                    {name}

                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
export default ToDoList;