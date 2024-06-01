import React from 'react'

const Item = () => {
  return (
    <div className="contener">
    <main className="ItemCon">
        <div className="content">
            <h1>NIKE AIR MAX 720</h1>
            <p>One year after the Air Max 270, Nike debuted their second Air unit to be designed for lifestyle purposes with the Air Max 720.</p>
            <div className="h-buttun">
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>
            <div className="shoping">
                <p>Also Available On</p>
                <div className="brandicon">
                    <img className='logo-img' src="/amazon-logo-s3f.png" alt="" />
                    <img className='logo-img' src="flipkart-logo-transparent-png-download-0.png" alt="" />
                </div>
            </div>
        </div>
        <div >
        <img className="image"src="sp19-airmax-720-reveal-1x1-1537914465.jpg" alt="" />
        </div>
    </main>
    </div>
  )
}

export default Item;
