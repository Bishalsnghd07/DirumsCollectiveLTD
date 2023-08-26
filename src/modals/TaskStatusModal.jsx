import React, { useState } from 'react';
import EditTask from '../modals/EditTask';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const TaskStatusModal = ({ modal, toggle, updateTaskStatusAndDate }) => {
    const [taskStatus, setTaskStatus] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskStatus") {
            setTaskStatus(value);
        } else if (name === "dueDate") {
            setDueDate(value);
        }
    }

    const handleSave = () => {
        // Pass the selected task status and due date back to the Card component
        updateTaskStatusAndDate(taskStatus, dueDate);
        toggle(); // Close the modal
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Task Status and Due Date</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Select Task Status*</label>
                    <select
                        className="form-control"
                        name="taskStatus"
                        value={taskStatus}
                        onChange={handleChange}
                    >
                        <option value="To do">To do</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Tasks Done">Tasks Done</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Due Date*</label>
                    <input
                        type="date"
                        className="form-control"
                        name="dueDate"
                        value={dueDate}
                        onChange={handleChange}
                    />
                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Save</Button>{' '}
            </ModalFooter>
        </Modal>
    );
};

export default TaskStatusModal;

