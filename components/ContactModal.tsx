'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    email: '',
    bottleneck: 'Lead Generation / Outbound',
    stack: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus the modal
      modalRef.current?.focus();
      
      // Reset form state when modal opens
      setSubmitStatus('idle');
      setErrorMessage('');
      setIsSubmitting(false);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      // Success
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        company: '',
        email: '',
        bottleneck: 'Lead Generation / Outbound',
        stack: '',
      });
      
      // Close modal after a short delay to show success message
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center px-4 animate-fade-in"
      onClick={handleBackdropClick}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>

      {/* Modal */}
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-[#0A0A0A] border-2 border-white/10 shadow-2xl animate-slide-up max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-[#F3F1ED] hover:text-[#FF4D00] transition-colors z-10 touch-manipulation"
          aria-label="Close modal"
        >
          <iconify-icon icon="solar:close-circle-linear" className="text-3xl"></iconify-icon>
        </button>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 md:p-12">
          <h2 id="modal-title" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#F3F1ED] tracking-tight">
            Book a call
          </h2>
          <p className="text-[#F3F1ED]/70 mb-8 text-base leading-relaxed">
            Ready to eliminate manual work? Fill out the form below and we&apos;ll get back to you within 24 hours.
          </p>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
              <p className="text-green-400 text-sm font-medium">
                ✓ Thank you! Your request has been submitted. We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm font-medium">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 touch-manipulation"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">
                  Company
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 touch-manipulation"
                  placeholder="Acme Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 touch-manipulation"
                placeholder="jane@acme.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">
                Primary Bottleneck
              </label>
              <select
                className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all appearance-none cursor-pointer touch-manipulation"
                value={formData.bottleneck}
                onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
              >
                <option className="bg-[#0A0A0A]">Lead Generation / Outbound</option>
                <option className="bg-[#0A0A0A]">Operations / Admin</option>
                <option className="bg-[#0A0A0A]">Customer Support</option>
                <option className="bg-[#0A0A0A]">Data / Reporting</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-[#F3F1ED] uppercase tracking-wider">
                Current Stack (Optional)
              </label>
              <textarea
                className="w-full bg-transparent border-b-2 border-white/20 px-0 py-3 sm:py-4 text-sm text-[#F3F1ED] focus:outline-none focus:border-[#FF4D00] transition-all placeholder:text-white/30 min-h-[80px] resize-none touch-manipulation"
                placeholder="e.g. HubSpot, Slack, Airtable..."
                value={formData.stack}
                onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="w-full bg-[#F3F1ED] text-black font-bold text-sm py-4 hover:bg-white transition-colors mt-6 uppercase tracking-wider touch-manipulation min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Submitting...</span>
                </>
              ) : submitStatus === 'success' ? (
                'Submitted!'
              ) : (
                'Submit Request'
              )}
            </button>
            <p className="text-xs text-white/50 text-center mt-3">
              By clicking above, you agree to our Terms of Service.
            </p>
          </form>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
