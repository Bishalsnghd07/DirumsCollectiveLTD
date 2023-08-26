import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [description, setDescription] = useState('');
  const [selectTaskStatus, setSelectTaskStatus] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    // Set the initial values for description, status, and dueDate based on taskObj
    setDescription(taskObj.description);
    setSelectTaskStatus(taskObj.status);
    setDueDate(taskObj.dueDate);
  }, [taskObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'description') {
      setDescription(value);
    } else if (name === 'status') {
      setSelectTaskStatus(value);
    } else if (name === 'dueDate') {
      setDueDate(value);
    }
  };

  const handleUpdate = () => {
    // Create a new task object with the updated values
    const updatedTask = {
      ...taskObj,
      description,
      status: selectTaskStatus,
      dueDate,
    };

    // Pass the updated task to the updateTask function
    updateTask(updatedTask);

    // Close the modal
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Description*</label>
          <textarea
            rows="5"
            className="form-control create-task-description-box"
            placeholder="Feed the task guidelines and information"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Select Task Status*</label>
          <div>
            {/* Update radio input checked attributes based on the selectedTaskStatus */}
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="To do"
                checked={selectTaskStatus === 'To do'}
                onChange={handleChange}
              />
              <label className="form-check-label">To Do</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="In Progress"
                checked={selectTaskStatus === 'In Progress'}
                onChange={handleChange}
              />
              <label className="form-check-label">In Progress</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="status"
                value="Tasks Done"
                checked={selectTaskStatus === 'Tasks Done'}
                onChange={handleChange}
              />
              <label className="form-check-label">Tasks Done</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label>Due Date*</label>
          <input
            type="date"
            className="form-control mt-2"
            value={dueDate}
            onChange={handleChange}
            name="dueDate"
          />
        </div>
      </ModalBody>
      <ModalFooter className="w-full h-full text-center">
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;





