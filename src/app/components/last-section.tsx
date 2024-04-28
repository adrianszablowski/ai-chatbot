import Link from 'next/link';
import React from 'react';
import { cormorant_garamond } from '../fonts';
import { Button } from '@/components/ui/button';

export default function LastSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10'>
				<div className='space-y-3'>
					<h2 className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${cormorant_garamond.className}`}>
						Experience the Future of Conversational AI
					</h2>
					<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
						Our AI chatbot is designed to revolutionize the way you communicate. Streamline your interactions, boost
						productivity, and unlock new possibilities.
					</p>
				</div>
				<div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
					<Button>
						<Link href='#'>Get Started</Link>
					</Button>
					<Button className='bg-primary-foreground border border-border text-primary hover:bg-secondary'>
						<Link href='#'>Learn More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
