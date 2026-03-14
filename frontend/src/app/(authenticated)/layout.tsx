import { Sidebar } from "@/components/layout/Sidebar";
import { TopHeader as Topbar } from "@/components/layout/TopHeader";

export default function AuthenticatedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-background overflow-hidden relative">
        <Topbar />
        {children}
      </main>
    </div>
  );
}
