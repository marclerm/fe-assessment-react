
// Representation of Operating Cash Flow (OCF), Earnings per Share  and inventory and SKU reduction contributed to the outcome. 

export const results = [
    {
        name: 'ocf',
        title: 'Total Company Adj OCF',
        details: 'Operating Cash Flow (OCF)',
        data: [
            {name: 'Performance', uv: 98},
            {name: 'Weighting', uv: 35},
            {name: 'Payout', uv: 55},        
        ]
    },
    {
        name: 'eps',
        title: 'Total Company Adj EPS',
        details: 'Earnings Per Share (EPS)',
        data: [
          {name: 'Performance', uv: 13},
          {name: 'Weighting', uv: 25},
          {name: 'Payout', uv: 5},        
        ]
    },
    {
        name: 'sku',
        title: 'Segment SKU Reduction',
        details: 'More than 150 SKUS reduced',
        data: [
          {name: 'Performance', uv: 72},
          {name: 'Weighting', uv: 27},
          {name: 'Payout', uv: 19},        
        ]
    },
  ];