import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import wall_c from '../Shared/Images/wallpaperflare.com_wallpaper.jpg';
import wall_d from '../Shared/Images/wallpaperflare.com_wallpaper (2).jpg';
import wall_e from '../Shared/Images/wallpaperflare.com_wallpaper (1).jpg';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



import logo from '../Shared/Images/Logo.png';

import CartComp from './CartComp';

import './Sb.css';
import {
  FaBars,
  FaUser,
  FaRing,
  FaGem,
  FaCubes,
  FaSignOutAlt,FaCartPlus
} from 'react-icons/fa';
import MyRoutingComp from './MyRoutingComp';


class Sidebar extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      // loggedOut: false,
      isOpen: true,showModal: false,
      activeSubMenu: null,
      students: [
        { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '₹269,142',dPrice: '$269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-58947-585X575-300x300.jpg', offer: '3% OFF'},
      { PName: 'Elegant Lakshmi Gold Necklace', price: '$269,142',dPrice: '₹333,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69112-585X575-300x300.jpg', offer: '3% OFF'},
      { PName: 'Classic Lakshmi Gold Necklace', price: '$269,142',dPrice: '₹222,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-58958-585X575-300x300.jpg', offer: '3% OFF'},
      { PName: 'Stylish Lakshmi Gold Necklace', price: '$269,142',dPrice: '₹890,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-58922-585X575-300x300.jpg', offer: '3% OFF'},
      { PName: 'Antique Lakshmi Gold Necklace', price: '$269,142',dPrice: '₹563,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-59007-585XX575-300x300.jpg', offer: '3% OFF'},
      { PName: 'Gorgeous Lakshmi Gold Necklace', price: '$269,142',dPrice: '₹989,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-58974-585X575-300x300.jpg', offer: '3% OFF'}
      // ... other student data
    ],

    };
  }
  handleModalOpen = () => {
    this.setState({ showModal: true });
  };

  handleModalClose = () => {

    this.setState({ showModal: false });
  };
  handleLogout = () => {
    // Clear sessionStorage or remove specific item
    sessionStorage.clear(); // or sessionStorage.removeItem('yourItemName');

    
  };
// ==================================
goldBangles = () => {
  const data = [
    { PName: 'Elegant Gold Bangles with Intricate Design', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day18193-585XX575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Exquisite Gold Bangles with Traditional Patterns', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day17959-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Beautifully Crafted Gold Bangles with Lakshmi Motif', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day18205-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day18235-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Antique Gold Bangles with Detailed Craftsmanship', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day-28279-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Gold Bangles with Timeless Floral Design', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day18136-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Classic Gold Bangles with Lakshmi Pendant', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/Khazana-day18169-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Intricately Designed Gold Bangles with Floral Patterns', price: '₹269,142', dPrice: '₹269,142', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69229-585x575-300x300.jpg', offer: '3% OFF'},
   
    // ... other gold bangles
  ];


 // this.setState({ students: [] });
  this.setState({ students: data });
};

goldNecklace = () => {
  const data = [

    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '₹349,999', dPrice: '₹349,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-59007-585XX575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Elegant Lakshmi With Floral Gold Necklace', price: '₹279,999', dPrice: '₹279,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69213-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Classic Lakshmi With Floral Gold Necklace', price: '₹329,999', dPrice: '₹329,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-58922-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Timeless Lakshmi With Floral Gold Necklace', price: '₹309,999', dPrice: '₹309,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-59030-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Gorgeous Lakshmi With Floral Gold Necklace', price: '₹289,999', dPrice: '₹289,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69179-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Stunning Lakshmi With Floral Gold Necklace', price: '₹319,999', dPrice: '₹319,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69098-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Regal Lakshmi With Floral Gold Necklace', price: '₹359,999', dPrice: '₹359,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69188-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Ethereal Lakshmi With Floral Gold Necklace', price: '₹299,999', dPrice: '₹299,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69188-585X575-300x300.jpg', offer: '3% OFF'},
    // ... other gold necklaces
  ];

 // this.setState({ students: [] });
  this.setState({ students: data });
};

