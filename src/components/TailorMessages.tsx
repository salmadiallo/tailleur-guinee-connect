import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Search, Phone, Video, MoreVertical, Paperclip, Image, Smile } from "lucide-react";

const TailorMessages = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      clientName: "Aminata Touré",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Merci pour le boubou, il est magnifique !",
      timestamp: "14:30",
      unread: 0,
      online: true,
      orderRef: "CMD001"
    },
    {
      id: 2,
      clientName: "Moussa Camara",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Quand puis-je passer pour les mesures ?",
      timestamp: "12:15",
      unread: 2,
      online: false,
      orderRef: "CMD002"
    },
    {
      id: 3,
      clientName: "Fatoumata Diallo",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=50&h=50&fit=crop&crop=face",
      lastMessage: "J'aimerais modifier quelque chose",
      timestamp: "Hier",
      unread: 1,
      online: true,
      orderRef: "CMD003"
    },
    {
      id: 4,
      clientName: "Ibrahim Koné",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Parfait, rendez-vous demain !",
      timestamp: "Hier",
      unread: 0,
      online: false,
      orderRef: "CMD004"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "client",
      content: "Bonjour Mamadou ! J'ai vu votre travail sur le boubou traditionnel.",
      timestamp: "14:00",
      type: "text"
    },
    {
      id: 2,
      sender: "tailor",
      content: "Bonjour Aminata ! Merci beaucoup. Comment puis-je vous aider ?",
      timestamp: "14:05",
      type: "text"
    },
    {
      id: 3,
      sender: "client",
      content: "J'aimerais commander un boubou similaire pour un mariage.",
      timestamp: "14:10",
      type: "text"
    },
    {
      id: 4,
      sender: "tailor",
      content: "Excellente idée ! Voici quelques modèles que je peux réaliser :",
      timestamp: "14:15",
      type: "text"
    },
    {
      id: 5,
      sender: "tailor",
      content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      timestamp: "14:16",
      type: "image"
    },
    {
      id: 6,
      sender: "client",
      content: "Merci pour le boubou, il est magnifique !",
      timestamp: "14:30",
      type: "text"
    }
  ];

  const filteredConversations = conversations.filter(conv => 
    conv.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sendMessage = () => {
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <div className="grid lg:grid-cols-4 gap-6 h-[600px]">
      {/* Conversations List */}
      <Card className="lg:col-span-1">
        <CardContent className="p-4">
          <div className="space-y-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un client..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Conversations */}
            <div className="space-y-2">
              {filteredConversations.length === 0 ? (
                <div className="text-center text-gray-500 py-4">
                  Aucune conversation trouvée
                </div>
              ) : (
                filteredConversations.map((conv, index) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedChat(conversations.findIndex(c => c.id === conv.id))}
                    className={`p-3 cursor-pointer hover:bg-gray-50 rounded-lg border-l-4 ${
                      selectedChat === conversations.findIndex(c => c.id === conv.id)
                        ? 'border-primary bg-primary/5' 
                        : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={conv.avatar} alt={conv.clientName} />
                          <AvatarFallback>{conv.clientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {conv.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sm truncate">{conv.clientName}</h3>
                          <span className="text-xs text-gray-500">{conv.timestamp}</span>
                        </div>
                        <p className="text-xs text-gray-600 truncate">{conv.lastMessage}</p>
                        <div className="flex items-center justify-between mt-1">
                          <Badge variant="outline" className="text-xs">
                            {conv.orderRef}
                          </Badge>
                          {conv.unread > 0 && (
                            <Badge className="bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center p-0">
                              {conv.unread}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="lg:col-span-3 flex flex-col">
        {/* Chat Header */}
        <div className="border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={conversations[selectedChat]?.avatar} alt={conversations[selectedChat]?.clientName} />
                  <AvatarFallback>
                    {conversations[selectedChat]?.clientName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                {conversations[selectedChat]?.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold">{conversations[selectedChat]?.clientName}</h3>
                <p className="text-sm text-gray-600">
                  {conversations[selectedChat]?.online ? 'En ligne' : 'Hors ligne'} • {conversations[selectedChat]?.orderRef}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'tailor' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.sender === 'tailor'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.type === 'image' ? (
                  <div className="space-y-2">
                    <img
                      src={message.content}
                      alt="Image partagée"
                      className="rounded-lg max-w-full"
                    />
                  </div>
                ) : (
                  <p className="text-sm">{message.content}</p>
                )}
                <p className={`text-xs mt-1 ${
                  message.sender === 'tailor' ? 'text-primary-foreground/70' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </CardContent>

        {/* Message Input */}
        <div className="border-t p-4">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <Paperclip className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Image className="w-5 h-5" />
            </Button>
            <div className="flex-1 relative">
              <Input
                placeholder="Tapez votre message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="pr-10"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full"
              >
                <Smile className="w-5 h-5" />
              </Button>
            </div>
            <Button 
              onClick={sendMessage}
              className="gradient-gold text-white"
              disabled={!newMessage.trim()}
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TailorMessages;