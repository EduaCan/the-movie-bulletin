import { movieDetailsProps, ratingDetails } from "../../interface/movie"
import { AiFillStar, AiOutlineStar } from 'react-icons/Ai'

export default function Rating({ voteAverage }: ratingDetails) {

    const roundedNumber = Math.round(voteAverage / 2)
    const starsArr = []
    for (let i = 0; i < 5; i++) {
        if (roundedNumber > i) {
            starsArr.push(<AiFillStar color={'2196f3'} size={23} />)
        } else { starsArr.push(<AiOutlineStar color={'2196f3'} size={23} />) }
    }

    return <p>{starsArr}</p>
}