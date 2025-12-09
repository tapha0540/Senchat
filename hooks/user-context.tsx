import { getCurrentUser, userType } from "@/lib/appwrite";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export const userContext = createContext<userType | null>(null);

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<userType | null>(null);
  useEffect(() => {
    const fn = async () => {
      setUser(await getCurrentUser());
    };
    fn();
  }, []);
  return <userContext.Provider value={user}>{children}</userContext.Provider>;
}
