import React,{useState}from 'react'

export default function About() {

    const [modeStyle,setModeStyle]=useState({
        backgroundColor:'white',
        color:'black',
        border:'1px',
     

    })

    const [modeText,setModeText]=useState("Enable Dark Mode")

    const toggleMode=()=>{
        if(modeStyle.color==='black'){
            setModeStyle({
                backgroundColor:'black',
                color:'white',
                border:'.5px solid white',
            })
            setModeText("Disable Dark Mode")
        }
        else{
            setModeStyle({
                backgroundColor:'white',
                color:'black'
            })
            setModeText("Enable Dark Mode")
        }
    }

  return (
    <>
    <div className="container" style={modeStyle}>

       
            <div className="accordion" id="accordionExample"  >
        <div className="accordion-item" style={modeStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={modeStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={modeStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={modeStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={modeStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>

        <div>
                
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onClick={toggleMode} onChange={toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">{modeText}</label>
        </div>
            
        {/* <div className="container">
            <button onClick={toggleMode} className="btn btn-info" type='button'>{modeText}</button>
        </div> */}
        </div>
    </div>
    </>
  )
}
