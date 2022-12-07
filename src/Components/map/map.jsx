import React, { useEffect, useContext } from 'react'
import "leaflet/dist/leaflet.css"
import IconLocation from './IconLocation'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../Navbar 1/Navbar1'
import { MapContainer, TileLayer, useMap, Marker, Popup  } from 'react-leaflet'
import { getParkings } from '../../redux/Parkings/parkings.function'
import { useSelector } from 'react-redux'



const Map = (prop) => {
    

  const [state,setState] = useState({
    longitude:"",
    latitude:""
  }
  )

  const {parkings} = useSelector((state) => state.parkings);
  
  useEffect(()=>{
    if(parkings <= 0){
      getParkings()
    }

    navigator.geolocation.getCurrentPosition(
      function(position){
        console.log(position);
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      }
    )
  },[])

const pos = [40.458384213400386, -3.694974886507998]
const upgrade = [40.45845766268682, -3.694942702058932]

/* const garages={
  garage1: [40.457976025041255, -3.697571266878767],
  garage2: [40.45493739151863, -3.6924107976966885],
  garage3: [40.45761825541889, -3.6816575105324683],
  garage4 : [40.46940707646363, -3.69507898796046],
  garage5 : [40.45398964572669, -3.693428466473853],
  garage6 : [40.44911670297784, -3.6784043507762414]
}
 */
    return (
    <>
    <Navbar styles='navbar_input--hidden'/>
    {state.longitude && state.latitude &&(
      <div>
    
      
    <MapContainer center={upgrade} zoom={15} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    {/* <Marker  position={upgrade}  icon={IconLocation}  >
    <Popup>
        Academia Upgrade
    </Popup>
    </Marker>
    <Marker  position={garages.garage1}  icon={IconLocation}  >
    <Popup>
        5€
        Avda de Brasil, 27, 28020-Madrid
    </Popup>
    </Marker>
    <Marker  position={garages.garage2}  icon={IconLocation}  >
    <Popup>
        5€
        Calle de Gral. Margallo, 22, 28020-Madrid
    </Popup>
    </Marker>
    <Marker  position={garages.garage3}  icon={IconLocation}  >
    <Popup>
      6€
      Calle de Francisco Gervás, 17, 28020-Madrid
    </Popup>
    </Marker>
    <Marker  position={garages.garage4}  icon={IconLocation}  >
    <Popup>
    7€
    Calle de la Infanta Mercedes, 62, 28020 Madrid
    </Popup>
    </Marker>
    <Marker  position={garages.garage5}  icon={IconLocation}  >
    <Popup>
    6€
    alle de Sor Ángela de la Cruz, 17, 28020 Madrid
    </Popup>
    </Marker>
    <Marker  position={garages.garage6}  icon={IconLocation}  >
    <Popup>
    5€
    Calle de la Infanta Mercedes, 70, 28020-Madrid
    </Popup>
    </Marker> */}

    {parkings && parkings.map((parking) => (
      <Marker position={[parking.longitude, parking.latitude]} icon={IconLocation}>
      <Popup>
        {parking.adress}
      </Popup>
      </Marker>
    ))}
  </MapContainer>,
  </div>)}

    
    </>
  )
}

export default Map