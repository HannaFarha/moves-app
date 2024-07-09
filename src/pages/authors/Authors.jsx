import { useState,useEffect } from "react";
import "./authors.css";
import { authors } from "../../data/author";
const Authors = () => {
  const [search, setSearch] = useState("");

// const fetchBooks=async()=>{
//     try{
//         const response =await fetch('https://delightful-cuff-cow.cyclic.app/authors')
//         if(response.ok){
//             const booksData =await response.json()
//             setAuthors(booksData)
//         }

//     }
//     catch(error){
//         console.log(error)
//     }
// }
// useEffect(()=>{fetchBooks()},[])


    return ( 
      <section className="authors">
        <div className="authors-search-wrapper">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search in authors"
          />
        </div>
        <div className="authors-wrapper">
          {authors
            .filter(a => a.name.toLowerCase().includes(search))
            .map((author) => (
              <div key={author.id} className="author">
                <img
                  src={author.image}
                  alt={author.name}
                  className="author-img"
                />
                <h2 className="author-name">{author.name}</h2>
              </div>
            ))}
        </div>
      </section>
    );
  };
  
  export default Authors;