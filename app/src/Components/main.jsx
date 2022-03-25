import React, {useState, useEffect} from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ReactTagInput from "@pathofdev/react-tag-input";





const Title = () => {
    return (
        <h1 className="title">Business Name <span>Generator</span></h1>
    )
};
    

const Description = () => {
    return (
        <p className="description">Generate a short, brandable business name using artificial intelligence</p>
    )
};


function Text(){
    return (
        <div className="Text">
            <Title/>
            <Description/>
        </div>
    )
}



function Input() {
    const [tags, setTags] = React.useState([])
    return (
      <ReactTagInput 
        tags={tags} 
        onChange={(newTags) => setTags(newTags)}
        placeholder="Enter keywords..."
        editable={true}
        readOnly={false}
        removeOnBackspace={true}
        maxTags={5}
        validator={(value) => {
            const isValid = value.length <= 15 && value.includes(' ') != true;
            if (!isValid) {
              alert("Please enter a keyword that is less than 15 characters and doestn't contain spaces.");
            }
            // Return boolean to indicate validity
            return isValid;
          }}
      />
    )
  }

const KeywordsButton = () => {
    return (
        <>
            <button className="Button">Generate</button>
        </>
    )
} 



class Keywords extends React.Component {
    render() {
        return (
        <div className="Keywords">
            <Input/>
            <KeywordsButton/>
        </div>
        )
    }
}

function Main() {
    return (
        <div className="container">
            <Text/>
            <Keywords/>
        </div>
    )
}


export default Main;






