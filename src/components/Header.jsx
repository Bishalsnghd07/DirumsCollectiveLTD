import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SlMenu } from 'react-icons/sl';
import { IoIosSearch } from 'react-icons/io';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import ytLogo from '../images/yt-logo.png';
import ytLogoMobile from '../images/yt-logo-mobile.png';
import { Context } from '../context/contextApi';
import Loader from '../shared/loader';
import CreateTask from '../modals/CreateTask'
import CreateTaskPopup from '../modals/CreateTask'
import Home from './Home';
import Card from './Card';
import LeftNav from './LeftNav';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);
  const [isCreateTaskModalOpen, setCreateTaskModalOpen] = useState(false);

  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
      navigate(`/searchResult/${searchQuery}`);
    }
  }

  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  }

  const toggleCreateTaskModal = () => {
    setCreateTaskModalOpen(!isCreateTaskModalOpen);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  // Define the functions for managing tasks here
  const deleteTask = (index) => {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
}

const updateListArray = (obj, index) => {
  let tempList = taskList
  tempList[index] = obj
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  window.location.reload()
}

const saveTask = (taskObj) => {
  let tempList = [...taskList]
  tempList.push(taskObj)
  localStorage.setItem("taskList", JSON.stringify(tempList))
  setTaskList(tempList)
  setModal(false)
}

  const toggle = () => {
    setModal(!modal);
  };

  return (
    
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-neutral-400 dark:bg-black text-white">
      {loading && <Loader />}

      <div className="flex items-center space-x-2">
        {/* Single "Create Task" button */}
        <button className="btn btn-primary m-2" onClick={toggleCreateTaskModal}>
          Create Task
        </button>
      </div>

      <div className="border-r border-[#303030] h-6 md:h-10 mx-2 hidden md:block"></div>

      <div className="flex h-5 items-center">
        {pageName !== 'video' && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
      </div>

      <div className="group flex items-center flex-grow">
        <div className="flex items-center h-10 md:h-12 border border-[#303030] rounded-[0.75rem] bg-white overflow-hidden">
          <div className="px-3 md:px-4 flex items-center">
            <IoIosSearch className="text-gray-400 text-lg bg-blue-500  rounded-full text-white p-1" />
          </div>
          <input
            type="text"
            className="w-full outline-none text-black placeholder-gray-500"
            placeholder="Search your query"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
        <FiBell className="text-white text-xl cursor-pointer" />
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img src="https://xsgames.co/randomusers/avatar.php?g=male" alt="User Avatar" />
        </div>
      </div>

      <CreateTaskPopup modal={isCreateTaskModalOpen} toggle={modal} save={saveTask} />
    </div>
  );
}

export default Header;