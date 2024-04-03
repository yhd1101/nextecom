

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <div>
           {children}
           &copy; Next Js is great!
       </div>

    );
}
