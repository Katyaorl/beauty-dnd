import React from 'react';
import Task from './Task';

class InnerList extends React.Component{

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if(nextProps.tasks === this.props.tasks){
            console.log('false');
            return false;
        }
        console.log('true');
        return true;
    }

    render(){
        return(
            this.props.tasks.map((task, index) => (

                <Task key={task.id} task={task} index={index}></Task>

            ))

        )
    }
}
export default InnerList