import AdminSideBar from "@/components/admin/SideBar";

export default function AdminLayout({ children }
    : Readonly<{ children: React.ReactNode }>
) {
    return (
        <main className="h-dvh">
            <div className="h-[4rem] flex items-center flex-row justify-between w-full bg-[#162234] text-white px-5">
                <div className="text-[20px] font-medium">App Name</div>
                <div>Dynamo</div>
            </div>
            <section className="flex flex-row h-full">
                <AdminSideBar />
                {children}
            </section>
        </main>
    );
}