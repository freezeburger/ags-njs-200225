/**
 * SEARCH
 * SEARCH.REQUEST
 * SEARCH.REQUEST.NEW
 * SEARCH.REQUEST.PROCESSING
 * SEARCH.REQUEST.DONE
 * SEARCH.RESULT
 * SEARCH.RESULT.NEW
 */

const PubSub = require('pubsub-js');

PubSub.topics = {
    SEARCH:'SEARCH',
    SEARCH_REQUEST:'SEARCH.REQUEST',
    SEARCH_REQUEST_NEW:'SEARCH.REQUEST.NEW',
    SEARCH_REQUEST_PROCESSING:'SEARCH.REQUEST.PROCESSING',
    SEARCH_REQUEST_DONE:'SEARCH.REQUEST.DONE',

    SEARCH_RESULT: 'SEARCH.RESULT',
    SEARCH_RESULT_LIST: 'SEARCH.RESULT.LIST',
    SEARCH_RESULT_LIST_REQUEST: 'SEARCH.RESULT.LIST.REQUEST',
    SEARCH_RESULT_LIST_RESPONSE: 'SEARCH.RESULT.LIST.RESPONSE',
    
    SEARCH_RESULT_KEYWORD:'SEARCH.RESULT.KEYWORD',
    SEARCH_RESULT_KEYWORD_REQUEST:'SEARCH.RESULT.KEYWORD.REQUEST',
    SEARCH_RESULT_KEYWORD_RESPONSE:'SEARCH.RESULT.KEYWORD.RESPONSE'
}

module.exports = PubSub;

PubSub.publish(PubSub.topics.SEARCH_REQUEST_PROCESSING, 123456 )