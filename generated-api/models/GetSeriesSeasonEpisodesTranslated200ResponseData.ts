/* tslint:disable */
/* eslint-disable */
/**
 * TVDB API V4
 * Documentation of [TheTVDB](https://thetvdb.com/) API V4. All related information is linked from our [Github repo](https://github.com/thetvdb/v4-api). You might also want to use our [Postman collection] (https://www.getpostman.com/collections/7a9397ce69ff246f74d0) ## Authentication 1. Use the /login endpoint and provide your API key as \"apikey\". If you have a user-supported key, also provide your subscriber PIN as \"pin\". Otherwise completely remove \"pin\" from your call. 2. Executing this call will provide you with a bearer token, which is valid for 1 month. 3. Provide your bearer token for subsequent API calls by clicking Authorize below or including in the header of all direct API calls: `Authorization: Bearer [your-token]`  ## Notes 1. \"score\" is a field across almost all entities.  We generate scores for different types of entities in various ways, so no assumptions should be made about the meaning of this value.  It is simply used to hint at relative popularity for sorting purposes. 
 *
 * The version of the OpenAPI document: 4.7.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { SeriesBaseRecord } from './SeriesBaseRecord';
import {
    SeriesBaseRecordFromJSON,
    SeriesBaseRecordFromJSONTyped,
    SeriesBaseRecordToJSON,
    SeriesBaseRecordToJSONTyped,
} from './SeriesBaseRecord';

/**
 * 
 * @export
 * @interface GetSeriesSeasonEpisodesTranslated200ResponseData
 */
export interface GetSeriesSeasonEpisodesTranslated200ResponseData {
    /**
     * 
     * @type {SeriesBaseRecord}
     * @memberof GetSeriesSeasonEpisodesTranslated200ResponseData
     */
    series?: SeriesBaseRecord;
}

/**
 * Check if a given object implements the GetSeriesSeasonEpisodesTranslated200ResponseData interface.
 */
export function instanceOfGetSeriesSeasonEpisodesTranslated200ResponseData(value: object): value is GetSeriesSeasonEpisodesTranslated200ResponseData {
    return true;
}

export function GetSeriesSeasonEpisodesTranslated200ResponseDataFromJSON(json: any): GetSeriesSeasonEpisodesTranslated200ResponseData {
    return GetSeriesSeasonEpisodesTranslated200ResponseDataFromJSONTyped(json, false);
}

export function GetSeriesSeasonEpisodesTranslated200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSeriesSeasonEpisodesTranslated200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'series': json['series'] == null ? undefined : SeriesBaseRecordFromJSON(json['series']),
    };
}

  export function GetSeriesSeasonEpisodesTranslated200ResponseDataToJSON(json: any): GetSeriesSeasonEpisodesTranslated200ResponseData {
      return GetSeriesSeasonEpisodesTranslated200ResponseDataToJSONTyped(json, false);
  }

  export function GetSeriesSeasonEpisodesTranslated200ResponseDataToJSONTyped(value?: GetSeriesSeasonEpisodesTranslated200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'series': SeriesBaseRecordToJSON(value['series']),
    };
}

