export default function Card({ url, title, id}) {

    return (    
        <div className="card" id={id}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}