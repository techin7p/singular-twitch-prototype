import {useState} from "react"
import { removeSubscription } from "./helpers/eventsub/subscribe"

const DeleteSubscription = () => {
  const [id, setId] = useState("")

  return (
    <div style={{margin: '8px 0'}}>
      <input value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={() => removeSubscription(id)}>Delete</button>
    </div>
  )
}

export default DeleteSubscription;