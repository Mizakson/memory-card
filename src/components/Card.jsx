export default function Card({ url, title }) {

    return (
        <div className="card">
            <img src={url}/>
            <p>{title}</p>
        </div>
    )
}