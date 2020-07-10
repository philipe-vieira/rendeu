import React from 'react';
import { ToggleLayer, Transition, Arrow } from 'react-laag'
import { BsPeopleCircle, BsGearFill } from 'react-icons/bs';
import { MdContacts, MdPowerSettingsNew} from 'react-icons/md';

import './styles.css'
import { Link } from 'react-router-dom';

function UserButton() {
  return (
    <ToggleLayer
    renderLayer={({ isOpen, layerProps, arrowStyle, layerSide }) => (
      <Transition isOpen={isOpen}>
        {(isOpen, onTransitionEnd) => (
          <div
            ref={layerProps.ref}
            onTransitionEnd={onTransitionEnd}
            className="layer"
            style={{
              ...layerProps.style,
              width: 300,
              backgroundColor: "#fafafa",
              paddingTop: 15,
              paddingBottom: 15,
              borderRadius: 5,
              transition: "opacity 300ms, transform 300ms",
              opacity: isOpen ? 1 : 0,
              transform: "scale(" + isOpen ? 1 : 0.5 + ")"
            }}
          >
            <div className="item-menu">
              <Link to="">
                <BsGearFill size={23} /> 
                <p>Configurações</p>
              </Link> 
            </div>
            <div className="item-menu">
              <Link to=""> 
                <MdContacts size={23} /> 
                <p>Contato</p> 
              </Link> 
            </div>
            <div className="item-menu">
              <Link to=""> 
                <MdPowerSettingsNew size={23} /> 
                <p>Sair</p> 
              </Link> 
            </div>
            
            <Arrow
              style={arrowStyle}
              layerSide={layerSide}
              backgroundColor="#fafafa"
              angle={32}
              size={10}
            />
          </div>
        )}
      </Transition>
    )}
    placement={{
      anchor: "BOTTOM_RIGHT",
      possibleAnchors: ["BOTTOM_RIGHT", "BOTTOM_CENTER"],
      autoAdjust: true,
  
      triggerOffset: 12
    }}
    closeOnOutsideClick
  >
    {({ triggerRef, toggle }) => (
      <button ref={triggerRef} onClick={toggle}>
        <BsPeopleCircle 
          size={28} 
          color="#fff" 
        />
      </button>
    )}
  </ToggleLayer>
  );
}

export default UserButton;