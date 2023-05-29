import React from "react";
import "./UploadButton.scss";

interface UploadButtonProps {
    dummy: string | undefined,
}

function UploadOnClick() {
    return 0;
}

export default function UploadButton(props: UploadButtonProps) {

    return (
        <div className="upload-button">
            <h3>Upload your file</h3>
            <input type="file" accept=".xlsx, .xls " className="upload-button-picker" onClick={UploadOnClick} />

            <button className="upload-button-button" onClick={UploadOnClick}>Run</button>

            <p className="upload-button-credits">Developed by Factory Fuse Team</p>
        </div>
    );
}