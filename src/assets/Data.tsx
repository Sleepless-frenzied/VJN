import React, { createContext, ReactNode, useState } from 'react';

type Option = {
    option: string;
    style: {
        backgroundColor?: string;
        textColor?: string;
    };
};


type ContextType = {
    data: Option[];
    setData: React.Dispatch<React.SetStateAction<Option[]>>;
};

const Context = createContext<ContextType>({} as ContextType);

type ProviderProps = {
    children: ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [data, setData] = useState<Option[]>([
        { option: '1', style: { backgroundColor: '#00ff65', textColor: 'black' } },
        { option: '2', style: { backgroundColor: '#00ffc4', textColor: 'black' } },
        { option: '3', style: { backgroundColor: '#0077ff', textColor: 'black' } },
        { option: '4', style: { backgroundColor: '#4000ff', textColor: 'black' } },
        { option: '5', style: { backgroundColor: '#8c00ff', textColor: 'black' } },
        { option: '6', style: { backgroundColor: '#ff0062', textColor: 'black' } },
      ]);

    return (
        <Context.Provider
            value={{
                data,
                setData,
            }}
        >
            {children}
        </Context.Provider>
    );
};

const useContextProvider = () => React.useContext(Context);

export { Provider, useContextProvider };
