// import { toast } from "react-toastify";
// import { authenticateAdmin, validateUserAdmin, getNameAdmin, validateOTPForgotPassword } from "../FrontendHelper";
// import { ADD_CATEGORY_INPUT, ADMIN_AUTH_FAILURE, ADMIN_AUTH_REQUEST, ADMIN_AUTH_SUCCESS, ADMIN_CREDENCIAL_INPUT, TOOGLE_SIDEBAR } from "./actionType";

// const initialState = {
//     buttonText: "Submit",
//     updateButtonText: "Update",
//     isToogleSidebar: false,
//     isLoadingOnLogin: false,
//     isSuccessOnLogin: false,

//     isEnabledUsers: "",
//     adminCredencial: {
//         userName: "",
//         password: ""
//     },

//     dashboardData: {},
//     organizations: {},
//     taxInfo: {},
//     orgDetailsData: {},
//     billingData: {},

//     privacyData: {},
//     termsAndConditionData: {},
//     // MODAL
//     isAddCouponModal: false,

// }

// const orkReducer = (state = initialState, action) => {
//     // sidebar toggler
//     if (action.type === TOOGLE_SIDEBAR) {
//         return { ...state, isToogleSidebar: !state.isToogleSidebar }
//     }

//     // post data to authorize
//     if (action.type === ADMIN_AUTH_REQUEST) {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === ADMIN_AUTH_SUCCESS) {
//         authenticateAdmin(action.payload, () => {
//             console.log("the data is saved in locaStorage")
//         })
//         return { ...state, isSuccessOnLogin: true, isLoadingOnLogin: false }
//     }
//     if (action.type === ADMIN_AUTH_FAILURE) {
//         if (action.payload.data === undefined) {
//             toast.error("Invalid Login Credentials !!!");
//         } else {
//             toast.error(action.payload.data.message)
//         }
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // Log out
//     if (action.type === "LOG_OUT_REQUEST") {
//         return { ...state, isSuccessOnLogin: false }
//     }
//     // input form data
//     if (action.type === ADMIN_CREDENCIAL_INPUT) {
//         return { ...state, adminCredencial: action.payload.values }
//     }
//     if (action.type === ADD_CATEGORY_INPUT) {
//         return { ...state, isPostingCategory: action.payload.values }
//     }

//     // fetch dashboard payrun data
//     if (action.type === "FETCH_DASHBOARD_DATA_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_DASHBOARD_DATA_SUCCESS") {
//         return { ...state, dashboardData: action.payload, isLoadingOnLogin: false }
//     }
//     if (action.type === "FETCH_DASHBOARD_DATA_FAILURE") {
//         toast.error("Sorry!!! Network Error.")
//         return { ...state, isLoadingOnLogin: false }
//     }