goldRing = () => {
  const data = [
    { PName: 'Exquisite Lakshmi Floral Gold Ring', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69304-585x575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Traditional Lakshmi Gold Ring with Floral Design', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69306-585x575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Classic Lakshmi Floral Gold Ring', price: '₹79,999', dPrice: '₹79,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69275-585x575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Elegant Lakshmi Gold Ring with Floral Motif', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69310-585x575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Timeless Lakshmi Floral Gold Ring', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69267-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Gorgeous Lakshmi Gold Ring with Floral Pattern', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69285-585X575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Stunning Lakshmi Floral Gold Ring', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69272-585x575-300x300.jpg', offer: '3% OFF'},
    { PName: 'Regal Lakshmi Gold Ring with Floral Design', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/khazana-day-69271-585X575-300x300.jpg', offer: '3% OFF'},
    // ... other gold rings
  ];
 // this.setState({ students: [] });
  this.setState({ students: data });
};

// ==================================

silverBangles = () => {
  const data = [
    { PName: 'Elegant Silver Bangles with Lakshmi Motif', price: '₹19,999', dPrice: '₹19,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/3-300x300.png', offer: '3% OFF'},
    { PName: 'Classic Silver Bangles with Floral Design', price: '₹22,999', dPrice: '₹22,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/3_1-300x300.png', offer: '3% OFF'},
    { PName: 'Traditional Silver Bangles with Lakshmi Pendant', price: '₹24,999', dPrice: '₹24,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/07/3_2-300x300.png', offer: '3% OFF'},
    { PName: 'Silver Bangles with Floral and Peacock Design', price: '₹21,999', dPrice: '₹21,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/07/3_8-300x300.png', offer: '3% OFF'},
    { PName: 'Stylish Silver Bangles with Textured Pattern', price: '₹23,999', dPrice: '₹23,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/07/3_8-300x300.png', offer: '3% OFF'},
    { PName: 'Intricate Silver Bangles with Traditional Motifs', price: '₹20,999', dPrice: '₹20,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/07/3_8-300x300.png', offer: '3% OFF'},
    { PName: 'Antique Silver Bangles with Embossed Details', price: '₹18,999', dPrice: '₹18,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/07/3_6-300x300.png', offer: '3% OFF'},
    { PName: 'Silver Bangles with Floral and Geometric Patterns', price: '₹25,999', dPrice: '₹25,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/07/3_3-300x300.png', offer: '3% OFF'}
    // ... other silver bangles
  ];
 // this.setState({ students: [] });
  this.setState({ students: data });
};

silverNecklace = () => {
  const data = [
    { PName: 'Elegant Lakshmi With Floral Silver Necklace', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/1-17-300x300.png', offer: '3% OFF'},
    { PName: 'Classic Lakshmi With Floral Silver Necklace', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2-15-300x300.png', offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Silver Necklace', price: '₹79,999', dPrice: '₹79,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/3-14-300x300.png', offer: '3% OFF'},
    { PName: 'Antique Lakshmi With Floral Silver Necklace', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/5-2-300x300.png', offer: '3% OFF'},
    { PName: 'Stylish Lakshmi With Floral Silver Necklace', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/6-3-300x300.png', offer: '3% OFF'},
    { PName: 'Intricate Lakshmi With Floral Silver Necklace', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/7-1-300x300.png', offer: '3% OFF'},
    { PName: 'Gorgeous Lakshmi With Floral Silver Necklace', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/8-1-300x300.png', offer: '3% OFF'},
    { PName: 'Stunning Lakshmi With Floral Silver Necklace', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/6-3-300x300.png', offer: '3% OFF'}
    // ... other silver necklaces
  ];

 // this.setState({ students: [] });
  this.setState({ students: data });
};
silverRing = () => {
  const data = [
    { PName: 'Work Lakshmi With Floral Silver Ring', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_7-300x300.png', offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Silver Ring', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4-300x300.png', offer: '3% OFF'},
    { PName: 'Classic Lakshmi With Floral Silver Ring', price: '₹79,999', dPrice: '₹79,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_9-300x300.png', offer: '3% OFF'},
    { PName: 'Antique Lakshmi With Floral Silver Ring', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_12-300x300.png', offer: '3% OFF'},
    { PName: 'Stylish Lakshmi With Floral Silver Ring', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_4-300x300.png', offer: '3% OFF'},
    { PName: 'Intricate Lakshmi With Floral Silver Ring', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_6-300x300.png', offer: '3% OFF'},
    { PName: 'Gorgeous Lakshmi With Floral Silver Ring', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_8-300x300.png', offer: '3% OFF'},
    { PName: 'Stunning Lakshmi With Floral Silver Ring', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_5-300x300.png', offer: '3% OFF'}
    // ... other silver rings
  ];
 // this.setState({ students: [] });
  this.setState({ students: data });
};

// ==================================


platinumBangles = () => {
  const data = [
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '$269,142',dPrice: '$269,142', photo: wall_c, offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '$269,142',dPrice: '$269,142', photo: wall_c, offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '$269,142',dPrice: '$269,142', photo: wall_c, offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '$269,142',dPrice: '$269,142', photo: wall_c, offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '$269,142',dPrice: '$269,142', photo: wall_c, offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Gold Necklace', price: '$269,142',dPrice: '$269,142', photo: wall_c, offer: '3% OFF'}
    // ... other gold students
  ];

 // this.setState({ students: [] });
  this.setState({ students: data });
};

platinumNecklace = () => {
  const data = [
    { PName: 'Exquisite Platinum Lakshmi Necklace', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2_6-300x300.png', offer: '3% OFF'},
    { PName: 'Traditional Platinum Lakshmi Necklace', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2_2-9-300x300.png', offer: '3% OFF'},
    { PName: 'Classic Platinum Lakshmi Necklace', price: '₹79,999', dPrice: '₹79,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2_4-2-300x300.png', offer: '3% OFF'},
    { PName: 'Elegant Platinum Lakshmi Necklace', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2_7-300x300.png', offer: '3% OFF'},
    { PName: 'Timeless Platinum Lakshmi Necklace', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2_5-300x300.png', offer: '3% OFF'},
    { PName: 'Gorgeous Platinum Lakshmi Necklace', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/2_1-9-300x300.png', offer: '3% OFF'}
    // ... other platinum necklaces
  ];

 // this.setState({ students: [] });
  this.setState({ students: data });
};
platinumRing = () => {
  const data = [
    { PName: 'Work Lakshmi With Floral Platinum Ring', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_7-300x300.png', offer: '3% OFF'},
    { PName: 'Traditional Lakshmi With Floral Platinum Ring', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_13-300x300.png', offer: '3% OFF'},
    { PName: 'Classic Lakshmi With Floral Platinum Ring', price: '₹79,999', dPrice: '₹79,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_14-300x300.png', offer: '3% OFF'},
    { PName: 'Elegant Lakshmi With Floral Platinum Ring', price: '₹109,999', dPrice: '₹109,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_12-300x300.png', offer: '3% OFF'},
    { PName: 'Timeless Lakshmi With Floral Platinum Ring', price: '₹89,999', dPrice: '₹89,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_14-300x300.png', offer: '3% OFF'},
    { PName: 'Gorgeous Lakshmi With Floral Platinum Ring', price: '₹99,999', dPrice: '₹99,999', photo: 'https://www.khazanajewellery.com/wp-content/uploads/2016/06/4_12-300x300.png', offer: '3% OFF'}
    // ... other platinum rings
  ];

 // this.setState({ students: [] });
  this.setState({ students: data });
};



getLabel = (index) => {
  // ... existing getLabel code
};

fun = (name,price) => {
  let lastId = localStorage.getItem('lastId') || 0;
  lastId = parseInt(lastId) + 1;
  localStorage.setItem('lastId', lastId);
  const newPurchase = {
      id: lastId.toString(),
      productname: name,
      productprice: price,
     useremail: 'user@example.com', // Replace with actual email
      username: 'New User' // Replace with actual username
    };

    // Axios POST request to insert data
    axios.post('http://localhost:8888/purchase', newPurchase)
      .then(response => {
          // window.alert("Produt Ordered Successfully!, Product Name: "+name+"Price: "+price)
          this.handleModalOpen();
        console.log('Data inserted:', response.data);
        // Handle the response or update state if needed
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        // Handle errors if necessary
      });
};


addcart = (name,price) => {
  let lastId = localStorage.getItem('lastId') || 0;
  lastId = parseInt(lastId) + 1;
  localStorage.setItem('lastId', lastId);
  const newPurchase = {
      id: lastId.toString(),
      productname: name,
      productprice: price,
     useremail: 'user@example.com', // Replace with actual email
      username: 'New User' // Replace with actual username
    };

    // Axios POST request to insert data
    axios.post('http://localhost:8888/cart', newPurchase)
      .then(response => {
          window.alert("Produt Added to Cart!, Product Name: "+name+"Price: "+price)
        console.log('Data inserted:', response.data);
        // Handle the response or update state if needed
      })
      .catch(error => {
        console.error('Error inserting data:', error);
        // Handle errors if necessary
      });
};

  // =========================================
  toggle = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
      activeSubMenu: null,
    }));
  };

  handleItemClick = (index) => (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      activeSubMenu: prevState.activeSubMenu === index ? null : index,
    }));
  };

  handleSubItemClick = (event) => {
    event.preventDefault();
    window.alert("Hello");
  };

  menuItem = [
    {
      
      name: sessionStorage.getItem("username"),
      icon: <FaUser />,
    },
    {
      
      name: 'Gold',
      icon: <FaCubes />,
      submenu: [
        { name: 'Necklace', icon: <FaGem />, onClick: this.goldNecklace },
        { name: 'Bangles', icon: <FaGem />, onClick: this.goldBangles  },
        { name: 'Rings', icon: <FaGem />, onClick: this.goldRing },
      ],
    },
    {
      href: '/SignIn3',
      name: 'Silver',
      icon: <FaRing />,
      submenu: [
        { name: 'Necklace', icon: <FaGem />, onClick: this.handleSubItemClick },
        {  name: 'Bangles', icon: <FaGem />, onClick: this.handleSubItemClick },
        { name: 'Rings', icon: <FaGem />, onClick: this.handleSubItemClick },
      ],
    },
    {
      href: '/SignIn4',
      name: 'Platinum',
      icon: <FaGem />,
      submenu: [
        {  name: 'Necklace', icon: <FaGem />, onClick: this.handleSubItemClick },
        { name: 'Bangles', icon: <FaGem />, onClick: this.handleSubItemClick },
        { name: 'Rings', icon: <FaGem />, onClick: this.handleSubItemClick },
      ],
    },
    {
     
      name: 'card',
      component: <CartComp />,
    }
    
  ];

  render() {
    const { isOpen, activeSubMenu } = this.state;
    

    return (
      
      <div className='row' style={{ maxWidth: '100%',marginRight:'2px' }}>
        <div className="container mt-3">

  

        <Modal show={this.state.showModal} onHide={this.handleModalClose} centered >
          
          <Modal.Body style={{backgroundColor:'black'}}>
          <div className="">
            
           
            <h2 style={{backgroundColor:'black'}}>Thank You For Purchasing</h2>
            {/* <button className="okay-button btn btn-primary" onClick={this.handleCloseAdModal}>
              Okay
            </button> */}
            
          </div>

          </Modal.Body>
          <Modal.Footer style={{backgroundColor:'black'}}>
            <Button variant="danger" onClick={this.handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
        <div className='col-sm-3'>
          <div className="container" >
            <div style={{ width: isOpen ? '250px' : '50px' }} className="sidebar">
              <div className="top_section">
                <div style={{ display: isOpen ? 'block' : 'none' }} className="logo">
                  <img src={logo} alt="Your Logo" style={{ maxWidth: '100%' }} />
                </div>
                <div className="bars">
                  <FaBars onClick={this.toggle} />
                </div>
              </div>
              {this.menuItem.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="link"
                    onClick={this.handleItemClick(index)}
                  >
                    <div className="icon">{item.icon}</div>
                    {isOpen && <div className="link_text">{item.name}</div>}
                  </a>
                  {item.submenu && isOpen && activeSubMenu === index && (
                    <div className="submenu">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          href={subItem.href}
                          key={subIndex}
                          className="sublink"
                          onClick={subItem.onClick}
                        >
                          <div className="subicon">{subItem.icon}</div>
                          <div className="sublink_text">{subItem.name}</div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <main>{this.props.children}</main>
          </div>
        </div>


  {/* ================================================== */}
  <div className='col-sm-6'>
              
              <div className='container ' style={{ width: '100%',marginLeft:'40px' }}>
                  <div className='container m-2 p-2' style={{ width: '100%' }}>
                      <Row xs={1} md={2} className='g-3' style={{width:'100%'}}>
                          {this.state.students.map((student, idx) => (
                              <Col style={{ align: 'center' }} key={idx}>
                                  <Card
                                      style={{
                                          width: 'auto',
                                          height: 'auto',
                                          backgroundColor: 'black',
                                          textAlign: 'center',
                                      }}
                                  >
                                      <Card.Img
                                          variant='top'
                                          src={student.photo}
                                          style={{ width: 'auto', height: '300px' }}
                                      />
                                      <Card.Body>
                                          <Card.Title style={{color:'rgb(243, 240, 240,0.9)'}}>{student.PName}</Card.Title>
                                          <Card.Text>
                                              {student.price}<br/><strong style={{color:'red'}}>{student.offer}</strong><br/>
                                              <Button
                                                  variant='secondary'
                                                  size='sm'
                                                  onClick={()=>this.fun(student.name,student.price)}
                                                  active
                                                  style={{
                                                      borderRadius: '0px',
                                                      width:'auto',
                                                      backgroundColor:'gold',
                                                      color:'maroon',
                                                      padding:'5px 40px 5px 40px'
                                            
                                                  }}
                                              >
                                                  BUY
                                              </Button>
                                              
                                              <Button
                                                  variant='secondary'
                                                  size='sm'
                                                  onClick={()=>this.addcart(student.name,student.price)}
                                                  active
                                                  style={{
                                                      borderRadius: '0px',
                                                      width:'auto',
                                                      backgroundColor:'gold',
                                                      color:'maroon',
                                                      padding:'5px 40px 5px 40px'
                                            
                                                  }}
                                              >
                                                  Add To Cart
                                              </Button>
                                                  

                                          </Card.Text>
                                      </Card.Body>
                                  </Card>
                              </Col>
                          ))}
                      </Row>
                  </div>
              </div>
      </div>
        <div className='col-sm-3'>
        
        <Link to='/home' className='nav-link' onClick={this.handleLogout}><font className=""  style={{fontSize:'20px'}}><FaSignOutAlt />{" "}Logout</font></Link>
        <Link to='/cart' className='nav-link' ><font className=""  style={{fontSize:'20px'}}><FaCartPlus />{" "}My Cart</font></Link>
        
          </div>
      </div>
    );
  }
}

export default Sidebar;