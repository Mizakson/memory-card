export default function Card() {

    const keyId = crypto.randomUUID()
    console.log(keyId)
    const URL = "#"

    return (
        <div className="card" key={keyId}>
            <img src={URL}/>
            <p className="img-text"></p>
        </div>
    )
}