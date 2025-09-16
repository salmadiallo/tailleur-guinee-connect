import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Phone, Video, MoreVertical, Paperclip, Image, Smile, Search } from "lucide-react";
import Header from "@/components/Header";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const conversations = [
    {
      id: 1,
      name: "Mamadou Diallo",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Votre commande sera prête demain",
      timestamp: "14:30",
      unread: 2,
      online: true,
      type: "tailleur"
    },
    {
      id: 2,
      name: "Fatoumata Camara",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c667d649?w=50&h=50&fit=crop&crop=face",
      lastMessage: "J'ai bien reçu vos mesures",
      timestamp: "12:15",
      unread: 0,
      online: false,
      type: "tailleur"
    },
    {
      id: 3,
      name: "Aminata Touré",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Merci beaucoup !",
      timestamp: "Hier",
      unread: 0,
      online: true,
      type: "client"
    }
  ];

  // Filtrer les conversations basé sur la recherche
  const filteredConversations = useMemo(() => {
    if (!searchQuery.trim()) {
      return conversations;
    }
    return conversations.filter(conv => 
      conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const messages = [
    {
      id: 1,
      sender: "other",
      content: "Bonjour ! J'ai bien reçu votre commande pour le boubou traditionnel.",
      timestamp: "14:00",
      type: "text"
    },
    {
      id: 2,
      sender: "me",
      content: "Parfait ! Quand est-ce que je peux passer pour les mesures ?",
      timestamp: "14:05",
      type: "text"
    },
    {
      id: 3,
      sender: "other",
      content: "Vous pouvez passer demain matin vers 9h. Mon atelier se trouve à Kaloum.",
      timestamp: "14:10",
      type: "text"
    },
    {
      id: 4,
      sender: "other",
      content: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      timestamp: "14:15",
      type: "image"
    },
    {
      id: 5,
      sender: "other",
      content: "Voici un exemple de boubou que j'ai réalisé récemment. Le style vous convient ?",
      timestamp: "14:16",
      type: "text"
    },
    {
      id: 6,
      sender: "me",
      content: "C'est exactement ce que je recherche ! Le travail est magnifique.",
      timestamp: "14:20",
      type: "text"
    },
    {
      id: 7,
      sender: "other",
      content: "Merci ! Votre commande sera prête demain.",
      timestamp: "14:30",
      type: "text"
    }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      // Logic to send message would go here
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1">
            <CardHeader className="pb-3">
              <h2 className="text-lg font-semibold">Messages</h2>
              {/* Barre de recherche */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Rechercher une conversation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-1">
                {filteredConversations.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    Aucune conversation trouvée
                  </div>
                ) : (
                  filteredConversations.map((conv, index) => (
                    <div
                      key={conv.id}
                      onClick={() => setSelectedChat(conversations.findIndex(c => c.id === conv.id))}
                      className={`p-3 cursor-pointer hover:bg-gray-50 border-l-4 ${
                        selectedChat === conversations.findIndex(c => c.id === conv.id)
                          ? 'border-primary bg-primary/5' 
                          : 'border-transparent'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img
                            src={conv.avatar}
                            alt={conv.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          {conv.online && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-sm truncate">{conv.name}</h3>
                            <span className="text-xs text-gray-500">{conv.timestamp}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-600 truncate">{conv.lastMessage}</p>
                            {conv.unread > 0 && (
                              <Badge className="bg-primary text-white rounded-full w-5 h-5 text-xs flex items-center justify-center p-0">
                                {conv.unread}
                              </Badge>
                            )}
                          </div>
                          <Badge variant="secondary" className="text-xs mt-1">
                            {conv.type === 'tailleur' ? 'Tailleur' : 'Client'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Chat Window */}
          <Card className="lg:col-span-3 flex flex-col">
            {/* Chat Header */}
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={conversations[selectedChat].avatar}
                      alt={conversations[selectedChat].name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    {conversations[selectedChat].online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{conversations[selectedChat].name}</h3>
                    <p className="text-sm text-gray-600">
                      {conversations[selectedChat].online ? 'En ligne' : 'Hors ligne'}
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
            </CardHeader>

            {/* Messages */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      message.sender === 'me'
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
                      message.sender === 'me' ? 'text-primary-foreground/70' : 'text-gray-500'
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
      </div>
    </div>
  );
};

export default ChatPage;