import React, {Component} from 'react';
import './profile-page.css';

class ProfilePage extends Component {

  constructor(props) {
      super(props)
      this.state = {
        file: '',
        imagePreviewUrl: ''
      }
  };


  componentWillMount() {
    let reader = new FileReader();
    if (this.props.imgFile) {
      let file = this.props.imgFile;
      console.log(file.data)
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file)
    }
  }




  _handleSubmit(e) {

    function _imgSubmit(data) {
      fetch('http://localhost:8080/api/newdesign', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    }


    e.preventDefault();
    this.props.submitImage(this.state.file)
  //  console.log('handle uploading-(props from navbar)', this.state.file);
    // let Base64img = document.getElementById('profileImg').src
    // let upload = Base64img.replace("data:image/jpeg;base64,","")

    const body_data = new FormData({
      type: 'file'
    });
    body_data.append('image', this.state.file);
    fetch(`https://api.imgur.com/3/upload`, {
      method: 'POST',
      headers: {
        'Authorization': 'Client-ID 6338d70e3026ca4'
      },
      body: body_data
    }).then(response => {
      return response.json();
    }).then( json => {
      return json.data.link
    }).then( link => {
      console.log(link)
      _imgSubmit(link)
    })
}


  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  render() {

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img id='profileImg' src={imagePreviewUrl} alt="upload preview"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an image for preview</div>);
    }

    return (
      <div className="profile-page-container">
        <div className="upload-image-header">
          Upload your design to have it voted on by the community!
        </div>
        <div className="upload-image-container">
          <form className="upload-image-form" onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" type="submit" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
        </div>
        <div className="preview-image-container">
          <div className="imgPreview">
            {$imagePreview}
          </div>
        </div>
      </div>

    )
  }
}
export default ProfilePage
