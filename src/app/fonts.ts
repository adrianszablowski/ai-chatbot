import { Cormorant_Garamond } from 'next/font/google';
import { Arimo } from 'next/font/google';

export const cormorant_garamond = Cormorant_Garamond({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-cormorant_garamond',
	weight: ['400', '500', '600', '700'],
});

export const arimo = Arimo({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-arimo',
});
