import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Janvier", Total: 1200 },
  { name: "Février", Total: 2100 },
  { name: "Mars", Total: 800 },
  { name: "Avril", Total: 1600 },
  { name: "Mai", Total: 900 },
  { name: "Juin", Total: 1700 },
];

const Chart = ({ aspect, title }) => {
  return (
    <div className="flex-5 shadow-chart">
      <div className="text-gray-400 mb-6 ">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect} title={title}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />

          <CartesianGrid strokeDasharray="3 3" className="" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;