import Card from "./Card";
import { createClient } from "pexels";

export default function Display() {

    const client = createClient('YOUR_API_KEY');

    console.log(client)

    return(
        <div className="display">

        </div>
    )
}