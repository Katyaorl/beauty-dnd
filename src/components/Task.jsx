import React from 'react';
import styled from 'styled-components';
import {Draggable} from "react-beautiful-dnd";

const Container = styled.div`
    display: flex;
    align-items: center;
    margin: 8px;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    background-color: ${props => props.isDragging ? 'lightgrey' : 'white' };
    color: ${props => props.isDragging ? 'white' : 'inherit' };
    transition: background-color .25s ease-in;
`;
const Handler = styled.div`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    background-color: lightblue;
    border-radius: 6px
`;
export default class Task extends React.Component {

    render() {
        return (
            <Draggable key={this.props.task.id} draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) =>(
                    <Container
                        {...provided.draggableProps}
                        ref = {provided.innerRef }
                        isDragging = {snapshot.isDragging}
                    >
                        <Handler {...provided.dragHandleProps}/>
                        {this.props.task.content}</Container>
                )}
            </Draggable>
        )
    }

}