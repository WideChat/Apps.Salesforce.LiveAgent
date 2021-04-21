export enum InfoLogs {
	INITIATING_LIVEAGENT_SESSION = 'Initiating Liveagent Session.',
	LIVEAGENT_SESSION_INITIATED = 'Liveagent Session Initiated.',
	LIVEAGENT_SESSION_ID_GENERATED = 'Liveagent Session ID generated.',
	SENDING_LIVEAGENT_CHAT_REQUEST = 'Sending Liveagent chat request.',
	LIVEAGENT_CHAT_REQUEST_SENT = 'Liveagent chat request sent.',
	LIVEAGENT_SESSION_CLOSED = 'Liveagent Session closed.',
	MESSAGE_SENT_TO_LIVEAGENT = 'Message sent to Liveagent.',
	LIVAGENT_CURRENTLY_TYPING = 'Liveagent currently typing.',
	LIVEAGENT_ACCEPTED_CHAT_REQUEST = 'Chat request accepted by Liveagent.',
	SUCCESSFULLY_RECIEVED_LIVEAGENT_RESPONSE = 'Successfully recieved Liveagent Response.',
	HANDOVER_ENDPOINT_REQUEST_RECEIVED = 'Handover endpoint request recieved',
	AVAILABILITY_ENDPOINT_REQUEST_RECEIVED = 'Availability endpoint request recieved',
	CHATBOT_NOT_CONFIGURED = 'Chatbot is not configured in app settings.',
	ENDCHAT_EVENT_NOT_ENABLED = 'Dialogflow endchat event not enabled.',
	UNHANDLED_BLOCK_ACTION_ID = 'Visitor interacted with unhandled actionId block.',
	DIALOGFLOW_AGENT_ENDED_CHAT = 'Agent Ended Chat. Triggering DIALOGFLOW_END_EVENT',
	DIALOGFLOW_CUSTOMER_ENDED_CHAT = 'Customer Ended Chat. Triggering DIALOGFLOW_END_EVENT',
	DIALOGFLOW_CUSTOMER_IDLE_TIMEOUT = 'Chat ended due to customer idle timeout',
	DIALOGFLOW_AGENT_UNAVAILABLE_SESSION = 'No Agent Found. Triggering DIALOGFLOW_AGENT_UNAVAILABLE_EVENT',
	CONNECTING_TO_SALESFORCE_LIVEAGENT = 'Connected to salesforce agent:',
}
