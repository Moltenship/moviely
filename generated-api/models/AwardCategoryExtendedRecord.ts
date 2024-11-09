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
import type { AwardNomineeBaseRecord } from './AwardNomineeBaseRecord';
import {
    AwardNomineeBaseRecordFromJSON,
    AwardNomineeBaseRecordFromJSONTyped,
    AwardNomineeBaseRecordToJSON,
    AwardNomineeBaseRecordToJSONTyped,
} from './AwardNomineeBaseRecord';
import type { AwardBaseRecord } from './AwardBaseRecord';
import {
    AwardBaseRecordFromJSON,
    AwardBaseRecordFromJSONTyped,
    AwardBaseRecordToJSON,
    AwardBaseRecordToJSONTyped,
} from './AwardBaseRecord';

/**
 * extended award category record
 * @export
 * @interface AwardCategoryExtendedRecord
 */
export interface AwardCategoryExtendedRecord {
    /**
     * 
     * @type {boolean}
     * @memberof AwardCategoryExtendedRecord
     */
    allowCoNominees?: boolean;
    /**
     * 
     * @type {AwardBaseRecord}
     * @memberof AwardCategoryExtendedRecord
     */
    award?: AwardBaseRecord;
    /**
     * 
     * @type {boolean}
     * @memberof AwardCategoryExtendedRecord
     */
    forMovies?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AwardCategoryExtendedRecord
     */
    forSeries?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AwardCategoryExtendedRecord
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof AwardCategoryExtendedRecord
     */
    name?: string;
    /**
     * 
     * @type {Array<AwardNomineeBaseRecord>}
     * @memberof AwardCategoryExtendedRecord
     */
    nominees?: Array<AwardNomineeBaseRecord>;
}

/**
 * Check if a given object implements the AwardCategoryExtendedRecord interface.
 */
export function instanceOfAwardCategoryExtendedRecord(value: object): value is AwardCategoryExtendedRecord {
    return true;
}

export function AwardCategoryExtendedRecordFromJSON(json: any): AwardCategoryExtendedRecord {
    return AwardCategoryExtendedRecordFromJSONTyped(json, false);
}

export function AwardCategoryExtendedRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): AwardCategoryExtendedRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'allowCoNominees': json['allowCoNominees'] == null ? undefined : json['allowCoNominees'],
        'award': json['award'] == null ? undefined : AwardBaseRecordFromJSON(json['award']),
        'forMovies': json['forMovies'] == null ? undefined : json['forMovies'],
        'forSeries': json['forSeries'] == null ? undefined : json['forSeries'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'nominees': json['nominees'] == null ? undefined : ((json['nominees'] as Array<any>).map(AwardNomineeBaseRecordFromJSON)),
    };
}

  export function AwardCategoryExtendedRecordToJSON(json: any): AwardCategoryExtendedRecord {
      return AwardCategoryExtendedRecordToJSONTyped(json, false);
  }

  export function AwardCategoryExtendedRecordToJSONTyped(value?: AwardCategoryExtendedRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'allowCoNominees': value['allowCoNominees'],
        'award': AwardBaseRecordToJSON(value['award']),
        'forMovies': value['forMovies'],
        'forSeries': value['forSeries'],
        'id': value['id'],
        'name': value['name'],
        'nominees': value['nominees'] == null ? undefined : ((value['nominees'] as Array<any>).map(AwardNomineeBaseRecordToJSON)),
    };
}

