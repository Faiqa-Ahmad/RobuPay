import DashboardHeader from '../components/DashboardHeader';

export default function WithdrawLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-50 font-baloo">
            {/* Dashboard Header Only */}
            <DashboardHeader />

            {/* Main Content Area - No Sidebar */}
            <main className="lg:pt-16">
                {children}
            </main>
        </div>
    );
}

