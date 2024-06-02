import React ,{useReducer}from 'react'

const initialState={
    currentImageIndex:0
}

const imageReducer=(state,action)=>{
       switch(action.type){
        case 'NEXT_IMAGE':
            return {currentImageIndex: state.currentImageIndex+1};
        case 'PREVIOUS_IMAGE':
            return {currentImageIndex: state.currentImageIndex-1};
        default:
            return state;           
       }
}

const images=[
'https://wallpapercave.com/wp/1xBukW5.jpg',
,'https://images.comicbooktreasury.com/wp-content/uploads/2022/08/Captain-America-Steve-Rogers-Reading-Order.jpg',
'https://wallpapercave.com/wp/1xBukW5.jpg',
'https://images.comicbooktreasury.com/wp-content/uploads/2022/08/Captain-America-Steve-Rogers-Reading-Order.jpg',
]

function TwentyEight() {

    const [state,dispatch]=useReducer(imageReducer,initialState);

    const currentImage=images[state.currentImageIndex];
  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        <img src={currentImage} style={{height:200,width:200}}/>
      </div>
      <div>
        <button onClick={()=>dispatch({type:'PREVIOUS_IMAGE'})}>Previous</button>
        <button onClick={()=>dispatch({type:'NEXT_IMAGE'})}>Next</button>
      </div>
    </div>
  )
}

export default TwentyEight
