import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import LeftNav from './LeftNav';
import Card from './Card';
import EditTaskPopup from '../modals/EditTask';
import TaskStatusModal from '../modals/TaskStatusModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [selectedStatus, setSelectedStatus] = useState('');
    const [description, setDescription] = useState('')


    //separating tasks by status
    const toDoTasks = taskList.filter(task => task.status === 'Tasks To do');
    const inProgressTasks = taskList.filter(task => task.status === 'In Progress');
    const tasksDone = taskList.filter(task => task.status === 'Tasks Done');

    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])


    const deleteTask = (index) => {
        const tempList = [...taskList];
        tempList.splice(index, 1)
        setTaskList(tempList)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList);
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }


    const saveTask = (taskObj) => {

        let tempList = [...taskList]; // Create a new array from the current taskList
        tempList.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(tempList));
        setTaskList(tempList); // Update the taskList state
        setModal(false);
    }

    return (
      <div className='flex flex-row h-[calc(100%-56px)]'>
        <LeftNav />
        <div className="header text-center">
          <div className="left-content">
            <img
              src="https://images.yourstory.com/cs/images/companies/8aac038cfeae-FBIMG1626318428510-1626882411075.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff"
              alt="Logo"
              width="100"
              height="100"
              className="mr-4 logo-image"
            />
            <div className="vertical-line"></div>
            <div className="tracker-text">
              <h3>Website Development Tracker</h3>
            </div>
          </div>
          <button className="btn btn-primary mt-3 mt-md-1" onClick={() => setModal(true)}>
            Create Task
          </button>
        </div>
        <div className="task-container">
        {taskList &&
                  taskList.map((obj, index) => (
                  <Card
                    taskObj={obj}
                    index={index}
                    deleteTask={deleteTask}
                    updateListArray={updateListArray}
                    key={index}
                    description={obj.description}
                  />
              ))}
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      </div>
    );
    };
    
    export default Home;
    
    
    
    
    
    
      

   