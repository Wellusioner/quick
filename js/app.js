const header = document.querySelector('header');
const profileArrow = document.querySelector('.user-arrow');
const userProfile = document.querySelector('.user-profile');

profileArrow.addEventListener('click', function(){
  userProfile.classList.toggle('active');
});
userProfile.addEventListener('mouseleave', function(){
  userProfile.classList.remove('active');
});

window.addEventListener('scroll', function(){
  if(window.scrollY > 50){
    header.classList.add('active');
  }else{
    header.classList.remove('active');
  }
});


new MiniBar('.table-wrapper', {
  hideBars: false,
  alwaysShowBars: true,
});



//Setting default values to CHART
window.Apex = {
  chart: {
    fontFamily: 'Helvetica,sans-serif',
    foreColor: '#BDC1C4',
    toolbar: {
      tools: {
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false,
        download: false
      }
    },
    animations: {
      enabled: true
    },
  },
  grid: {
    show: false,
  },
  title: {
    text: undefined,
  },
  xaxis: {
    crosshairs: {
      show: false,
    },
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category"
  },
}

//Chart1

var options1 = {
  chart: {
    type: "area",
  },
  colors: ["#1C77D6"],
  stroke: {
    enabled: true,
    width: 1
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.8,
      opacityTo: 1,
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeWidth: 1,
    strokeColors: '#1C77D6',
    fillOpacity: 0,
    hover: {
      size: 4,
    }
  },
  series: [
    {
      data: [123,456,953,455,644,788,789]
    }
  ],
  
  tooltip: {
    custom: function({ series, dataPointIndex}) {
      return (
        '<div class="line-tooltip tooltip_box py-2 px-3">' +
        "<span class='weight-700 text-blue'>" +
          series[0][dataPointIndex] +
        "</span> Продаж"+
        "</div>"
      );
    },
  },
  labels: [
    "ПН",
    "ВТ",
    "СР",
    "ЧТ",
    "ПТ",
    "СБ",
    "ВС"
  ],
  xaxis: {
    crosshairs: {
      show: false,
//      width: 0,
//      position: "front",
//      opacity: 1,
//      stroke: {
//        color: "#bfc5cc",
//        width: 1,
//        dashArray: 2
//      },
//      dropShadow: {
//        enabled: false,
//        top: 0,
//        left: 0,
//        blur: 1,
//        opacity: 0.4
//      }
    },
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category"
  },
  yaxis: {
    labels: {
      formatter: function (val, index) {
        return val.toFixed(0);
      }
    }
  }
};

if(document.querySelector("#chart1")){
  var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
  chart1.render();
}


//Chart2
var options2 = {
  chart: {
    type: "bar",
    height: 195,
  },
  colors: ['#6CB276', '#66C6F8', '#FE6158'],
  stroke: {
    enabled: false
  },
  grid: {
    show: true,
    borderColor: '#F5F5F5',
    strokeDashArray: 0,
  },
  fill: {
    type: "gradient",
    gradient: {
      type: 'vertical',
      shadeIntensity: 0,
      opacityFrom: 0.85,
      opacityTo: 1,
      colorsStops: [0,50,100]
    }
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      data: [200, 500, 700]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },
  labels: [
    "Aldox",
    "Thermo 65",
    "Aldox 2"
  ],
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
  },
  yaxis: {
    labels: {
      format: '',
    },
    tooltip: {
      enabled: false
    },
  },
  plotOptions: {
      bar: {
        startingShape: "rounded",
        endingShape: "rounded",
          borderRadius: 10,
          columnWidth: '30%',
          distributed: true,
      }
  },
  legend: {
      fontFamily: 'Helvetica, sans-serif',
      fontSize: '11px',
      markers: {
          radius: 12,
      }
  }
};
if(document.querySelector("#chart2")){
  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
  chart2.render();
}

//Chart3
var options3 = {
  chart: {
    type: "area",
    height: 205,
  },
  colors: ["#3E85AE"],
  stroke: {
    show: false
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0.1,
      opacityFrom: 0.8,
      opacityTo: 1,
      type: 'horizontal'
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
        return val + 'млн'
    },
    textAnchor: 'middle',
    offsetX: -5,
    offsetY: -15,
    style: {
        fontSize: '16px',
        fontFamily: 'Helvetica,sans-serif',
        fontWeight: 'bold'
    },
    background: {
      enabled: false,
    },
    dropShadow: {
        enabled: false,
    }
  },
  markers: {
    size: 8,
    colors: ['#3E9BCD'],
    strokeWidth: 4,
    strokeColors: '#fff',
    fillOpacity: 1,
    hover: {
      size: 8,
    }
  },
  grid: {
    show: false,
  },
  series: [
    {
      data: [200, 210, 250, 280,300]
    }
  ],
  title: {
    text: '221млн сум',
    align: 'left',
    margin: 10,
    floating: true,
    style: {
      fontSize:  '18px',
      fontWeight:  '900',
      fontFamily:  'Arial, sans-serif',
      color:  '#001636'
    },
  },
  tooltip: {
    enabled: false,
  },
  labels: [
    "Jun",
    "Feb",
    "Mar",
    "Apr",
    "May",
  ],
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: false,
      position: 'back',
      stroke: {
        color: '#fff',
        width: 5,
        dashArray: 10,
      },
    },
  },
  yaxis: {
    show: false,
  }
};
if(document.querySelector("#chart3")){
  var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);
  chart3.render();
}

