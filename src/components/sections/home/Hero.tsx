'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Smartphone, Clock, TrendingUp } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Main conversion action - start free trial
  };

  const handleSecondaryAction = () => {
    setIsModalOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to features section
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <TrendingUp className="size-4 mr-2" />
              New: 40% Faster Delivery Times with AI Routing
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Transform Your Restaurant
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Delivery Operations
              </span>
              in Minutes
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              QuickBite's mobile delivery platform helps restaurants increase orders by 65% while
              reducing delivery costs. Join 2,500+ restaurants already boosting their revenue.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Start Free 30-Day Trial
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                See Live Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                    P
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                    M
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                    T
                  </div>
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  2,500+ restaurants
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 restaurant rating</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-4xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/50 to-muted aspect-video flex items-center justify-center relative overflow-hidden">
                  {/* Mobile App Mockup */}
                  <div className="flex items-center justify-center gap-8">
                    <div className="bg-background rounded-2xl p-4 shadow-lg border max-w-xs">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-4">
                          <Smartphone className="size-5 text-primary" />
                          <span className="font-semibold text-sm">QuickBite Dashboard</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-xs">Active Orders</span>
                            <span className="text-xs font-bold text-primary">24</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-xs">Avg Delivery Time</span>
                            <span className="text-xs font-bold text-accent">18 min</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-muted/50 rounded">
                            <span className="text-xs">Today's Revenue</span>
                            <span className="text-xs font-bold text-secondary">$2,847</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="size-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Play className="size-8 text-primary ml-1" />
                      </div>
                      <p className="text-muted-foreground text-sm">Watch Platform Demo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 size-8 bg-primary rounded-full animate-pulse flex items-center justify-center">
                <Clock className="size-4 text-background" />
              </div>
              <div className="absolute -bottom-4 -right-4 size-8 bg-accent rounded-full animate-pulse delay-1000 flex items-center justify-center">
                <TrendingUp className="size-4 text-background" />
              </div>
              <div className="absolute top-1/2 -right-8 size-6 bg-secondary rounded-full animate-pulse delay-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
