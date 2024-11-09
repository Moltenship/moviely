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
/**
 * A series airs day record
 * @export
 * @interface SeriesAirsDays
 */
export interface SeriesAirsDays {
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    saturday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesAirsDays
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the SeriesAirsDays interface.
 */
export function instanceOfSeriesAirsDays(value: object): value is SeriesAirsDays {
    return true;
}

export function SeriesAirsDaysFromJSON(json: any): SeriesAirsDays {
    return SeriesAirsDaysFromJSONTyped(json, false);
}

export function SeriesAirsDaysFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeriesAirsDays {
    if (json == null) {
        return json;
    }
    return {
        
        'friday': json['friday'] == null ? undefined : json['friday'],
        'monday': json['monday'] == null ? undefined : json['monday'],
        'saturday': json['saturday'] == null ? undefined : json['saturday'],
        'sunday': json['sunday'] == null ? undefined : json['sunday'],
        'thursday': json['thursday'] == null ? undefined : json['thursday'],
        'tuesday': json['tuesday'] == null ? undefined : json['tuesday'],
        'wednesday': json['wednesday'] == null ? undefined : json['wednesday'],
    };
}

  export function SeriesAirsDaysToJSON(json: any): SeriesAirsDays {
      return SeriesAirsDaysToJSONTyped(json, false);
  }

  export function SeriesAirsDaysToJSONTyped(value?: SeriesAirsDays | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'friday': value['friday'],
        'monday': value['monday'],
        'saturday': value['saturday'],
        'sunday': value['sunday'],
        'thursday': value['thursday'],
        'tuesday': value['tuesday'],
        'wednesday': value['wednesday'],
    };
}
