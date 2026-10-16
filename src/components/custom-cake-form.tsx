"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, ChevronRight, ChevronLeft, Calendar as CalendarIcon, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  "Event", "Size", "Flavor", "Filling", "Dietary", "Design", "Colors", "Date", "Review"
];

export function CustomCakeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    eventType: "",
    servings: "",
    flavor: "",
    filling: "",
    dietary: "",
    designDescription: "",
    colorPalette: "",
    date: "",
    deliveryMethod: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full">
      {/* Progress Steps */}
      <div className="flex items-center justify-between mb-8 overflow-x-auto pb-4 hide-scrollbar">
        {STEPS.map((step, index) => (
          <div key={step} className="flex flex-col items-center min-w-[60px]">
            <div 
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-2 transition-colors",
                index < currentStep ? "bg-primary text-on-primary" : 
                index === currentStep ? "bg-secondary text-on-secondary ring-4 ring-secondary-container" : 
                "bg-surface-variant text-on-surface-variant"
              )}
            >
              {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
            </div>
            <span className={cn(
              "text-[10px] sm:text-xs uppercase tracking-wider font-bold",
              index <= currentStep ? "text-primary" : "text-on-surface-variant"
            )}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="min-h-[400px]">
        {/* Step 1: Event Type */}
        {currentStep === 0 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">What are we celebrating?</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Birthday", "Wedding", "Anniversary", "Baby Shower", "Corporate", "Other"].map((event) => (
                <div 
                  key={event}
                  onClick={() => handleChange("eventType", event)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 text-center transition-all",
                    formData.eventType === event 
                      ? "border-secondary bg-secondary-container text-on-secondary-container font-bold" 
                      : "border-surface-variant hover:border-primary/50 text-on-surface-variant"
                  )}
                >
                  {event}
                </div>
              ))}
            </div>
            {formData.eventType === "Other" && (
              <div className="pt-4">
                <Label htmlFor="otherEvent">Please specify</Label>
                <Input id="otherEvent" className="mt-2" placeholder="e.g. Graduation" />
              </div>
            )}
          </div>
        )}

        {/* Step 2: Servings */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">How many guests?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Intimate (2-6 servings)", value: "2-6", desc: "Bento or 4-inch" },
                { label: "Small (8-12 servings)", value: "8-12", desc: "6-inch cake" },
                { label: "Medium (15-20 servings)", value: "15-20", desc: "8-inch cake" },
                { label: "Large (25-35 servings)", value: "25-35", desc: "10-inch cake" },
                { label: "Tiered (40+ servings)", value: "40+", desc: "Multi-tier setup" },
              ].map((size) => (
                <div 
                  key={size.value}
                  onClick={() => handleChange("servings", size.value)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 transition-all",
                    formData.servings === size.value 
                      ? "border-secondary bg-secondary-container text-on-secondary-container" 
                      : "border-surface-variant hover:border-primary/50 text-on-surface-variant"
                  )}
                >
                  <div className="font-bold">{size.label}</div>
                  <div className="text-sm opacity-80 mt-1">{size.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Flavor */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">Choose your sponge</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {["Classic Vanilla", "Rich Chocolate", "Red Velvet", "Lemon Zest", "Coffee Walnut", "Pistachio"].map((flavor) => (
                <div 
                  key={flavor}
                  onClick={() => handleChange("flavor", flavor)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 text-center transition-all",
                    formData.flavor === flavor 
                      ? "border-secondary bg-secondary-container text-on-secondary-container font-bold" 
                      : "border-surface-variant hover:border-primary/50 text-on-surface-variant"
                  )}
                >
                  {flavor}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Filling */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">Select fillings & frostings</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {["Vanilla Buttercream", "Chocolate Ganache", "Mixed Berry Compote", "Salted Caramel", "Cream Cheese", "Biscoff Spread"].map((filling) => (
                <div 
                  key={filling}
                  onClick={() => handleChange("filling", filling)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 text-center transition-all",
                    formData.filling === filling 
                      ? "border-secondary bg-secondary-container text-on-secondary-container font-bold" 
                      : "border-surface-variant hover:border-primary/50 text-on-surface-variant"
                  )}
                >
                  {filling}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Dietary */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">Any dietary requirements?</h2>
            <div className="grid grid-cols-2 gap-4">
              {["None", "Eggless", "Gluten-Free", "Vegan"].map((diet) => (
                <div 
                  key={diet}
                  onClick={() => handleChange("dietary", diet)}
                  className={cn(
                    "cursor-pointer rounded-xl border-2 p-4 text-center transition-all",
                    formData.dietary === diet 
                      ? "border-secondary bg-secondary-container text-on-secondary-container font-bold" 
                      : "border-surface-variant hover:border-primary/50 text-on-surface-variant"
                  )}
                >
                  {diet}
                </div>
              ))}
            </div>
            <p className="text-sm text-on-surface-variant mt-4 italic">
              *Note: While we take precautions, our kitchen handles nuts, dairy, and gluten.
            </p>
          </div>
        )}

        {/* Step 6: Design */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">Design Inspiration</h2>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="design-desc">Describe your vision</Label>
                <Textarea 
                  id="design-desc" 
                  placeholder="Tell us about the theme, style, or specific elements you want..."
                  className="mt-2 h-32"
                  value={formData.designDescription}
                  onChange={(e) => handleChange("designDescription", e.target.value)}
                />
              </div>
              
              <div>
                <Label>Upload Reference Images (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-surface-variant rounded-xl p-8 flex flex-col items-center justify-center text-on-surface-variant hover:bg-surface-variant/20 transition-colors cursor-pointer">
                  <UploadCloud className="w-10 h-10 mb-2 opacity-50" />
                  <p className="font-bold">Click to upload</p>
                  <p className="text-xs mt-1">PNG, JPG up to 5MB</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 7: Colors */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">Color Palette</h2>
            <Label htmlFor="colors">Preferred colors (e.g., Pastel pink & gold, Monochrome)</Label>
            <Input 
              id="colors"
              className="mt-2"
              placeholder="Your color preferences..."
              value={formData.colorPalette}
              onChange={(e) => handleChange("colorPalette", e.target.value)}
            />
          </div>
        )}

        {/* Step 8: Date */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">When do you need it?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label htmlFor="date">Event Date</Label>
                <div className="relative mt-2">
                  <Input 
                    type="date" 
                    id="date"
                    value={formData.date}
                    onChange={(e) => handleChange("date", e.target.value)}
                  />
                </div>
                <p className="text-xs text-on-surface-variant mt-2">
                  * Minimum 48 hours notice required for custom orders.
                </p>
              </div>
              
              <div>
                <Label>Delivery Method</Label>
                <div className="mt-2 space-y-3">
                  {["Studio Pickup (Free)", "Delivery (Charges apply)"].map((method) => (
                    <div 
                      key={method}
                      onClick={() => handleChange("deliveryMethod", method)}
                      className={cn(
                        "cursor-pointer rounded-lg border-2 p-3 transition-all",
                        formData.deliveryMethod === method 
                          ? "border-secondary bg-secondary-container text-on-secondary-container font-bold" 
                          : "border-surface-variant hover:border-primary/50 text-on-surface-variant"
                      )}
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 9: Review & Submit */}
        {currentStep === 8 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-2xl font-serif text-primary mb-6">Contact & Review</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" className="mt-2" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" className="mt-2" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" className="mt-2" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} />
              </div>
            </div>

            <div className="bg-surface-variant/30 p-6 rounded-xl border border-surface-variant">
              <h3 className="font-bold text-lg mb-4">Order Summary</h3>
              <ul className="space-y-2 text-sm">
                <li><span className="font-bold">Event:</span> {formData.eventType || "Not specified"}</li>
                <li><span className="font-bold">Servings:</span> {formData.servings || "Not specified"}</li>
                <li><span className="font-bold">Flavor:</span> {formData.flavor || "Not specified"}</li>
                <li><span className="font-bold">Date:</span> {formData.date || "Not specified"}</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-surface-variant flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePrev}
          disabled={currentStep === 0}
          className="font-bold"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        
        {currentStep < STEPS.length - 1 ? (
          <Button onClick={handleNext} className="font-bold">
            Next <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button className="font-bold" onClick={() => alert("Form submitted!")}>
            Submit Request
          </Button>
        )}
      </div>
    </div>
  );
}
