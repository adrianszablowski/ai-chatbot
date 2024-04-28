import type { Metadata } from 'next';
import './globals.css';
import { arimo } from './fonts';
import Header from './components/header';
import { ThemeProvider } from './components/theme-provider';

export const metadata: Metadata = {
	title: 'AI Chatbot',
	description:
		'Engage in stimulating conversations with an informative and interactive AI companion. This chatbot, offers a seamless user experience and is ready to assist you with your inquiries or simply engage in thought-provoking dialogue.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${arimo.className} min-h-screen w-screen flex flex-col`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
