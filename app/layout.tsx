import type { Metadata } from 'next'; import './globals.css';
export const metadata:Metadata={title:'Orbitly — Digital Marketing Agency',description:'Strategy, advertising, search and data for measurable growth.',metadataBase:new URL('https://orbitly.com')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
