import './App.css'
export default function Singer({name, age}) {
    return (
        <div className="secondary-style">
            <h5>Name: {name}</h5>
            <p>Age: {age}</p>
        </div>
    )
}