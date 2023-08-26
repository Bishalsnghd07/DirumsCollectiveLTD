import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import LeftNav from '../components/LeftNav';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [description, setDescription] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('To do');
    const [dueDate, setDueDate] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "description") {
            setDescription(value);
        } else if (name === "status") {
            setSelectedStatus(value);
        }
    }

    const handleSave = () => {
        let taskObj = {
            description: description,
            status: selectedStatus,
            dueDate: dueDate
        };
        save(taskObj, description);
        setDescription('');
    }

    return (
        // <div className='flex flex-row h-[calc(100%-56px)]'>
        // <LeftNav />
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create a Task for the Team</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Add Task Description*</label>
                    <textarea
                        rows="5"
                        className="form-control create-task-description-box"
                        placeholder="Feed the task guidelines and information"
                        value={description}
                        onChange={handleChange}
                        name="description">
                        </textarea>
                </div>

                <div className="form-group">
                    <label>Select Task Status*</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="status"
                                id="statusToDo"
                                value="To do"
                                checked={selectedStatus === 'To do'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="statusToDo">
                                To Do
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="status"
                                id="statusInProgress"
                                value="In Progress"
                                checked={selectedStatus === 'In Progress'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="statusInProgress">
                                In Progress
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="status"
                                id="statusDone"
                                value="Tasks Done"
                                checked={selectedStatus === 'Tasks Done'}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="statusDone">
                                Tasks Done
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="mt-3">
                        <label>Due Date*</label>
                    </div>
                    <div>
                        <input
                            type="date"
                            className="form-control mt-2"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>
            </ModalFooter>
        </Modal>
        // </div>
    );
};

export default CreateTaskPopup;


