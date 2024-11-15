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
 * trailer record
 * @export
 * @interface Trailer
 */
export interface Trailer {
    /**
     * 
     * @type {number}
     * @memberof Trailer
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Trailer
     */
    language?: string;
    /**
     * 
     * @type {string}
     * @memberof Trailer
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Trailer
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof Trailer
     */
    runtime?: number;
}

/**
 * Check if a given object implements the Trailer interface.
 */
export function instanceOfTrailer(value: object): value is Trailer {
    return true;
}

export function TrailerFromJSON(json: any): Trailer {
    return TrailerFromJSONTyped(json, false);
}

export function TrailerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Trailer {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'language': json['language'] == null ? undefined : json['language'],
        'name': json['name'] == null ? undefined : json['name'],
        'url': json['url'] == null ? undefined : json['url'],
        'runtime': json['runtime'] == null ? undefined : json['runtime'],
    };
}

  export function TrailerToJSON(json: any): Trailer {
      return TrailerToJSONTyped(json, false);
  }

  export function TrailerToJSONTyped(value?: Trailer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'language': value['language'],
        'name': value['name'],
        'url': value['url'],
        'runtime': value['runtime'],
    };
}

