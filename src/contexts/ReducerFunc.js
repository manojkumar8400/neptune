export const productReducer = (state, action) => {

    switch (action.type) {
        case "Home_Category":
            return { ...state, byHomeCategory: action.payload }
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_STOCK":
            return { ...state, byStock: !state.byStock };
        case "FILTER_BY_DELIVERY":
            return { ...state, byFastDelivery: !state.byFastDelivery };
        case "NIKON":
            return { ...state, byNikon: action.payload };
        case "SONY":
            return { ...state, bySony: action.payload };
        case "CANON":
            return { ...state, byCanon: action.payload };
        case "PANASONIC":
            return { ...state, byPanasonic: action.payload };
        case "SAMSUNG":
            return { ...state, bySamsung: action.payload };
        case "RATING":
            return { ...state, byRating: action.payload };
        case "SEARCH":
            return { ...state, bySearch: action.payload };
        case "RANGE":
            return { ...state, byRange: action.payload }
        case "CLEAR":
            return {
                sort: null,
                byStock: false,
                byFastDelivery: false,
                byHomeCategory: null,
                byNikon: null,
                bySony: null,
                byCanon: null,
                byPanasonic: null,
                bySamsung: null,
                byRating: null,
                bySearch: "",
                byRange: null
            }
        default:
            return state;
    }
}