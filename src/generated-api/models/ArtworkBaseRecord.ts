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
 * base artwork record
 * @export
 * @interface ArtworkBaseRecord
 */
export interface ArtworkBaseRecord {
    /**
     * 
     * @type {number}
     * @memberof ArtworkBaseRecord
     */
    height?: number;
    /**
     * 
     * @type {number}
     * @memberof ArtworkBaseRecord
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ArtworkBaseRecord
     */
    image?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ArtworkBaseRecord
     */
    includesText?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ArtworkBaseRecord
     */
    language?: string;
    /**
     * 
     * @type {number}
     * @memberof ArtworkBaseRecord
     */
    score?: number;
    /**
     * 
     * @type {string}
     * @memberof ArtworkBaseRecord
     */
    thumbnail?: string;
    /**
     * The artwork type corresponds to the ids from the /artwork/types endpoint.
     * @type {number}
     * @memberof ArtworkBaseRecord
     */
    type?: number;
    /**
     * 
     * @type {number}
     * @memberof ArtworkBaseRecord
     */
    width?: number;
}

/**
 * Check if a given object implements the ArtworkBaseRecord interface.
 */
export function instanceOfArtworkBaseRecord(value: object): value is ArtworkBaseRecord {
    return true;
}

export function ArtworkBaseRecordFromJSON(json: any): ArtworkBaseRecord {
    return ArtworkBaseRecordFromJSONTyped(json, false);
}

export function ArtworkBaseRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArtworkBaseRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'height': json['height'] == null ? undefined : json['height'],
        'id': json['id'] == null ? undefined : json['id'],
        'image': json['image'] == null ? undefined : json['image'],
        'includesText': json['includesText'] == null ? undefined : json['includesText'],
        'language': json['language'] == null ? undefined : json['language'],
        'score': json['score'] == null ? undefined : json['score'],
        'thumbnail': json['thumbnail'] == null ? undefined : json['thumbnail'],
        'type': json['type'] == null ? undefined : json['type'],
        'width': json['width'] == null ? undefined : json['width'],
    };
}

  export function ArtworkBaseRecordToJSON(json: any): ArtworkBaseRecord {
      return ArtworkBaseRecordToJSONTyped(json, false);
  }

  export function ArtworkBaseRecordToJSONTyped(value?: ArtworkBaseRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'height': value['height'],
        'id': value['id'],
        'image': value['image'],
        'includesText': value['includesText'],
        'language': value['language'],
        'score': value['score'],
        'thumbnail': value['thumbnail'],
        'type': value['type'],
        'width': value['width'],
    };
}

