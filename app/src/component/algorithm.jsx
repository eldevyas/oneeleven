import  React from "react";

const Text = () => {
    return(
        <div className="Text">
            <div className="Title">Unique, Brandable names</div>
            <div className="Description">Most business name generators combine dictionary words to make longer names.</div> 
            <div className="Description"> OneEleven generates short, branded names that are relevant to your business idea. When you save a name, the algorithm learns your preferences and gives you better recommendations over time.</div>
        </div>
    )
    
}

const Schema = () => {
    return(
        <div className="Schema">
            <div className="Composent Input">
                <div className="C1">Attempt</div>
                <div className="C2">Code</div>
                <div className="C3">Try</div>
                <div className="C4">Error</div>
                <div className="Generate"><p>Generate</p></div>
            </div>
            <div className="Process">
                <div className="Legend"></div>
                <div className="Algo">
                    <div className="C1"></div>
                    <div className="C2"></div>
                    <div className="C3"></div>
                    <div className="C4"></div>
                </div>
            </div>
            <div className="Composent Output">
                <div className="C1">...</div>
                <div className="C2">Codify</div>
                <div className="C3">Errexa</div>
                <div className="C4">TryCod</div>
                <div className="Result"><p>Output</p></div>
            </div>
        </div>
    )
}

function Algorithm() {
    return(
        <div className="Algorithm" id="Algo">
            <Text/>
            <Schema/>
        </div>
    )
}

export default Algorithm;