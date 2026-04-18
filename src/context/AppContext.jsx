"use client";

import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const LoginFunc = async (identifier, password) => {
    try {
      setLoading(true);
      const login = await signIn("credentials", {
        redirect: false,
        identifier,
        password,
      });

      if (login?.ok) {
        await fetchUser();
        toast.success("Login successful 🎉");
        setTimeout(() => {
          router.push("/");
        }, 300);
      }

      return login;
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };
  const fetchUser = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/get-current-user`);

      if (data) {
        setUser(data.session);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    signOut();
    setUser(null);
    router.push("/sign-in");
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const value = { user, loading, handleLogout, router, LoginFunc };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
