import Card from './components/card';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { DEFAULT_CSS, FONT_WEIGHT } from './data';
import Input from './components/input';
import debounce from 'lodash.debounce';

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
		${DEFAULT_CSS}
		padding: ${paddingY}px ${paddingX}px ;
		font-size: ${fontSize}px;
		border-radius: ${borderRadius}px;
		background-color: ${bgColor};
		color: ${fontColor};
		font-weight: ${fontWeight};
	}
	`;

	const Button = styled.button`
		${DEFAULT_CSS}
		padding: ${paddingY}px ${paddingX}px;
		font-size: ${fontSize}px;
		border-radius: ${borderRadius}px;
		background-color: ${bgColor};
		color: ${fontColor};
		font-weight: ${fontWeight};
	`;

	const debounceColor = (value, type) => {
		const debounced = debounce(() => {
			if (type === 'font') {
				setFontColor(value);
			} else {
				setBgColor(value);
			}
		}, 500);

		debounced();
	};

	useEffect(() => {
		if (buttonValue.length === 0) {
			const debounced = debounce(() => {
				setButtonValue('Hi, buddy');
			}, 500);

			debounced();
		}
	}, [buttonValue]);

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

						<small>
							Open Source:{' '}
							<a target='_blank' href='https://github.com/firmnardians/button-generator' rel='noreferrer'>
								Github
							</a>
						</small>
					</div>
				</div>

				<div className='mt-5 row justify-content-center'>
					<div className='col-12 col-lg-6 mb-5 mb-lg-0'>
						<Card>
							<h5 className='card-title pb-3'>Develop</h5>

							<Input label='Button Title' type='text' value={buttonValue} onChange={(e) => setButtonValue(e.target.value)} />

							<div className='pb-3'>
								<label className='form-label'>Font Weight</label>
								<select onChange={(e) => setFontWeight(e.target.value)} className='form-select' aria-label='font-weight'>
									{FONT_WEIGHT.map((item, index) => {
										return (
											<option key={index} value={item.value}>
												{item.value}
											</option>
										);
									})}
								</select>
							</div>

							<Input
								label='Background Color'
								type='color'
								value={bgColor}
								onChange={(e) => debounceColor(e.target.value, 'background')}
							/>

							<Input label='Font Color' type='color' value={fontColor} onChange={(e) => debounceColor(e.target.value, 'font')} />

							<Input type='range' label='Font Size' value={fontSize} onChange={(e) => setFontSize(e.target.value)} />

							<Input type='range' label='Border Radius' value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} />

							<Input type='range' label='Padding Top & Bottom' value={paddingY} onChange={(e) => setPaddingY(e.target.value)} />

							<Input type='range' label='Padding Left & Right' value={paddingX} onChange={(e) => setPaddingX(e.target.value)} />
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
