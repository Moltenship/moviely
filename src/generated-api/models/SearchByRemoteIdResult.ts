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
import type { Company } from './Company';
import {
    CompanyFromJSON,
    CompanyFromJSONTyped,
    CompanyToJSON,
    CompanyToJSONTyped,
} from './Company';
import type { EpisodeBaseRecord } from './EpisodeBaseRecord';
import {
    EpisodeBaseRecordFromJSON,
    EpisodeBaseRecordFromJSONTyped,
    EpisodeBaseRecordToJSON,
    EpisodeBaseRecordToJSONTyped,
} from './EpisodeBaseRecord';
import type { PeopleBaseRecord } from './PeopleBaseRecord';
import {
    PeopleBaseRecordFromJSON,
    PeopleBaseRecordFromJSONTyped,
    PeopleBaseRecordToJSON,
    PeopleBaseRecordToJSONTyped,
} from './PeopleBaseRecord';
import type { MovieBaseRecord } from './MovieBaseRecord';
import {
    MovieBaseRecordFromJSON,
    MovieBaseRecordFromJSONTyped,
    MovieBaseRecordToJSON,
    MovieBaseRecordToJSONTyped,
} from './MovieBaseRecord';
import type { SeriesBaseRecord } from './SeriesBaseRecord';
import {
    SeriesBaseRecordFromJSON,
    SeriesBaseRecordFromJSONTyped,
    SeriesBaseRecordToJSON,
    SeriesBaseRecordToJSONTyped,
} from './SeriesBaseRecord';

/**
 * search by remote reuslt is a base record for a movie, series, people, season or company search result
 * @export
 * @interface SearchByRemoteIdResult
 */
export interface SearchByRemoteIdResult {
    /**
     * 
     * @type {SeriesBaseRecord}
     * @memberof SearchByRemoteIdResult
     */
    series?: SeriesBaseRecord;
    /**
     * 
     * @type {PeopleBaseRecord}
     * @memberof SearchByRemoteIdResult
     */
    people?: PeopleBaseRecord;
    /**
     * 
     * @type {MovieBaseRecord}
     * @memberof SearchByRemoteIdResult
     */
    movie?: MovieBaseRecord;
    /**
     * 
     * @type {EpisodeBaseRecord}
     * @memberof SearchByRemoteIdResult
     */
    episode?: EpisodeBaseRecord;
    /**
     * 
     * @type {Company}
     * @memberof SearchByRemoteIdResult
     */
    company?: Company;
}

/**
 * Check if a given object implements the SearchByRemoteIdResult interface.
 */
export function instanceOfSearchByRemoteIdResult(value: object): value is SearchByRemoteIdResult {
    return true;
}

export function SearchByRemoteIdResultFromJSON(json: any): SearchByRemoteIdResult {
    return SearchByRemoteIdResultFromJSONTyped(json, false);
}

export function SearchByRemoteIdResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchByRemoteIdResult {
    if (json == null) {
        return json;
    }
    return {
        
        'series': json['series'] == null ? undefined : json['series'],
        'people': json['people'] == null ? undefined : json['people'],
        'movie': json['movie'] == null ? undefined : json['movie'],
        'episode': json['episode'] == null ? undefined : json['episode'],
        'company': json['company'] == null ? undefined : json['company'],
    };
}

  export function SearchByRemoteIdResultToJSON(json: any): SearchByRemoteIdResult {
      return SearchByRemoteIdResultToJSONTyped(json, false);
  }

  export function SearchByRemoteIdResultToJSONTyped(value?: SearchByRemoteIdResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'series': value['series'],
        'people': value['people'],
        'movie': value['movie'],
        'episode': value['episode'],
        'company': value['company'],
    };
}

