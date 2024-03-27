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
// @ts-ignore
import { ShopperCreateVaultedShopperRequest } from '../models';
// @ts-ignore
import { ShopperCreateVaultedShopperRequestPaymentSources } from '../models';
// @ts-ignore
import { ShopperUpdateVaultedShopperRequest } from '../models';
// @ts-ignore
import { ShopperUpdateVaultedShopperRequestPaymentSources } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ShopperApi - axios parameter creator
 * @export
 */
export const ShopperApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Vaulted Shopper
         * @param {ShopperCreateVaultedShopperRequest} [shopperCreateVaultedShopperRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVaultedShopper: async (shopperCreateVaultedShopperRequest?: ShopperCreateVaultedShopperRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/vaulted-shoppers`;
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

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: shopperCreateVaultedShopperRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vaulted-shoppers',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shopperCreateVaultedShopperRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete Vaulted Shopper
         * @param {string} vaultedShopperId vaultedShopperId received from BlueSnap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteVaultedShopper: async (vaultedShopperId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vaultedShopperId' is not null or undefined
            assertParamExists('deleteVaultedShopper', 'vaultedShopperId', vaultedShopperId)
            const localVarPath = `/vaulted-shoppers/{vaultedShopperId}`
                .replace(`{${"vaultedShopperId"}}`, encodeURIComponent(String(vaultedShopperId !== undefined ? vaultedShopperId : `-vaultedShopperId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vaulted-shoppers/{vaultedShopperId}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve Vaulted Shopper
         * @param {string} vaultedShopperId vaultedShopperId received from BlueSnap
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (vaultedShopperId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vaultedShopperId' is not null or undefined
            assertParamExists('get', 'vaultedShopperId', vaultedShopperId)
            const localVarPath = `/vaulted-shoppers/{vaultedShopperId}`
                .replace(`{${"vaultedShopperId"}}`, encodeURIComponent(String(vaultedShopperId !== undefined ? vaultedShopperId : `-vaultedShopperId-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vaulted-shoppers/{vaultedShopperId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Vaulted Shopper
         * @param {string} vaultedShopperId vaultedShopperId received from BlueSnap
         * @param {ShopperUpdateVaultedShopperRequest} [shopperUpdateVaultedShopperRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateVaultedShopper: async (vaultedShopperId: string, shopperUpdateVaultedShopperRequest?: ShopperUpdateVaultedShopperRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vaultedShopperId' is not null or undefined
            assertParamExists('updateVaultedShopper', 'vaultedShopperId', vaultedShopperId)
            const localVarPath = `/vaulted-shoppers/{vaultedShopperId}`
                .replace(`{${"vaultedShopperId"}}`, encodeURIComponent(String(vaultedShopperId !== undefined ? vaultedShopperId : `-vaultedShopperId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication sec0 required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)
            // authentication sec1 required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "sec1", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: shopperUpdateVaultedShopperRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/vaulted-shoppers/{vaultedShopperId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(shopperUpdateVaultedShopperRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ShopperApi - functional programming interface
 * @export
 */
export const ShopperApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ShopperApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Vaulted Shopper
         * @param {ShopperApiCreateVaultedShopperRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createVaultedShopper(requestParameters: ShopperApiCreateVaultedShopperRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const shopperCreateVaultedShopperRequest: ShopperCreateVaultedShopperRequest = {
                paymentSources: requestParameters.paymentSources,
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createVaultedShopper(shopperCreateVaultedShopperRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete Vaulted Shopper
         * @param {ShopperApiDeleteVaultedShopperRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteVaultedShopper(requestParameters: ShopperApiDeleteVaultedShopperRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteVaultedShopper(requestParameters.vaultedShopperId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve Vaulted Shopper
         * @param {ShopperApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: ShopperApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.vaultedShopperId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Vaulted Shopper
         * @param {ShopperApiUpdateVaultedShopperRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateVaultedShopper(requestParameters: ShopperApiUpdateVaultedShopperRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const shopperUpdateVaultedShopperRequest: ShopperUpdateVaultedShopperRequest = {
                paymentSources: requestParameters.paymentSources,
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateVaultedShopper(requestParameters.vaultedShopperId, shopperUpdateVaultedShopperRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ShopperApi - factory interface
 * @export
 */
export const ShopperApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ShopperApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Vaulted Shopper
         * @param {ShopperApiCreateVaultedShopperRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createVaultedShopper(requestParameters: ShopperApiCreateVaultedShopperRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createVaultedShopper(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Vaulted Shopper
         * @param {ShopperApiDeleteVaultedShopperRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteVaultedShopper(requestParameters: ShopperApiDeleteVaultedShopperRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteVaultedShopper(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve Vaulted Shopper
         * @param {ShopperApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: ShopperApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Vaulted Shopper
         * @param {ShopperApiUpdateVaultedShopperRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateVaultedShopper(requestParameters: ShopperApiUpdateVaultedShopperRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateVaultedShopper(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createVaultedShopper operation in ShopperApi.
 * @export
 * @interface ShopperApiCreateVaultedShopperRequest
 */
export type ShopperApiCreateVaultedShopperRequest = {
    
} & ShopperCreateVaultedShopperRequest

/**
 * Request parameters for deleteVaultedShopper operation in ShopperApi.
 * @export
 * @interface ShopperApiDeleteVaultedShopperRequest
 */
export type ShopperApiDeleteVaultedShopperRequest = {
    
    /**
    * vaultedShopperId received from BlueSnap
    * @type {string}
    * @memberof ShopperApiDeleteVaultedShopper
    */
    readonly vaultedShopperId: string
    
}

/**
 * Request parameters for get operation in ShopperApi.
 * @export
 * @interface ShopperApiGetRequest
 */
export type ShopperApiGetRequest = {
    
    /**
    * vaultedShopperId received from BlueSnap
    * @type {string}
    * @memberof ShopperApiGet
    */
    readonly vaultedShopperId: string
    
}

/**
 * Request parameters for updateVaultedShopper operation in ShopperApi.
 * @export
 * @interface ShopperApiUpdateVaultedShopperRequest
 */
export type ShopperApiUpdateVaultedShopperRequest = {
    
    /**
    * vaultedShopperId received from BlueSnap
    * @type {string}
    * @memberof ShopperApiUpdateVaultedShopper
    */
    readonly vaultedShopperId: string
    
} & ShopperUpdateVaultedShopperRequest

/**
 * ShopperApiGenerated - object-oriented interface
 * @export
 * @class ShopperApiGenerated
 * @extends {BaseAPI}
 */
export class ShopperApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Vaulted Shopper
     * @param {ShopperApiCreateVaultedShopperRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShopperApiGenerated
     */
    public createVaultedShopper(requestParameters: ShopperApiCreateVaultedShopperRequest = {}, options?: AxiosRequestConfig) {
        return ShopperApiFp(this.configuration).createVaultedShopper(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete Vaulted Shopper
     * @param {ShopperApiDeleteVaultedShopperRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShopperApiGenerated
     */
    public deleteVaultedShopper(requestParameters: ShopperApiDeleteVaultedShopperRequest, options?: AxiosRequestConfig) {
        return ShopperApiFp(this.configuration).deleteVaultedShopper(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve Vaulted Shopper
     * @param {ShopperApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShopperApiGenerated
     */
    public get(requestParameters: ShopperApiGetRequest, options?: AxiosRequestConfig) {
        return ShopperApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Vaulted Shopper
     * @param {ShopperApiUpdateVaultedShopperRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ShopperApiGenerated
     */
    public updateVaultedShopper(requestParameters: ShopperApiUpdateVaultedShopperRequest, options?: AxiosRequestConfig) {
        return ShopperApiFp(this.configuration).updateVaultedShopper(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}