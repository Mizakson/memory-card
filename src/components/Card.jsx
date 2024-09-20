export default function Card({ url, title, id, onClick}) {

    return (    
        <div className="card" id={id} onClick={onClick}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}