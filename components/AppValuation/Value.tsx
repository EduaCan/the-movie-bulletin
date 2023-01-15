import { movieDetailsProps } from "../../interface/movie"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export default function Valuation({ popularity }: movieDetailsProps) {

    const roundedNumber = Math.round(popularity / 2)
    const starsArr = []
    for (let i = 0; i < 5; i++) {
        if (roundedNumber > i) {
            starsArr.push(<AiFillStar color={'2196f3'} size={25} />)
        } else { starsArr.push(<AiOutlineStar color={'2196f3'} size={25} />) }
    }

    return <p>{starsArr}</p>
}