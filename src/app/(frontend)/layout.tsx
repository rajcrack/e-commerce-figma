import React from "react";
import Headers from "@/components/common/Headers";
import Footers from "@/components/common/Footers";

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (<main className="bg-white">
        <Headers />
        {children}
        <Footers />
    </main>);
}