import { useEffect, useState } from "react";
import socket from "./Socket";
import "./ViewContainer.scss";

interface ViewContainerProps {
    content_type: string | undefined,
}

function VideoContainer() {
    return (
        <div className="view-video">
            <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/9sdLOZmrSZ0?modestbranding=1" title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen className="view-video-iframe"></iframe>
        </div>
    );
}

function ResultContainer(result_html: ArrayBuffer) {

    // const raw_html = atob(result_html)

    return (
        <div className="view-result">
            <iframe srcDoc={new TextDecoder().decode(result_html)} className="view-result-iframe" />
        </div>
    )
}

export default function ViewContainer(_props: ViewContainerProps) {

    const [content, setContent] = useState(VideoContainer());

    useEffect(() => {
        socket.addEventListener("message", async (e) => {
            const data = await (e.data as Blob).arrayBuffer();

            console.log(data)
            
            setContent(ResultContainer(data))
        });
    }, [])

    return (
        <div className="view-container">
            {content}
        </div>
    );
}