//     // fetch privacy and policy
//     if (action.type === "FETCH_PRIVACY_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_PRIVACY_SUCCESS") {
//         return { ...state, isLoadingOnLogin: false, privacyData: action.payload.privacyPolocy }
//     }
//     if (action.type === "FETCH_PRIVACY_FAILURE") {
//         toast.error("Something Went Wrong. Try Again Later !!!");
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // fetch terms and condition
//     if (action.type === "FETCH_TERMS_CONDITION_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_TERMS_CONDITION_SUCCESS") {
//         return { ...state, isLoadingOnLogin: false, termsAndConditionData: action.payload.termsAndCondition }
//     }
//     if (action.type === "FETCH_TERMS_CONDITION_FAILURE") {
//         toast.error("Something Went Wrong. Try Again Later !!!");
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // POST PRIVACY AND POLICY
//     if (action.type === "POST_PRIVACY_REQUEST") {
//         return { ...state, updateButtonText: "Updating" }
//     }
//     if (action.type === "POST_PRIVACY_SUCCESS") {
//         toast.success("Privacy and Policy data has been Updated !!!!")
//         return { ...state, updateButtonText: "Update" }
//     }
//     if (action.type === "POST_PRIVACY_FAILURE") {
//         if (action.payload.data === undefined) {
//             toast.error("Internal Server Error. Try Again Later !!!");
//         } else {
//             toast.error(action.payload.data.message)
//         }
//         return { ...state, updateButtonText: "Update" }
//     }
//     // add billing data
//     if (action.type === "ADD_BILLING_DATA_REQUEST") {
//         return { ...state, buttonText: "Submitting",isEnabledUsers: "a" }
//     }
//     if (action.type === "ADD_BILLING_DATA_SUCCESS") {
//         toast.success("Billing data added successfully !!!!")
//         return { ...state, buttonText: "Submit",isEnabledUsers: "b" }
//     }
//     if (action.type === "ADD_BILLING_DATA_FAILURE") {
//         if (action.payload.data === undefined) {
//             toast.error("Internal Server Error. Try Again Later !!!");
//         } else {
//             toast.error(action.payload.data.message)
//         }
//         return { ...state, buttonText: "Submit",isEnabledUsers: ""}
//     }
//     // post TERMS AND CONDITION
//     if (action.type === "POST_TERMS_SERVICE_REQUEST") {
//         return { ...state, updateButtonText: "Updating" }
//     }
//     if (action.type === "POST_TERMS_SERVICE_SUCCESS") {
//         toast.success("Terms and Service data has been Updated !!!!")
//         return { ...state, updateButtonText: "Update" }
//     }
//     if (action.type === "POST_TERMS_SERVICE_FAILURE") {
//         if (action.payload.data === undefined) {
//             toast.error("Internal Server Error. Try Again Later !!!");
//         } else {
//             toast.error(action.payload.data.message)
//         }
//         return { ...state, updateButtonText: "Update" }
//     }
//     // fetCH tax information
//     if (action.type === "FETCH_TAX_INFO_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_TAX_INFO_SUCCESS") {
//         return { ...state, isLoadingOnLogin: false, taxInfo: action.payload }
//     }
//     if (action.type === "FETCH_ORGANIZATIONS_FAILURE") {
//         toast.error("Something Went Wrong. Try Again Later !!!");
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // fetch organization data
//     if (action.type === "FETCH_ORGANIZATIONS_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_ORGANIZATIONS_SUCCESS") {
//         return { ...state, isLoadingOnLogin: false, organizations: action.payload,isEnabledUsers:"" }
//     }
//     if (action.type === "FETCH_ORGANIZATIONS_FAILURE") {
//         toast.error("Something Went Wrong. Try Again Later !!!");
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // fetch billing data
//     if (action.type === "FETCH_BILLING_DATA_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_BILLING_DATA_SUCCESS") {
//         return { ...state, isLoadingOnLogin: false, billingData: action.payload,isEnabledUsers:"" }
//     }
//     if (action.type === "FETCH_BILLING_DATA_FAILURE") {
//         toast.error("Something Went Wrong. Try Again Later !!!");
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // fetch organization details
//     if (action.type === "FETCH_ORG_DETAILS_REQUEST") {
//         return { ...state, isLoadingOnLogin: true }
//     }
//     if (action.type === "FETCH_ORG_DETAILS_SUCCESS") {
//         return { ...state, isLoadingOnLogin: false, orgDetailsData: action.payload }
//     }
//     if (action.type === "FETCH_ORG_DETAILS_FAILURE") {
//         toast.error("Something Went Wrong. Try Again Later !!!");
//         return { ...state, isLoadingOnLogin: false }
//     }
//     // Enable/Disable Organization
//     if (action.type === "INABLE_DISABLE_ORG_REQUEST") {
//         return { ...state, isEnabledUsers: "a" }
//     }
//     if (action.type === "INABLE_DISABLE_ORG_SUCCESS") {
//         if (action.payload !== undefined) {
//             toast.success(action.payload.message)
//         } else {
//             toast.success("Success Message !!!")
//         }

//         return { ...state, isEnabledUsers: "b" }
//     }
//     if (action.type === "INABLE_DISABLE_ORG_FAILURE") {
//         if (action.payload.data === undefined) {
//             toast.error("Internal Server Error. Try Again Later !!!");
//         } else {
//             toast.error(action.payload.data.message)
//         }
//         return { ...state, isEnabledUsers: "" }
//     }
//     // Add stp information
//     if (action.type === "ADD_STP_INFO_REQUEST") {
//         return { ...state, isEnabledUsers: "a" }
//     }
//     if (action.type === "ADD_STP_INFO_SUCCESS") {
//         toast.success("STP information sent successfully !!!")
//         return { ...state, isEnabledUsers: "b" }
//     }
//     if (action.type === "ADD_STP_INFO_FAILURE") {
//         if (action.payload.data === undefined) {
//             toast.error("Internal Server Error. Try Again Later !!!");
//         } else {
//             toast.error(action.payload.data.message)
//         }
//         return { ...state, isEnabledUsers: "" }
//     }

//     // handle modals
//     // if (action.type === "ADD_COUPON_MODAL") {
//     //     return { ...state, isAddCouponModal: !state.isAddCouponModal }
//     // }

//     return state;
// }

// export default orkReducer
