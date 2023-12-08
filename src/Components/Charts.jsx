import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


const Charts = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
      ];
      const composit = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
        },
      ];
    return (
        <div>
             <div className="">
    <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1" >
                <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={composit}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div> 
                </div>
            </div>
            <div>
                <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={composit}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>  
                </div>
            </div>
            <div>
                <div className="lg:h-full py-8 px-6 text-gray-600 rounded-xl border border-gray-200 bg-white">
                <div  style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="value" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>    
                </div>
            </div>
        </div>
    </div>
</div> 
        </div>
    );
};

export default Charts;