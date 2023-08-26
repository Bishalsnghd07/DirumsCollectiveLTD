import React, {useState} from 'react';
import EditTask from '../modals/EditTask'
import TaskStatusModal from '../modals/TaskStatusModal';
import LeftNav from './LeftNav';
import EditTaskPopup from '../modals/EditTask';


const Card = ({taskObj, index, deleteTask, updateListArray, description, obj}) => {
    const [modal, setModal] = useState(false);
    const [statusModal, setStatusModal] = useState(false); 

    <Card
    taskObj={taskObj}
    index={0} // Replace with the actual index value
    deleteTask={deleteTask}
    updateListArray={updateListArray}
    description={description}
/>


const toggleStatusModal = () => {
    setStatusModal(!statusModal);
}

const updateTaskStatusAndDate = (taskStatus, dueDate) => {
    
    console.log("Selected Task Status:", taskStatus);
    console.log("Selected Due Date:", dueDate);
}

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }


    return (
        <div class="card-wrapper mr-6">
            <div class="card-top" 
            style={{"background-color":  colors[index % 5].primaryColor}}>
            </div>
            <div class="task-holder">
                <span class="card-header" 
                style={{"background-color":  colors[index % 5].secondaryColor, "border-radius": "10px"}}>
                    {taskObj.status} 
                </span>
                <hr />
                <p className="mt-3 description-box">
                    {description} 
                      <br />
                    <span style={{ color: '#333' }}> 
                      Due Date: 
                    </span> {taskObj.dueDate}
                     
                </p>
                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                    <i 
                        class="far fa-edit mr-3" style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}} onClick={() => setModal(true)}
                    ></i>
                    <i 
                        class="fas fa-trash-alt " style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}} onClick={handleDelete}
                    ></i>
                    {/* <i
                        className="far fa-calendar-alt"
                        style={{"color": colors[index % 5].primaryColor, "cursor": "pointer"}}
                        onClick={toggleStatusModal} // Open status and date modal
                    ></i> */}
                    <TaskStatusModal
                        modal={statusModal}
                        toggle={toggleStatusModal}
                        updateTaskStatusAndDate={updateTaskStatusAndDate}
                    />
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />
        </div>
    );    
};

export default Card;

   