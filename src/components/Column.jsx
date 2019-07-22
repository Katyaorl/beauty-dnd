import React from 'react';
import styled from 'styled-components';
import {Droppable} from "react-beautiful-dnd";
import Task from './Task';

const Container = styled.div`
    width: 100%;
    max-width: 300px;
    margin: 15px auto;
    padding: 10px
    border: 1px solid lightgrey;
    border-radius: 3px;
    
    display: flex;
    flex-direction: column;
`;
const Title = styled.h3`
    margin: 15px 0;
    font-size: 1.5rem;
`;
const TaskList = styled.div`
    padding: 24px 10px 10px;
    background-color: ${props => (props.isDraggingOver ? 'lightgreen' : 'white')}
    transition: background-color .25s ease-in;
    
    flex-grow: 1;
`;
export default class Column extends React.Component {
    render() {
        return (
            <Container>
                <Title> {this.props.column.title}</Title>
                <Droppable droppableId = {this.props.column.id}>
                    {(provided, snapshot) => (
                        <TaskList
                            {...provided.droppableProps}
                            ref = {provided.innerRef }
                            {...provided.droppablePlaceholder}
                            isDraggingOver={snapshot.isDraggingOver}
                        >
                            {this.props.tasks.map((task, index) =>
                                <Task key={task.id} task={task} index={index}></Task>)}
                            {provided.placeholder}
                        </TaskList>
                    )}
                </Droppable>
            </Container>
        )
    }
}