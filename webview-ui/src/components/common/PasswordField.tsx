import { VSCodeTextField } from "@vscode/webview-ui-toolkit/react"
import { useState } from "react"
import styled from "styled-components"

const PasswordFieldContainer = styled.div`
	position: relative;
	width: 100%;
`

const ToggleIcon = styled.div`
	position: absolute;
	right: 4px;
	bottom: 0px;
	transform: translateY(-50%);
	cursor: pointer;
	color: var(--vscode-editor-foreground);
	opacity: 0.8;
	z-index: 2;
	display: flex;
	align-items: center;

	&:hover {
		opacity: 1;
	}
`

type PasswordFieldProps = React.ComponentProps<typeof VSCodeTextField> & {
	onInputChange?: (e: any) => void
}

const PasswordField = ({ onInputChange, ...props }: PasswordFieldProps) => {
	const [visible, setVisible] = useState(false)

	const toggleVisibility = () => {
		setVisible(!visible)
	}

	return (
		<PasswordFieldContainer>
			<VSCodeTextField
				{...props}
				type={visible ? "text" : "password"}
				onInput={onInputChange}
				style={{ width: "calc(100% - 28px)", paddingInlineEnd: "28px", ...(props.style || {}) }}
			/>
			<ToggleIcon onClick={toggleVisibility} title={visible ? "Hide password" : "Show password"}>
				<i className={`codicon ${visible ? "codicon-eye" : "codicon-eye-closed"}`} />
			</ToggleIcon>
		</PasswordFieldContainer>
	)
}

export default PasswordField
