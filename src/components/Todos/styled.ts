import styled from 'styled-components';

export const Input = styled.input`
	font-size: 14px;
  padding: 8px;
	width: 100%;
	flex: 0 1 80%;
  border: 2px solid #d9d9d9;
	border-radius: 5px 0 0 5px;
	:focus {
		outline: none;
		border-color: #719ECE;
	}
  ::placeholder {
    color: #000;
		opacity: 0.6;
  }

	@media (max-width: 425px) {
		border-radius: 0px;
		padding: 8px 6px;
		flex: 0 1 100%;
	}
`;

export const SubmitButton = styled.button`
	font-size: 14px;
	width: 100%;
  padding: 10px;
  border: none;
	background-color: #0A7BFF;
	color: #fff;
	flex: 0 1 20%;
	border-radius: 0 5px 5px 0;
	transition: 0.2s;
	cursor: pointer;
	margin-right: -0.5px;
	:hover {
		background-color: #0A4BFF;
	}

	@media (max-width: 425px) {
		border-radius: 0px;
		flex: 0 1 100%;		
	}
`;

export const TextField = styled.div`
	display: flex;
	@media (max-width: 425px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;