import styled from "styled-components";

export const TodoPanel = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	border: 2px solid #d9d9d9;
	border-bottom: 0px;

	:first-child {
		margin-top: 15px;
	}

	:nth-child(2n + 1) {
		background-color: #dcdcdcb0;
	}

	&:last-child {
		border-bottom: 2px solid #d9d9d9;
	}

	@media (max-width: 500px) {
		flex-wrap: wrap;
		justify-content: center;
	}
`;

export const Checkbox = styled.input.attrs({type: "checkbox"})`
	cursor: pointer;
	margin-right: 10px;
	position: relative;
  height: 15px;
  width: 15px;
	appearance: none;
	background-color: #d1d1d1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;

	::after {
		font-family: "Font Awesome 5 Free";
		font-weight: 900;
		content: '\f00c';
		font-size: 13px;
		color: #000;
		display: none;
	}

	:checked {
		background-color: #d5d5d5;
	}

	:checked::after {
		display: block;
	}
`;

export const Text = styled.span`
	font-size: 17px;
	width: 300px;
	overflow-wrap: break-word;
	margin-right: 20px;

	@media (max-width: 768px) {
		width: 200px;
	}
	
	@media (max-width: 638px) {
		width: 100px;
	}
`;

export const Buttons = styled.div`
	display: flex;
	@media (max-width: 500px) {
		margin-top: 13px;
	}
`;

export const ButtonEdit = styled.button`
	background-color: #2da745;
	width: 40px;
	height: 30px;
	margin-right: 4px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s;
	&:hover {
		background-color: green;
	}
`;

export const ButtonDelete = styled.button`
	background-color: #dc3545;
	width: 40px;
	height: 30px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.2s;
	&:hover {
		background-color: red;
	}
`;

export const CheckText = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

