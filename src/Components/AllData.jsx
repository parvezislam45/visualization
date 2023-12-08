import axios from "axios";
import { useEffect, useState } from "react";


const AllData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://visualization-zla1.onrender.com/data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);
    return (
        <div>
            <h1 className="text-2xl font-bold text-center text-black mt-10">All Data</h1>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-white dark:text-white">
        <thead className="text-xs text-black uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Country
                </th>
                <th scope="col" className="px-6 py-3">
                    Year
                </th>
                <th scope="col" className="px-6 py-3">
                Likelihood

                </th>
                <th scope="col" className="px-6 py-3">
                Intensity
                </th>
                <th scope="col" className="px-6 py-3">
                Relevance
                </th>
                <th scope="col" className="px-6 py-3">
                Topics
                </th>
                <th scope="col" className="px-6 py-3">
                Region
                </th>
                <th scope="col" className="px-6 py-3">
                City 
                </th>
               
            </tr>
        </thead>
        <tbody>
            {
                data.map((item,index)=>(
                    <tr key={index}className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{item.country}</td>
                    <td className="px-6 py-4">{item.end_year}</td>
                    <td className="px-6 py-4">{item.likelihood}</td>
                    <td className="px-6 py-4">{item.intensity}</td>
                    <td className="px-6 py-4">{item.relevance}</td>
                    <td className="px-6 py-4">{item.topic}</td>
                    <td className="px-6 py-4">{item.region}</td>
                    <td className="px-6 py-4">{item.city}</td>
                    
                    </tr>
                ))
            }
           
           
        </tbody>
    </table>
</div>

        </div>
    );
};

export default AllData;