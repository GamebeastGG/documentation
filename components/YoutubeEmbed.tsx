const YoutubeEmbed = ({embedId} : {embedId : string}) => {
    return <iframe width="660" height="370" className="mt-5" src={"https://www.youtube.com/embed/" + embedId} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
}

export default YoutubeEmbed