import React, {FC, ReactNode} from "react";

const Layout: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <div className="grid grid-rows-[1fr] h-screen">

            <main className="">
                {children}
            </main>
        </div>
    );
};

export default Layout;