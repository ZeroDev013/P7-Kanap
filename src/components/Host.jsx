import '../styles/host.css';

function Host({ props }) {

    return (
        <>
            <div className="hostProfile">
                <p className="host_name">{props.host.name}</p>
                <div className="host_picture">
                    <img src={props.host.picture} alt="pictureProfil" className='host__img' />
                </div>
            </div>
        </>
    );
}

export default Host;

