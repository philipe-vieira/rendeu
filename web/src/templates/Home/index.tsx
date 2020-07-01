import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPeopleCircle, BsChevronLeft, BsList } from 'react-icons/bs';

import './styles.css';
import logomarca from '../../assets/logomarca-360x720.png'
import sideNavItems from './sideNavItems'


const LayoutTest: React.FC = (props) => {
  const path = window.location.pathname

  const [ sideNavExpansion, setSideNavExpansion ] = useState<boolean>(false)
  const [ navItemActive, setNavItemActive ] = useState<number>()

  function handleSideNavExpansion () {
    console.log(sideNavExpansion)
    if (sideNavExpansion === true) {
      setSideNavExpansion(false)
      return
    }
    setSideNavExpansion(true)
  }

  function handleClickNavItem ( key: number ){
    if ( key === navItemActive ) {
      setNavItemActive(undefined)
      return
    }
    setNavItemActive(key)
  }

  return ( 
    <div className="container-page">
      <header>
        <div className="menu-button" onClick={ () => handleSideNavExpansion() }>
          <BsList size={30} color="#fff"/>
        </div>

        <div className="logo">
          <Link to="/home">
            <img src={logomarca} alt="Rendeu" />
          </Link>
        </div>

        <div className="items">
          <h2>Items</h2>
          <BsPeopleCircle 
            size={28} 
            color="#fff" 
            onClick={() => { alert('Clicou') }} 
          />
        </div>
      </header>
      <div className="body">
        <div className={ sideNavExpansion ? "side-nav expanded" : "side-nav"}>

          { sideNavItems.map((item, key) => (
            <div className={ item.path === path || (item.path + '/') === path ? 'side-item active' : 'side-item'} key={key} >
              <div className="page" onClick={ () => handleClickNavItem(key)} >
                <div>
                  <item.icon size={20} />
                  <p><Link to={item.path}>{item.page}</Link></p>
                </div>
                { item.subpages[0] && <BsChevronLeft size={16}  className={navItemActive === key ? 'rotate' : ''} /> }
              </div>
              <ul className={ navItemActive === key ? "subpage active" : "subpage"}>
                { item.subpages.map((subpage, key) => (
                  <li key={ key }><Link to={subpage.path}>{subpage.page}</Link></li>
                ) )}
              </ul>
            </div>
          ))}

        </div>

        <div className="content">
          { props.children }

          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2><h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2><h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2><h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2><h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2><h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          <h2>Template Testt</h2>
          

          <footer>
            <p>Powered by <a href="http://github.com/philipe-vieira/" target="_blank" rel="noopener noreferrer">Philipe Vieira</a></p>
          </footer>
        </div>

      </div>
    </div>
  );
}

export default LayoutTest;