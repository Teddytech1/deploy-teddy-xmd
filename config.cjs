const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "TEDDY;;;H4sIAAAAAAAAA61Uu27jRhT9lWBaCmvxTQowEL4l0bJEvaUgxYgcUjSfGo5EUQu1qQ1susTNIkAeVQKkzRcEC+QX0qbyJwSUrV0Du3EcIGw4HM7ce86959zXIM3CAtmoAq3XIMfhDhJUL0mVI9AC6tb3EQYN4EECQQtwplcOpGCShdq4s4/LbZtabi6MeTxjRddkCcmZm9k+sY0pdwmODZBvV3HoPhPwylaHm1xxCHsj7ijaaBt40A3LIrrarYIpWqUclVHqnr9h64B1RBjiMA2MfI0ShGFso2oAQ/wy+DOzzHXHismKioZsmi7oLUe3F7STCSRrLuf0uBS1xdgdxNnL4IvXk43AdzNmf8VJcU/3snnODPGO3UljRio3eqDpxsEsKSt4gF+EQYq8jodSEpLqxXXfDOiJYnfHcRDZFXOwR6rkGz17fcGN9060iP0rfuXH8bA/jV4GPGQHLF8t6PhQIX/N0VZnOKQOiS8XgmWm12aU4N12TDd7I+4p8AE+ayX6L3Wn1OFYvyE7eRTtnNj06dFFdz+7SNswqpYHejyzQi5inKY3UV4GP1WGkb+kEKdtYV9U0SYNxNla7/tMz+Cm8YWOe7DMrUEx732AD8kWP4eyK84Ic/Atzx+WWEkz6rBjRDO12VmZ5VScyPSSpgdNB14vdTXWKAzHlcYqW7XvTaUqMVndhSuJL9ltOqO5ZnNBt1WlvDwxilDV8UCLPjYARkFYEAxJmKWnPbkBoLcbIRcjcqoumFqL0J5bbQL9bD/FN5u+LAhyEl2zrGoPxrI0FTJBQ/ohii5BA+Q4c1FRIK8dFiTDVQ8VBQxQAVpfnBpVc8YoyQjqhh5oAYbnRFlgRIGmhc+LV+UakgLm+asUEdAAPs6SHgItgreoAU4XTE7XdF1rGhrD8gJjSoqsN5uG0mRYU1JopWaYPCQdhwkqCExy0KJFTpSaAs0wx8b/hcOUJJnWdZ6TTF1TGINvGrQiyhIrqzwjPI+DZ45fNkCK9uRBxnXxWboB/BAXZJJu8ziD3lnj55/QdbNtSkZV6mr1AmHQerKNCAnToKiZbVOI3XW4Q1rNA7R8GBfofb8RRt6Zy+MM0zKvlqGzZDhh2p6DGnsd6KPatBj+4/KksD4N7t989ePvt+/e3t/dvvnjtz9/+uX+7u7Xd28/++vbb+7vbr++v7v9/v7u9rvH9w/3d7c/12vQAPEpjySKAivLMtvkZeGUqd4/vmdYA/IQgWFcgBbQemEvsEoncim6dBYLNVQUW1FqEZ4rcjbag5Lt3hRFVKXAYsdHWnfvVcGs9K05UfZUxOXzjrnkBUMam6H7qSC1F3ZOh2Ine35V0Eo79vaBjoWOwzMLymbnmWBdDZLroW2wq4m19T2dpfQrhjtonLEaHVaTwTo1cZcJ5hTHSb21YeFZArXgss7moV3ooqfJZiY1cVhjvOHLfBGY/cPKkRcbh6NUsblbuF0rn6nNsdAtxmaw0Tcuu5lcMNx1xcNsdJU6gn9dsIfhRrU2LJv02/ZO5fJTsvMIih9Hf/jozvD06YfoNEkfe/qvvX8AXku0eWw8ifE4m/9hvqmjG3OeD4rAwlfUUgnduZuZRXsfi07Pz/v2tFJnCK0Hxn6RgmPtlTyGxM9wAlqgSFYQNADOtrXgO6mfPZNJUzod1XmgHcOCKB9M9Alf0vTDqQHO8jYs1qAFBrOIV2tDVEqejwgkZ0sCpX4MDoHj3zgFirS8CAAA",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '✅ Auto Status Seen Bot',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  SLIKE: process.env.SLIKE !== undefined ? process.env.SLIKE === 'true' : true,
  SLIKE_EMOJIS: process.env.SLIKE_EMOJIS ? process.env.SLIKE_EMOJIS.split(',') : ['❤️', '🔥', '😍', '💯', '✨', '😎'],
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  AUTO_BIO: process.env.AUTO_BIO !== undefined ? process.env.AUTO_BIO === 'true' : true,
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : true,
  DELETE_PATH: process.env.DELETE_PATH || "pm",
  BLOCKED_PREFIXES: process.env.BLOCKED_PREFIXES ? process.env.BLOCKED_PREFIXES.split(',') : ['44', '212', '91'],
  OWNER_REACT: process.env.OWNER_REACT !== undefined ? process.env.OWNER_REACT === 'true' : false,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false,
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "Teddy",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "254799963583",
  BOT_NAME: process.env.BOT_NAME || "TEDDY-XMD",

  // Add these new fields:
  UPDATE_TRIGGERS: process.env.UPDATE_TRIGGERS 
    ? process.env.UPDATE_TRIGGERS.split(',') 
    : ['update', 'upgrade', 'refresh'],
  GITHUB_REPO: process.env.GITHUB_REPO || "PRO-DEVELOPER-1/CORE-AI",
  UPDATE_BRANCH: process.env.UPDATE_BRANCH || "main",
  PM2_NAME: process.env.PM2_NAME || "TEDDY-AI",
  GEMINI_KEY: process.env.GEMINI_KEY || "YOUR_KEY_HERE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false,

  // Plugin Loader Logs
  PLUGIN_LOG: process.env.PLUGIN_LOG !== undefined ? process.env.PLUGIN_LOG === 'true' : true,
  PLUGIN_SUCCESS_EMOJI: process.env.PLUGIN_SUCCESS_EMOJI || '✔',
  PLUGIN_FAIL_EMOJI: process.env.PLUGIN_FAIL_EMOJI || '❌',


};

module.exports = config;
