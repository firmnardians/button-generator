export default function Card({ children }) {
	return (
		<div className='card shadow-lg'>
			<div className='card-body'>{children}</div>
		</div>
	);
}
