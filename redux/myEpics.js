import { mergeMap,catchError,tap, flatMap, switchMap } from "rxjs/operators";
import {ofType} from 'redux-observable'
import {API} from '../BaseUrlProvider';
import { ADMIN_AUTH_REQUEST} from "./actionType";
import { from, of } from "rxjs";
import {loginFailure, loginSuccess} from "./actions";

//authenticate admin epic
export const authenticateAdminEpic = action$ => action$.pipe(
    ofType(ADMIN_AUTH_REQUEST),
    mergeMap(action=> 
    from(API.post('/super-admin/login',action.payload.adminCredencial)).pipe(
        mergeMap(response => of(loginSuccess(response.data))),
        catchError(error=> of(loginFailure(error.response)))
    ))
)
// fetch all payrun data dashboard
export const fetchDashboardDataEpic = action$ => action$.pipe(
    ofType("FETCH_DASHBOARD_DATA_REQUEST"),
    mergeMap(action => 
    from(API.get('/super-admin/dashboard')).pipe(
        // tap(res=> console.log("The fetched category response",res.data)),
        mergeMap(res=> of({type: "FETCH_DASHBOARD_DATA_SUCCESS",
        payload: res.data})),
        catchError(error=> of({type: "FETCH_DASHBOARD_DATA_FAILURE",
        payload: error.response}))
    ))
)

// get Privacy and policy
export const fetchPrivacyEpic = action$ => action$.pipe(
    ofType("FETCH_PRIVACY_REQUEST"),
    mergeMap(action=> 
    from(API.get('/privacy-terms')).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "FETCH_PRIVACY_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "FETCH_PRIVACY_FAILURE",payload: error.response}))
    ))
)
// get terms and service
export const fetchTermsServuceEpic = action$ => action$.pipe(
    ofType("FETCH_TERMS_CONDITION_REQUEST"),
    mergeMap(action=> 
    from(API.get('/privacy-terms')).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "FETCH_TERMS_CONDITION_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "FETCH_TERMS_CONDITION_FAILURE",payload: error.response}))
    ))
)
// post privacy and policy
export const postPrivacyEpic = action$ => action$.pipe(
    ofType("POST_PRIVACY_REQUEST"),
    mergeMap(action=> 
    from(API.post('/privacy-terms/add',action.payload)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "POST_PRIVACY_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "POST_PRIVACY_FAILURE",payload: error.response}))
    ))
)
// post terms and service
export const postTermsServiceEpic = action$ => action$.pipe(
    ofType("POST_TERMS_SERVICE_REQUEST"),
    mergeMap(action=> 
    from(API.post('/privacy-terms/add',action.payload)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "POST_TERMS_SERVICE_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "POST_TERMS_SERVICE_FAILURE",payload: error.response}))
    ))
)
// fetch tax information
export const fetchTaxInfoEpic = action$ => action$.pipe(
    ofType("FETCH_TAX_INFO_REQUEST"),
    mergeMap(action=> 
    from(API.get('/tax-information/get')).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "FETCH_TAX_INFO_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "FETCH_TAX_INFO_FAILURE",payload: error.response}))
    ))
)
// get organizations data
export const fetchOrganizationsEpic = action$ => action$.pipe(
    ofType("FETCH_ORGANIZATIONS_REQUEST"),
    mergeMap(action=> 
    from(API.get(`/organization/super-admin/get-all?page=${action.payload.currentPage}&pageSize=${action.payload.postsPerPage}&stpRegistrationPending=${action.payload.isRegistered}`)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "FETCH_ORGANIZATIONS_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "FETCH_ORGANIZATIONS_FAILURE",payload: error.response}))
    ))
)
// fetch organization details 
export const fetchOrgDetailsEpic = action$ => action$.pipe(
    ofType("FETCH_ORG_DETAILS_REQUEST"),
    mergeMap(action=> 
    from(API.get(`/organization/super-admin/get-all/detail?organizationId=${action.payload.orgId}`)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "FETCH_ORG_DETAILS_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "FETCH_ORG_DETAILS_FAILURE",payload: error.response}))
    ))
)
// fetch billing data
export const fetchBillingDataEpic = action$ => action$.pipe(
    ofType("FETCH_BILLING_DATA_REQUEST"),
    mergeMap(action=> 
    from(API.get(`/product-information`)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "FETCH_BILLING_DATA_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "FETCH_BILLING_DATA_FAILURE",payload: error.response}))
    ))
)
// add/edit billing data
export const addBillingDataEpic = action$ => action$.pipe(
    ofType("ADD_BILLING_DATA_REQUEST"),
    mergeMap(action=> 
    from(API.post(`/product-information`,action.payload)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "ADD_BILLING_DATA_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "ADD_BILLING_DATA_FAILURE",payload: error.response}))
    ))
)
// Enable/Disable Organization
export const enableDisableOrgEpic = action$ => action$.pipe(
    ofType("INABLE_DISABLE_ORG_REQUEST"),
    mergeMap(action=> 
    from(API.get(`/organization/super-admin/disable?organizationId=${action.payload.id}`)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "INABLE_DISABLE_ORG_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "INABLE_DISABLE_ORG_FAILURE",payload: error.response}))
    ))
)
// Add STP information
export const addStpInfoEpic = action$ => action$.pipe(
    ofType("ADD_STP_INFO_REQUEST"),
    mergeMap(action=> 
    from(API.post(`/organization/stp-info`,action.payload)).pipe(
        // tap((response) => console.log("the response data from fetchinGDataById epic",response.data)),
        mergeMap(response => of({type: "ADD_STP_INFO_SUCCESS",payload: response.data})),
        catchError(error=> of({type: "ADD_STP_INFO_FAILURE",payload: error.response}))
    ))
)



