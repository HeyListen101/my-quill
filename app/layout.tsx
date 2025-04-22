import "./globals.css"

export default function RootLayout({ children } : { children : React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="relative w-screen h-screen overflow-hidden">
                { children }
            </body>
        </html>
    )
}