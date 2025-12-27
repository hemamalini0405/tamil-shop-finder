import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { getShopById } from '@/data/mockData';
import { Shop, ShopItem } from '@/types';
import { useToast } from '@/hooks/use-toast';
import {
  Search,
  MapPin,
  Phone,
  Clock,
  Star,
  Tag,
  ShoppingBag,
  LogOut,
  ArrowLeft,
  ShoppingCart,
  Sparkles,
  Package,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ShopDetailsPage = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const [shop, setShop] = useState<Shop | null>(null);
  const [location, setLocation] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const user = localStorage.getItem('user');
    const selectedLocation = localStorage.getItem('selectedLocation');

    if (!user) {
      navigate('/');
      return;
    }

    if (!selectedLocation) {
      navigate('/location');
      return;
    }

    setLocation(selectedLocation);
    
    if (shopId) {
      const shopData = getShopById(shopId, selectedLocation);
      if (shopData) {
        setShop(shopData);
      } else {
        navigate('/shops');
      }
    }
  }, [navigate, shopId]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('selectedLocation');
    navigate('/');
  };

  const handleBack = () => {
    navigate('/shops');
  };

  const handleBuyNow = (item: ShopItem) => {
    setSelectedItem(item);
    setOrderDialogOpen(true);
  };

  const confirmOrder = () => {
    setOrderDialogOpen(false);
    toast({
      title: '🎉 Order Placed Successfully!',
      description: `Your order for ${selectedItem?.name} from ${shop?.name} has been confirmed.`,
    });
    setSelectedItem(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Get unique categories from shop items
  const categories = shop ? [...new Set(shop.items.map(item => item.category))] : [];

  // Filter items based on search and category
  const filteredItems = shop?.items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) || [];

  if (!shop) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={handleBack}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <span className="font-display font-bold text-lg text-foreground block">PriceHunt TN</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {location}
                  </span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Shop Info Section */}
        <Card className="mb-8 overflow-hidden">
          <CardHeader className="gradient-primary text-primary-foreground">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl mb-2">{shop.name}</CardTitle>
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0">
                  {shop.category}
                </Badge>
              </div>
              <div className="flex items-center gap-1 bg-primary-foreground/20 px-3 py-1.5 rounded-full">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">{shop.rating}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">
                    {shop.address.street}, {shop.address.area}, {shop.address.city} – {shop.address.pincode}
                  </p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Contact</p>
                  <a href={`tel:${shop.phone}`} className="text-sm text-primary hover:underline">
                    {shop.phone}
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Opening Hours</p>
                  <p className="text-sm text-muted-foreground">{shop.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Offers */}
            {shop.offers.length > 0 && (
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-offer" />
                  Current Offers
                </h3>
                <div className="flex flex-wrap gap-2">
                  {shop.offers.map((offer) => (
                    <Badge key={offer.id} variant="offer" className="text-sm py-1.5 px-3">
                      <Tag className="w-3 h-3 mr-1" />
                      {offer.title}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Search and Filter Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
            <Package className="w-6 h-6 text-primary" />
            Available Items ({filteredItems.length})
          </h2>
          
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search items in this shop..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12"
              />
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="overflow-hidden animate-slide-up hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  {item.offer && (
                    <Badge variant="offer" className="text-xs">
                      {item.offer}
                    </Badge>
                  )}
                </div>
                
                <h3 className="font-semibold text-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
                  {item.name}
                </h3>
                
                <div className="flex items-end justify-between mb-3">
                  <div>
                    {item.discountPercentage && item.discountPercentage > 0 && (
                      <p className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.price)}
                      </p>
                    )}
                    <p className="text-xl font-bold text-primary">
                      {formatPrice(item.finalPrice)}
                    </p>
                  </div>
                  <Badge
                    variant={
                      item.availability === 'In Stock'
                        ? 'inStock'
                        : item.availability === 'Limited Stock'
                        ? 'limited'
                        : 'outOfStock'
                    }
                    className="text-xs"
                  >
                    {item.availability}
                  </Badge>
                </div>
                
                <Button
                  className="w-full"
                  variant="success"
                  size="sm"
                  onClick={() => handleBuyNow(item)}
                  disabled={item.availability === 'Out of Stock'}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter</p>
          </div>
        )}
      </main>

      {/* Order Confirmation Dialog */}
      <Dialog open={orderDialogOpen} onOpenChange={setOrderDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-primary" />
              Confirm Your Order
            </DialogTitle>
            <DialogDescription>
              Review your order details before confirming
            </DialogDescription>
          </DialogHeader>
          {selectedItem && (
            <div className="space-y-4">
              <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product:</span>
                  <span className="font-medium text-foreground">{selectedItem.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shop:</span>
                  <span className="font-medium text-foreground">{shop.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Price:</span>
                  <span className="font-bold text-primary">{formatPrice(selectedItem.finalPrice)}</span>
                </div>
                {selectedItem.offer && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Offer:</span>
                    <Badge variant="offer">{selectedItem.offer}</Badge>
                  </div>
                )}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1" onClick={() => setOrderDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="success" className="flex-1" onClick={confirmOrder}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Confirm Order
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ShopDetailsPage;
