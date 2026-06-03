import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<footer className="px-6 py-6">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left mt-20">
				<div>
					<p className="text-sm font-semibold">Tuterly</p>
					<p className="text-sm">Helping students and teachers connect in one place.</p>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium">
					<Link to="/" className="transition-colors hover:text-gray-300">Home</Link>
					<Link to="/about" className="transition-colors hover:text-gray-300">About</Link>
					<Link to="/contact" className="transition-colors hover:text-gray-300">Contact</Link>
					<Link to="/login" className="transition-colors hover:text-gray-300">Login</Link>
				</div>
			</div>
		</footer>
	);
}
