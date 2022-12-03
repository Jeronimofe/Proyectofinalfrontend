import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { filterParkings } from "../../redux/Parkings/parkings.function"
import Menu from '../Menu/Menu';
import './Navbar.scss'

const Navbar = () => {
    const dispatch = useDispatch();
/* por que hace falta onClick={() => setMenu(!menu)} */ 
    const navigate= useNavigate();
    const [menu, setMenu]= useState(false)
    const { parkings, isLoading, error } = useSelector(
        (state) => state.parkings
      );
    return (
        <>

            <div className='divNavbar'>
            <nav>
                <img src='./assets/valet_app_logo.png' alt='Logo Valet' onClick={() => navigate('')} className='imgNav'/>
                <label>Buscar: <input type='text' placeholder='Buscar Estacionamiento...' className='navbar_input' onInput={dispatch(filterParkings(parkings))} ></input></label>
                <img src='./assets/MenuHamburguesa.png' alt='Menu' className='Hamburguermenu' onClick={() => setMenu(!menu)}/>
            </nav>
            </div>
            {menu === true &&
            <Menu/>}
        </>
    )
}

/* const filter = (event) => {
    const inputValue = event.target.value.toLowerCase();
    const filtered = ALLPOKEMONS.filter((pokemon) => {
      const matchName = pokemon.name.toLowerCase().includes(inputValue);
      const matchId = pokemon.id === Number(inputValue);
  
      return matchName || matchId;
    });
  
    drawPokemon(filtered);
  };
  
  
  
  
  
  const addAllMyEventsListeners = () => {
      document.querySelector(".input-search").addEventListener("input", filter);
      
      
  }; */
  
export default Navbar