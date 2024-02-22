import React, { FC } from 'react';
import styles from './GraphicsGrid.module.css';
import { Card, CardHeader, CardBody, Heading, CardFooter, Text, SimpleGrid, Button, } from '@chakra-ui/react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, Legend } from 'recharts';
import {data} from './graphics.data'

interface GraphicsGridProps {}

const GraphicsGrid: FC<GraphicsGridProps> = () => (
  <div className={styles.GraphicsGrid} data-testid="GraphicsGrid">
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(600px, 1fr))'>
      <Card variant='elevated'>
              <CardHeader>
                <Heading size='md'> Sales Per Month 2023</Heading>
              </CardHeader>
              <CardBody>
              <LineChart width={600} height={300} data={data.monthlySales} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>                
                <Line type="monotone" dataKey="gross" stroke="#211C6A" />
                <Line type="monotone" dataKey="total" stroke="#59B4C3" />
                <CartesianGrid stroke="#A9A9A9" strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis textDecoration='xx' />
                <Tooltip />
              </LineChart>
              </CardBody>
      </Card>
      <Card variant='elevated'>
              <CardHeader>
                <Heading size='md'> Looses Per Quarter 2022 vs 2023</Heading>
              </CardHeader>
              <CardBody>
                <BarChart width={730} height={250} data={data.previousYearLosses}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="y2022" fill="#211C6A" />
                  <Bar dataKey="y2023" fill="#74E291" />
                </BarChart>
              </CardBody>
      </Card>        
    </SimpleGrid>
  </div>
);

export default GraphicsGrid;
