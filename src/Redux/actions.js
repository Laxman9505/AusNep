// import { ADMIN_AUTH_FAILURE, ADMIN_AUTH_REQUEST, ADMIN_AUTH_SUCCESS, ADMIN_CREDENCIAL_INPUT, SUCCESS_CATEGORY_LIST, TOOGLE_SIDEBAR,FAILURE_CATEGORY_LIST, OPEN_CATEGORY_MODAL, ADD_CATEGORY_INPUT, POST_CATEGORY_REQUEST, POST_CATEGORY_SUCCESS, POST_CATEGORY_FAILURE, PUT_CATEGORY_REQUEST, FETCH_CATEGORY_BY_ID_REQUEST, FETCH_CATEGORY_BY_ID_SUCCESS, FETCH_CATEGORY_BY_ID_FAILURE, OPEN_EDIT_CATEGORY_MODAL, PUT_CATEGORY_SUCCESS, PUT_CATEGORY_FAILURE, FETCH_SUB_CATEGORY_SUCCESS, FETCH_SUB_CATEGORY_FAILURE } from "./actionType"

// export const handleAdminCre_Input = (values)=> {
//     return {
//         type: ADMIN_CREDENCIAL_INPUT,
//         payload: {
//             values
//         }
//     }
// }
// export const handleAddCategoryInput = (values)=> {
//     return {
//         type: ADD_CATEGORY_INPUT,
//         payload: {
//             values
//         }
//     }
// }
// // login
// export const loginRequest = (adminCredencial)=> {
//     return {
//         type: ADMIN_AUTH_REQUEST,
//         payload: {
//             adminCredencial
//         }
//     }
// }
// export const loginSuccess = (data)=> {
//     return {
//         type: ADMIN_AUTH_SUCCESS,
//         payload: { data }
//     }
// }
// export const loginFailure = (error)=> {
//     return {
//         type: ADMIN_AUTH_FAILURE,
//         payload: { error }
//     }
// }

// export const toogleSidebar = ()=> {
//     return {
//         type: TOOGLE_SIDEBAR,
//     }
// }

// export const successCategoryList = (category)=> {
//     return {
//         type: SUCCESS_CATEGORY_LIST,
//         payload: {
//             category
//         }
//     }
// }
// export const failureCategoryList = (error)=> {
//     return {
//         type: FAILURE_CATEGORY_LIST,
//         payload: { error }
//     }
// }

// // handle add Category modal
// export const handleCategoryModal = ()=> {
//     return {
//         type: OPEN_CATEGORY_MODAL
//     }
// }
// // handle EDIT Category modal
// export const handleEditCategoryModal = ()=> {
//     return {
//         type: OPEN_EDIT_CATEGORY_MODAL
//     }
// }
// // posting category
// export const postCategoryRequest = (values)=> {
//     return {
//         type: POST_CATEGORY_REQUEST,
//         payload: {
//             values
//         }
//     }
// }
// export const postCategorySuccess = (data)=> {
//     return {
//         type: POST_CATEGORY_SUCCESS,
//         payload: {
//             data
//         }
//     }
// }
// export const postCategoryFailure = (error)=> {
//     return {
//         type: POST_CATEGORY_FAILURE,
//         payload: {
//             error
//         }
//     }
// }
// // fetch categoy by id
// export const fetchingCategoryByIdRequest = (id)=> {
//     return {
//         type: FETCH_CATEGORY_BY_ID_REQUEST,
//         payload: {
//             id
//         }
//     }
// }
// export const fetchingCategoryByIdSuccess = (data)=> {
//     return {
//         type: FETCH_CATEGORY_BY_ID_SUCCESS,
//         payload: {
//             data
//         }
//     }
// }
// export const fetchingCategoryByIdFailure = (error)=> {
//     return {
//         type: FETCH_CATEGORY_BY_ID_FAILURE,
//         payload: {
//             error
//         }
//     }
// }
// // putting category
// export const putCategoryRequest = (values)=> {
//     // console.log("The vlaues came to update category",values)
//     return {
//         type: PUT_CATEGORY_REQUEST,
//         payload: {
//             values
//         }
//     }
// }
// export const putCategorySuccess = (data)=> {
//     return {
//         type: PUT_CATEGORY_SUCCESS,
//         payload: {
//             data
//         }
//     }
// }
// export const putCategoryFailure = (error)=> {
//     return {
//         type: PUT_CATEGORY_FAILURE,
//         payload: {
//             error
//         }
//     }
// }
// // FETCHING sub-category

// export const fetchSubCategorySuccess = (data)=> {
//     return {
//         type: FETCH_SUB_CATEGORY_SUCCESS,
//         payload: {
//             data
//         }
//     }
// }
// export const fetchSubCategoryFaillure = (error)=> {
//     return {
//         type: FETCH_SUB_CATEGORY_FAILURE,
//         payload: {
//             error
//         }
//     }
// }
