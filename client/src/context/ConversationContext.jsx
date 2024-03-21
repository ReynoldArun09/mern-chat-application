/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const MessageContext = createContext();

export const useMessageContext = () => {
  return useContext(MessageContext);
};

export const MessageContextProvider = ({ children }) => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([])
  return <MessageContext.Provider value={{selectedConversation, setMessages, setSelectedConversation, messages}}>{children}</MessageContext.Provider>;
};
