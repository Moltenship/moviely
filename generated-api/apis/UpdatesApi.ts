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


import * as runtime from '../runtime';
import type {
  Updates200Response,
} from '../models/index';
import {
    Updates200ResponseFromJSON,
    Updates200ResponseToJSON,
} from '../models/index';

export interface UpdatesRequest {
    since: number;
    type?: UpdatesTypeEnum;
    action?: UpdatesActionEnum;
    page?: number;
}

/**
 * 
 */
export class UpdatesApi extends runtime.BaseAPI {

    /**
     * Returns updated entities.  methodInt indicates a created record (1), an updated record (2), or a deleted record (3).  If a record is deleted because it was a duplicate of another record, the target record\'s information is provided in mergeToType and mergeToId.
     */
    async updatesRaw(requestParameters: UpdatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Updates200Response>> {
        if (requestParameters['since'] == null) {
            throw new runtime.RequiredError(
                'since',
                'Required parameter "since" was null or undefined when calling updates().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['since'] != null) {
            queryParameters['since'] = requestParameters['since'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['action'] != null) {
            queryParameters['action'] = requestParameters['action'];
        }

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/updates`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Updates200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns updated entities.  methodInt indicates a created record (1), an updated record (2), or a deleted record (3).  If a record is deleted because it was a duplicate of another record, the target record\'s information is provided in mergeToType and mergeToId.
     */
    async updates(requestParameters: UpdatesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Updates200Response> {
        const response = await this.updatesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const UpdatesTypeEnum = {
    Artwork: 'artwork',
    AwardNominees: 'award_nominees',
    Companies: 'companies',
    Episodes: 'episodes',
    Lists: 'lists',
    People: 'people',
    Seasons: 'seasons',
    Series: 'series',
    Seriespeople: 'seriespeople',
    Artworktypes: 'artworktypes',
    AwardCategories: 'award_categories',
    Awards: 'awards',
    CompanyTypes: 'company_types',
    ContentRatings: 'content_ratings',
    Countries: 'countries',
    EntityTypes: 'entity_types',
    Genres: 'genres',
    Languages: 'languages',
    Movies: 'movies',
    MovieGenres: 'movie_genres',
    MovieStatus: 'movie_status',
    Peopletypes: 'peopletypes',
    Seasontypes: 'seasontypes',
    Sourcetypes: 'sourcetypes',
    TagOptions: 'tag_options',
    Tags: 'tags',
    Translatedcharacters: 'translatedcharacters',
    Translatedcompanies: 'translatedcompanies',
    Translatedepisodes: 'translatedepisodes',
    Translatedlists: 'translatedlists',
    Translatedmovies: 'translatedmovies',
    Translatedpeople: 'translatedpeople',
    Translatedseasons: 'translatedseasons',
    Translatedserierk: 'translatedserierk'
} as const;
export type UpdatesTypeEnum = typeof UpdatesTypeEnum[keyof typeof UpdatesTypeEnum];
/**
 * @export
 */
export const UpdatesActionEnum = {
    Delete: 'delete',
    Update: 'update'
} as const;
export type UpdatesActionEnum = typeof UpdatesActionEnum[keyof typeof UpdatesActionEnum];
