
export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    border: '1px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743'
  }
  return (
    <>
      <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingOne">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">CleanText gives you a way to analyze your text quickly and efficiency. Be it word count, character count or </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingTwo">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <strong>Free to use</strong>
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">CleanText is a free character counter tool that provides instant character count & word count statistics for a given text. cleanText reports that the number of words and characters. Thus it is suitable for writing text with word/ character limit.</div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="flush-headingThree">
              <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits for count characters in facebook, blog, books, excel documents, pdf documents, essays, etc.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
