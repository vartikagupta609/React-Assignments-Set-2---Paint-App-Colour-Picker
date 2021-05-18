import React,{useState} from 'react'



const Selection=({applyColor})=>{
   let [style, setStyle] = useState({ background: "" });
    // let applyColor = props.applyColor;
    return(
       <div className="fix-box" style={style} onClick={()=>applyColor(setStyle)}>
        <h2 className="subheading">Selection</h2>
       </div>
    )

}

export default Selection;
