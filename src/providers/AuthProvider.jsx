import { createContext, useContext, useEffect, useState } from "react";
import { regService } from "../services/registration.service";
import { useQueryClient } from "@tanstack/react-query";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const queryClient = useQueryClient();
  useEffect(() => {
    const fetchUser = async () => {
      const id = localStorage.getItem(`userId`);
      if(!id) return 
      const data = await regService.getUser(id);
      setUser(data.data);
    };

    fetchUser();
  }, [queryClient.isFetching]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
