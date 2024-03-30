import './Headlines.css';

function Headlines({headline}) {
    return (
        <section className='main_headline'>
            <div className='main_headline_container'>
                <p>{headline}</p>
            </div>
        </section>
    )
}

export default Headlines;