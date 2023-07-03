import React, { useReducer } from 'react'
import { cuisines } from "../../constants/data";


function Cuisine() {    
  const reducer = (state , action) => {
    switch(action.type){
      case "Checked":
        {
          return state.map((data) => {
            if(action.id === data.id){
              return {...data, checked:!data.checked};
            }
            else{
              return data;
            }
          });
        }
        default:
        {
          return state;
        }
    }
  }

  const [state, dispatch] = useReducer(reducer, cuisines);

  return (
    <div>
      {state.map((data) => (
        <div key={data.id} className='cuisine-box'>
          <p>{data.label}</p>
          <input type="checkbox" onChange={(e) => dispatch({type:"Checked",id:data.id})}/>
        </div>
      ))}
    </div>
  );
}

export default Cuisine