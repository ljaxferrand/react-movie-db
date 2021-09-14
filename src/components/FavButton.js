// Fav Button

import heartOutline from "../images/heart-outline.png";
import heart from "../images/heart.png";

function FavButton({ movieObj, remove, handleFavClick }) {
    
    

    function handleAddFav(){
        handleFavClick(true, movieObj);
       
    }

    function handleRemoveFav(){
        handleFavClick(false, movieObj);
            // if(window.location.href === '/favs') {
            //     window.location.reload();
            // }
    }

    return (
        <>
            {remove === false ? 
            <button className="favs-btn" onClick={handleAddFav}><img  className="favs-heart"src={heartOutline} alt="heart" width="30px" /></button> : 
            <button className="favs-btn"  onClick={handleRemoveFav} ><img  className="favs-heart" src={heart} alt="heart" width="30px" /></button>}
        </>
    );
    
}

FavButton.defaultProps = {
    remove: false
}

export default FavButton;