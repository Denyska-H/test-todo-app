import styled from 'styled-components';

export const Input = styled.input`
	font-size: 14px;
  padding: 8px;
  border: 2px solid #EDECED;
	width: 80%;
	border-radius: 5px 0 0 5px;
	:focus {
		outline: none;
		border-color: #719ECE;
	}
  ::placeholder {
    color: #000;
		opacity: 0.6;
  }
`;

export const SubmitButton = styled.button`
	font-size: 14px;
  padding: 10px;
  border: none;
	background-color: #0A7BFF;
	color: #fff;
	width: 20%;
	border-radius: 0 5px 5px 0;
	transition: 0.2s;
	cursor: pointer;
	margin-right: -0.5px;
	:hover {
		background-color: #0A4BFF;
	}
`;

export const TextField = styled.div`
`;