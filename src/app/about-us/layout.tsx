import {Metadata} from "next";

export const metadata: Metadata = {
    title: "About us",
    description: "best movies",
};
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
