import Storage from '../common/Storage';
import React, { useState, useEffect } from "react";
import axios from "axios";  
const getCompany = () => JSON.parse(Storage.getValue('company'))
const setCompany = company => JSON.parse(Storage.setObject('company',company))
const removeCompany = () => Storage.remove('company');

const getUser = () => JSON.parse(Storage.getValue('user'));
const setUser = user => Storage.setObject('user', user);
const removeUser = () => Storage.remove('user');

const getIsLoggedIn = () => Storage.getValue('isLoggedIn');
const setIsLoggedIn = isLoggedIn => Storage.setValue('isLoggedIn', isLoggedIn);
const removeIsLoggedIn = () => Storage.remove('isLoggedIn');

const getAccessToken = () => Storage.getValue('accessToken');
const setAccessToken = accessToken => Storage.setValue('accessToken', accessToken);
const removeAccessToken = () => Storage.remove('accessToken');

export default {
    getCompany,
    setCompany,
    removeCompany,

    getUser,
    setUser,
    removeUser,

    getIsLoggedIn,
    setIsLoggedIn,
    removeIsLoggedIn,

    getAccessToken,
    setAccessToken,
    removeAccessToken
};
