
import { CheckCircle, Truck, Shield, Phone } from 'lucide-react';

const DeliveryBenefits = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Side - Benefits */}
      <div className="space-y-8 md:w-1/2">
        <div className="flex items-center gap-4 bg-white rounded-full shadow-lg p-4 transition-transform hover:translate-x-2">
          <CheckCircle className="w-8 h-8 text-green-600" />
          <span className="font-semibold">Authenticity Certification</span>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-full shadow-lg p-4 transition-transform hover:translate-x-2">
          <Truck className="w-8 h-8 text-green-600" />
          <span className="font-semibold">Express Delivery</span>
        </div>

        <div className="flex items-center gap-4 bg-white rounded-full shadow-lg p-4 transition-transform hover:translate-x-2">
          <Shield className="w-8 h-8 text-green-600" />
          <span className="font-semibold">Payment Secure</span>
        </div>
      </div>

      {/* Right Side - Image and CTA */}
      <div className="md:w-1/2 text-center md:text-right">
        <img 
          src="/Front view male.png" 
          alt="Delivery person"
          className="mx-auto md:ml-auto mb-8"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Who We Are<br />What We Do?</h2>
          <div className="inline-flex items-center gap-2 bg-green-600 text-white rounded-full px-6 py-3">
            <Phone className="w-5 h-5" />
            <div>
              <p className="text-sm">How to Order?</p>
              <p className="font-bold">CALL US:+94117777888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryBenefits;
