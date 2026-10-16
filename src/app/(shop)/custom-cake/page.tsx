import { CustomCakeForm } from "@/components/custom-cake-form";

export default function CustomCakePage() {
  return (
    <div className="bg-surface min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 lg:px-12">
        <div className="text-center mb-12">
          <h1 className="font-display-sm text-4xl md:text-5xl font-serif text-primary mb-4">Design Your Dream Cake</h1>
          <p className="text-on-surface-variant text-lg">
            Tell us about your event, and we&apos;ll craft a masterpiece just for you. Fill out the form below to get started.
          </p>
        </div>
        
        <div className="bg-surface-container-low rounded-3xl p-6 md:p-12 shadow-sm border border-surface-variant">
          <CustomCakeForm />
        </div>
      </div>
    </div>
  );
}
