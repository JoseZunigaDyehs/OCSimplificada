import React, { useRef } from 'react'
import Button from '@material-ui/core/Button'

function FileInput({
	files: fileList,
	acceptedFiles = 'application/pdf',
	onChange,
}) {
	const inputFile = useRef(null)
	const onClickUploadFile = () => {
		inputFile.current.click()
	}
	const handleOnChangeFile = ({ target: { files } }) => {
		const nextFiles = Array.from(files).map(x => x)
		onChange([...fileList, ...nextFiles])
	}
	return (
		<React.Fragment>
			<Button color="primary" variant="outlined" onClick={onClickUploadFile}>
				Adjuntar archivo
			</Button>
			<input
				type="file"
				ref={inputFile}
				hidden
				onChange={handleOnChangeFile}
				accept={acceptedFiles}
				multiple
				files={fileList}
			/>
		</React.Fragment>
	)
}

export default FileInput
