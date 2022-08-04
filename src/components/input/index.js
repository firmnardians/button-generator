import React, { memo } from 'react';

export default memo(function Input({ label = 'Label', value, onChange, type = 'text' }) {
	return (
		<div className='pb-3'>
			<label className='form-label'>{label}</label>
			<input
				value={value}
				onChange={onChange}
				type={type}
				className={type === 'range' ? 'form-range' : 'form-control'}
				aria-describedby='addon-wrapping'
			/>
		</div>
	);
});
