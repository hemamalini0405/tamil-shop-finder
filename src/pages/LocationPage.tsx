import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { locations } from '@/data/mockData';
import { Search, MapPin, ArrowRight, ShoppingBag, LogOut } from 'lucide-react';

const LocationPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    }
  }, [navigate]);

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLocationSelect = (locationName: string) => {
    setSelectedLocation(locationName);
  };

  const handleContinue = () => {
    if (selectedLocation) {
      localStorage.setItem('selectedLocation', selectedLocation);
      navigate('/shops');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('selectedLocation');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">PriceHunt TN</span>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Choose Your <span className="text-primary">Location</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Select a city in Tamil Nadu to discover shops and compare prices
            </p>
          </div>

          {/* Search Box */}
          <div className="relative mb-8 animate-slide-up">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for Chennai, Coimbatore, Madurai..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg shadow-card"
            />
          </div>

          {/* Location Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {filteredLocations.map((location, index) => (
              <Card
                key={location.id}
                className={`cursor-pointer transition-all duration-300 animate-slide-up ${
                  selectedLocation === location.name
                    ? 'ring-2 ring-primary border-primary bg-primary/5'
                    : 'hover:border-primary/50'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => handleLocationSelect(location.name)}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedLocation === location.name
                        ? 'gradient-primary'
                        : 'bg-muted'
                    }`}
                  >
                    <MapPin
                      className={`w-5 h-5 ${
                        selectedLocation === location.name
                          ? 'text-primary-foreground'
                          : 'text-muted-foreground'
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{location.name}</h3>
                    <p className="text-sm text-muted-foreground">{location.district}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No locations found. Try a different search.</p>
            </div>
          )}

          {/* Continue Button */}
          {selectedLocation && (
            <div className="flex justify-center animate-slide-up">
              <Button size="xl" onClick={handleContinue} className="gap-2">
                Continue to {selectedLocation}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-primary shadow-soft mb-4">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Local Shops</h3>
              <p className="text-muted-foreground text-sm">
                Discover shops near you with accurate addresses and contact info
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-gold shadow-glow mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">₹</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Best Prices</h3>
              <p className="text-muted-foreground text-sm">
                Compare prices across multiple shops to find the best deals
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl gradient-offer shadow-soft mb-4">
                <span className="text-xl font-bold text-accent-foreground">%</span>
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">Exclusive Offers</h3>
              <p className="text-muted-foreground text-sm">
                Find exclusive discounts and limited-time offers at local stores
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
