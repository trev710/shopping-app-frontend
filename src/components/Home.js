import { colors } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Items from './Items';
import Card from './Card';

function Home(component){


        return(
            <div className="container">
            <img src="https://i.pinimg.com/originals/57/aa/c8/57aac8ba99861cca6cde9a2ea0417854.png" alt="logo" />   
            <h3 className="center">Penguin Supplies:</h3>
            
            <div className="box">
                <Card/>
            </div>
        </div>
        
        )
    }
        
    


export default Home