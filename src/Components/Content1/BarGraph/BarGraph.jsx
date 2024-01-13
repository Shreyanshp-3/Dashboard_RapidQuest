import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box } from '@chakra-ui/react';

const VerticalStackedBarChart = () => {
    const data = [
        { name: '20', dataset1: 5, dataset2: 5, dataset3: 10 },
        { name: '', dataset1: 5, dataset2: 7, dataset3: 10 },
        { name: '25', dataset1: 7.5, dataset2: 7, dataset3: 11 },
        { name: '', dataset1: 8.5, dataset2: 8, dataset3: 13 },
        { name: '30', dataset1: 10, dataset2: 10, dataset3: 16 },
        { name: '', dataset1: 11, dataset2: 11, dataset3: 18 },
        { name: '35', dataset1: 12, dataset2: 12, dataset3: 20 },
        { name: '', dataset1: 14, dataset2: 14, dataset3: 22 },
        { name: '40', dataset1: 16, dataset2: 16, dataset3: 24 },
        { name: '', dataset1: 18, dataset2: 18, dataset3: 26 },
        { name: '60', dataset1: 20, dataset2: 20, dataset3: 28 },
        { name: '', dataset1: 22, dataset2: 22, dataset3: 30 },
        { name: '65', dataset1: 24, dataset2: 24, dataset3: 33 },
    ];

    const formatCurrency = (value) => `$${value}`;

    return (
        <Box className='graph' ml={{ base: "-8", lg: "5" }} p={4}>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barGap={8} barCategoryGap="24%">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={formatCurrency} />
                    <Tooltip />
                    <Bar dataKey="dataset1" stackId="a" fill="#0800a3" name="Employer" />
                    <Bar dataKey="dataset2" stackId="a" fill="#4935ff" name="Employee" />
                    <Bar dataKey="dataset3" stackId="a" fill="#85afff" name="Total Interest" />
                </BarChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default VerticalStackedBarChart;
