import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid'

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);



    const handleClick = (e) => {
        // e.preventDefault();
        
        const heightNavbar = document.querySelector(".navbar");
        setTimeout(() => {
            window.scrollBy({ 
                top: -heightNavbar.clientHeight - 30, // could be negative value
                left: 0, 
                behavior: 'smooth' 
              });
            // window.scrollBy(0, - heightNavbar.getBoundingClientRect().height)
            // window.scrollBy(0, - heightNavbar.clientHeight)
        })
    }

    return (
        <div className="container">
            <div className="navbar">
                <div>
                    <h2>GifExpertApp</h2>
                    <AddCategory setCategories={setCategories} />
                </div>
                <p>Categories:
                    {
                        categories.map(category => (
                            <span key={category} onClick={handleClick}>
                                <a  href={'#' + category.replace(' ', '_').trim()}>
                                    {category}
                                </a>
                            </span>
                        ))
                    }
                </p>
            </div>
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}

export default GifExpertApp