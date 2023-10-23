import { useState, createContext } from 'react';

export const SidebarContext = createContext();

// eslint-disable-next-line react/prop-types
const SidebarProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return <SidebarContext.Provider value={{ sidebarOpen, handleCloseSidebar, setSidebarOpen }}>{children}</SidebarContext.Provider>;
};

export default SidebarProvider;
