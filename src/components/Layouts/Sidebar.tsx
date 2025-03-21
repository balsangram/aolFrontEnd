import React from 'react'

function Sidebar() {
  return (
    <div>
      
    </div>
  )
}

export default Sidebar


// import PerfectScrollbar from 'react-perfect-scrollbar';
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { NavLink, useLocation } from 'react-router-dom';
// import { toggleSidebar } from '../../store/themeConfigSlice';
// import { IRootState } from '../../store';
// import { useState, useEffect } from 'react';
// import IconCaretsDown from '../Icon/IconCaretsDown';

// import HomeIcon from '@mui/icons-material/Home';
// import CreateIcon from '@mui/icons-material/Create';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';

// const Sidebar = () => {
//     const [currentMenu, setCurrentMenu] = useState<string>('');
//     const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//     const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
//     const location = useLocation();
//     const dispatch = useDispatch();
//     const { t } = useTranslation();

//     const toggleMenu = (value: string) => {
//         setCurrentMenu((oldValue) => {
//             return oldValue === value ? '' : value;
//         });
//     };

//     useEffect(() => {
//         const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
//         if (selector) {
//             selector.classList.add('active');
//             const ul: any = selector.closest('ul.sub-menu');
//             if (ul) {
//                 let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
//                 if (ele.length) {
//                     ele = ele[0];
//                     setTimeout(() => {
//                         ele.click();
//                     });
//                 }
//             }
//         }
//     }, []);

//     useEffect(() => {
//         if (window.innerWidth < 1024 && themeConfig.sidebar) {
//             dispatch(toggleSidebar());
//         }
//     }, [location, dispatch, themeConfig.sidebar]);

//     return (
//         <div >
//         {/* className={semidark ? 'dark' : ''}> */}
//             {/* <nav
//                 className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`} 
//             >
//                 <div className="bg-white dark:bg-black h-full">
//                     <div className="flex justify-between items-center px-4 py-3">
//                         <NavLink to="/" className="main-logo flex items-center shrink-0">
//                             <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">{t('Art Of Living')}</span>
//                         </NavLink>

//                         <button
//                             type="button"
//                             className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
//                             onClick={() => dispatch(toggleSidebar())}
//                         >
//                             <IconCaretsDown className="m-auto rotate-90" />
//                         </button>
//                     </div>
//                     <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
//                         <ul className="relative font-semibold space-y-0.5 p-4 py-0">
//                             <li className="nav-item">
//                                 <NavLink to="/" className="group">
//                                     <div className="flex items-center">
                                       
//                                         <HomeIcon />
//                                         <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Home')}</span>
//                                     </div>
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="/create_card" className="group">
//                                     <div className="flex items-center">
                                        
//                                         <CreateIcon />
//                                         <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Control')}</span>
//                                     </div>
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="/advertisement_bar" className="group">
//                                     <div className="flex items-center">
                                        
//                                         <AddPhotoAlternateIcon />
//                                         <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Advertisement Bar')}</span>
//                                     </div>
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="/events" className="group">
//                                     <div className="flex items-center">
                                        
//                                         <EventAvailableIcon />
//                                         <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Events')}</span>
//                                     </div>
//                                 </NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink to="/popup" className="group">
//                                     <div className="flex items-center">
                                      
//                                         <MarkEmailUnreadIcon />
//                                         <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">{t('Popup')}</span>
//                                     </div>
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </PerfectScrollbar>
//                 </div>
//             </nav> */}
//         </div>
//     );
// };

// export default Sidebar;