import { Avatar, Badge, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import { orange } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";


export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#d15a22] lg:px-20 flex justify-between'>

        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold text-gray-300 text-2xl'>
                Anand Food App
            </li>

        </div>

        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div>
                <IconButton>
                    <SearchIcon sx={{fontSize :"1.5rem"}}>

                    </SearchIcon>
                </IconButton>
            </div>
            <div className=''>
                <Avatar sx={{bgcolor:"white" , color:orange.A400}}> A</Avatar>
            </div>
            <div>
                <IconButton>
                    <Badge color='secondary' badgeContent={3}>

                    <ShoppingCartIcon sx={{fontSize :"1.5rem"}} />

                    </Badge>
                    

                    
                </IconButton>
            </div>
            
        </div>


    </div>
  )
}
