import { useEffect, useRef, useCallback } from 'react';
import * as echarts from 'echarts';
import type { EChartsOption, ECharts } from 'echarts';

interface ChartData {
  data: any[];
  chartType: 'bar' | 'line' | 'pie' | 'radar' | 'scatter';
  chartTitle: string;
}

export const useChart = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<ECharts | null>(null);

  const renderChart = useCallback((chartData: ChartData) => {
    const { data, chartType, chartTitle } = chartData;

    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.dispose();
    }

    chartInstance.current = echarts.init(chartRef.current);

    let options = {} as EChartsOption;

    if (chartType === 'bar') {
      const xAxisData = data.map(item => {
        return item.platform || item.category || item.term || item.campaign || item.page || item.channel || Object.keys(item)[0];
      });

      const seriesData: any[] = [];
      const metrics: string[] = [];

      if (data.length > 0) {
        const firstItem = data[0];
        const excludeKeys = ['platform', 'category', 'term', 'campaign', 'page', 'channel', 'date', 'sentiment', 'factor', 'name'];

        Object.keys(firstItem).forEach(key => {
          if (!excludeKeys.includes(key)) {
            metrics.push(key);
            seriesData.push({
              name: key,
              type: 'bar',
              data: data.map(item => item[key])
            });
          }
        });
      }

      options = {
        title: {
          text: chartTitle,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: metrics,
          bottom: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            rotate: 45,
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: seriesData
      };
    } else if (chartType === 'line') {
      const xAxisData = data.map(item => item.date);
      const seriesData: any[] = [];
      const metrics: string[] = [];

      if (data.length > 0) {
        const firstItem = data[0];
        const excludeKeys = ['date'];

        Object.keys(firstItem).forEach(key => {
          if (!excludeKeys.includes(key)) {
            metrics.push(key);
            seriesData.push({
              name: key,
              type: 'line',
              data: data.map(item => item[key])
            });
          }
        });
      }

      options = {
        title: {
          text: chartTitle,
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: metrics,
          bottom: 0
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: xAxisData,
          axisLabel: {
            rotate: 45,
            interval: 0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: seriesData
      };
    } else if (chartType === 'pie') {
      const pieData = data.map(item => {
        const name = item.sentiment || item.channel || item.source || Object.keys(item)[0];
        const value = item.value || item.traffic || item.revenue || Object.values(item)[1];
        return { name, value };
      });

      options = {
        title: {
          text: chartTitle,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          right: 10,
          top: 'center',
          data: pieData.map(item => item.name)
        },
        series: [
          {
            name: 'Data',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: pieData
          }
        ]
      };
    } else if (chartType === 'scatter') {
      const seriesData = data.map(item => {
        return [item.followers, item.engagement, item.name, item.cost];
      });
      
      options = {
        title: {
          text: chartTitle,
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: function(params: any) {
            return `${params.data[2]}<br/>Followers: ${params.data[0]}<br/>Engagement: ${params.data[1]}%<br/>Cost: $${params.data[3]}`;
          }
        },
        xAxis: {
          type: 'value',
          name: 'Followers',
          axisLabel: {
            formatter: function(value: number) {
              return value >= 1000000 ? (value / 1000000).toFixed(1) + 'M' : (value / 1000).toFixed(0) + 'K';
            }
          }
        },
        yAxis: {
          type: 'value',
          name: 'Engagement Rate (%)'
        },
        series: [
          {
            type: 'scatter',
            symbolSize: function(data: any) {
              // Size based on cost
              return Math.sqrt(data[3]) / 10;
            },
            data: seriesData
          }
        ]
      };
    } else if (chartType === 'radar') {
      const indicators = data.map(item => {
        const name = item.factor || Object.keys(item)[0];
        return { name, max: 100 };
      });
      
      const seriesData = [
        {
          value: data.map(item => item.score || Object.values(item)[1]),
          name: 'Score'
        }
      ];
      
      options = {
        title: {
          text: chartTitle,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        radar: {
          indicator: indicators
        },
        series: [
          {
            type: 'radar',
            data: seriesData
          }
        ]
      };
    }

    chartInstance.current.setOption(options as any);

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener('resize', handleResize);

  }, []);

  useEffect(() => {
    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, []);

  return { chartRef, renderChart };
};
