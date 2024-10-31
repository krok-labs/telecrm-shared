import {
    INCOMING_CALL_EVENT,
    IncomingCallEventPayload,
} from 'src/modules/EventBus';

export interface IncomingCallWebsocketEvent {
    type: typeof INCOMING_CALL_EVENT,
    payload: IncomingCallEventPayload,
};
