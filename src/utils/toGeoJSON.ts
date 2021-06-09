import * as GeoJSON from 'geojson';

export function toGeoJSONFeatureCollection(data: unknown, geoField = 'geometry') {
  return GeoJSON.parse(data, {GeoJSON: geoField});
}

