import React from 'react'

function Header() {
  return (
    <>
      <main>
        <div className='main_header'>
            <div className='inner_header flex justify-between container mx-auto py-5 items-center'>
                <div className='logo cursor-pointer'><img width={100} height={100} src='https://t4.ftcdn.net/jpg/04/97/97/63/360_F_497976305_yBgTBJF3H551tCJkRpbidISzDCR6KURD.jpg'/></div>
                <div className='menus'>
                    <ul className='flex space-x-9'>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Service</a></li>
                        <li><a href='#'>Blogs</a></li>
                        <li><a href='#'>Contect Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default Header
