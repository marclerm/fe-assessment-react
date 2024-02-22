import React, { FC } from 'react';
import styles from './Dashboard.module.css';
import { Card, CardBody, CardFooter, Image, Stack, Text,  Box, Button} from '@chakra-ui/react'
import ProgressGrid from '../ProgressGrid/ProgressGrid';
import GraphicsGrid from '../GraphicsGrid/GraphicsGrid';

interface DashboardProps {}

type Temp = {
  grades: number,
  metric: string,
}
const Dashboard: FC<DashboardProps> = () => {
  // A state to demostrate the change of temperature
  const [temp, setTemp] = React.useState( { grades: 80, metric: 'F'} as Temp);

  return (
  <Box w='100%' h='100%' bgGradient='linear(gray.100 10%, blue.100 25%, gray.200 50%)'>
    <div className={styles.Dashboard} data-testid="Dashboard">
      <p className={styles.Header}>
        <Text bgGradient='linear(to-l, #211C6A, #59B4C3, #74E291)' bgClip='text' fontSize='4xl' fontWeight='extrabold'>
          Welcome to Financial Health Dashboard
        </Text>
        <div className={styles.TempWidget}>
          <Text>{temp.grades}°{temp.metric}</Text>
          <Button colorScheme='teal' size='xs'
           onClick={() => setTemp({grades: temp.metric === 'F'? Math.trunc(((temp.grades-32)*(5/9))) : Math.trunc(((temp.grades*(9/5))+32)), metric: temp.metric === 'F' ?'C' : 'F' })}>Switch</Button>
        </div>
      </p>
      <div className={styles.Content}>
        <div className={styles.HeaderCard}>
          <Card direction={{ base: 'column', sm: 'row' }} h='150px' overflow='hidden' variant='elevated'
          flex='1'
          bg='blue.50'
          shadow='none'>
              <Image objectFit='cover' maxW={{ base: '100%', sm: '150px' }} maxH={{base: '100%', sm: '150px'}} src='/assets/health-business.jpg' alt='Financial' />
              <Stack>
                <CardBody>
                  <Text py='2'>
                  Ensuring robust financial health is paramount for the prosperity and longevity of any business. 
                  This entails meticulous management of resources, prudent decision-making, and strategic planning to safeguard stability, foster growth, and achieve sustainable success in a competitive market landscape.
                  </Text>
                </CardBody>
                <CardFooter>      
                </CardFooter>
              </Stack>
          </Card>
        </div>
        <div className={styles.RowSeparator}>
          <Text bgGradient='linear(to-l, gray.800, gray.400)' bgClip='text' fontSize='4md' fontWeight='extrabold'>Operating Results of the 2023 Bonus Plan</Text>
          <ProgressGrid></ProgressGrid>
        </div>
        <div>
        <Text bgGradient='linear(to-l, gray.800, gray.400)' bgClip='text' fontSize='4md' fontWeight='extrabold'>Sales & Losses Compared to Previous Year</Text>
          <GraphicsGrid></GraphicsGrid>
        </div>
      </div>    
      
    </div>
  </Box>   
  ); 
};

export default Dashboard;
