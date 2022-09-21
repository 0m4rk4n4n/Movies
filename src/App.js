import React, { useEffect, useState } from "react"
import Movie from "./Components/Movie"
import "./styles.css"
import { Button, Modal } from "react-bootstrap"
const FEATURED_API="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH_API="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="

const App=()=>
{
const [movies,setMovies]=useState([])
const [searchTerm,setSearchTerm]=useState("")
const [Pop,setPop]=useState(false)
const [loading,setLoading]=useState(true)
const [result,setResult]=useState(true)
useEffect(()=>
{
    setTimeout(()=>
    {
setPop(true)
    },20000)
},[])

useEffect(()=>
{
fetch(FEATURED_API)
.then(res=>res.json())
.then(data=>setMovies(data.results))
.then(()=>setLoading(false))
.catch(err=>console.log(err))
},[])
const handleSubmit=(e=>
    {
        if(searchTerm)
        {
            e.preventDefault()
            fetch(SEARCH_API + searchTerm)
            .then(res=>res.json())
            .then(data=>setMovies(data.results))
            .catch(err=>console.log(err))
        }
        else 
        {
setResult(false)
        }

    })

    const handleChange=(e=>
        {
            setSearchTerm(e.target.value)

        })
 
return(<>

<Modal className="disclaimer" show={Pop}>
    <Modal.Header>

    </Modal.Header>
    <Modal.Body>
        <div style={{color:"black",fontWeight:"bold"}}>
        Attention: Please Note that Movies posted on this Website are only for Informative Purposes and that they can't be viewed due to Copyrights Matters. Thanks for your Understanding.
        </div>

        </Modal.Body>
        <Modal.Footer>
     <Button className="btn" onClick={()=>setPop(false)}>
         Close
         </Button>
        </Modal.Footer>
    </Modal>
    <header>
        <div className="name">
<img src="moviesLogo.png" alt="Logo" />
        </div>
    <form onSubmit={handleSubmit}>
    <input className="search"
value={searchTerm}
onChange={handleChange}
type="text"
placeholder="Search Movies..."/>
    </form>
</header>
<div className="movie-container">
<div>

</div>
{movies.length > 0 ? movies.map(item=><Movie key={item.id} title={item.title} poster_path={item.poster_path} vote_average={item.vote_average} overview={item.overview} />) : <div>
   {result & loading ? 
       <h1 className="noresults">Loading Page...</h1> : <h1 className="noresults">No Results were Found. Please Try Again!</h1>}
    
    </div>}
</div>
<br />
<br />
<header id="footer" className="footer">
        <div className="name center">
            This App is Built Using The Development Build of React. ©2022 Copyrights Reserved

</div>
</header>
</>)
}
export default App