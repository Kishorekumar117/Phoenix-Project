import React, { Component } from 'react'
import { Button, ThemeProvider } from 'react-bootstrap';


import wall_a from '../Shared/Images/wallpaperflare-cropped.jpg';
import wall_b from '../Shared/Images/wallpaperflare-cropped (1).jpg';
import theam from '../Shared/Images/theams.jpg'
import line from '../Shared/Images/line.png';
import Modal from 'react-modal'
import logo from '../Shared/Images/Logo.png'
import OurCollectionslogo from '../Shared/Images/OurCollectionslogo.png'
import jewellery from '../Shared/Images/Jewellery.png'


import { Link } from 'react-router-dom';

export class OurCollectionComp extends Component {


  constructor(props) {
    super(props);
 
    this.state = {
      showModal: false
    };
  }


  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
   
  handleOkayButton = () => {
   
    // // Add custom logic for the "Okay" button
    console.log('Okay button clicked!');
     window.alert("ok")
   

     

  };
    render() {
        return (
            <div>
               
    <img
    src={OurCollectionslogo}
    alt="line"
    style={{ width: '90%', marginTop: '0px' }}
  />
 

 
<div class="container mt-2 ">
 
  <div class="collectionsContent" style={{margin:'auto'}}>
  <div class="row">
    <div class="col-md-4 ">
   
  <div class="shows">
  <img src={'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-58947-585X575-300x300.jpg'} alt="Notebook"/>
  <div class="content">
    <h1 style={{textAlign:'left'}}>Antique</h1>
    <p style={{textAlign:'left'}}>Antique jewelry, with its timeless charm and intricate craftsmanship, reflects the unique styles of bygone eras, featuring materials like gold and gemstones</p>
  </div>
</div>
     
      </div>
    <div class="col-md-4">

  <div class="shows">
  <img src={'https://www.wedabout.com/blog/wp-content/uploads/2021/05/royal-kundan-jewellery-set-819x1024.jpg'} alt="Notebook"/>
  <div class="content">
    <h1 style={{textAlign:'left'}}>Bridal</h1>
    <p style={{textAlign:'left'}}>Bridal jewelry, adorned with elegance and grace, completes the bride's ensemble, featuring necklaces, earrings, bracelets, and rings crafted with precious metals and gemstones.</p>
  </div>
</div>
 
   
    </div>
    <div class="col-md-4">

    <div class="shows">
    <img src={'https://assets.ajio.com/medias/sys_master/root/20230503/x2oM/6452498542f9e729d7643d0e/-473Wx593H-462327370-gold-MODEL.jpg'} alt="Notebook"/>
    <div class="content">
      <h1 style={{textAlign:'left'}}>Fusion</h1>
      <p style={{textAlign:'left'}}>
Fusion jewelry seamlessly blends cultural elements, merging traditional and contemporary designs to create uniquely stylish pieces that reflect the diversity and modernity of today's fashion.</p>
    </div>
    </div>

    </div>
</div>
 </div>
 </div>

<div class="container mt-3">
 <Button variant="secondary" size="lg" onClick={this.handleShowModal} active style={{borderRadius:'0px',width:'400px' ,margin:'auto',backgroundColor:'#ffcc00',color:'maroon'}}>
        MORE COLLECTIONS
      </Button>
      </div>
     
   
      <img
    src={jewellery}
    alt="Jewellery"
    style={{ width: '100%', marginTop: '10px',}}
  />
 

  <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.handleCloseModal}
          className="custom-modal"
          overlayClassName="custom-modal-overlay"
   
        >
          <div className="modal-content" >
            <button className="close-modal-button btn btn-danger" onClick={this.handleCloseModal}>
              X
            </button>
            <h2 className="modal-title"><img src={logo} alt='image'style={{width:"200px",height:"150px",borderRadius:'20px'}}/></h2>
            <p>
            Thank you for expressing interest in our product Please log in to make purchases
            </p>
            <Link to='login' className='okay-button btn btn-primary'><font className="fontl" >Login</font></Link>

            <button className="close-button btn btn-danger" onClick={this.handleCloseModal} >
              Close
            </button>
          </div>
        </Modal>

            </div>
        )
    }
}

export default OurCollectionComp
