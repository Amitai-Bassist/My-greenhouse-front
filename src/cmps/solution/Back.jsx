import backendArchitecture from '../../assets/imgs/backend-architecture.png'

export function Back() {
    return (
        <section>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hf2KZXx8gsI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <img src={backendArchitecture} alt="" />
        </section>
    )
}