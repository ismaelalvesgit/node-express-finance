import categoryType from "../enum/categoryType";
import dividendsType from "../enum/dividendsType";
import * as brapiService from "../services/brapi.service";

/**
 * 
 * @param {import('../enum/categoryType')} type 
 * @param {string} name 
 */
 export const findBrapiQoute = (type, name) =>{
    switch (type) {
        case categoryType.CRIPTOMOEDA:
            return brapiService.findQouteCoin(name);
        default:
            return brapiService.findQoute(name);
    }
};

/**
 * 
 * @param {import('../enum/categoryType')} type 
 * @param {string} name 
 */
 export const searchBrapiQoute = (type, name) =>{
    switch (type) {
        case categoryType.CRIPTOMOEDA:
            return brapiService.searchQouteCoin(name);
        default:
            return brapiService.searchQoute(name);
    }
};

/**
 * 
 * @param {import('../enum/categoryType')} type 
 * @returns {boolean}
 */
 export const categoryIsBR = (type) =>{
    switch (type) {
        case categoryType.ACAO:
        case categoryType.ETF:
        case categoryType.FIIS:
        case categoryType.CRIPTOMOEDA:
            return true;
        default:
            return false;
    }
};

/**
 * 
 * @param {number} percent 
 * @param {number} value 
 */
 export const parsePercent = (percent, value) =>{
    const val = (percent / 100) * value;
    if(isNaN(val) || val === Infinity){
        return 0;
    }
    return val;
};

/**
 * 
 * @param {number} value1 
 * @param {number} value2 
 */
 export const diffPercent = (value1, value2) =>{
    const val = ((value1 - value2) / value2) * 100;
    if(isNaN(val) || val === Infinity){
        return 0;
    }
    return val;
};

/**
 * 
 * @param {number} value 
 * @param {number} mutiple 
 */
export const parseFloatValue = (value) =>{
    const val = parseFloat(value / 100).toFixed(2);
    if(isNaN(val) || val === Infinity){
        return 0;
    }
    return val;
};

/**
 * 
 * @param {string} date 
 * @param {string} format 
 * @param {string} delimiter 
 * @returns 
 */
export const stringToDate = (date, format, delimiter) =>{
    var formatLowerCase = format.toLowerCase();
    var formatItems = formatLowerCase.split(delimiter);
    var dateItems = date.split(delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    return formatedDate;
};

/**
 * 
 * @param {string} value 
 * @returns 
 */
export const formatAmount = (value) =>{
    return value
        .replace(",", ".")
        .replace(" ", "");
};

/**
 * 
 * @param {string} value 
 * @returns { import('../enum/dividendsType') }
 */
export const parseStringToDividendType = (value)=>{
    switch (value) {
        case "JCP":
            return dividendsType.JCP;
        default:
            return dividendsType.DIVIDEND;
    }
};

/**
 * 
 * @param {string} join 
 * @param {Array<string>} selects
 * @returns {string} 
 */
export const jsonObjectQuerySelect = (join, selects)=>{
    const data = [];

    selects.forEach((select)=>{
        data.push(`'${select}', ${join}.${select}`);
    });

    return "JSON_OBJECT("+ data + `) as ${join}`;
};

/**
 * 
 * @param {string} join 
 * @param {Array<string>} selects
 * @returns {string} 
 */
export const jsonObjectArrayQuerySelect = (join, selects)=>{
    const data = [];

    selects.forEach((select)=>{
        data.push(`'${select}', ${join}.${select}`);
    });

    return "JSON_ARRAYAGG(JSON_OBJECT("+ data + `)) as ${join}`;
};