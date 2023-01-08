import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Tmdb from "../../services/tmdb.services"


export default function Movie () {
  const router = useRouter()
  const {movie: movieId} = router.query //get params
  const [details, setDetails] = useState(null)
  
  useEffect(()=>{ 
    getMovieDataById(Number(movieId))
  }, [])

  const  getMovieDataById = async (movieId : number) => {
    const apiTmdb =  new Tmdb()
    const {results: details}  = await apiTmdb.getMovieDetails(movieId) //returns Error 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
    setDetails(details)
  }
  

  return (
    <div>
      <h1>MovieID</h1>
      <h3>{`Movie id:${movieId}`}</h3>

      </div>
  )
}



