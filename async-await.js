// import {getItem} from "./promises"; ops... node uses CommonJS
const {getItem} = require('./promises');

const funcAsync = async () => {
    const item = await getItem('Picles');

    console.log(item);
};

funcAsync();
