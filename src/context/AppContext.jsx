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
  const areaList = [
    "Clifton",
    "Defence (DHA)",
    "Saddar",
    "Gulshan-e-Iqbal",
    "Gulistan-e-Johar",
    "North Nazimabad",
    "Nazimabad",
    "Federal B Area",
    "Malir",
    "Korangi",
    "Landhi",
    "Shah Faisal Colony",
    "PECHS",
    "Bahadurabad",
    "Tariq Road",
    "Orangi Town",
    "Lyari",
    "Kemari",
    "Surjani Town",
    "Baldia Town",
    "SITE Area",
    "Garden",
    "Jamshed Town",
    "Bin Qasim Town",
    "New Karachi",
    "North Karachi",
    "Gadap Town",
    "Scheme 33",
    "Saadi Town",
    "Askari",
    "Cantt",
    "Karsaz",
    "Mehmoodabad",
    "Rashid Minhas Road",
    "University Road",
    "Hawksbay",
    "Manora",

    // DHA Phases
    "DHA Phase 1",
    "DHA Phase 2",
    "DHA Phase 3",
    "DHA Phase 4",
    "DHA Phase 5",
    "DHA Phase 6",
    "DHA Phase 7",
    "DHA Phase 8",

    // Gulshan Blocks
    "Gulshan Block 1",
    "Gulshan Block 2",
    "Gulshan Block 3",
    "Gulshan Block 4",
    "Gulshan Block 5",
    "Gulshan Block 6",
    "Gulshan Block 7",
    "Gulshan Block 8",
    "Gulshan Block 9",
    "Gulshan Block 10",
    "Gulshan Block 11",
    "Gulshan Block 12",
    "Gulshan Block 13",
    "Gulshan Block 14",
    "Gulshan Block 15",

    // North Nazimabad Blocks
    "North Nazimabad Block A",
    "North Nazimabad Block B",
    "North Nazimabad Block C",
    "North Nazimabad Block D",
    "North Nazimabad Block E",
    "North Nazimabad Block F",
    "North Nazimabad Block G",
    "North Nazimabad Block H",
    "North Nazimabad Block I",
    "North Nazimabad Block J",
    "North Nazimabad Block K",
    "North Nazimabad Block L",

    // Korangi Areas
    "Korangi 1",
    "Korangi 2",
    "Korangi 3",
    "Korangi 4",
    "Korangi 5",
    "Korangi 6",

    // Landhi Areas
    "Landhi 1",
    "Landhi 2",
    "Landhi 3",
    "Landhi 4",
    "Landhi 5",
    "Landhi 6",

    // Malir Areas
    "Malir City",
    "Malir Cantt",
    "Model Colony",
    "Airport Area",

    // Popular Societies
    "Buffer Zone",
    "Ancholi",
    "Water Pump",
    "Ayesha Manzil",
    "Gulberg",
    "Nagan Chowrangi",
    "Five Star Chowrangi",
    "Paposh Nagar",
    "Shadman Town",
    "FB Industrial Area",

    // Others
    "Jauhar Block 1",
    "Jauhar Block 2",
    "Jauhar Block 3",
    "Jauhar Block 4",
    "Jauhar Block 5",
    "Jauhar Block 6",
    "Jauhar Block 7",
    "Jauhar Block 8",
    "Jauhar Block 9",
    "Jauhar Block 10",
    "Jauhar Block 11",
    "Jauhar Block 12",
    "Jauhar Block 13",
    "Jauhar Block 14",
    "Jauhar Block 15",
  ];

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

  const value = { user, loading, handleLogout, router, LoginFunc, areaList };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
