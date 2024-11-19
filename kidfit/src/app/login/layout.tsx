import { Metadata } from "next";

export const metadata: Metadata = {
	title: "KidFit | Login",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
