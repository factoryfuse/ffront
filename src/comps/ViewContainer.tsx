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
                modest
                allowFullScreen className="view-video-iframe"></iframe>
        </div>
    );
}

export default function ViewContainer(props: ViewContainerProps) {

    const content = VideoContainer();

    return (
        <div className="view-container">
            {content}
        </div>
    );
}