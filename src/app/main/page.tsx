export default function Home() {
	return (
		<main className="flex h-screen w-full">
			<iframe
				src="/main.pdf"
				className="w-full h-full"
				style={{ border: 'none' }}
			/>
		</main>
	);
}
