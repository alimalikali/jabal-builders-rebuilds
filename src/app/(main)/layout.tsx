import Navbar from "@/components/navigation/Navbar"
import Footer from "@/components/navigation/Footer"

export default function MainLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
            <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

