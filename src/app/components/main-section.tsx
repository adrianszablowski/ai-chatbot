import Image from 'next/image';
import { cormorant_garamond } from '../fonts';
import GetStartedButton from './get-started-button';

export default function MainSection() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32'>
			<div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12'>
				<div className='space-y-4'>
					<h1
						className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl  ${cormorant_garamond.className}`}>
						Elevate Your Conversations with Our AI Chatbot
					</h1>
					<p className='max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
						Unlock the power of AI-driven conversations and streamline your communication with our cutting-edge chatbot.
						Experience seamless interactions, personalized responses, and unparalleled efficiency.
					</p>
					<div className='flex flex-col gap-2 min-[400px]:flex-row'>
						<GetStartedButton />
					</div>
				</div>
				<Image
					alt='AI Chatbot'
					className='mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
					height='2000'
					src='/placeholder.jpg'
					width='2000'
				/>
			</div>
		</section>
	);
}
