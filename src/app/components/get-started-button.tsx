import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';

export default async function GetStartedButton() {
	return (
		<form
			action={async () => {
				'use server';
				await signIn('github');
			}}>
			<Button type='submit'>Get Started</Button>
		</form>
	);
}
