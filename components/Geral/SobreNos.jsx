import React from 'react'


const SobreNos = () => {
    return (
        <main>
            <section className="sobre min-h-[100vh]">
                <div className="content-video">
                    <iframe width="360" height="203" src="https://www.youtube.com/embed/XHOmBV4js_E" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="sobre-intro">
                        <p className="sobre-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <p className="sobre-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <h3 className="sobre-titulo">NFTs e o futuro</h3>
                <p className="sobre-texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </section>
        </main>
    )
}

export default SobreNos