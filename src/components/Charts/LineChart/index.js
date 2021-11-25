import React, { useEffect, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import { Button, ButtonGroup } from '@material-ui/core';
import moment from 'moment'
const generateOptions = (data) => {
    const categories = data.map((item) => moment(item.Date).format('DD/MM/YY'));
    console.log({categories});
    return {
        chart: {
          height: 500,
        },
        title: {
          text: 'Biểu Đồ Covid-19',
        },
        xAxis: {
          categories: categories,
          crosshair: true,
        },
        colors: ['#f5385a','#2dce99','#6456ff','#808080'],
        yAxis: {
          min: 0,
          title: {
            text: null,
          },
          labels: {
            align: 'right',
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0,
          },
        },
        series: [
          {
            name: 'Tổng Ca nhiễm',
            data: data.map((item) => item.Confirmed),
          },
          {
            colors: ['#9932a8'],
            name: 'Tổng Ca khỏi',
            data: data.map((item) => item.Recovered),
          },
          {
            colors: ['#9932a8'],
            name: 'Tổng Ca hồi phục tích cực',
            data: data.map((item) => item.Active),
          },
          {
            name: 'Tổng Ca tử vong',
            data: data.map((item) => item.Deaths),
          },
        ],
      };
    };
export default function LineChart({data}) {
  console.log("Linechart",{data});
    const [options, setOptions] = useState({})
    const [reportType,setReportType] = useState('all')

    useEffect(() => {
      //xu li thay doi reportType
      let customData = [];
      switch (reportType) {
        case 'all':
          customData = data;
          break;
        case '30':
          customData = data.slice(Math.max(data.length - 30, 1));
          break;
        case '7':
          customData = data.slice(Math.max(data.length - 7, 1));
          break;
  
        default:
          customData = data;
          break;
      }
        setOptions(generateOptions(customData))
    },[data,reportType]);
    return (
        <div>
      <ButtonGroup
        size='small'
        aria-label='small outlined button group'
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          color={reportType === 'all' ? 'secondary' : ''}
          onClick={() => setReportType('all')}
        >
          All
        </Button>
        <Button
          color={reportType === '30' ? 'secondary' : ''}
          onClick={() => setReportType('30')}
        >
          30 Days
        </Button>
        <Button
          color={reportType === '7' ? 'secondary' : ''}
          onClick={() => setReportType('7')}
        >
          7 Days
        </Button>
      </ButtonGroup>
      
            <HighchartsReact highcharts={Highcharts}
              options={options}
            />
        </div>
    )
}
