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
    e.preventDefault();
    this.props.submitImage(this.state.file)
    console.log('handle uploading-', this.state.file);
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
      $imagePreview = (<img src={imagePreviewUrl} alt="upload preview"/>);
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