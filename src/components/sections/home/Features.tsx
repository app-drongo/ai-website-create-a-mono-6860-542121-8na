'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Smartphone,
  Clock,
  TrendingUp,
  Users,
  MapPin,
  CreditCard,
  BarChart3,
  Headphones,
  Shield,
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: 'Native Mobile Apps',
      description:
        "Custom-branded iOS and Android apps that put your restaurant in customers' pockets with seamless ordering experience.",
      badge: 'Technology',
    },
    {
      icon: Clock,
      title: 'Real-Time Order Tracking',
      description:
        'Keep customers informed with live order status updates from kitchen to doorstep, reducing support calls by 60%.',
      badge: 'Customer Experience',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Analytics',
      description:
        'Track sales performance, peak hours, and customer behavior with detailed insights that drive 25% revenue growth.',
      badge: 'Analytics',
    },
    {
      icon: Users,
      title: 'Customer Loyalty Program',
      description:
        'Built-in rewards system that increases repeat orders by 40% and builds lasting customer relationships.',
      badge: 'Retention',
    },
    {
      icon: MapPin,
      title: 'Smart Delivery Zones',
      description:
        'Optimize delivery areas and fees automatically based on distance, traffic, and demand patterns.',
      badge: 'Operations',
    },
    {
      icon: CreditCard,
      title: 'Integrated Payments',
      description:
        'Accept all payment methods with secure processing, digital wallets, and split payment options.',
      badge: 'Payments',
    },
    {
      icon: BarChart3,
      title: 'Menu Optimization',
      description:
        'AI-powered recommendations to highlight bestsellers and optimize pricing for maximum profitability.',
      badge: 'AI-Powered',
    },
    {
      icon: Headphones,
      title: 'Restaurant Support',
      description:
        'Dedicated account managers and 24/7 technical support to ensure your delivery operations never stop.',
      badge: 'Support',
    },
    {
      icon: Shield,
      title: 'Food Safety Compliance',
      description:
        'Temperature tracking, delivery time monitoring, and compliance reporting to maintain food safety standards.',
      badge: 'Compliance',
    },
  ];

  const handleStartTrial = () => {
    window.location.href = '/demo';
  };

  const handleViewFeatures = () => {
    window.location.href = '/features';
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Your Restaurant Needs to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dominate Delivery
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive delivery management platform that helps restaurants increase orders,
            improve customer satisfaction, and maximize profits.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your restaurant's delivery business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Start Free Demo
            </button>
            <button
              onClick={handleViewFeatures}
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Explore All Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
