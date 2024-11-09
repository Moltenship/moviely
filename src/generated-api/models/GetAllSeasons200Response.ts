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
import type { SeasonBaseRecord } from './SeasonBaseRecord';
import {
    SeasonBaseRecordFromJSON,
    SeasonBaseRecordFromJSONTyped,
    SeasonBaseRecordToJSON,
    SeasonBaseRecordToJSONTyped,
} from './SeasonBaseRecord';

/**
 * 
 * @export
 * @interface GetAllSeasons200Response
 */
export interface GetAllSeasons200Response {
    /**
     * 
     * @type {Array<SeasonBaseRecord>}
     * @memberof GetAllSeasons200Response
     */
    data?: Array<SeasonBaseRecord>;
    /**
     * 
     * @type {string}
     * @memberof GetAllSeasons200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the GetAllSeasons200Response interface.
 */
export function instanceOfGetAllSeasons200Response(value: object): value is GetAllSeasons200Response {
    return true;
}

export function GetAllSeasons200ResponseFromJSON(json: any): GetAllSeasons200Response {
    return GetAllSeasons200ResponseFromJSONTyped(json, false);
}

export function GetAllSeasons200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllSeasons200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(SeasonBaseRecordFromJSON)),
        'status': json['status'] == null ? undefined : json['status'],
    };
}

  export function GetAllSeasons200ResponseToJSON(json: any): GetAllSeasons200Response {
      return GetAllSeasons200ResponseToJSONTyped(json, false);
  }

  export function GetAllSeasons200ResponseToJSONTyped(value?: GetAllSeasons200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(SeasonBaseRecordToJSON)),
        'status': value['status'],
    };
}
