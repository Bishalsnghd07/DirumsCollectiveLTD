import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import LeftNavMenuItem from './LeftNavMenuItem'
import { categories } from '../utils/constants'
import { Context } from '../context/contextApi'
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon



const LeftNav = () => {
  const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context)

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  

  const navigate = useNavigate()

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
          return setSelectedCategory(name)
      case "home":
        return setSelectedCategory(name)
        case "menu":
          return false      
      default:
        break;
    }
  }

  const leftNavStyles = {
    width: "180px",
    overflowY: "auto",
    height: "100%",
    backgroundColor: "black",
    zIndex: "10",
    // transform: mobileMenu ? "translateX(0)" : "translateX(-240px)",
    transition: "all 0.3s",
    position: "fixed",
  };
 
  return (
    
   <div className={`md:block w-[240px] overflow-y-auto h-full py-12 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${ mobileMenu ? "translate-x-0"  : ""
   }`}
   style={leftNavStyles}
   >
    <div className="mobile-menu-toggle" onClick={toggleMenu}>
     <FaBars size={24} />
    </div>
    <div className="flex px-4 flex-col">
      {categories.map((item)=> {
        return (
          <React.Fragment key={item.name}>
            <LeftNavMenuItem 
                 text={item.type === "home" ? "Home" : item.name}
                 icon={item.icon}
                 action={()=> { clickHandler(item.name, item.type)
                 navigate("/")
                }}
                 className={`${selectedCategory === item.name ? "bg-white/[0.15]" : ""}`}
            />
            {
              item.divider && (
                <hr className="my-5 border-white/[0.2]" />
              )
            }
          </React.Fragment>
        )
      })}
      <hr className="my-5 border-white/[0.2]" />
      <div className="text-white/[0.5] text-[12px]">
         Bishal Singh Deo
      </div>
    </div>
  </div>
  )
}

export default LeftNav

// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// import LeftNavMenuItem from './LeftNavMenuItem';
// import { categories } from '../utils/constants';
// import { Context } from '../context/contextApi';
// import { FaBars } from 'react-icons/fa';

// const LeftNav = () => {
//   const { selectedCategory, setSelectedCategory, mobileMenu } = useContext(Context);

//   const [menuVisible, setMenuVisible] = useState(false);

//   const toggleMenu = () => {
//     setMenuVisible(!menuVisible);
//   };

//   const navigate = useNavigate();

//   const clickHandler = (name, type) => {
//     switch (type) {
//       case 'category':
//         return setSelectedCategory(name);
//       case 'home':
//         return setSelectedCategory(name);
//       case 'menu':
//         return false;
//       default:
//         break;
//     }
//   };

//   const leftNavStyles = {
//     width: '240px',
//     overflowY: 'auto',
//     height: menuVisible ? '400%' : '0', // Set height to 0 when the menu is closed
//     backgroundColor: 'black',
//     zIndex: '10',
//     transition: 'all 0.3s',
//     // display: 'flex',
//     // flexDirection: 'column',
//     postion: 'absolute',
//     left: '0',
//     top: '0',
//   };

//   const hamburgerStyles = {
//     cursor: 'pointer',
//     alignSelf: 'flex-end', // Move the hamburger icon to the right
//     cursor: 'pointer', // Add a cursor pointer to indicate it's clickable
//     marginRight: '16px', // Adjust margin as needed
//   };

//   return (
//     <div
//       className={`md:block w-[240px] overflow-y-auto h-full py-5 bg-black absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all ${
//         mobileMenu ? 'translate-x-0' : ''
//       }`}
//       style={leftNavStyles}
//     >
//       <div className="mobile-menu-toggle"
//       style={hamburgerStyles}
//       onClick={toggleMenu}>
//         <FaBars size={24} />
//       </div>
//       <div className="flex px-9 flex-col">
//         {categories.map((item) => {
//           return (
//             <React.Fragment key={item.name}>
//               <LeftNavMenuItem
//                 text={item.type === 'home' ? 'Home' : item.name}
//                 icon={item.icon}
//                 action={() => {
//                   clickHandler(item.name, item.type);
//                   navigate('/');
//                 }}
//                 className={`${selectedCategory === item.name ? 'bg-white/[0.15]' : ''}`}
//               />
//               {item.divider && <hr className="my-5 border-white/[0.2]" />}
//             </React.Fragment>
//           );
//         })}
//         <hr className="my-5 border-white/[0.2]" />
//         <div className="text-white/[0.5] text-[12px]">Bishal Singh Deo</div>
//       </div>
//     </div>
//   );
// };

// export default LeftNav;
