/* tslint:disable */
/* eslint-disable */
/*
API Settings

At BlueSnap, we look at payments a little differently. Our Payment Orchestration Platform helps businesses accept payments globally and is designed to increase revenue and reduces costs. We provide a comprehensive back-end solutions that simplifies the complexity of payments, managing the full process from start to finish.

BlueSnap supports payments through multiple sales channels such as online and mobile sales, marketplaces, subscriptions, invoice payments and manual orders through a virtual terminal. And for businesses looking for embedded payments, we offer white-labeled payments for platforms with automated underwriting and onboarding that supports marketplaces and split payments.

And with one integration and contract, businesses can sell in over 200 geographies with access to local acquiring in 47 countries, 110+ currencies and 100+ global payment types, including popular eWallets, automated accounts receivable, world-class fraud protection and chargeback management, built-in solutions for regulation and tax compliance, and unified global reporting to help businesses grow.

With a US headquarters in Waltham, MA, and EU headquarters in Dublin, Ireland, BlueSnap is backed by world-class private equity investors including Great Hill Partners and Parthenon Capital Partners. 

Learn more at BlueSnap.com

The version of the OpenAPI document: 8976-Tools


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AgreementApi - axios parameter creator
 * @export
 */
export const AgreementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * for Australia and Canada
         * @summary Create Debit Agreement
         * @param {string} region Represents the country. Possible Values: &#x60;au&#x60;, &#x60;ca&#x60;
         * @param {string} type Represents the mandate type. Possible Values: &#x60;onetime&#x60;,&#x60;recurring&#x60;, &#x60;ondemand&#x60;
         * @param {string} [planid] SKU number
         * @param {string} [overriderecurringchargeamount] the amount which overrides recurring charge
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDebitForAusCan: async (region: string, type: string, planid?: string, overriderecurringchargeamount?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'region' is not null or undefined
            assertParamExists('createDebitForAusCan', 'region', region)
            // verify required parameter 'type' is not null or undefined
            assertParamExists('createDebitForAusCan', 'type', type)
            const localVarPath = `/agreements/debit/{region}/{type}`
                .replace(`{${"region"}}`, encodeURIComponent(String(region !== undefined ? region : `-region-`)))
                .replace(`{${"type"}}`, encodeURIComponent(String(type !== undefined ? type : `-type-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })
            if (planid !== undefined) {
                localVarQueryParameter['planid'] = planid;
            }

            if (overriderecurringchargeamount !== undefined) {
                localVarQueryParameter['overriderecurringchargeamount'] = overriderecurringchargeamount;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/agreements/debit/{region}/{type}',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * for Australia and Canada
         * @summary Get Debit Agreement
         * @param {string} [agreementId] Argument included in the response for the Create Debit Agreement request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDebit: async (agreementId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/agreements/{agreementId}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })
            if (agreementId !== undefined) {
                localVarQueryParameter['agreementId'] = agreementId;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/agreements/{agreementId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AgreementApi - functional programming interface
 * @export
 */
export const AgreementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AgreementApiAxiosParamCreator(configuration)
    return {
        /**
         * for Australia and Canada
         * @summary Create Debit Agreement
         * @param {AgreementApiCreateDebitForAusCanRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createDebitForAusCan(requestParameters: AgreementApiCreateDebitForAusCanRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createDebitForAusCan(requestParameters.region, requestParameters.type, requestParameters.planid, requestParameters.overriderecurringchargeamount, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * for Australia and Canada
         * @summary Get Debit Agreement
         * @param {AgreementApiGetDebitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDebit(requestParameters: AgreementApiGetDebitRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDebit(requestParameters.agreementId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AgreementApi - factory interface
 * @export
 */
export const AgreementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AgreementApiFp(configuration)
    return {
        /**
         * for Australia and Canada
         * @summary Create Debit Agreement
         * @param {AgreementApiCreateDebitForAusCanRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createDebitForAusCan(requestParameters: AgreementApiCreateDebitForAusCanRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createDebitForAusCan(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * for Australia and Canada
         * @summary Get Debit Agreement
         * @param {AgreementApiGetDebitRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDebit(requestParameters: AgreementApiGetDebitRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getDebit(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createDebitForAusCan operation in AgreementApi.
 * @export
 * @interface AgreementApiCreateDebitForAusCanRequest
 */
export type AgreementApiCreateDebitForAusCanRequest = {
    
    /**
    * Represents the country. Possible Values: `au`, `ca`
    * @type {string}
    * @memberof AgreementApiCreateDebitForAusCan
    */
    readonly region: string
    
    /**
    * Represents the mandate type. Possible Values: `onetime`,`recurring`, `ondemand`
    * @type {string}
    * @memberof AgreementApiCreateDebitForAusCan
    */
    readonly type: string
    
    /**
    * SKU number
    * @type {string}
    * @memberof AgreementApiCreateDebitForAusCan
    */
    readonly planid?: string
    
    /**
    * the amount which overrides recurring charge
    * @type {string}
    * @memberof AgreementApiCreateDebitForAusCan
    */
    readonly overriderecurringchargeamount?: string
    
}

/**
 * Request parameters for getDebit operation in AgreementApi.
 * @export
 * @interface AgreementApiGetDebitRequest
 */
export type AgreementApiGetDebitRequest = {
    
    /**
    * Argument included in the response for the Create Debit Agreement request
    * @type {string}
    * @memberof AgreementApiGetDebit
    */
    readonly agreementId?: string
    
}

/**
 * AgreementApiGenerated - object-oriented interface
 * @export
 * @class AgreementApiGenerated
 * @extends {BaseAPI}
 */
export class AgreementApiGenerated extends BaseAPI {
    /**
     * for Australia and Canada
     * @summary Create Debit Agreement
     * @param {AgreementApiCreateDebitForAusCanRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgreementApiGenerated
     */
    public createDebitForAusCan(requestParameters: AgreementApiCreateDebitForAusCanRequest, options?: AxiosRequestConfig) {
        return AgreementApiFp(this.configuration).createDebitForAusCan(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * for Australia and Canada
     * @summary Get Debit Agreement
     * @param {AgreementApiGetDebitRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AgreementApiGenerated
     */
    public getDebit(requestParameters: AgreementApiGetDebitRequest = {}, options?: AxiosRequestConfig) {
        return AgreementApiFp(this.configuration).getDebit(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
