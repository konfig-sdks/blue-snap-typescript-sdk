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
import { PlanCreateRecurringPlanRequest } from '../models';
// @ts-ignore
import { PlanUpdateRecurringPlanRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PlanApi - axios parameter creator
 * @export
 */
export const PlanApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Plan
         * @param {PlanCreateRecurringPlanRequest} [planCreateRecurringPlanRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecurringPlan: async (planCreateRecurringPlanRequest?: PlanCreateRecurringPlanRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recurring/plans`;
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
                requestBody: planCreateRecurringPlanRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/recurring/plans',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(planCreateRecurringPlanRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Retrieve All Plans
         * @param {string} [pagesize] 
         * @param {string} [after] 
         * @param {boolean} [gettotal] 
         * @param {boolean} [fulldescription] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (pagesize?: string, after?: string, gettotal?: boolean, fulldescription?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recurring/plans?{parameters}`;
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
            if (pagesize !== undefined) {
                localVarQueryParameter['pagesize'] = pagesize;
            }

            if (after !== undefined) {
                localVarQueryParameter['after'] = after;
            }

            if (gettotal !== undefined) {
                localVarQueryParameter['gettotal'] = gettotal;
            }

            if (fulldescription !== undefined) {
                localVarQueryParameter['fulldescription'] = fulldescription;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/recurring/plans?{parameters}',
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
         * @summary Retrieve Specific Plan
         * @param {number} planId BlueSnap identifier for the plan.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecific: async (planId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'planId' is not null or undefined
            assertParamExists('getSpecific', 'planId', planId)
            const localVarPath = `/recurring/plans/{planId}`
                .replace(`{${"planId"}}`, encodeURIComponent(String(planId !== undefined ? planId : `-planId-`)));
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
                pathTemplate: '/recurring/plans/{planId}',
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
         * @summary Update Plan
         * @param {number} planId BlueSnap identifier for the plan.
         * @param {PlanUpdateRecurringPlanRequest} [planUpdateRecurringPlanRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecurringPlan: async (planId: number, planUpdateRecurringPlanRequest?: PlanUpdateRecurringPlanRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'planId' is not null or undefined
            assertParamExists('updateRecurringPlan', 'planId', planId)
            const localVarPath = `/recurring/plans/{planId}`
                .replace(`{${"planId"}}`, encodeURIComponent(String(planId !== undefined ? planId : `-planId-`)));
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
                requestBody: planUpdateRecurringPlanRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/recurring/plans/{planId}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(planUpdateRecurringPlanRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PlanApi - functional programming interface
 * @export
 */
export const PlanApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PlanApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Plan
         * @param {PlanApiCreateRecurringPlanRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRecurringPlan(requestParameters: PlanApiCreateRecurringPlanRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const planCreateRecurringPlanRequest: PlanCreateRecurringPlanRequest = {
                chargeFrequency: requestParameters.chargeFrequency,
                gracePeriodDays: requestParameters.gracePeriodDays,
                trialPeriodDays: requestParameters.trialPeriodDays,
                initialChargeAmount: requestParameters.initialChargeAmount,
                name: requestParameters.name,
                currency: requestParameters.currency,
                maxNumberOfCharges: requestParameters.maxNumberOfCharges,
                recurringChargeAmount: requestParameters.recurringChargeAmount,
                chargeOnPlanSwitch: requestParameters.chargeOnPlanSwitch
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecurringPlan(planCreateRecurringPlanRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve All Plans
         * @param {PlanApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: PlanApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.pagesize, requestParameters.after, requestParameters.gettotal, requestParameters.fulldescription, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Retrieve Specific Plan
         * @param {PlanApiGetSpecificRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecific(requestParameters: PlanApiGetSpecificRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecific(requestParameters.planId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Plan
         * @param {PlanApiUpdateRecurringPlanRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRecurringPlan(requestParameters: PlanApiUpdateRecurringPlanRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const planUpdateRecurringPlanRequest: PlanUpdateRecurringPlanRequest = {
                chargeFrequency: requestParameters.chargeFrequency,
                trialPeriodDays: requestParameters.trialPeriodDays,
                initialChargeAmount: requestParameters.initialChargeAmount,
                name: requestParameters.name,
                currency: requestParameters.currency,
                recurringChargeAmount: requestParameters.recurringChargeAmount
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecurringPlan(requestParameters.planId, planUpdateRecurringPlanRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PlanApi - factory interface
 * @export
 */
export const PlanApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PlanApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Plan
         * @param {PlanApiCreateRecurringPlanRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecurringPlan(requestParameters: PlanApiCreateRecurringPlanRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createRecurringPlan(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve All Plans
         * @param {PlanApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: PlanApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Retrieve Specific Plan
         * @param {PlanApiGetSpecificRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecific(requestParameters: PlanApiGetSpecificRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getSpecific(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Plan
         * @param {PlanApiUpdateRecurringPlanRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecurringPlan(requestParameters: PlanApiUpdateRecurringPlanRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateRecurringPlan(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRecurringPlan operation in PlanApi.
 * @export
 * @interface PlanApiCreateRecurringPlanRequest
 */
export type PlanApiCreateRecurringPlanRequest = {
    
} & PlanCreateRecurringPlanRequest

/**
 * Request parameters for getAll operation in PlanApi.
 * @export
 * @interface PlanApiGetAllRequest
 */
export type PlanApiGetAllRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof PlanApiGetAll
    */
    readonly pagesize?: string
    
    /**
    * 
    * @type {string}
    * @memberof PlanApiGetAll
    */
    readonly after?: string
    
    /**
    * 
    * @type {boolean}
    * @memberof PlanApiGetAll
    */
    readonly gettotal?: boolean
    
    /**
    * 
    * @type {boolean}
    * @memberof PlanApiGetAll
    */
    readonly fulldescription?: boolean
    
}

/**
 * Request parameters for getSpecific operation in PlanApi.
 * @export
 * @interface PlanApiGetSpecificRequest
 */
export type PlanApiGetSpecificRequest = {
    
    /**
    * BlueSnap identifier for the plan.
    * @type {number}
    * @memberof PlanApiGetSpecific
    */
    readonly planId: number
    
}

/**
 * Request parameters for updateRecurringPlan operation in PlanApi.
 * @export
 * @interface PlanApiUpdateRecurringPlanRequest
 */
export type PlanApiUpdateRecurringPlanRequest = {
    
    /**
    * BlueSnap identifier for the plan.
    * @type {number}
    * @memberof PlanApiUpdateRecurringPlan
    */
    readonly planId: number
    
} & PlanUpdateRecurringPlanRequest

/**
 * PlanApiGenerated - object-oriented interface
 * @export
 * @class PlanApiGenerated
 * @extends {BaseAPI}
 */
export class PlanApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Plan
     * @param {PlanApiCreateRecurringPlanRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApiGenerated
     */
    public createRecurringPlan(requestParameters: PlanApiCreateRecurringPlanRequest = {}, options?: AxiosRequestConfig) {
        return PlanApiFp(this.configuration).createRecurringPlan(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve All Plans
     * @param {PlanApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApiGenerated
     */
    public getAll(requestParameters: PlanApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return PlanApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Retrieve Specific Plan
     * @param {PlanApiGetSpecificRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApiGenerated
     */
    public getSpecific(requestParameters: PlanApiGetSpecificRequest, options?: AxiosRequestConfig) {
        return PlanApiFp(this.configuration).getSpecific(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Plan
     * @param {PlanApiUpdateRecurringPlanRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PlanApiGenerated
     */
    public updateRecurringPlan(requestParameters: PlanApiUpdateRecurringPlanRequest, options?: AxiosRequestConfig) {
        return PlanApiFp(this.configuration).updateRecurringPlan(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