//Chart4
var options4 = {
  chart: {
    type: "area",
  },
  colors: ["#F55945"],
  stroke: {
    enabled: true,
    width: 2
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
  dataLabels: {
    enabled: false
  },
  markers: {
    size: 0,
  },
  grid: {
    show: true,
    strokeDashArray: 5,
    borderColor: '#C1BED9',
  },
  series: [
    {
      data: [25,30,28,40,42,35,23,33]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    custom: function({ series, dataPointIndex}) {
      return (
        '<div class="line-tooltip tooltip_box py-2 px-3 text-red weight-700">' +
          series[0][dataPointIndex] + "% возвратов"+
        "</div>"
      );
    },
  },
  labels: [
    "Яни",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
  ],
  xaxis: {
    labels: {
      format: "",
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
    crosshairs: {
      show: true,
      position: 'back',
      stroke: {
        color: '#B2433A',
        width: 1,
        dashArray: 5,
      },
    },
  },
  yaxis: {
    min: 0,
    forceNiceScale: true,
    labels: {
      formatter: function (val, index) {
        if(val === 0){
          return 0
        }
        return val.toPrecision(2) + '%';
      }
    },
  }
};
if(document.querySelector("#chart4")){
  var chart4 = new ApexCharts(document.querySelector("#chart4"), options4);
  chart4.render();
}

//Chart5
var options5 = {
  chart: {
    type: "pie",
    foreColor: '#414141',
    height: 200,
  },
  colors: ['#65AFD6', '#3E9167'],
  stroke: {
    width: 0
  },
  fill: {
    type: "gradient",
    gradient: {
      type: 'vertical',
      shadeIntensity: 0,
      opacityFrom: 0.8,
      opacityTo: 1,
      colorsStops: [0,50,100]
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
        return val + '%'
    },
    distributed: true,
    style: {
        fontSize: '15px',
        fontFamily: 'Helvetica, sans-serif',
        fontWeight: '400',
        colors: ['#fff']
    },
    background: {
      enabled: false,
    },
    dropShadow: {
        enabled: false,
    }
  },
  series: [55, 45],
  labels: ['Навои', 'Ташкент'],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },  
  plotOptions: {
    pie: {
      expandOnClick: false,
      offsetX: 0,
      offsetY: 10,
      customScale: 1,
      dataLabels: {
          offset: -18,
      }, 
      donut: {
        size: '100%',
        background: 'transparent',
        labels: {
          show: false,
        }
      },      
    }
  },
  legend: {
      fontFamily: 'Helvetica, sans-serif',
      position: 'bottom',
      horizontalAlign: 'center', 
      inverseOrder: true,
      offsetY: -3,
      onItemClick: {
        toggleDataSeries: false
      },
      onItemHover: {
          highlightDataSeries: false
      },
  }
};
if(document.querySelector("#chart5")){
  var chart5 = new ApexCharts(document.querySelector("#chart5"), options5);
  chart5.render();
}

//Chart6
var options6 = {
  chart: {
    type: "area",
    height: 205,
  },
  colors: ["#3E85AE"],
  stroke: {
    show: true,
    curve: 'smooth',
    lineCap: 'round',
    colors: ['#999'],
    width: 1,
    dashArray: 0,      
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 0,
      opacityFrom: 0,
      opacityTo: 0,
      type: 'horizontal'
    }
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 6,
    colors: ['#fff'],
    strokeWidth: 5,
    strokeColors: '#0091FF',
    fillOpacity: 1,
    hover: {
      size: 6,
    }
  },
  grid: {
    show: false,
  },
  series: [
    {
      data: [200, 210, 250, 280,]
    }
  ],
  title: {
    text: undefined,
  },
  tooltip: {
    enabled: false,
  },
  labels: [
    "ИЮНЬ",
    "ИЮЛЬ",
    "АВГУСТ",
    "СЕНТЯБРЬ",
  ],
  xaxis: {
    labels: {
      style: {
        fontSize: '9px',
        fontFamily: 'Helvetica, sans-serif',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false
    },
    type: "category",
  },
  yaxis: {
    show: false,
  }
};
if(document.querySelector("#chart6")){
  var chart6 = new ApexCharts(document.querySelector("#chart6"), options6);
  chart6.render();
}
