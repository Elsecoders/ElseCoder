import React, { useState } from 'react';
import './Technologies.css';
import MobileIcons from '../Technologies/MobileIcon/MobileIcon';
import FrontendIcons from '../Technologies/FrontendIocn/FrontendIcon';
import DatabaseIcon from './DatabaseIcon/DatabaseIcon';
import BackendIcon from './BackendIcon/BackendIcon';
import CMSIcon from './CMSIcon/CMSIcon';
import InfraAndDevopsicon from './InfraAndDevopsIcon/InfraAndDevopsicon';
const Technologies = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('mobile');

  const handleTechnologyClick = (technology) => {
    setSelectedTechnology(technology);
  };
  return (
<>
        <div className='Technologies mt-5'>
            <div className='Tech-Heading' style={{textAlign:"center", color:"black"}}>
                <h1 style={{fontWeight: "800"}}>Technologies we work with</h1>
            </div>
            <div className='Tech-Nav mt-5 mb-5' >
                <div className='Tech-name'>
                    <ul style={{listStyle:"none", padding:"0", display:"flex",flexWrap:"wrap", gap:"45px", justifyContent:"center", fontSize:"19px"}}>
                        <li onClick={() => handleTechnologyClick('mobile')}>Mobile</li>
                        <li onClick={() => handleTechnologyClick('frontend')}>Frontend</li>
                        <li onClick={() => handleTechnologyClick('database')}>Database</li>
                        <li onClick={() => handleTechnologyClick('backend')}>Backend</li>
                        <li onClick={() => handleTechnologyClick('cms')}>CMS</li>
                        <li onClick={() => handleTechnologyClick('infraanddevops')}>Infra and devops</li>
                    </ul>
                </div>
            </div>
            {selectedTechnology === 'mobile' && <MobileIcons />}
        {selectedTechnology === 'frontend' && <FrontendIcons />}
        {selectedTechnology === 'database' && <DatabaseIcon />}
        {selectedTechnology === 'backend' && <BackendIcon />}
        {selectedTechnology === 'cms' && <CMSIcon />}
        {selectedTechnology === 'infraanddevops' && <InfraAndDevopsicon />}
        </div>

</>
  );
}

export default Technologies;
