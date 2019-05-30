import { __DEV__ } from '../../config';
export default function (ecModel) {
  ecModel.eachSeriesByType('lines', function (seriesModel) {
    var coordSys = seriesModel.coordinateSystem;
    var lineData = seriesModel.getData(); // FIXME Use data dimensions ?

    lineData.each(function (idx) {
      var itemModel = lineData.getItemModel(idx);
      var coords = itemModel.option instanceof Array ? itemModel.option : itemModel.get('coords');
      var pts = [];

      if (seriesModel.get('polyline')) {
        for (var i = 0; i < coords.length; i++) {
          pts.push(coordSys.dataToPoint(coords[i]));
        }
      } else {
        pts[0] = coordSys.dataToPoint(coords[0]);
        pts[1] = coordSys.dataToPoint(coords[1]);
        var curveness = itemModel.get('lineStyle.normal.curveness');

        if (+curveness) {
          pts[2] = [(pts[0][0] + pts[1][0]) / 2 - (pts[0][1] - pts[1][1]) * curveness, (pts[0][1] + pts[1][1]) / 2 - (pts[1][0] - pts[0][0]) * curveness];
        }
      }

      lineData.setItemLayout(idx, pts);
    });
  });
}