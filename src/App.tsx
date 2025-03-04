import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Heart, Search, ChevronDown, Star, Mail, MapPin, Phone, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const products = [
    {
      id: 1,
      name: 'Frankincense & Myrrh Blend',
      price: 39.99,
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1611073761523-493b5193c675?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Biblical Blends'
    },
    {
      id: 2,
      name: 'King David\'s Anointing Oil',
      price: 45.99,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1616776005756-4dca36124bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Anointing Oils'
    },
    {
      id: 3,
      name: 'Healing Balm of Gilead',
      price: 34.99,
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Healing Balms'
    },
    {
      id: 4,
      name: 'Holy Land Olive Oil',
      price: 29.99,
      rating: 4.6,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Pure Oils'
    },
    {
      id: 5,
      name: 'Hyssop Purification Oil',
      price: 32.99,
      rating: 4.8,
      reviews: 68,
      image: 'https://images.unsplash.com/photo-1608571423901-fb5a1e332648?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Biblical Blends'
    },
    {
      id: 6,
      name: 'Cedar of Lebanon Oil',
      price: 36.99,
      rating: 4.7,
      reviews: 52,
      image: 'https://images.unsplash.com/photo-1616776005756-4dca36124bf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Pure Oils'
    },
    {
      id: 7,
      name: 'Exodus Inflammation Relief',
      price: 42.99,
      rating: 4.9,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1611073761523-493b5193c675?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Healing Balms'
    },
    {
      id: 8,
      name: 'Psalm 23 Calming Blend',
      price: 38.99,
      rating: 4.8,
      reviews: 94,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      category: 'Biblical Blends'
    }
  ];

  const categories = ['All', 'Biblical Blends', 'Anointing Oils', 'Healing Balms', 'Pure Oils'];
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-olive-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-olive-700 text-xl font-bold">Divine Healing Oils</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#home" className="border-olive-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#products" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Products
                </a>
                <a href="#biblical" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Biblical References
                </a>
                <a href="#benefits" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Benefits
                </a>
                <a href="#contact" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Contact
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-olive-500 focus:border-olive-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <Heart className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-olive-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="bg-olive-600 hover:bg-olive-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-olive-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="pt-2 pb-3 space-y-1">
            <a href="#home" className="bg-olive-50 border-olive-500 text-olive-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Home
            </a>
            <a href="#products" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Products
            </a>
            <a href="#biblical" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Biblical References
            </a>
            <a href="#benefits" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Benefits
            </a>
            <a href="#contact" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
              Contact
            </a>
            <div className="mt-4 pl-3 pr-4 flex items-center justify-between">
              <button className="text-gray-500 hover:text-gray-700">
                <Heart className="h-6 w-6" />
              </button>
              <button className="text-gray-500 hover:text-gray-700 relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-olive-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="bg-olive-600 hover:bg-olive-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Biblical Healing Oils</span>{' '}
                  <span className="block text-olive-600 xl:inline">For Body, Mind & Spirit</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Experience the healing power of ancient biblical oils. Our premium blends combine traditional wisdom with modern science for powerful anti-inflammatory, remineralizing, and amino acid-rich formulas.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#products"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-olive-600 hover:bg-olive-700 md:py-4 md:text-lg md:px-10"
                    >
                      Shop Now
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#biblical"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-olive-700 bg-olive-100 hover:bg-olive-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1611073761523-493b5193c675?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            alt="Biblical healing oils"
          />
        </div>
      </div>

      {/* Biblical References Section */}
      <div id="biblical" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-olive-600 font-semibold tracking-wide uppercase">Biblical Foundation</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ancient Wisdom for Modern Healing
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our healing oils are inspired by biblical references to the healing properties of oils and balms.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-olive-50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Exodus 30:22-25</h3>
                  <p className="mt-4 text-base text-gray-500">
                    "Take the finest spices: of liquid myrrh 500 shekels, and of sweet-smelling cinnamon half as much... Make of these a sacred anointing oil blended as by the perfumer."
                  </p>
                </div>
              </div>

              <div className="bg-olive-50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">James 5:14</h3>
                  <p className="mt-4 text-base text-gray-500">
                    "Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord."
                  </p>
                </div>
              </div>

              <div className="bg-olive-50 overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900">Psalm 45:7-8</h3>
                  <p className="mt-4 text-base text-gray-500">
                    "You love righteousness and hate wickedness; therefore God, your God, has anointed you with the oil of gladness beyond your companions; your robes are all fragrant with myrrh and aloes and cassia."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="py-12 bg-olive-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-olive-600 font-semibold tracking-wide uppercase">Health Benefits</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Healing for Body and Spirit
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our biblical oils offer multiple health benefits backed by both ancient wisdom and modern science.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-700">Powerful Anti-Inflammatory</h3>
                  <p className="mt-4 text-gray-600">
                    Our oils contain natural compounds that help reduce inflammation and soothe pain in joints and muscles, providing relief from various inflammatory conditions.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-700">Remineralizing Properties</h3>
                  <p className="mt-4 text-gray-600">
                    Rich in essential minerals that help strengthen the body's natural systems, our oils support bone health, skin regeneration, and overall cellular function.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-700">Amino Acid Super Blend</h3>
                  <p className="mt-4 text-gray-600">
                    Packed with essential amino acids, the building blocks of proteins, our oils support tissue repair, immune function, and overall wellness at the cellular level.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-700">Stress Relief</h3>
                  <p className="mt-4 text-gray-600">
                    The calming aromas of our biblical oils help reduce stress and anxiety, promoting mental clarity and emotional balance in today's hectic world.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-700">Skin Rejuvenation</h3>
                  <p className="mt-4 text-gray-600">
                    Our oils contain natural compounds that nourish and rejuvenate the skin, reducing the appearance of scars, wrinkles, and blemishes.
                  </p>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-olive-700">Spiritual Connection</h3>
                  <p className="mt-4 text-gray-600">
                    Used in prayer and meditation, our biblical oils help create a sacred atmosphere that enhances spiritual practices and deepens connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div id="featured" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-olive-600 font-semibold tracking-wide uppercase">Featured Products</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Best Sellers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover our most popular biblical healing oils that customers love.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products.slice(0, 3).map((product) => (
                <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="relative pb-2/3">
                    <img
                      className="absolute h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-olive-100 text-olive-800">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-xl font-semibold text-olive-600">${product.price.toFixed(2)}</p>
                    <div className="mt-4">
                      <button
                        onClick={addToCart}
                        className="w-full bg-olive-600 hover:bg-olive-700 text-white py-2 px-4 rounded-md flex items-center justify-center"
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* All Products */}
      <div id="products" className="py-12 bg-olive-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-olive-600 font-semibold tracking-wide uppercase">Shop</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Browse Our Biblical Oils
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Find the perfect healing oil for your needs, inspired by ancient biblical traditions.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-olive-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
                  <div className="relative h-48">
                    <img
                      className="absolute h-full w-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                    <button className="absolute top-2 right-2 p-1 rounded-full bg-white text-gray-400 hover:text-red-500">
                      <Heart className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-olive-100 text-olive-800">
                        {product.category}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-lg font-semibold text-olive-600">${product.price.toFixed(2)}</p>
                    <div className="mt-4">
                      <button
                        onClick={addToCart}
                        className="w-full bg-olive-600 hover:bg-olive-700 text-white py-1.5 px-3 rounded-md text-sm flex items-center justify-center"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-olive-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Special Offer!</span>
            <span className="block text-olive-200">Get 15% off on your first order with code BLESSED15</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-olive-600 bg-white hover:bg-olive-50"
              >
                Shop Now
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#benefits"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-olive-700 hover:bg-olive-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-olive-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Healing Experiences
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Read about the transformative experiences of those who have used our biblical healing oils.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="bg-olive-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "I've struggled with joint pain for years. After using the Exodus Inflammation Relief oil for just two weeks, I've experienced remarkable improvement. It's truly a blessing!"
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Martha Johnson"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Martha Johnson</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>

              <div className="bg-olive-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "The King David's Anointing Oil has become an essential part of my prayer routine. The aroma creates a sacred space that helps me connect more deeply in my spiritual practice."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Thomas Roberts"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Thomas Roberts</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>

              <div className="bg-olive-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                    <Star className="h-5 w-5 fill-current" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "I've been using the Healing Balm of Gilead on my skin for three months, and the difference is remarkable. My skin feels rejuvenated, and several old scars have noticeably faded."
                </p>
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="Rebecca Chen"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Rebecca Chen</p>
                    <p className="text-sm text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-olive-600 font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              We're Here to Help
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Have questions about our biblical oils or your order? Get in touch with our team.
            </p>
          </div>

          <div className="mt-10 lg:mt-12">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                <p className="mt-3 text-base text-gray-500">
                  Our customer support team is available Monday through Friday, 9am to 5pm.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-olive-500" />
                    <span className="ml-3 text-base text-gray-500">support@divinehealingoils.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-olive-500" />
                    <span className="ml-3 text-base text-gray-500">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-olive-500" />
                    <span className="ml-3 text-base text-gray-500">123 Olive Grove Lane, Jerusalem Hills, CA 94105</span>
                  </div>
                </div>
                <div className="mt-8 flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <form className="grid grid-cols-1 gap-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-olive-500 focus:border-olive-500 border-gray-300 rounded-md"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-olive-500 focus:border-olive-500 border-gray-300 rounded-md"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <div className="mt-1">
                      <select
                        id="subject"
                        name="subject"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-olive-500 focus:border-olive-500 border-gray-300 rounded-md"
                      >
                        <option>Product Inquiry</option>
                        <option>Biblical References</option>
                        <option>Healing Properties</option>
                        <option>Order Status</option>
                        <option>Returns & Refunds</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="py-3 px-4 block w-full shadow-sm focus:ring-olive-500 focus:border-olive-500 border-gray-300 rounded-md"
                        placeholder="How can we help you?"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-olive-600 hover:bg-olive-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-olive-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div className="flex items-center">
                <span className="text-white text-xl font-bold">Divine Healing Oils</span>
              </div>
              <p className="text-gray-300 text-base">
                Ancient biblical wisdom meets modern science in our premium healing oils. Experience the transformative power of nature's most sacred remedies.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">GitHub</span>
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Biblical Blends
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Anointing Oils
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Healing Balms
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Pure Oils
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Shipping
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Returns
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Warranty
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text- base text-gray-300 hover:text-white">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Our Story
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Terms of Service
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Shipping Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-base text-gray-300 hover:text-white">
                        Return Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; 2025 Divine Healing Oils. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;