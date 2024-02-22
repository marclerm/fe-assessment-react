import React, { FC } from 'react';
import styles from './ProgressGrid.module.css';
import { Card, CardHeader, CardBody, Box, Heading, Text, Stack, SimpleGrid, StackDivider, 
  CircularProgress, CircularProgressLabel, CardFooter, Alert, AlertIcon } from '@chakra-ui/react'
import { results } from './progress.data';

interface ProgressGridProps {}

const ProgressGrid: FC<ProgressGridProps> = () => (
  <div className={styles.ProgressGrid} data-testid="ProgressGrid">
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
      {results.map((rep) => (
        <Card>
        <CardHeader>
          <Heading size='md'>{rep.title}</Heading>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            {rep.data.map((d) =>(
              <Box>
              <Heading size='xs' textTransform='uppercase'>
                {d.name}
              </Heading>
              <CircularProgress value={d.uv} color='blue.300' thickness='8px' size='60px'>
                <CircularProgressLabel>{d.uv}%</CircularProgressLabel>
              </CircularProgress>
            </Box>
            ))}            
          </Stack>
        </CardBody>
        <CardFooter>
          <Alert status='info'>
            <AlertIcon />
            <Text>{rep.details}</Text>
          </Alert>                    
        </CardFooter>
  </Card>
      
      ))}
    </SimpleGrid>
  </div>
);

export default ProgressGrid;
