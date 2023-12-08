import Slider from "react-slick";
import { Data } from "../Data";


const Static = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
      <div>
      <Slider {...settings}>
      {Data.map((item,index) =>(
        <img className="h-60 w-full" key={index} src={item.img} alt="" />
        ))}
        
        </Slider>
         
        </div>
        <div className="flex justify-between">
<div className="bg-white shadow-xl rounded-lg overflow-hidden">
                   
                    <div className="p-4 text-gray-700 flex justify-between">
						<div>
            <p className="text-sm w-56">Sales Overview</p>
							<p className="text-2xl text-gray-900"><i className="wi wi-cloudy text-gray-600"></i>$ 48.26K</p>
						</div>
						<div className="leading-loose text-sm">
							<div className="flex items-center">
								<i className=" wi wi-horizon-alt text-yellow-500"></i>
								<p><span className="font-bold -mx-10">+18.2%</span></p>
							</div>
							
						</div>
            
                    </div>
                    <div className="flex justify-between p-5 -mt-8">
                    <h1 className="font-bold text-md text-black">Order</h1>
                    <h1 className="font-bold text-md text-black">Visit</h1>
                    </div>
                    <div className="flex justify-between p-5 -mt-8">
                    <h1 className="font-bold text-xl text-black">62.2%</h1>
                    <h1 className="font-bold text-xl text-black">45.5%</h1>
                    </div>
                     <dl>
         
            <dd className="flex items-center mb-3">
                <div className="w-48 mx-5 bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div className="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style={{ width: '88%' }}></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8.8</span>
            </dd>
        </dl>
                </div>
               <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-bag-dash-fill w-8 h-8 rounded-full mx-5" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zM6 9.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                    <div className="p-4 text-gray-700 flex justify-between">
                   
						<div>
           
							<p className="text-2xl text-gray-900"><i className="wi wi-cloudy text-gray-600"></i>$ 97.05K</p>
						</div>
				
            
                    </div>
                   <p className="text-lg p-3 font-bold text-black">Ravenue Granted</p>
                     <dl>
         
            <dd className="flex items-center p-3">
                <div className="w-48 mx-auto bg-gray-200 rounded h-2.5 dark:bg-gray-700 me-2">
                    <div className="bg-yellow-600 h-2.5 rounded" style={{ width: '95%' }}></div>
                </div>
               
            </dd>
        </dl>
                </div>
       </div>
      </div>
    </div>
        </div>
    );
};

export default Static;