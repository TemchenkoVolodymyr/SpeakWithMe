const Users = require('../Schemas/newUsersSchema');

const jwt = require('jsonwebtoken');

const {promisify} = require('util');
const crypto = require('crypto');

const tokenUtility = require('../utility/Token');