'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Users,
  Headphones,
  Smartphone,
  Store,
} from 'lucide-react';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurant: '',
    message: '',
  });

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    // Handle form submission
    console.log('Demo request submitted:', formData);
    alert("Thank you! We'll contact you within 24 hours to schedule your QuickBite demo.");
  };
  const handleSecondaryAction = () => {
    router.push('/');
  };
  // ACTION_PLACEHOLDER_END

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handlePrimaryAction();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get technical assistance',
      contact: 'support@quickbite.com',
      action: 'Send Email',
    },
    {
      icon: Phone,
      title: 'Sales Hotline',
      description: 'Speak with our restaurant specialists',
      contact: '+1 (555) QUICK-BITE',
      action: 'Call Now',
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Instant help for restaurant owners',
      contact: 'Available during business hours',
      action: 'Start Chat',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '1234 Food Tech Plaza, Suite 500',
      timezone: 'PST (UTC-8)',
    },
    {
      city: 'Austin',
      address: '567 Restaurant Row, Building B',
      timezone: 'CST (UTC-6)',
    },
    {
      city: 'Miami',
      address: '890 Delivery District, Floor 12',
      timezone: 'EST (UTC-5)',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Store className="size-4 mr-2" />
            Restaurant Partnership
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Boost Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Delivery Revenue?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join 2,500+ restaurants already using QuickBite to increase delivery orders by 40%.
            Let's discuss how we can transform your delivery operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Smartphone className="size-6 text-primary" />
                Request Your Free Demo
              </CardTitle>
              <CardDescription>
                See QuickBite in action! We'll show you exactly how to increase your delivery orders
                and streamline operations in just 30 minutes.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Maria Rodriguez"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="maria@tacofiesta.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="restaurant" className="block text-sm font-medium mb-2">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    id="restaurant"
                    name="restaurant"
                    value={formData.restaurant}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Taco Fiesta Downtown"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell Us About Your Delivery Challenges
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="We're struggling with order accuracy and long delivery times. Currently using 3 different delivery apps and it's getting chaotic..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Schedule My Free Demo
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  No commitment required • 30-minute demo • See results in real-time
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Headphones className="size-5 text-primary" />
                Restaurant Support Team
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Office Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                QuickBite Locations
              </h3>
              <div className="space-y-3">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{office.city}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {office.timezone}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Support Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span>6:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span>8:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support</span>
                    <span className="text-primary">24/7 Available</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Users className="size-4" />
                    Dedicated account manager for restaurants with 50+ daily orders
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
