// import { createContext, useContext, useState } from 'react';

// const LayoutContext = createContext();

// export const LayoutProvider = ({ children }) => {
//   const [drawerOpen, setDrawerOpen] = useState(true);
  
//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   return (
//     <LayoutContext.Provider value={{ drawerOpen, toggleDrawer }}>
//       {children}
//     </LayoutContext.Provider>
//   );
// };

// export const useLayout = () => {
//   const context = useContext(LayoutContext);
//   if (context === undefined) {
//     throw new Error('useLayout must be used within a LayoutProvider');
//   }
//   return context;
// };