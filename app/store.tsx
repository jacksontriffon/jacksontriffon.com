"use client";

import {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface ContextProps {
	routing: boolean;
	setRouting: Dispatch<SetStateAction<boolean>>;
}

const GlobalContext = createContext<ContextProps>({
	routing: false,
	setRouting: (): boolean => false,
});

export const GlobalContextProvider = ({ children }) => {
	const [routing, setRouting] = useState(false);

	return (
		<GlobalContext.Provider value={{ routing, setRouting }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
