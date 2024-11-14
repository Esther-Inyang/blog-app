import Header from "./Header";
import SideNav from "./SideNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen">
      <div className="h-full">
        <SideNav />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
