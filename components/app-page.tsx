"use client";

import { useState, useEffect, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  MessageCircle,
  Heart,
  Repeat2,
  Send,
  Search,
  PlusCircle,
  Home,
  Bell,
  Wallet,
  HelpCircle,
  BookOpen,
  Menu,
  Share2,
  TrendingUp,
  Settings,
  LogOut,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import CampaignForm from "./CampaignForm";
import ContentSubmissionForm from "./ContentSubmissionForm";

const mockCampaigns = [
  {
    id: 1,
    brand: "TikTok Shop",
    username: "@tikshop",
    title: "Summer Fashion Haul",
    description:
      "Create a 60-second video showcasing our top 5 summer fashion items. Use hashtags #TikTokShopSummer #FashionHaul",
    productId: "TIKTOK001",
    productLink: "https://shop.tiktok.com/summer2023",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Open",
    reward: "$100",
  },
  {
    id: 2,
    brand: "BeautyBliss",
    username: "@beautybliss",
    title: "Skincare Routine Challenge",
    description:
      "Show your nighttime skincare routine using our new cleanser and moisturizer. 30-second video, focus on before/after.",
    productId: "BEAUTY002",
    productLink: "https://shop.tiktok.com/beautybliss",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "In Progress",
    reward: "$75",
  },
  {
    id: 3,
    brand: "FitFuel",
    username: "@fitfuel_official",
    title: "Protein Shake Recipe Challenge",
    description:
      "Create a unique protein shake recipe using our new FitFuel protein powder. Show the process and taste test in a 45-second video. #FitFuelChallenge",
    productId: "FITFUEL003",
    productLink: "https://shop.tiktok.com/fitfuel-protein",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Open",
    reward: "$150",
  },
  {
    id: 4,
    brand: "GreenThumb",
    username: "@greenthumb_garden",
    title: "Indoor Plant Care Tips",
    description:
      "Share your best tips for caring for indoor plants using our GreenThumb plant food. Create a series of 3 short videos (15-20 seconds each) showcasing different plants. #GreenThumbTips",
    productId: "GRTHUMB004",
    productLink: "https://shop.tiktok.com/greenthumb-plantfood",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Open",
    reward: "$120",
  },
  {
    id: 5,
    brand: "TechNova",
    username: "@technova_gadgets",
    title: "Unbox & Review Our Latest Smartwatch",
    description:
      "Unbox and review our new TechNova Smartwatch X1. Highlight key features and demonstrate its use in daily life. 2-minute video required. #TechNovaX1 #SmartWatchReview",
    productId: "TCHNOVA005",
    productLink: "https://shop.tiktok.com/technova-smartwatch-x1",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "Open",
    reward: "$200",
  },
  {
    id: 6,
    brand: "Wanderlust Backpacks",
    username: "@wanderlust_bp",
    title: "Adventure Ready Challenge",
    description:
      "Show how you pack our Wanderlust Backpack for a weekend adventure. Highlight its features and capacity. 60-second video, bonus points for scenic locations! #WanderlustAdventures",
    productId: "WLUST006",
    productLink: "https://shop.tiktok.com/wanderlust-backpack",
    avatar: "/placeholder.svg?height=40&width=40",
    status: "In Progress",
    reward: "$180",
  },
];

const whoToFollow = [
  {
    username: "bro.pereira",
    name: "Bro Pereira",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    username: "nike",
    name: "Nike",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    username: "temu",
    name: "Temu",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    username: "neymarjr",
    name: "Neymar Jr.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

const WeeSeeIcon = () => (
  <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full">
    <Share2 size={20} className="absolute" />
    <TrendingUp size={20} className="absolute opacity-50 transform rotate-45" />
  </div>
);

export function AppPage() {
  const [campaigns, setCampaigns] = useState(mockCampaigns);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleNewCampaign = (campaign: {
    id: number;
    brand: string;
    username: string;
    title: string;
    description: string;
    productId: string;
    productLink: string;
    avatar: string;
    status: string;
    reward: string;
  }) => {
    setCampaigns([
      ...campaigns,
      {
        ...campaign,
        avatar: "/placeholder.svg?height=40&width=40",
        status: "Open",
      },
    ]);
    setIsCreating(false);
  };

  const handleAcceptCampaign = (campaign: SetStateAction<null>) => {
    setSelectedCampaign(campaign);
  };

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const Sidebar = () => (
    <div className="flex flex-col h-full">
      <div className="flex items-center space-x-2 px-6 py-4">
        <WeeSeeIcon />
        <h1 className="text-2xl font-bold">Wee See</h1>
      </div>
      <ScrollArea className="flex-grow px-6">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold mb-2">Menu</h2>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
          >
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Wallet
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-1">
          <h2 className="text-lg font-semibold mb-2">Support</h2>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
            onClick={() => setShowOnboarding(true)}
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Onboarding
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            Help Center
          </Button>
        </div>
        <Separator className="my-4" />
        <div className="space-y-1">
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-lg hover:bg-accent"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button>
        </div>
      </ScrollArea>
      <div className="px-6 py-4 border-t">
        <Button
          className="w-full rounded-lg"
          onClick={() => setIsCreating(true)}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Campaign
        </Button>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm font-medium">Dark Mode</span>
          <Switch checked={darkMode} onCheckedChange={setDarkMode} />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`max-w-7xl mx-auto bg-background min-h-screen flex flex-col lg:flex-row ${
        darkMode ? "dark" : ""
      }`}
    >
      {/* Mobile Header */}
      <header className="lg:hidden sticky top-0 z-20 bg-background border-b p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <WeeSeeIcon />
          <h1 className="text-2xl font-bold">Wee See</h1>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </header>

      {/* Left Sidebar - Desktop */}
      <div className="hidden lg:block w-64 border-r sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 border-r">
        <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b p-4">
          <div className="relative">
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              size={20}
            />
            <input
              type="search"
              placeholder="Search campaigns..."
              className="pl-10 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>
        <ScrollArea className="h-[calc(100vh-65px)] lg:h-screen">
          <div className="divide-y">
            {filteredCampaigns.map((campaign) => (
              <Card
                key={campaign.id}
                className="rounded-none border-x-0 border-t-0 hover:bg-accent/50 transition-colors"
              >
                <CardHeader className="flex flex-row items-start space-y-0 space-x-4 p-6">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={campaign.avatar} alt={campaign.brand} />
                    <AvatarFallback>{campaign.brand[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">
                          {campaign.brand}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {campaign.username}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        onClick={() => handleAcceptCampaign(campaign as any)}
                      >
                        Apply
                      </Button>
                    </div>
                    <h3 className="font-bold mt-2 text-xl">{campaign.title}</h3>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-base">{campaign.description}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span>Product ID: {campaign.productId}</span>
                    <span>Status: {campaign.status}</span>
                    <span>Reward: {campaign.reward}</span>
                  </div>
                  <a
                    href={campaign.productLink}
                    className="text-sm text-blue-500 hover:underline mt-4 inline-block"
                  >
                    View Product
                  </a>
                </CardContent>
                <CardFooter className="p-6 flex justify-between">
                  <div className="flex space-x-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-accent"
                    >
                      <MessageCircle size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-accent"
                    >
                      <Heart size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-accent"
                    >
                      <Repeat2 size={20} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-accent"
                    >
                      <Send size={20} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4 space-y-4 hidden lg:block">
        <Card className="rounded-lg sticky top-4">
          <CardHeader>
            <h2 className="text-xl font-bold">Who to follow</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {whoToFollow.map((user) => (
                <div
                  key={user.username}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        @{user.username}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-full">
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {isCreating && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg rounded-lg">
            <CardHeader>
              <h2 className="text-xl font-bold">Create New Campaign</h2>
            </CardHeader>
            <CardContent>
              <CampaignForm onSubmit={handleNewCampaign} />
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => setIsCreating(false)}
                className="rounded-full"
              >
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg rounded-lg">
            <CardHeader>
              <h2 className="text-xl font-bold">
                Apply for {selectedCampaign?.title as any}
              </h2>
            </CardHeader>
            <CardContent>
              <ContentSubmissionForm campaign={selectedCampaign} />
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => setSelectedCampaign(null)}
                className="rounded-full"
              >
                Close
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      {showOnboarding && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-lg rounded-lg">
            <CardHeader>
              <h2 className="text-xl font-bold">Welcome to Wee See!</h2>
            </CardHeader>
            <CardContent>
              <p>Heres a quick guide to get you started:</p>
              <ol className="list-decimal list-inside mt-2 space-y-2">
                <li>Browse campaigns in the main feed</li>
                <li>Apply to campaigns that interest you</li>
                <li>Create content and submit for approval</li>
                <li>Get paid when your content is approved!</li>
              </ol>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => setShowOnboarding(false)}
                className="rounded-full"
              >
                Got it!
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
