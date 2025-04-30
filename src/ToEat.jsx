export default function ToEat({isHungry, food}) {
    if (isHungry) {
        return <li>I am Hungry thats why Eat {food}</li>
    }
    return <li>I am not Hungry so I donot Eat {food}</li>
}