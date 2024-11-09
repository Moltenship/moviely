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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
    LinksToJSONTyped,
} from './Links';

/**
 * 
 * @export
 * @interface GetAllEpisodes200Response
 */
export interface GetAllEpisodes200Response {
    /**
     * 
     * @type {Array<EpisodeBaseRecord>}
     * @memberof GetAllEpisodes200Response
     */
    data?: Array<EpisodeBaseRecord>;
    /**
     * 
     * @type {string}
     * @memberof GetAllEpisodes200Response
     */
    status?: string;
    /**
     * 
     * @type {Links}
     * @memberof GetAllEpisodes200Response
     */
    links?: Links;
}

/**
 * Check if a given object implements the GetAllEpisodes200Response interface.
 */
export function instanceOfGetAllEpisodes200Response(value: object): value is GetAllEpisodes200Response {
    return true;
}

export function GetAllEpisodes200ResponseFromJSON(json: any): GetAllEpisodes200Response {
    return GetAllEpisodes200ResponseFromJSONTyped(json, false);
}

export function GetAllEpisodes200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAllEpisodes200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(EpisodeBaseRecordFromJSON)),
        'status': json['status'] == null ? undefined : json['status'],
        'links': json['links'] == null ? undefined : LinksFromJSON(json['links']),
    };
}

  export function GetAllEpisodes200ResponseToJSON(json: any): GetAllEpisodes200Response {
      return GetAllEpisodes200ResponseToJSONTyped(json, false);
  }

  export function GetAllEpisodes200ResponseToJSONTyped(value?: GetAllEpisodes200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(EpisodeBaseRecordToJSON)),
        'status': value['status'],
        'links': LinksToJSON(value['links']),
    };
}

