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
import type { EpisodeBaseRecord } from './EpisodeBaseRecord';
import {
    EpisodeBaseRecordFromJSON,
    EpisodeBaseRecordFromJSONTyped,
    EpisodeBaseRecordToJSON,
    EpisodeBaseRecordToJSONTyped,
} from './EpisodeBaseRecord';

/**
 * 
 * @export
 * @interface GetEpisodeBase200Response
 */
export interface GetEpisodeBase200Response {
    /**
     * 
     * @type {EpisodeBaseRecord}
     * @memberof GetEpisodeBase200Response
     */
    data?: EpisodeBaseRecord;
    /**
     * 
     * @type {string}
     * @memberof GetEpisodeBase200Response
     */
    status?: string;
}

/**
 * Check if a given object implements the GetEpisodeBase200Response interface.
 */
export function instanceOfGetEpisodeBase200Response(value: object): value is GetEpisodeBase200Response {
    return true;
}

export function GetEpisodeBase200ResponseFromJSON(json: any): GetEpisodeBase200Response {
    return GetEpisodeBase200ResponseFromJSONTyped(json, false);
}

export function GetEpisodeBase200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetEpisodeBase200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : EpisodeBaseRecordFromJSON(json['data']),
        'status': json['status'] == null ? undefined : json['status'],
    };
}

  export function GetEpisodeBase200ResponseToJSON(json: any): GetEpisodeBase200Response {
      return GetEpisodeBase200ResponseToJSONTyped(json, false);
  }

  export function GetEpisodeBase200ResponseToJSONTyped(value?: GetEpisodeBase200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': EpisodeBaseRecordToJSON(value['data']),
        'status': value['status'],
    };
}

