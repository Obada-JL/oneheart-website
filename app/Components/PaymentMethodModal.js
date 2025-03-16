"use client";
import { useLanguage } from "../context/LanguageContext";

export default function PaymentMethodModal({ 
  isOpen, 
  onClose, 
  selectedItem, 
  itemType = "project" // Can be "project" or "campaign"
}) {
  const { language } = useLanguage();

  // Payment methods - you can replace these with your actual payment links
  const paymentMethods = [
    { 
      id: 'paypal', 
      name: language === 'ar' ? 'باي بال' : 'PayPal', 
      icon: '💳',
      link: 'https://www.paypal.com/donate' 
    },
    { 
      id: 'bank', 
      name: language === 'ar' ? 'تحويل بنكي' : 'Bank Transfer', 
      icon: '🏦',
      link: '/bank-transfer' 
    },
    { 
      id: 'crypto', 
      name: language === 'ar' ? 'عملات رقمية' : 'Cryptocurrency', 
      icon: '₿',
      link: '/crypto-payment' 
    }
  ];

  const handlePaymentMethodSelect = (method) => {
    // You can customize this to include item info in the URL if needed
    window.open(method.link, '_blank');
    onClose();
  };

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  // Get the appropriate title based on language and item type
  const getItemTitle = () => {
    if (!selectedItem) return '';
    
    if (language === 'ar') {
      return selectedItem.titleAr || '';
    } else {
      return selectedItem.title || '';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
      onClick={onClose}
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4" 
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">
            {language === 'ar' ? 'اختر طريقة الدفع' : 'Select Payment Method'}
          </h3>
          <button 
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-600 text-sm">
            {language === 'ar' 
              ? `التبرع لـ: ${getItemTitle()}`
              : `Donating to: ${getItemTitle()}`}
          </p>
        </div>
        
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              className="w-full flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => handlePaymentMethodSelect(method)}
            >
              <div className="flex items-center">
                <span className="text-2xl mr-3">{method.icon}</span>
                <span>{method.name}</span>
              </div>
              <span className="text-gray-400">→</span>
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          {language === 'ar' 
            ? 'جميع المعاملات آمنة ومشفرة'
            : 'All transactions are secure and encrypted'}
        </div>
      </div>
    </div>
  );
} 