import './App.css'
export default function Singer({singer}) {
    return (
        <div className="secondary-style">
            <h5>Name: {singer.name}</h5>
            <p>Age: {singer.age}</p>
        </div>
    )
}