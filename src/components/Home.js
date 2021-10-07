import { colors } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import Items from './Items';
import PenguinCard from './PenguinCard';
import ItemList from './ItemList';
import './component.css'

function Home(component){


        return(
            <div className="home-container">
            <img src="https://i.pinimg.com/originals/57/aa/c8/57aac8ba99861cca6cde9a2ea0417854.png" alt="logo" />   
            <h3 className="shop">Penguins</h3>
            
            <div className="shop-container">
                <PenguinCard />
            {/* will be a container of all the cards once cards are working*/}
            </div>
        </div>
        
        )
    }
        
    


export default Home;