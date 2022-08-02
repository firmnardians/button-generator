import Card from './components/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { useState } from 'react';

const defaultCss = `display: inline-block;
		line-height: 1.5;
		text-align: center;
		text-decoration: none;
		vertical-align: middle;
		cursor: pointer;
		border: 1px solid transparent;
		user-select: none;`;

function App() {
	const [buttonValue, setButtonValue] = useState('Hi, buddy');
	const [fontWeight, setFontWeight] = useState('normal');
	const [bgColor, setBgColor] = useState('#185adb');
	const [fontColor, setFontColor] = useState('#ffffff');
	const [fontSize, setFontSize] = useState('16');
	const [borderRadius, setBorderRadius] = useState('4');
	const [paddingY, setPaddingY] = useState('4');
	const [paddingX, setPaddingX] = useState('10');

	const codeString = `
	button {
		${defaultCss}
		padding: ${paddingY}px ${paddingX}px ;
		font-size: ${fontSize}px;
		border-radius: ${borderRadius}px;
		background-color: ${bgColor};
		color: ${fontColor};
		font-weight: ${fontWeight};
	}
	`;

	const Button = styled.button`
		${defaultCss}
		padding: ${paddingY}px ${paddingX}px;
		font-size: ${fontSize}px;
		border-radius: ${borderRadius}px;
		background-color: ${bgColor};
		color: ${fontColor};
		font-weight: ${fontWeight};
	`;

	return (
		<main>
			<div className='container py-4'>
				<div className='py-4'>
					<div className='d-flex flex-column align-items-center justify-content-center'>
						<h3 className='fw-bold'>Button Generator</h3>
						<p className='mb-2'>
							Built by{' '}
							<a target='_blank' href='https://saiki.link/me' rel='noreferrer'>
								firmnardians
							</a>{' '}
							for everyone.
						</p>

						<small>Open Source: Github</small>
					</div>
				</div>

				<div className='mt-5 row justify-content-center'>
					<div className='col-12 col-lg-6 mb-5 mb-lg-0'>
						<Card>
							<h5 className='card-title pb-3'>Develop</h5>

							<div className='pb-3'>
								<label className='form-label'>Button Title</label>
								<input
									value={buttonValue}
									onChange={(e) => setButtonValue(e.target.value)}
									type='text'
									className='form-control'
									placeholder='Title'
									aria-label='title'
									aria-describedby='addon-wrapping'
								/>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Font Weight</label>
								<select onChange={(e) => setFontWeight(e.target.value)} className='form-select' aria-label='font-weight'>
									<option value='normal'>normal</option>
									<option value='bold'>bold</option>
									<option value='bolder'>bolder</option>
									<option value='lighter'>lighter</option>
									<option value='100'>100</option>
									<option value='200'>200</option>
									<option value='300'>300</option>
									<option value='400'>400</option>
									<option value='500'>500</option>
									<option value='600'>600</option>
									<option value='700'>700</option>
									<option value='800'>800</option>
									<option value='900'>900</option>
									<option value='initial'>initial</option>
									<option value='inherit'>inherit</option>
								</select>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Background Color</label>
								<input
									value={bgColor}
									onChange={(e) => setBgColor(e.target.value)}
									type='color'
									className='form-control'
									aria-describedby='addon-wrapping'
								/>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Font Color</label>
								<input
									value={fontColor}
									onChange={(e) => setFontColor(e.target.value)}
									type='color'
									className='form-control'
									aria-describedby='addon-wrapping'
								/>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Font Size</label>
								<input
									value={fontSize}
									onChange={(e) => setFontSize(e.target.value)}
									type='range'
									className='form-range'
									aria-describedby='addon-wrapping'
								/>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Border Radius</label>
								<input
									value={borderRadius}
									onChange={(e) => setBorderRadius(e.target.value)}
									type='range'
									className='form-range'
									aria-describedby='addon-wrapping'
								/>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Padding Top & Bottom</label>
								<input
									value={paddingY}
									onChange={(e) => setPaddingY(e.target.value)}
									type='range'
									className='form-range'
									aria-describedby='addon-wrapping'
								/>
							</div>

							<div className='pb-3'>
								<label className='form-label'>Padding Left & Right</label>
								<input
									value={paddingX}
									onChange={(e) => setPaddingX(e.target.value)}
									type='range'
									className='form-range'
									aria-describedby='addon-wrapping'
								/>
							</div>
						</Card>
					</div>

					<div className='col-12 col-lg-6'>
						<Card>
							<h5 className='card-title pb-3'>Result</h5>

							<div className='pb-3'>
								<Button>{buttonValue}</Button>
							</div>

							<SyntaxHighlighter language='css' style={dracula}>
								{codeString}
							</SyntaxHighlighter>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}

export default App;
