import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpclick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase");
    }
    const handleLowclick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase");
    }
    const handleclrclick=()=>{
        let newText = ('');
        setText(newText);
        props.showAlert('Cleared All Text');
    }
    const handlecopyclick=()=>{
        let newText = document.getElementById('mybox');
        // newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Copied to Clipboard');
    }
    const handlespaceclick=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed Extra Spaces');
        }

    const handleOnchange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText] = useState('');
  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
        <h1> Try, Count Words, letters, and use some tools for clean text. </h1>
      <div className="mb-3">
<textarea placeholder='Enter Text here' className="form-control my-5" style={{backgroundColor: props.mode==='light'?'white':'#042743',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
<button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpclick}>UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowclick}>LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlecopyclick}>Copy</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlespaceclick}>Remove Extra space</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleclrclick}>Clear Text</button>
</div>

<h2>YOUR TEXT SUMMERY</h2>
<p>You have written <b> {text.split(/\s/).filter((element)=>{return element.length!==0}).length} </b> words and <b> {text.length} </b> characters</p>
<p>You can read this in <b> {0.008 * text.split(/\s/).filter((element)=>{return element.length!==0}).length} </b>  minutes.</p>
<h2>preview</h2>
<p>{text}</p>
    </div>

    </>
  )
}
