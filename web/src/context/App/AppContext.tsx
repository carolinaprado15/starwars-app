import { createContext, useState, ReactNode } from "react";
import { Resource } from "../../models/ResourceModel";

type AppContextType = {
  searchValue: string;
  resourceType: string;
  resourceList: Resource[] | null;
  setSearchValue: (value: string) => void;
  setResourceType: (value: string) => void;
  setResourceList: (value: Resource[] | null) => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState("");
  const [resourceType, setResourceType] = useState("people");
  const [resourceList, setResourceList] = useState(null as any);

  return (
    <AppContext.Provider value={{ 
      searchValue, 
      resourceType, 
      resourceList,
      setSearchValue, 
      setResourceType,
      setResourceList,
    }}>
      {children}
    </AppContext.Provider>
  );
};