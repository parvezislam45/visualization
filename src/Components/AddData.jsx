
import { useForm } from "react-hook-form";


const AddData = () => {
    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmit = async (data) => {
        try {
          const response = await fetch('https://visualization-zla1.onrender.com/add_data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const responseData = await response.json();
          console.log('Data inserted:', responseData);

          window.location.reload();
        } catch (error) {
          console.error('Error:', error);
          // Handle errors or display error messages
        }
      };
    return (
        <div>
         <div className="text-center">
         <button className="btn btn-outline btn-secondary" onClick={()=>document.getElementById('my_modal_3').showModal()}>Click to Add Data</button>
         </div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box mx-auto">
  <form method="dialog">
      <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</button>

    </form>
    <form className="mx-auto"onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">End Year</label>
        <input {...register("end_year", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="number"  placeholder="Enter Year"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">Topics</label>
        <input {...register("topic", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Type Your Topics"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">Sector</label>
        <input {...register("sector", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Enter Sector Name"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">Region</label>
        <input {...register("region", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Enter Region Name"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">Pest</label>
        <input {...register("pest", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Type Pest"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">Source</label>
        <input {...register("source", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Type Source"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">SWOT</label>
        <input {...register("swot", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Type SWOT"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">City</label>
        <input {...register("city", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Type City"/>
      </div>
      <div className="mb-4">
        <label className="block text-white text-lg font-bold mb-2">Country</label>
        <input {...register("country", { required: true })} className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text"  placeholder="Type Country"/>
      </div>
     <input  className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300" type="submit" value="Add Now" />
    </form>

  </div>
</dialog> 
        </div>
    );
};

export default AddData;