import React from 'react'
import Navebar from '../../components/Navbar/Navbar'
import CustomTable from '../../components/CustomTable/CustomTable'
const Warehouse = () => {

  const data = [
    {
      id : '1',
      warehouse : 'Riyadh Projects Materials Store',
      Locationstock : '	RIPMS/Riyadh Projects Materials Store',
      address : '	شركة الإنجاز للمقاولات والتجارة',
    },
    {
      id : '2',
      warehouse : 'Jeddah Project Materials Store',
      Locationstock : 'JEPMS/Jeddah Project Materials Store',
      address : '	شركة الإنجاز للمقاولات والتجارة',
    },
    {
      id : '3',
      warehouse : '	Bisha Project Materials Store',
      Locationstock : '	BIPMS/Bisha Project Materials Store	',
      address: 'شركة الإنجاز للمقاولات والتجارة',
    },
    {
      id : '4',
      warehouse : 'ALBAHA Project Materials Store',
      Locationstock : '	BAPMS/Al Baha Store for Projects Materials		',
      address:'	شركة الإنجاز للمقاولات والتجارة',
    },
    {
      id : '5',
      warehouse : 'Yanbu Project Materials Store',
      Locationstock : '	YAPMS/Yanbu Project Materials Store	',
      address: '	شركة الإنجاز للمقاولات والتجارة',
    },
    {
      id : '6',
      warehouse : 'AlJouf Projects Materials Store',
      Locationstock : '		YAPMS/Yanbu Project Materials Store	',
      address: ' شركة الإنجاز للمقاولات والتجارة',
    },
    {
      id : '7',
      warehouse : '	Al-Bahah Warehouse',
      Locationstock : 'BAWH/Stock',
      address:'	Al-Bahah Warehouse',
    },
    {
      id : '8',
      warehouse : 'Makkah Warehouse',
      Locationstock : '	MAKWH/Stock	',
      address:'	Makkah Warehouse',
    },
    {
      id : '9',
      warehouse : '	Bisha Warehouse',
      Locationstock : '	BIWH/Stock	',
      address:'	Bisha Warehouse',
    },
    {
      id : '10',
      warehouse : 'Yanbu Warehouse',
      Locationstock : '	YWH/Stock		',
      address:'	Yanbu Warehouse',
    },
  ];

  const column  = [
    {label : 'Warehouse' , name :'warehouse' },
    {label : 'Location stock' , name :'Locationstock' },
    {label : 'Address' , name : 'address' },
  ]
  return (
    <div style={{width:'100vw',height:'100vh',overflow:'hidden'}}>
        <Navebar showBelowMenu={true}/>
        <CustomTable  data = {data} column = {column}/>
    </div>
  )
}

export default Warehouse