import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "KidFit",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				{children}
				<div
					data-component-type='notifications-container'
					className={`
            fixed top-0 right-0 z-50 p-2 flex flex-col gap-4 items-start
          `}
				/>
			</body>
		</html>
	);
}
