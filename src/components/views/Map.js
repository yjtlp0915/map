import React, {
  Component
} from 'react';

import '../../assets/css/index.css';

class Map extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    const BMap = window.BMap;
    const BMAP_NORMAL_MAP = window.BMAP_NORMAL_MAP;
    const BMAP_HYBRID_MAP = window.BMAP_HYBRID_MAP;
    const BMAP_ANCHOR_TOP_LEFT = window.BMAP_ANCHOR_TOP_LEFT;
    const BMAP_ANCHOR_BOTTOM_RIGHT = window.BMAP_ANCHOR_BOTTOM_RIGHT;
    const BMAP_NAVIGATION_CONTROL_LARGE = window.BMAP_NAVIGATION_CONTROL_LARGE;



    var map = new BMap.Map("container"); // 创建地图实例
    var point = new BMap.Point(114.316, 30.581); // 创建点坐标
    map.centerAndZoom(point, 11); // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.addControl(new BMap.MapTypeControl({
      mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP,
      ],
    }));
    map.setCurrentCity("武汉");

    //配置搜索,每页显示8个结果
    var local = new BMap.LocalSearch("武汉市", {
      renderOptions: {
        map: map,
        autoViewport: true,
        panel: "results"
      },
      pageCapacity: 8
    });
    local.search("金融港厕所");

    var mapType1 = new BMap.MapTypeControl({
      mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP],
      anchor: BMAP_ANCHOR_TOP_LEFT
    });

    var overView = new BMap.OverviewMapControl();
    var overViewOpen = new BMap.OverviewMapControl({
      isOpen: true,
      anchor: BMAP_ANCHOR_BOTTOM_RIGHT
    });


    // 加减号放大缩小以及定位按钮
    var navigationControl = new BMap.NavigationControl({
      // 靠左上角位置
      anchor: BMAP_ANCHOR_TOP_LEFT,
      // LARGE类型
      type: BMAP_NAVIGATION_CONTROL_LARGE,
      // 启用显示定位
      enableGeolocation: true
    });
    map.addControl(navigationControl);
    // 添加定位控件
    var geolocationControl = new BMap.GeolocationControl();
    geolocationControl.addEventListener("locationSuccess", function(e) {
      // 定位成功事件
      var address = '';
      address += e.addressComponent.province;
      address += e.addressComponent.city;
      address += e.addressComponent.district;
      address += e.addressComponent.street;
      address += e.addressComponent.streetNumber;
      alert("当前定位地址为：" + address);
    });
    geolocationControl.addEventListener("locationError", function(e) {
      // 定位失败事件
      alert(e.message);
    });
    map.addControl(geolocationControl);

    var walking = new BMap.WalkingRoute(map, {
      renderOptions: {
        map: map,
        panel: "r-result",
        autoViewport: true
      }
    });
    walking.search("金融港", "当代国际花园");

  }

  render() {
    return (
      <div id='container'>

      </div>
    );
  }
}

export default Map;