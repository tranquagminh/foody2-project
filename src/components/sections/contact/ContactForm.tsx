"use client"
import { useState } from 'react';
import Button from '@/components/shared/Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="wow fadeInUp" data-wow-delay="0.5s">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb815]"
              placeholder="Họ Tên Của Bạn"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb815]"
              placeholder="Email Của Bạn"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="relative col-span-full">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb815]"
              placeholder="Tiêu Đề"
              value={formData.subject}
              onChange={(e) => setFormData({...formData, subject: e.target.value})}
            />
          </div>
          <div className="relative col-span-full">
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb815] h-48 resize-none"
              placeholder="Nội Dung"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>
          <div className="col-span-full">
            <Button variant="primary" type="submit">
              Gửi Tin Nhắn
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;