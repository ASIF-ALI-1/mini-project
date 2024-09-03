import React from 'react'
import "./page.css"

function Pages() {
    let products = [
        {
          id: 1,
          title: "AR-15",
          detail: "Rifles-Gun-Weapon",
          price: "13000 Rs",
          img: "./images/ar.jpg",
        },
        {
          id: 2,
          title: "Automatic-Weapons",
          detail: "Military-Assault Rifles",
          price: "15000 Rs",
          img: "./images/automatic.jpg",
        },
        {
          id: 3,
          title: "Aircraft-Military",
          detail: "Guns-Military",
          price: "206000 Rs",
          img: "./images/guns-military-weapons-g36c-1024x768-aircraft-military-hd-art-wallpaper-preview.jpg"
        },
        {
          id: 4,
          title: "Sniper-Gun-Rifles",
          detail: "Gun-sniper-rifles-remington",
          price: "125000 Rs",
          img: "./images/gun-sniper-rifles-remington-700-vtr-weapon-wallpaper-preview.jpg"
        },
        {
          id: 5,
          title: "Sniper-Rifles ",
          detail: " vtr-weapon remington",
          price: "10500 Rs",
          img: "./images/gun-sniper-rifles-remington-700-vtr-weapon-wallpaper-preview.jpg"
        },
        {
          id: 6,
          title: "mech-military",
          detail: "guns-rifles-sniper",
          price: "200000 Rs",
          img: "./images/mech-military-weapons-guns-rifles-sniper-widescreen-resolutions-black-rifle-with-scope-wallpaper-preview.jpg",
        },
        {
          id: 7,
          title: "AK-47",
          detail: "Special Weapon ",
          price: "10000 Rs",
          img: "./images/weapons-ak47.jpg",
        },
        {
          id: 8,
          title: "Pistol",
          detail: "Beretta-Mech-weapons",
          price: "30000 Rs",
          img: "./images/beretta-mech-weapons-guns-pistol-desktop-backgrounds-wallpaper-preview.jpg"
        },
        {
            id: 9,
            title: "Pistol",
            detail: "Pistol-Mech",
          price: "54000 Rs",
          img: "./images/photo.jpeg",
        },
        {
            id: 10,
            title: "Pistol",
            detail: "Beretta weapons Guns",
          price: "15000 Rs",
          img: "./images/photo-1713643560619-88ad24f18cb4.jpeg",
        },
        {
            id: 11,
            title: "Sniper-Rifle",
            detail: "Weapons Optics Sniper",
          price: "500 Rs",
          img: "/./images/weapons-optics-sniper-rifle-fry-wallpaper-preview.jpg",
        },
      ]
  return (
    <>
    <div className='container mt-5 m-6 '>
      <div className='card-group'>
     
        <div className="row row-cols-1 row-cols-xl-4  row-cols-md-3  row-cols-sm-2 row-cols-xs-2 g-4">
   {  
      products.map(product =>(
        <div className="col" key={product.id}>
            <div className="card h-100 text-center" >
              <img src={product.img} className="card-img-top img-fluid" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title mt-5">{product.title}</h5>
                <p><small> {product.detail} </small></p>
                <p className="card-text"> <small className="text-body-secondary">{product.price}</small></p>
              </div>
                <div class="card-footer">
                <a href="#" className="btn btn-danger">
                Add to cart</a>
                </div>
            </div>
          </div>
          
         
      ))
    }
        </div>
          </div>

        </div>
    

    </>
  )
}

export default Pages