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
import type { Status } from './Status';
import {
    StatusFromJSON,
    StatusFromJSONTyped,
    StatusToJSON,
    StatusToJSONTyped,
} from './Status';
import type { EpisodeBaseRecord } from './EpisodeBaseRecord';
import {
    EpisodeBaseRecordFromJSON,
    EpisodeBaseRecordFromJSONTyped,
    EpisodeBaseRecordToJSON,
    EpisodeBaseRecordToJSONTyped,
} from './EpisodeBaseRecord';
import type { Alias } from './Alias';
import {
    AliasFromJSON,
    AliasFromJSONTyped,
    AliasToJSON,
    AliasToJSONTyped,
} from './Alias';

/**
 * The base record for a series. All series airs time like firstAired, lastAired, nextAired, etc. are in US EST for US series, and for all non-US series, the time of the show’s country capital or most populous city. For streaming services, is the official release time. See https://support.thetvdb.com/kb/faq.php?id=29.
 * @export
 * @interface SeriesBaseRecord
 */
export interface SeriesBaseRecord {
    /**
     * 
     * @type {Array<Alias>}
     * @memberof SeriesBaseRecord
     */
    aliases?: Array<Alias>;
    /**
     * 
     * @type {number}
     * @memberof SeriesBaseRecord
     */
    averageRuntime?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    country?: string;
    /**
     * 
     * @type {number}
     * @memberof SeriesBaseRecord
     */
    defaultSeasonType?: number;
    /**
     * 
     * @type {Array<EpisodeBaseRecord>}
     * @memberof SeriesBaseRecord
     */
    episodes?: Array<EpisodeBaseRecord>;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    firstAired?: string;
    /**
     * 
     * @type {number}
     * @memberof SeriesBaseRecord
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    image?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SeriesBaseRecord
     */
    isOrderRandomized?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    lastAired?: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    lastUpdated?: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SeriesBaseRecord
     */
    nameTranslations?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    nextAired?: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    originalCountry?: string;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    originalLanguage?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof SeriesBaseRecord
     */
    overviewTranslations?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof SeriesBaseRecord
     */
    score?: number;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    slug?: string;
    /**
     * 
     * @type {Status}
     * @memberof SeriesBaseRecord
     */
    status?: Status;
    /**
     * 
     * @type {string}
     * @memberof SeriesBaseRecord
     */
    year?: string;
}

/**
 * Check if a given object implements the SeriesBaseRecord interface.
 */
export function instanceOfSeriesBaseRecord(value: object): value is SeriesBaseRecord {
    return true;
}

export function SeriesBaseRecordFromJSON(json: any): SeriesBaseRecord {
    return SeriesBaseRecordFromJSONTyped(json, false);
}

export function SeriesBaseRecordFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeriesBaseRecord {
    if (json == null) {
        return json;
    }
    return {
        
        'aliases': json['aliases'] == null ? undefined : ((json['aliases'] as Array<any>).map(AliasFromJSON)),
        'averageRuntime': json['averageRuntime'] == null ? undefined : json['averageRuntime'],
        'country': json['country'] == null ? undefined : json['country'],
        'defaultSeasonType': json['defaultSeasonType'] == null ? undefined : json['defaultSeasonType'],
        'episodes': json['episodes'] == null ? undefined : ((json['episodes'] as Array<any>).map(EpisodeBaseRecordFromJSON)),
        'firstAired': json['firstAired'] == null ? undefined : json['firstAired'],
        'id': json['id'] == null ? undefined : json['id'],
        'image': json['image'] == null ? undefined : json['image'],
        'isOrderRandomized': json['isOrderRandomized'] == null ? undefined : json['isOrderRandomized'],
        'lastAired': json['lastAired'] == null ? undefined : json['lastAired'],
        'lastUpdated': json['lastUpdated'] == null ? undefined : json['lastUpdated'],
        'name': json['name'] == null ? undefined : json['name'],
        'nameTranslations': json['nameTranslations'] == null ? undefined : json['nameTranslations'],
        'nextAired': json['nextAired'] == null ? undefined : json['nextAired'],
        'originalCountry': json['originalCountry'] == null ? undefined : json['originalCountry'],
        'originalLanguage': json['originalLanguage'] == null ? undefined : json['originalLanguage'],
        'overviewTranslations': json['overviewTranslations'] == null ? undefined : json['overviewTranslations'],
        'score': json['score'] == null ? undefined : json['score'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'status': json['status'] == null ? undefined : StatusFromJSON(json['status']),
        'year': json['year'] == null ? undefined : json['year'],
    };
}

  export function SeriesBaseRecordToJSON(json: any): SeriesBaseRecord {
      return SeriesBaseRecordToJSONTyped(json, false);
  }

  export function SeriesBaseRecordToJSONTyped(value?: SeriesBaseRecord | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'aliases': value['aliases'] == null ? undefined : ((value['aliases'] as Array<any>).map(AliasToJSON)),
        'averageRuntime': value['averageRuntime'],
        'country': value['country'],
        'defaultSeasonType': value['defaultSeasonType'],
        'episodes': value['episodes'] == null ? undefined : ((value['episodes'] as Array<any>).map(EpisodeBaseRecordToJSON)),
        'firstAired': value['firstAired'],
        'id': value['id'],
        'image': value['image'],
        'isOrderRandomized': value['isOrderRandomized'],
        'lastAired': value['lastAired'],
        'lastUpdated': value['lastUpdated'],
        'name': value['name'],
        'nameTranslations': value['nameTranslations'],
        'nextAired': value['nextAired'],
        'originalCountry': value['originalCountry'],
        'originalLanguage': value['originalLanguage'],
        'overviewTranslations': value['overviewTranslations'],
        'score': value['score'],
        'slug': value['slug'],
        'status': StatusToJSON(value['status']),
        'year': value['year'],
    };
}
