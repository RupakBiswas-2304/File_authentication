import React from 'react';
import './css/Fileupload.css';

class Fileupload extends React.Component{
    render(){
        return(
            <div className="fileupload">

                <h2>Upload File</h2>

                <form>
                    <label><input type="hidden" name="" value = {this.props.id}/></label>
                    <label id="zzxfc"> <input type="file" src="" alt="" id="filefield"/></label>
                    <label> Title    <input type="text" name="" /></label>

                    <button type="submit">Upload</button>
                    
                </form>
            </div>
        )
    }
}

export default Fileupload