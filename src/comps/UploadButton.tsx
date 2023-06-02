import React from "react";
import "./UploadButton.scss";
import socket, { ReestablishSocket, isSocketOn } from "./Socket";
import { base64ArrayBuffer } from "../Base64";

interface UploadButtonProps {
    dummy: string | undefined,
}

async function UploadOnClick(file: File | undefined) {
    
    if (file != undefined)
    {
        if (!isSocketOn()) 
        {
            ReestablishSocket()
        }

        const bytes = await file.arrayBuffer()
        const encoded = base64ArrayBuffer(bytes)

        socket.send(encoded);
    }

    return 0;
}

export default function UploadButton(_props: UploadButtonProps) {

    const [file, setFile] = React.useState<File>();

    return (
        <div className="upload-button">
            <h3>Upload your file</h3>
            <input type="file" accept=".xlsx, .xls " className="upload-button-picker" onClick={() => UploadOnClick(file)} onChange={(e) => {
                const stream = (e.target.files)?.[0];
                if (stream != undefined) {
                    setFile(stream)
                }
            }}/>

            <button className="upload-button-button" onClick={() => UploadOnClick(file)}>Run</button>

            <p className="upload-button-credits">Developed by Factory Fuse Team</p>
        </div>
    );
}