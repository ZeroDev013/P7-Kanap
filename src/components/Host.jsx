import '../styles/host.css';

function Host({ dataHost }) {

    return (
        <>
            <div className="hostProfile">
                <p className="host_name">{dataHost.host.name}</p>
                <div className="host_picture">
                    <img src={dataHost.host.picture} alt="pictureProfil" className='host__img' />
                </div>
            </div>
        </>
    );
}

export default Host;

