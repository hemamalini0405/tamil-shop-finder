import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getShopsByLocation, getProductComparisons } from '@/data/mockData';
import { Shop, PriceComparison } from '@/types';
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
  TrendingDown,
  Check,
  Sparkles,
  ArrowUpDown,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const ShopsPage = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [location, setLocation] = useState<string>('');
  const [productSearch, setProductSearch] = useState('');
  const [priceComparisons, setPriceComparisons] = useState<PriceComparison[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [sortBy, setSortBy] = useState<'price' | 'discount'>('price');
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<PriceComparison | null>(null);
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
    setShops(getShopsByLocation(selectedLocation));
  }, [navigate]);

  const handleProductSearch = () => {
    if (productSearch.trim()) {
      const comparisons = getProductComparisons(productSearch, location);
      setPriceComparisons(comparisons);
      setShowComparison(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleProductSearch();
    }
  };

  const sortedComparisons = [...priceComparisons].sort((a, b) => {
    if (sortBy === 'price') {
      return a.finalPrice - b.finalPrice;
    }
    return b.discountPercentage - a.discountPercentage;
  });

  const handleBuyNow = (comparison: PriceComparison) => {
    setSelectedProduct(comparison);
    setOrderDialogOpen(true);
  };

  const confirmOrder = () => {
    setOrderDialogOpen(false);
    toast({
      title: '🎉 Order Placed Successfully!',
      description: `Your order for ${selectedProduct?.productName} from ${selectedProduct?.shopName} has been confirmed.`,
    });
    setSelectedProduct(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('selectedLocation');
    navigate('/');
  };

  const handleBack = () => {
    navigate('/location');
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getOfferIcon = (type: string) => {
    switch (type) {
      case 'percentage':
        return <span className="text-xs">%</span>;
      case 'flat':
        return <span className="text-xs">₹</span>;
      case 'bogo':
        return <Sparkles className="w-3 h-3" />;
      default:
        return <Tag className="w-3 h-3" />;
    }
  };

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
        {/* Product Search Section */}
        <section className="mb-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-foreground text-center mb-2">
              Search & Compare Prices
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Find the best deals on mobiles, laptops, headphones, groceries & more
            </p>
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for mobile phones, laptops, headphones..."
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-12 h-12"
                />
              </div>
              <Button size="lg" onClick={handleProductSearch}>
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {['Mobile phones', 'Laptops', 'Headphones', 'Grocery items'].map((item) => (
                <Button
                  key={item}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setProductSearch(item);
                    setPriceComparisons(getProductComparisons(item, location));
                    setShowComparison(true);
                  }}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Price Comparison Table */}
        {showComparison && priceComparisons.length > 0 && (
          <section className="mb-12 animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Price Comparison
                </h2>
                <p className="text-muted-foreground">
                  {priceComparisons.length} results for "{productSearch}"
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Button
                  variant={sortBy === 'price' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('price')}
                >
                  <TrendingDown className="w-4 h-4 mr-1" />
                  Lowest Price
                </Button>
                <Button
                  variant={sortBy === 'discount' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSortBy('discount')}
                >
                  <ArrowUpDown className="w-4 h-4 mr-1" />
                  Highest Discount
                </Button>
              </div>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden space-y-4">
              {sortedComparisons.map((comparison) => (
                <Card key={comparison.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{comparison.productName}</h3>
                        <p className="text-sm text-muted-foreground">{comparison.shopName}</p>
                      </div>
                      <div className="flex gap-1">
                        {comparison.isBestDeal && (
                          <Badge variant="success" className="text-xs">Best Deal</Badge>
                        )}
                        {comparison.isHighestDiscount && !comparison.isBestDeal && (
                          <Badge variant="gold" className="text-xs">Top Discount</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">{comparison.shopAddress}</p>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="text-sm text-muted-foreground line-through">
                          {formatPrice(comparison.originalPrice)}
                        </p>
                        <p className="text-xl font-bold text-primary">
                          {formatPrice(comparison.finalPrice)}
                        </p>
                      </div>
                      <Badge variant="offer">{comparison.offer}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-secondary fill-secondary" />
                          <span className="text-sm font-medium">{comparison.rating}</span>
                        </div>
                        <Badge
                          variant={
                            comparison.availability === 'In Stock'
                              ? 'inStock'
                              : comparison.availability === 'Limited Stock'
                              ? 'limited'
                              : 'outOfStock'
                          }
                        >
                          {comparison.availability}
                        </Badge>
                      </div>
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => handleBuyNow(comparison)}
                        disabled={comparison.availability === 'Out of Stock'}
                      >
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Buy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-4 font-semibold text-foreground">Product</th>
                    <th className="text-left p-4 font-semibold text-foreground">Shop & Address</th>
                    <th className="text-right p-4 font-semibold text-foreground">Original Price</th>
                    <th className="text-center p-4 font-semibold text-foreground">Offer</th>
                    <th className="text-right p-4 font-semibold text-foreground">Final Price</th>
                    <th className="text-center p-4 font-semibold text-foreground">Rating</th>
                    <th className="text-center p-4 font-semibold text-foreground">Availability</th>
                    <th className="text-center p-4 font-semibold text-foreground">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedComparisons.map((comparison, index) => (
                    <tr
                      key={comparison.id}
                      className={`border-b border-border transition-colors hover:bg-muted/30 ${
                        comparison.isBestDeal ? 'bg-success/5' : ''
                      }`}
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{comparison.productName}</span>
                          {comparison.isBestDeal && (
                            <Badge variant="success" className="text-xs">Best Deal</Badge>
                          )}
                          {comparison.isHighestDiscount && !comparison.isBestDeal && (
                            <Badge variant="gold" className="text-xs">Top Discount</Badge>
                          )}
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="font-medium text-foreground">{comparison.shopName}</p>
                        <p className="text-sm text-muted-foreground">{comparison.shopAddress}</p>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-muted-foreground line-through">
                          {formatPrice(comparison.originalPrice)}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <Badge variant="offer">{comparison.offer}</Badge>
                      </td>
                      <td className="p-4 text-right">
                        <span className="text-lg font-bold text-primary">
                          {formatPrice(comparison.finalPrice)}
                        </span>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Star className="w-4 h-4 text-secondary fill-secondary" />
                          <span className="font-medium">{comparison.rating}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <Badge
                          variant={
                            comparison.availability === 'In Stock'
                              ? 'inStock'
                              : comparison.availability === 'Limited Stock'
                              ? 'limited'
                              : 'outOfStock'
                          }
                        >
                          {comparison.availability}
                        </Badge>
                      </td>
                      <td className="p-4 text-center">
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => handleBuyNow(comparison)}
                          disabled={comparison.availability === 'Out of Stock'}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" />
                          Buy Now
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* Shops Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Shops in {location}
              </h2>
              <p className="text-muted-foreground">{shops.length} shops with exclusive offers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop, index) => (
              <Card
                key={shop.id}
                className="overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{shop.name}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {shop.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 bg-secondary/50 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-secondary fill-secondary" />
                      <span className="text-sm font-semibold">{shop.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      {shop.address.street}, {shop.address.area}, {shop.address.city} – {shop.address.pincode}
                    </p>
                  </div>

                  {/* Contact & Hours */}
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{shop.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{shop.openingHours}</span>
                    </div>
                  </div>

                  {/* Offers */}
                  {shop.offers.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-border">
                      <p className="text-sm font-semibold text-foreground flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-accent" />
                        Current Offers
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {shop.offers.map((offer) => (
                          <Badge
                            key={offer.id}
                            variant="offer"
                            className="flex items-center gap-1"
                          >
                            {getOfferIcon(offer.type)}
                            {offer.title}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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
          {selectedProduct && (
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product</span>
                  <span className="font-medium text-foreground">{selectedProduct.productName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shop</span>
                  <span className="font-medium text-foreground">{selectedProduct.shopName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Offer</span>
                  <Badge variant="offer">{selectedProduct.offer}</Badge>
                </div>
                <div className="flex justify-between pt-2 border-t border-border">
                  <span className="text-muted-foreground">Original Price</span>
                  <span className="line-through text-muted-foreground">
                    {formatPrice(selectedProduct.originalPrice)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-foreground">Final Price</span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(selectedProduct.finalPrice)}
                  </span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setOrderDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button className="flex-1" onClick={confirmOrder}>
                  <Check className="w-4 h-4 mr-2" />
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

export default ShopsPage;
